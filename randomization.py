import random
import json
import signal
import sys
import os
import itertools
import pandas as pd

N_BLOCKS = 8            
N_FIRSTTHREE = 3    #extra trials at the start of blocks
N_TRIPLETS = 32     #3s of trials per block
TRIALS_PER_BLOCK = N_FIRSTTHREE + 3 * N_TRIPLETS    #99 trials total

#stimuli in fixed order, to avoid feature integration
PAIRINGS = [(1, 8), (2, 7), (3, 6), (4, 5)]

RESPONSE_KEY = {1: "1", 8: "8", 2: "2", 7: "7", 3: "3", 6: "6", 4: "4", 5: "5"}

#congruency
PATTERNS = list(itertools.product(["congruent", "incongruent"], repeat=3))


def triplet_label(pattern):
    """('congruent','congruent','incongruent') -> 'ccI' (history lowercase, current uppercase)"""
    letters = [p[0] for p in pattern]
    return letters[0] + letters[1] + letters[2].upper()


#generating blocks

def build_block(start):
    """One 99-trial block: 3 buffer trials + 32 complete triplets.

    Because the pairing cycle has length 4 and triplets have length 3, the first
    pairing of each triplet is fixed by its slot (4 'phase classes', 8 slots each).
    Giving every phase class all 8 congruency patterns exactly once means each
    pattern occurs 4x per block, once per phase, and every pairing appears equally
    often in every triplet position with a 50/50 congruent/incongruent split.
    """
    block = []
    for i in range(N_FIRSTTHREE):
        block.append({
            "role": "buffer", "triplet_id": None, "triplet_type": None,
            "position_in_triplet": None, "subcategory": (start + i) % 4,
        })

    phase_classes = {ph: [] for ph in range(4)}
    for j in range(N_TRIPLETS):
        phase_classes[(start + N_FIRSTTHREE + 3 * j) % 4].append(j)

    assignment = {}
    for slots in phase_classes.values():
        patterns = PATTERNS[:]
        random.shuffle(patterns)
        assignment.update(zip(slots, patterns))

    for j in range(N_TRIPLETS):
        for k in range(3):
            block.append({
                "role": "analysed", "triplet_id": j,
                "triplet_type": triplet_label(assignment[j]),
                "position_in_triplet": k + 1,
                "subcategory": (start + N_FIRSTTHREE + 3 * j + k) % 4,
                "congruency": assignment[j][k],
            })
    return block


