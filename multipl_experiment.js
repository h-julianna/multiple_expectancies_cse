//browser check ide

//url params
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

//initialize jspsych
    const jsPsych = initJsPsych({
        on_finish: () => {
            try {jatos.endStudyAndRedirect(
                    "link here", 
            jsPsych.data.get().csv()
                );
	    }catch{
        const csv = jsPsych.data.get().csv();
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `data_${Date.now()}.csv`;
        link.click();
	    }
            }
    });
function main_experiment(debug, lang, experiment_text){
const running_jatos = (typeof jatos !== `undefined`)
let instruction_text = experiment_text[lang]["instruction"]


//timeline
const timeline = [];
//stimulus time parameters
let durations = {
    prime_duration: debug ? 1 : 133,
    blank_duration: debug ? 1 : 1000,
    probe_stim_duration: debug ? 1 : 133,
    probe_trial_duration: debug ? 1 : 1000
}

console.log('Running in JATOS: ', running_jatos);
console.log('Debug mode: ', debug);
console.log('Language: ', lang);

//flagging practice block to later exclude it from money calculation
let in_practice = true;

//fixation
const fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div style="font-size:9vh;">+</div>',
    choices: "NO_KEYS",
    trial_duration: debug ? 1 : Math.random() * (600 - 400) + 400,
    data: {
        task: 'fixation'
    }
}
//prime
const prime = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:function(){
    	primestim = jsPsych.evaluateTimelineVariable('prime')
	console.log(primestim)
	myprime = experiment_text[lang][primestim]
    return `<span style="font-size:7vh; line-height: 0.9; color:white;">${myprime}</span>`
   },
    choices: 'NO_KEYS',
    trial_duration: durations.prime_duration,
    data: {
        task: 'prime'
    }
}
//blank
const blank = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
    choices: 'NO_KEYS',
    trial_duration: durations.blank_duration,
    data: {
        task: 'blank'
    }
}
//probe
const probe = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(){
	    probestim = jsPsych.evaluateTimelineVariable('probe')
	    console.log(probestim)
	    myprobe = experiment_text[lang][probestim]
        return `<span style="font-size:7vh; line-height: 0.9; color:white;">${myprobe}</span>`},
    choices: ['1', '2', '3', '4', '5', '6', '7', '8'],
    stimulus_duration: durations.probe_stim_duration,
    trial_duration: durations.probe_trial_duration,
    response_ends_trial: false,

    data: {
    task: 'probe',
    correct_response: jsPsych.timelineVariable('correct_response'),
    congruency: jsPsych.timelineVariable('congruency'),
    name: jsPsych.timelineVariable('name'),
    block: jsPsych.timelineVariable('block'),
    role: jsPsych.timelineVariable('role'),
    trial_number: jsPsych.timelineVariable('trial_number'),
    triplet_id: jsPsych.timelineVariable('triplet_id'),
    triplet_type: jsPsych.timelineVariable('triplet_type'),
    position_in_triplet: jsPsych.timelineVariable('position_in_triplet'),
    pairing: jsPsych.timelineVariable('pairing')
    },
    
    on_finish: function (data) {
        //console.log('Response data:', data);
        //console.log('Key pressed:', data.response);
       data.correct = data.response?.toLowerCase() === data.correct_response?.toLowerCase(); //upper case responses are deemed correct as well, redundant now but whatev
        if(!in_practice) {
    }
}
}

//practice_parameters
const practice = {
    cutoff: 1000,
    feedback_duration: 700,
    accuracy_threshold: 0.8
};

//subject codes
let subj_code;
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
        }
    subj_code = makeid(6);
console.log("Subject code:", subj_code);
jsPsych.data.addProperties({subj_code: subj_code}); 



function format_prime_probe_trials(trial, block_index) {
    return {
        prime:trial.prime,
        probe:trial.probe,
        congruency: trial.congruency,
        correct_response: trial.correct_response,
        name: trial.name,
        block: block_index + 1,
        role:trial.role,
        trial_number:trial.trial_number,
        triplet_id:trial.triplet_id,
        triplet_type:trial.triplet_type,
        position_in_triplet:trial.position_in_triplet,
        pairing: trial.pairing
    }

}
//Welcome
const welcome_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: experiment_text[lang]["welcome"],
    choices: [experiment_text[lang]["button_press"]]
}

timeline.push(welcome_trial);

const fullscreen_trial = {
    type: jsPsychFullscreen,
    fullscreen_mode: true,
    message: experiment_text[lang]["fullscreen"],
        button_label: experiment_text[lang]["button_press"]
}

timeline.push(fullscreen_trial);

