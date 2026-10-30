const practice_text = {
    "hun": {
        "wrong": `<span class="practice-feedback">Hibás válasz</span>`,
        "too_slow": `<span class="practice-feedback">Túl lassú voltál</span>`,

        "practice_intro":
            `<h2>Gyakorló blokk instrukciók</h2>
            <p>A kísérlet során számingereket fogsz látni. Elsőként egy prime inger fog megjelenni a képernyőn, ami három egymás alatt elhelyezkedő számjegyből áll.
            Ezt követően megjelenik a célinger, ami egy darab számjegyből áll.
            A feladatod az lesz, hogy minél gyorsabban és pontosabban lenyomd a célinger által bemutatott számmal megegyező billentyűt.</p> 
            <p>A kísérlet megkezdése előtt négy rövid gyakorló blokk következik. Minden blokkban a próbák legalább 80%-ában jól kell válaszolnod, különben az adott gyakorló blokk újraindul. Törekedj a minél gyorsabb és pontosabb válaszadásra!</p>
            <p style="text-align: center;" > <em>Ha elolvastad az instrukciót, nyomd meg a space billentyűt!</em></p> `,

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
            <p>A következő gyakorló blokkban az 3-6 billentyűpárral gyakorolhatod a feladatod. Kérlek helyezd a <span style="color:#ffd54f; font-weight:bold;">bal kőzépső ujjadat a 3-as</span> billentyűre és a <span style="color:#ffd54f; font-weight:bold;">jobb középső ujjadat a 6-os</span> billentyűre!</p>
            <p style="text-align: center;"><em>Amennyiben készen állsz a gyakorlás megkezdésére, nyomd meg a space billentyűt!</em></p>`,

        "instruction_4_5":
            `<h3>4-5 billentyűpár gyakorló blokkja</h3>
            <p>A következő gyakorló blokkban az 4-5 billentyűpárral gyakorolhatod a feladatod. Kérlek helyezd a <span style="color:#ffd54f; font-weight:bold;">bal mutató ujjadat a 4-es</span> billentyűre és a <span style="color:#ffd54f; font-weight:bold;">jobb mutató ujjadat az 5-ös</span> billentyűre!</p>
            <p style="text-align: center;"><em>Amennyiben készen állsz a gyakorlás megkezdésére, nyomd meg a space billentyűt!</em></p>`,

        "failed_block":
            `<h2>Nem sikerült elérned a 80 % -os pontosságot. Próbáld újra!</h2 >`,

        "practice_end":
            `<p>A gyakorló rész véget ért. A kísérleti blokkok következnek. A kísérleti blokkokban nem fogsz visszajelzést kapni, ha túl lassú, vagy hibás választ adtál. Törekedj a minél gyorsabb és pontosabb válaszadásra!</p>,
            <p style="text-align: center;"><em>Ha készen állsz a kezdésre, nyomd meg a space billentyűt!</em></p>`
    }
}