def generate_blocks():
    print("Stage 1: Generating blocks.")
    blocks = []
    for b in range(N_BLOCKS):
        blocks.append(build_block(start=b % 4))
        print(f"    Block {b + 1}/{N_BLOCKS} generated")

    #first 3 trials evenly split between congruent/incongruent
    buffer_con = ["congruent"] * (N_BLOCKS * N_FIRSTTHREE // 2) + ["incongruent"] * (N_BLOCKS * N_FIRSTTHREE // 2)
    random.shuffle(buffer_con)
    it = iter(buffer_con)
    for block in blocks:
        for trial in block:
            if trial["role"] == "buffer":
                trial["congruency"] = next(it)

    print("Stage 1 passed!")
    return blocks


#assigning stimuli

def make_stimulus(subcategory, congruency, target_index):
    pair = PAIRINGS[subcategory]
    target = pair[target_index]
    other = pair[1 - target_index]
    prime = target if congruency == "congruent" else other
    return {
        "pairing": f"{pair[0]}-{pair[1]}",
        "prime": f"prime{prime}",
        "probe": f"probe{target}",
        "correct_response": RESPONSE_KEY[target],
        "target_index": target_index,
        "name": f"{pair[0]}-{pair[1]}_{congruency[:3]}",
    }


def assign_stimuli(blocks):
    print("Stage 2: Assigning stimuli.")
    cells = {}
    for block in blocks:
        for trial in block:
            if trial["role"] == "buffer":
                trial.update(make_stimulus(trial["subcategory"], trial["congruency"], random.randint(0, 1)))
            else:
                cells.setdefault((trial["subcategory"], trial["congruency"]), []).append(trial)

    for (sub, con), trials in cells.items():
        targets = [0, 1] * (len(trials) // 2)
        if len(trials) % 2:
            targets.append(random.randint(0, 1))
        random.shuffle(targets)
        for trial, t in zip(trials, targets):
            trial.update(make_stimulus(sub, con, t))

    print("Stage 2 passed!")
    return True


#validation

def validate(blocks):
    print("Stage 3: Validating.")
    rows = []
    for b, block in enumerate(blocks, start=1):
        for t, trial in enumerate(block, start=1):
            rows.append({"block": b, "trial": t, **trial})
    df = pd.DataFrame(rows)
    ana = df[df["role"] == "analysed"]
    ok = True

    def check(cond, msg):
        nonlocal ok
        if not cond:
            print(f"    FAILED: {msg}")
            ok = False

    check(all(len(b) == TRIALS_PER_BLOCK for b in blocks), "every block has 99 trials")
    check((df[df["trial"] <= N_FIRSTTHREE]["role"] == "buffer").all(), "first 3 trials of each block are buffer")

    #triplet types equal overall and per block
    check(ana.drop_duplicates(["block", "triplet_id"])["triplet_type"].value_counts().nunique() == 1
          and len(ana["triplet_type"].unique()) == 8, "all 8 triplet types equally frequent overall")
    per_block = ana.drop_duplicates(["block", "triplet_id"]).groupby(["block", "triplet_type"]).size()
    check((per_block == N_TRIPLETS // 8).all() and len(per_block) == N_BLOCKS * 8,
          "each triplet type appears 4x in every block")

    #congruency 50/50
    check((df["congruency"].value_counts() == len(df) / 2).all(), "50/50 congruency (all trials)")
    check((ana["congruency"].value_counts() == len(ana) / 2).all(), "50/50 congruency (analysed trials)")

    #pairings and cells
    check(ana["pairing"].value_counts().nunique() == 1 and ana["pairing"].nunique() == 4, "pairings equal")
    cell = ana.groupby(["pairing", "congruency"]).size()
    check(cell.nunique() == 1 and len(cell) == 8, "pairing x congruency cells equal")
    tgt = ana.groupby(["pairing", "congruency", "target_index"]).size()
    check(tgt.nunique() == 1 and len(tgt) == 16, "target stimulus balanced within every cell")
    pos = ana.groupby(["pairing", "position_in_triplet", "congruency"]).size()
    check(pos.nunique() == 1 and len(pos) == 24, "pairing x triplet position x congruency equal")

    #4 consecutive trials use 4 different pairings
    for block in blocks:
        subs = [t["subcategory"] for t in block]
        for i in range(len(subs) - 3):
            if len(set(subs[i:i + 4])) != 4:
                check(False, "4 consecutive trials share a pairing")
                break

    if ok:
        print("Stage 3 passed!")
    return ok


#signal

def handle_exit(sig, frame):
    print("\nStopped. All completed trial sets are saved in trials.json")
    sys.exit(0)


signal.signal(signal.SIGINT, handle_exit)
signal.signal(signal.SIGTERM, handle_exit)

######### Main loop ########

if __name__ == "__main__":
    max_sets = int(sys.argv[1]) if len(sys.argv) > 1 else None
    completed_count = 0
    print("Starting continuous generation. Press Ctrl+C to stop.\n")

    while max_sets is None or completed_count < max_sets:
        completed_count += 1
        print(f"═══ Trial set #{completed_count} ═══")

        blocks = generate_blocks()
        assign_stimuli(blocks)
        if not validate(blocks):
            print("Skipping to next trial set.\n")
            continue

        try:
            with open("trials.json", "r") as file:
                data = json.load(file)
        except (FileNotFoundError, json.JSONDecodeError):
            data = {"trial_sets": []}

        data["trial_sets"].append(blocks)

        with open("trials.tmp", "w") as file:
            json.dump(data, file, indent=4)
        os.replace("trials.tmp", "trials.json")

        print(f"Saved to trials.json (total sets: {len(data['trial_sets'])})")
        print(f"Trial set #{completed_count} completed!\n")