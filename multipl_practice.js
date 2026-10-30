function practice_experiment() {

    //practice settings
    const practice_settings = {
        cutoff: 1000,
        feedback_duration: 700,
        accuracy_threshold: 0.8,
    }

    let practice_failed = false;

    //practice_intro
    const practice_intro = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: practice_text["hun"]["practice_intro"],
        choices: [' '],
        data: {
            task: 'practice_intro'
        }
    }

    //practice_end
    const practice_end = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: practice_text["hun"]["practice_end"],
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
        trial_duration: 500,
        data: {
            task: 'practice_fixation'
        }
    }

    //practice_prime
    const practice_prime = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: function () {
            const primestim = jsPsych.evaluateTimelineVariable('prime')
            const myprime = experiment_text["hun"][primestim]
            return `<span style="font-size:7vh; line-height: 0.9; color:white;">${myprime}</span>`
        },
        choices: 'NO_KEYS',
        trial_duration: 300,
        data: {
            task: 'practice_prime'
        }
    }

    //practice_blank
    const practice_blank = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '',
        choices: 'NO_KEYS',
        trial_duration: 1000,
        data: {
            task: 'practice_blank'
        }
    }

    //practice_probe
    const practice_probe = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: function () {
            const probestim = jsPsych.evaluateTimelineVariable('probe')
            const myprobe = experiment_text["hun"][probestim]
            return `<span style="font-size:7vh; line-height: 0.9; color:white;">${myprobe}</span>`
        },
        choices: ['1', '2', '3', '4', '5', '6', '7', '8'],
        stimulus_duration: 300,
        trial_duration: 2000,
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
            if (too_slow && wrong) {
                return practice_text["hun"]["wrong"] + '<br>' + practice_text["hun"]["too_slow"];
            }
            if (too_slow) {
                return practice_text["hun"]["too_slow"];
            }
            if (wrong) {
                return practice_text["hun"]["wrong"];
            }
            return "<div></div>";
        },
        choices: 'NO_KEYS',
        trial_duration: practice_settings.feedback_duration,
        data: {
            task: 'practice_feedback'
        }
    }

    //practice_make_block  //will build the block for any pair
    const practice_make_block = function (first, second) {
        const all_trials = [
            { prime: "prime" + first, probe: "probe" + second, correct_response: second, congruency: "incongruent", pairing: first + "-" + second },
            { prime: "prime" + first, probe: "probe" + first, correct_response: first, congruency: "congruent", pairing: first + "-" + second },
            { prime: "prime" + second, probe: "probe" + first, correct_response: first, congruency: "incongruent", pairing: first + "-" + second },
            { prime: "prime" + second, probe: "probe" + second, correct_response: second, congruency: "congruent", pairing: first + "-" + second },

            { prime: "prime" + first, probe: "probe" + second, correct_response: second, congruency: "incongruent", pairing: first + "-" + second },
            { prime: "prime" + first, probe: "probe" + first, correct_response: first, congruency: "congruent", pairing: first + "-" + second },
            { prime: "prime" + second, probe: "probe" + first, correct_response: first, congruency: "incongruent", pairing: first + "-" + second },
            { prime: "prime" + second, probe: "probe" + second, correct_response: second, congruency: "congruent", pairing: first + "-" + second },

            { prime: "prime" + first, probe: "probe" + second, correct_response: second, congruency: "incongruent", pairing: first + "-" + second },
            { prime: "prime" + first, probe: "probe" + first, correct_response: first, congruency: "congruent", pairing: first + "-" + second },
            { prime: "prime" + second, probe: "probe" + first, correct_response: first, congruency: "incongruent", pairing: first + "-" + second },
            { prime: "prime" + second, probe: "probe" + second, correct_response: second, congruency: "congruent", pairing: first + "-" + second },

            { prime: "prime" + first, probe: "probe" + second, correct_response: second, congruency: "incongruent", pairing: first + "-" + second },
            { prime: "prime" + first, probe: "probe" + first, correct_response: first, congruency: "congruent", pairing: first + "-" + second },
            { prime: "prime" + second, probe: "probe" + first, correct_response: first, congruency: "incongruent", pairing: first + "-" + second },
            { prime: "prime" + second, probe: "probe" + second, correct_response: second, congruency: "congruent", pairing: first + "-" + second },

            { prime: "prime" + first, probe: "probe" + second, correct_response: second, congruency: "incongruent", pairing: first + "-" + second },
            { prime: "prime" + first, probe: "probe" + first, correct_response: first, congruency: "congruent", pairing: first + "-" + second },
            { prime: "prime" + second, probe: "probe" + first, correct_response: first, congruency: "incongruent", pairing: first + "-" + second },
            { prime: "prime" + second, probe: "probe" + second, correct_response: second, congruency: "congruent", pairing: first + "-" + second }
        ];

        //practice_instruction
        const practice_instruction = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: function () {
                if (practice_failed) {
                    return practice_text["hun"]["failed_block"] + practice_text["hun"]["instruction_" + first + "_" + second];
                }
                return practice_text["hun"]["instruction_" + first + "_" + second];
            },
            choices: [' '],
            data: {
                task: 'practice_instruction'
            }
        };

        const practice_run = {
            timeline: [practice_fixation, practice_prime, practice_blank, practice_probe, practice_feedback],
            timeline_variables: all_trials,
            randomize_order: false
        };

        const practice_block = {
            timeline: [practice_instruction, practice_run],
            loop_function: function (data) {
                const probe_trials = data.filter({ task: "practice_probe" });
                const correct_trials = probe_trials.filter({ correct: true });
                const accuracy = correct_trials.count() / probe_trials.count();
                practice_failed = accuracy < practice_settings.accuracy_threshold;
                return practice_failed;
            }
        }

        return practice_block;
    };

    return [practice_intro,
        practice_make_block("1", "8"),
        practice_make_block("2", "7"),
        practice_make_block("3", "6"),
        practice_make_block("4", "5"),
        practice_end
    ];

}
