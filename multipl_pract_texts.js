const practice_text = {
    "hun": {
        "wrong": `<span class="practice-feedback">Hibás!</span>`,
        "too_slow": `<span class="practice-feedback">Túl lassú!</span>`,

        "practice_intro":
            `<h2>Gyakorló blokk</h2> 
            <p>A kísérlet megkezdése előtt négy rövid gyakorló blokk következik. Minden blokkban a próbák legalább 80%-ában jól kell válaszolnod, különben az adott gyakorló blokk újraindul. Törekedj a minél gyorsabb és pontosabb válaszadásra!</p>
            <p style="text-align: center;" > <em>Ha készen állsz, nyomd meg a space billentyűt!</em></p> `,
        "instruction_1_8":
            `<h3>1-8 billentyűpár gyakorló blokkja</h3>
            <p>A következő gyakorló blokkban az 1-8 billentyűpárral gyakorolhatod a feladatod. Kérlek helyezd a <span style="color:#ffd54f; font-weight:bold;">bal kisujjadat az 1-es</span> billentyűre és a <span style="color:#ffd54f; font-weight:bold;">jobb kisujjadat a 8-as</span> billentyűre!</p>
            <p style="text-align: center;"><em>Amennyiben készen állsz a gyakorlás megkezdésére, nyomd meg a space billentyűt!</em></p>`,

        "instruction_2_7":
            `<h3>2-7 billentyűpár gyakorló blokkja</h3>
            <p>A következő gyakorló blokkban az 2-7 billentyűpárral gyakorolhatod a feladatod. Kérlek helyezd a <span style="color:#ffd54f; font-weight:bold;">bal gyűrűsujjadat a 2-es</span> billentyűre és a <span style="color:#ffd54f; font-weight:bold;">jobb gyűrűsujjadat a 7-es</span> billentyűre!</p>
            <p style="text-align: center;"><em>Amennyiben készen állsz a gyakorlás megkezdésére, nyomd meg a space billentyűt!</em></p>`,

        "instruction_3_6":
            `<h3>3-6 billentyűpár gyakorló blokkja</h3>
            <p>A következő gyakorló blokkban az 3-6 billentyűpárral gyakorolhatod a feladatod. Kérlek helyezd a <span style="color:#ffd54f; font-weight:bold;">bal középső ujjadat a 3-as</span> billentyűre és a <span style="color:#ffd54f; font-weight:bold;">jobb középső ujjadat a 6-os</span> billentyűre!</p>
            <p style="text-align: center;"><em>Amennyiben készen állsz a gyakorlás megkezdésére, nyomd meg a space billentyűt!</em></p>`,

        "instruction_4_5":
            `<h3>4-5 billentyűpár gyakorló blokkja</h3>
            <p>A következő gyakorló blokkban az 4-5 billentyűpárral gyakorolhatod a feladatod. Kérlek helyezd a <span style="color:#ffd54f; font-weight:bold;">bal mutató ujjadat a 4-es</span> billentyűre és a <span style="color:#ffd54f; font-weight:bold;">jobb mutató ujjadat az 5-ös</span> billentyűre!</p>
            <p style="text-align: center;"><em>Amennyiben készen állsz a gyakorlás megkezdésére, nyomd meg a space billentyűt!</em></p>`,

        "failed_block":
            `<h2>Nem sikerült elérned a 80%-os pontosságot. Próbáld újra!</h2 >`,

        "practice_end":
            `<p>A gyakorló rész véget ért. A kísérleti blokkok következnek. A kísérleti blokkokban nem fogsz visszajelzést kapni, ha túl lassú, vagy hibás választ adtál. Törekedj a minél gyorsabb és pontosabb válaszadásra!</p>
            <p style="text-align: center;"><em>Ha készen állsz a kezdésre, nyomd meg a space billentyűt!</em></p>`
    },
"eng": {
"wrong": `<span class="practice-feedback">Incorrect!</span>`,
"too_slow": `<span class="practice-feedback">Too slow!</span>`,

"practice_intro":
    `<h2>Practice Block</h2> 
    <p>Before the experiment begins, four short practice blocks will follow. In each block, you must respond correctly on at least 80% of the trials; otherwise, that practice block will restart. Try to respond as quickly and as accurately as possible.</p>
    <p style="text-align: center;" > <em>When you are ready, press the space bar.</em></p> `,

"instruction_1_8":
    `<h3>Practice block for the 1-8 key pair</h3>
    <p>In the following practice block, you will practice the task using the 1-8 key pair. Please place your <span style="color:#ffd54f; font-weight:bold;">left little finger on the 1</span> key and your <span style="color:#ffd54f; font-weight:bold;">right little finger on the 8</span> key.</p>
    <p style="text-align: center;"><em>When you are ready to begin practicing, press the space bar.</em></p>`,

"instruction_2_7":
    `<h3>Practice block for the 2-7 key pair</h3>
    <p>In the following practice block, you will practice the task using the 2-7 key pair. Please place your <span style="color:#ffd54f; font-weight:bold;">left ring finger on the 2</span> key and your <span style="color:#ffd54f; font-weight:bold;">right ring finger on the 7</span> key.</p>
    <p style="text-align: center;"><em>When you are ready to begin practicing, press the space bar.</em></p>`,

"instruction_3_6":
    `<h3>Practice block for the 3-6 key pair</h3>
    <p>In the following practice block, you will practice the task using the 3-6 key pair. Please place your <span style="color:#ffd54f; font-weight:bold;">left middle finger on the 3</span> key and your <span style="color:#ffd54f; font-weight:bold;">right middle finger on the 6</span> key.</p>
    <p style="text-align: center;"><em>When you are ready to begin practicing, press the space bar.</em></p>`,

"instruction_4_5":
    `<h3>Practice block for the 4-5 key pair</h3>
    <p>In the following practice block, you will practice the task using the 4-5 key pair. Please place your <span style="color:#ffd54f; font-weight:bold;">left index finger on the 4</span> key and your <span style="color:#ffd54f; font-weight:bold;">right index finger on the 5</span> key.</p>
    <p style="text-align: center;"><em>When you are ready to begin practicing, press the space bar.</em></p>`,

"failed_block":
    `<h2>You did not reach 80% accuracy. Please try again.</h2 >`,

"practice_end":
    `<p>The practice section is now complete. The experimental blocks will follow. In the experimental blocks, you will not receive feedback if your response is too slow or incorrect. Try to respond as quickly and as accurately as possible.</p>
    <p style="text-align: center;"><em>When you are ready to begin, press the space bar.</em></p>`
}}