function practice_experiment(debug, lang) {
    console.log("Practice debug:", debug, "lang:", lang);

const PRACTICE_PAIRS = [["1", "9"], ["2", "8"], ["3", "7"], ["4", "6"]];
const PRACTICE_REPEATS = 5;

    //practice settings
    const practice_settings = {
        cutoff: 1000,
        feedback_duration: debug ? 1 : 700,
        accuracy_threshold: 0.8,
    }

    let practice_failed = false;

    //practice_intro
    const practice_intro = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: practice_text[lang]["practice_intro"],
        choices: [' '],
        data: {
            task: 'practice_intro'
        }
    }

    //practice_end
    const practice_end = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: practice_text[lang]["practice_end"],
        choices: [' '],
        data: {
            task: 'practice_end'
        }
    }

    //practice fixation
    const practice_fixation = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '<div style="font-size:9vh;">+</div>',
        choices: "NO_KEYS",
        trial_duration: debug ? 1 : 500,
        data: {
            task: 'practice_fixation'
        }
    }

    //practice_prime
    const practice_prime = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: function () {
            const primestim = jsPsych.evaluateTimelineVariable('prime')
            const myprime = experiment_text[lang][primestim]
            return `<span style="font-size:7vh; line-height: 0.9; color:white;">${myprime}</span>`
        },
        choices: 'NO_KEYS',
        trial_duration: debug ? 1 : 133,
        data: {
            task: 'practice_prime'
        }
    }

    //practice_blank
    const practice_blank = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '',
        choices: 'NO_KEYS',
        trial_duration: debug ? 1 : 33,
        data: {
            task: 'practice_blank'
        }
    }

    //practice_probe
    const practice_probe = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: function () {
            const probestim = jsPsych.evaluateTimelineVariable('probe')
            const myprobe = experiment_text[lang][probestim]
            return `<span style="font-size:7vh; line-height: 0.9; color:white;">${myprobe}</span>`
        },
        choices: ['1', '2', '3', '4', '6', '7', '8', '9'],
        stimulus_duration: debug ? 1 : 133,
        trial_duration: debug ? 1 : 1000,
        response_ends_trial: false,

        data: {
            task: 'practice_probe',
            correct_response: jsPsych.timelineVariable('correct_response'),
            congruency: jsPsych.timelineVariable('congruency'),
            pairing: jsPsych.timelineVariable('pairing')
        },

        on_finish: function (data) {
            const right_key = data.response === data.correct_response;
            const in_time = data.rt <= practice_settings.cutoff;
            data.correct = right_key && in_time;
        }
    }

    //practice_feedback
    const practice_feedback = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: function () {
            const last = jsPsych.data.get().last(1).values()[0];
            const too_slow = last.response === null || last.rt > practice_settings.cutoff;
            const wrong = last.response !== null && last.response !== last.correct_response;
            if (debug) return "<div></div>";
            if (too_slow && wrong) {
                return practice_text[lang]["wrong"] + '<br>' + practice_text[lang]["too_slow"];
            }
            if (too_slow) {
                return practice_text[lang]["too_slow"];
            }
            if (wrong) {
                return practice_text[lang]["wrong"];
            }
            return "<div></div>";
        },
        choices: 'NO_KEYS',
        trial_duration: practice_settings.feedback_duration,
        data: {
            task: 'practice_feedback'
        }
    }


    const make_trial = (prime, probe, pairing) => ({
        prime: "prime" + prime,
        probe: "probe" + probe,
        correct_response: probe,
        congruency: prime === probe ? "congruent" : "incongruent",
        pairing: pairing,
        combo: prime + "-" + probe
    });

    const practice_trials = PRACTICE_PAIRS.flatMap(([a, b]) => {
        const pairing = a + "-" + b;
        return [
            make_trial(a, a, pairing),
            make_trial(a, b, pairing),
            make_trial(b, b, pairing),
            make_trial(b, a, pairing)
        ];
    });

    //shown only when the practice has to be repeated
        const practice_retry = {
        timeline: [{
            type: jsPsychHtmlKeyboardResponse,
            stimulus: practice_text[lang]["failed_block"],
            choices: [' '],
            data: {
                task: 'practice_retry'
            }
        }],
        conditional_function: function () {
            return practice_failed;
        }
    };


    const practice_run = {
        timeline: [practice_fixation, practice_prime, practice_blank, practice_probe, practice_feedback],
        timeline_variables: practice_trials,
        repetitions: PRACTICE_REPEATS,
        randomize_order: false
    };

    //the 80% accuracy rule is applied to the whole practice (all repetitions together)
    const practice_block = {
        timeline: [practice_retry, practice_run],
        loop_function: function (data) {
            const probe_trials = data.filter({ task: "practice_probe" });
            const correct_trials = probe_trials.filter({ correct: true });
            const accuracy = debug ? 1 : correct_trials.count() / probe_trials.count();
            practice_failed = accuracy < practice_settings.accuracy_threshold;
            return practice_failed;
        }
    };

    return [practice_intro, practice_block, practice_end];
}