//Informed consent
const informed_consent_trial = {
    type:jsPsychHtmlButtonResponse,
    stimulus: experiment_text[lang]["informed_consent"],
    choices: experiment_text[lang]["yes/no"],
    response_ends_trial: true,
        on_finish: function(data) {
            if (data.response == 1) {
                jsPsych.abortExperiment(`<p style="text-align: justify; max-width: 800px; margin: auto; font-size: 24px; font-weight: bold"> 
                    ${lang === "eng" ? "The experiment is over. Thank you for participating in the study!" : "A kísérlet véget ért. Köszönjük, hogy részt vettél a vizsgálatban!"}</p>`);
            }
        }
}

timeline.push(informed_consent_trial);

//Data handling and informed consent
const data_handling_trial = {   
    type: jsPsychHtmlButtonResponse,
    stimulus: experiment_text[lang]["data_handling"],
    choices: experiment_text[lang]["yes/no"],
    response_ends_trial: true,
        on_finish: function(data) {
            if (data.response == 1) {
                jsPsych.abortExperiment(`<p style="text-align: justify; max-width: 800px; margin: auto; font-size: 24px; font-weight: bold"> 
                    ${lang === "eng" ? "The experiment is over. Thank you for participating in the study!" : "A kísérlet véget ért. Köszönjük, hogy részt vettél a vizsgálatban!"}</p>`);
            }
        }
}

timeline.push(data_handling_trial);

//Demographic information
const age_neptun = {
  type: jsPsychSurveyText,
  questions: [
    {
        prompt: experiment_text[lang]["age"],
        name: "age",
        input_type: "number",
        required: true
    },
    {
        prompt: experiment_text[lang]["neptun"],
        name: "neptun",
        required: true
    }
  ],
  button_label: experiment_text[lang]["button_press"],
};
 
const gender = {
    type: jsPsychSurveyMultiChoice,
    questions: [
        {
            prompt: experiment_text[lang]["gender"],
            name: "gender", 
            options: experiment_text[lang]["gender_options"],
            required: true
        }
    ],
    button_label: experiment_text[lang]["button_press"],
}

const demographic_timeline = [age_neptun, gender];

timeline.push(demographic_timeline);

//Instructions
const instruction_trial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: instruction_text,
            choices: [" "],
}

timeline.push(instruction_trial);

//shuffling blocks
// 1. pick one trial set for this participant
const trialSet = prime_probe_trials.trial_sets[Math.floor(Math.random() * prime_probe_trials.trial_sets.length)];
// 2. shuffle the block order (indices 0-7)
const block_order = jsPsych.randomization.shuffle([0, 1, 2, 3, 4, 5, 6, 7]);
// 3. build the blocks in that order, formatting each trial
const blocks = block_order.map((original_index, position) =>
  trialSet[original_index].map(trial => ({
    ...format_prime_probe_trials(trial, position),   // block = position the participant saw
    original_block: original_index + 1              // which block it was in the file
  }))
);

//Main experiment blocks
const block_intro = (block_index) => ({
    type:jsPsychHtmlKeyboardResponse,
    stimulus: () => {
        if (lang === "eng") {
            return `<div style="text-align:center; font-size:24px;">
                <h2>Block ${block_index + 1} is starting</h2></div>`;
        } else {
            return `<div style="text-align:center; font-size:24px;">
                <h2>Blokk ${block_index + 1} kezdődik</h2></div>`;
        }
    },    
    choices: 'NO_KEYS',
    trial_duration: debug ? 500 : 2000
    }
);

const trial_sequence = {
    timeline: [fixation, prime, blank, probe],
    randomize_order: false
};

const experimental_blocks = blocks.map(
    (block_stimuli, i) => ({
        timeline: [block_intro(i), {...trial_sequence, timeline_variables: block_stimuli}],
        on_timeline_start: () => {
            console.log(`Starting block ${i + 1} with stimuli:`, block_stimuli);
        }
    })
);

timeline.push(...practice_experiment());
timeline.push(...experimental_blocks);
jsPsych.run(timeline);
}


function startExperiment(timeline) {
    jsPsych.run(timeline);
}
try {
	jatos.onLoad(function() {
	console.log(experiment_text)
	    var lang = jatos.urlQueryParameters.lang || "hun";
	    var debug = jatos.urlQueryParameters.debug === "1" ? 1 : 0;
        console.log("Jatos loaded, starting experiment...")
	    my_timeline = main_experiment(debug, lang, experiment_text) 
	    startExperiment(my_timeline)
	    console.log("started experiment")
    });
}catch (error){ 
	var lang = urlParams.get("lang") || "hun";
	var debug = urlParams.get("debug") === "1" ? 1 : 0;
	    console.log("Jatos was NOT loaded, starting experiment in vanilla mode...")
	my_timeline = main_experiment(debug = 1, lang, experiment_text) 
	startExperiment(my_timeline)
	    console.log("started experiment")

}