const experiment_text = {"hun":{
	"probe1": "1",
	"probe2": "2",
	"probe3": "3",
	"probe4":"4",
	"probe6": "6",
	"probe7": "7",
	"probe8": "8",
	"probe9": "9",
	"prime1":"1<br>1<br>1",
	"prime2":"2<br>2<br>2",
	"prime3":"3<br>3<br>3",
	"prime4":"4<br>4<br>4",
	"prime6":"6<br>6<br>6",
	"prime7":"7<br>7<br>7",
	"prime8":"8<br>8<br>8",
	"prime9":"9<br>9<br>9",
    "welcome":`<img src="images/University_logo.png" alt="images/University Logo" style="width: 300px; display: block; margin: auto;">
	<h2>Üdvözlünk a Metatudomány kutatócsoport vizsgálatában!</h2>
                <p>Egy tudományos kutatásban veszel részt, amelynek vezetője Bognár Miklós, az ELTE Affektív Pszichológia Tanszékének kutatója.</p>
              <h3>Részvétel</h3>
                <p>A kutatásban való részvétel teljesen önkéntes. A vizsgálatot bármikor indoklás nélkül megszakíthatod. FIGYELEM: A KÍSÉRLET VILLÓDZÓ FÉNYEKET TARTALMAZ. 
                Ha bármilyen kérdésed, észrevételed vagy problémád van a kutatással kapcsolatban, írj Bognár Miklósnak a <a href="mailto:bognar.miklos@ppk.elte.hu">bognar.miklos@ppk.elte.hu</a> címre.</p>`,
	"button_press":`Tovább`,
	"yes/no": ["Igen", "Nem"],
	"finish":`Vége`,
	"fullscreen":`<p>A kísérlet teljes képernyős módra vált.</p>`,
	"informed_consent":`<h2>Beleegyező nyilatkozat</h2>
                <p>Felelősségem teljes tudatában kijelentem, hogy a mai napon az Eötvös Loránd Tudományegyetem, Bognár Miklós kutatásvezető által végzett vizsgálatban</p>
                 <ul>
                    <li>önként veszek részt.</li>
                    <li>a vizsgálat jellegéről, annak megkezdése előtt kielégítő tájékoztatást kaptam.</li>
                    <li>a vizsgálat idején alkohol vagy drogok hatása alatt nem állok.</li>
                 </ul>
                <p>Tudomásul veszem, hogy az azonosításomra alkalmas személyi adataimat bizalmasan kezelik.
                    Hozzájárulok ahhoz, hogy a vizsgálat során a rólam felvett, személyem azonosítására nem alkalmas adatok más kutatók számára is hozzáférhetők legyenek.
                    Fenntartom a jogot arra, hogy a vizsgálat során annak folytatásától bármikor elállhassak. 
                    Ilyen esetben a rólam addig felvett adatokat törölni kell.</p>
                <p>Tudomásul veszem, hogy csak a teljesen befejezett kitöltésért kapok pontot a <em>Pszichológiai kísérletben és tudományos aktivitásban való részvétel</em> nevű kurzuson.</p>
                <p><strong>A kutatásban való részvételem körülményeiről részletes tájékoztatást kaptam, a feltételekkel egyetértek. 
                    Amennyiben egyetértesz a fenti feltételekkel, kattints az "Igen" gombra.</strong></p>`,
	"data_handling":`<h2 style="text-align: center;">Adatkezelési tájékoztató</h2>
            	<p style="text-align: justify; max-width: 800px; margin: auto;">Szigorúan bizalmasan kezelünk minden olyan személyes információt, amit a kutatás keretén belül gyűjtünk össze. 
                A kutatás során nyert adatokat kóddal ellátva biztonságos számítógépeken tároljuk. A kutatás során nyert adatokat összegezzük. 
                Az ELTE PPK Affektív Pszichológia Tanszék Metatudomány Kutatócsoportja, mint adatkezelő, fenti személyes adataidat bizalmasan kezeli, más adatkezelőnek, adatfeldolgozónak nem adja át.
                E tényállás részleteit a <a href="http://metasciencelab.elte.hu/hozzajarulas-adatkezeleshez/" target=_blank">"Hozzájárulás adatkezeléshez"</a> c. dokumentum tartalmazza.</p>

            	<p>Az adatkezelésről szóló szabályzásról részletesebben pedig itt tájékozódhatsz:
                <a href="https://ppk.elte.hu/file/Hozzajarulas_adatkezeleshez_melleklet_2018.pdf" target="_blank">Hozzájárulás adatkezeléshez melléklet</a></p>
            	<p>A kutatás során nyert személyes adataidat arra használjuk fel, hogy regisztrálhassuk a részvételért járó kurzuspontokat. 
            	Az azonosítására alkalmas adatokat (NEPTUN kód) ezután törölni fogjuk. A kezelt adatok a következők:</p>
                <ul>
                    <li>Életkor</li>
                    <li>NEPTUN-kód</li>
                    <li>Nem</li>
                </ul>
            	<p>Válaszaid nem lesznek semmilyen módon hozzád köthetők. Az anonimizált adataidat más kutatókkal megosztjuk.</p>
            	<p><strong>Kérlek, amennyiben egyetértesz a fenti feltételekkel, és hozzájárulsz a kutatásban való részvételhez, kattints az "Igen" gombra.</strong></p>`,
	"age":`Hány éves vagy?`,
	"neptun":`Mi a NEPTUN kódod?`,
	"gender":`Melyik nemmel azonosulsz?`,
	"gender_options":["Férfi", "Nő", "Nem-bináris", "Nem szeretném megosztani"],
	"instruction":`<h2>Instrukciók</h2>
                <p>
                A kísérlet során számingereket fogsz látni (1, 2, 3, 4, 6, 7, 8, 9). Először egy prime inger fog megjelenni a képernyőn, amin egy szám (pl.: „1”) lesz olvasható egymás alatt háromszor. 
                Ezt követően megjelenik a célinger, amely a prime ingerrel azonos („1”), vagy pedig nem megegyező („9”) lesz.
                A feladatod az lesz, hogy minél gyorsabban és pontosabban eltaláld a célinger számát a hozzárendelt billentyű megnyomásával.</p>
								<h3>Figyelem: A pontszerzés feltétele, hogy az ingerek minimum 60%-át helyesen megválaszold.</h3>
								<h3>60%-os teljesítmény alatt (túl lassú, vagy pontatlan válaszoknál) 0 pontot kapsz a kísérletre. </h3>
                <p>Kérlek helyezd a billentyűzetre a kezedet a képen látható módon:</p>
                <p>A bal kisujjadat tedd az <span class='key'>1</span>-re.
                A jobb kisujjadat a <span class='key'>9</span>-re.
                A bal gyűrűsujjadat helyezd a <span class='key'>2</span>-re. 
                A jobb gyűrűsujjadat tedd a <span class='key'>8</span>-ra.
				A bal középső ujjadat helyezd a <span class='key'>3</span>-ra.
				A jobb középső ujjadat helyezd a <span class='key'>7</span>-re.
				A bal mutatóujjadat helyezd a <span class='key'>4</span>-re.
				A jobb mutatóujjadat pedig tedd az <span class='key'>6</span>-ra.</p>
                <img src="images/instruction_pic.png" alt="Hand placement instructions" style="width: 40%; height: 40%;">
                <p style="text-align: center;"><em>Amennyiben készen állsz a kísérlet megkezdésére, nyomd meg a space billentyűt!</em></p>`,
"practice_instruction":`<h2>Gyakorló blokk</h2>
            	<p>A kísérlet megkezdése előtt egy rövid gyakorló blokk következik. A próbák 80%-át jól kell teljesítened, különben a gyakorlás újraindul. Törekedj a minél gyorsabb és pontosabb válaszadásra! Ha készen állsz, nyomj meg egy tetszőleges billentyűt a kezdéshez.</p>`,
	"practice_intermission":`<div style="text-align: center; max-width: 800px
	; margin: auto; font-size: 24px;">
				<p>Még egy rövid gyakorló blokk következik.<br>
				 Törekedj a minél gyorsabb és pontosabb válaszadásra! <br> Ha készen állsz, nyomj meg egy tetszőleges billentyűt a kezdéshez.</p>`,
	"practice_feedback_slow":`<div style='font-size:35px;'>Túl lassú!</div>`,
	"practice_feedback_incorrect":`<div style='font-size:35px;'>Hibás válasz!</div>`,
	"practice_end":`<p> A gyakorló rész véget ért. A kísérleti blokkok következnek. A kísérleti blokkokban nem fogsz visszajelzést kapni, ha túl lassú, vagy hibás választ adtál. Törekedj a minél gyorsabb és pontosabb válaszadásra!
				Ha készen állsz, nyomd meg a space billentyűt a kezdéshez.</p>
				<img src="images/instruction_pic.png" alt="Hand placement instructions" style="width: 40%; height: auto;">
                <p style="text-align: center;"><em>Amennyiben készen állsz a kísérlet megkezdésére, nyomd meg a space billentyűt!</em></p>`,
	"debrief":`<div style="text-align: center; max-width: 800px; margin: auto; font-size: 24px;">
				<p style="font-weight: bold; font-size: 28px; margin-bottom: 25px;"> <h3>Kedves Résztvevő!</h3></p>
				<p>Köszönjük, hogy részt vettél a kutatásunkban!</p>
				<p>Ha bármilyen észrevételed, vagy kérdésed lenne a kutatással kapcsolatban írj a <a href="mailto:bognar.miklos@ppk.elte.hu">bognar.miklos@ppk.elte.hu</a>címre!</p>`},
"eng":{
	"probe1": "1",
	"probe2": "2",
	"probe3": "3",
	"probe4":"4",
	"probe6": "6",
	"probe7": "7",
	"probe8": "8",
	"probe9": "9",
	"prime1":"1<br>1<br>1",
	"prime2":"2<br>2<br>2",
	"prime3":"3<br>3<br>3",
	"prime4":"4<br>4<br>4",
	"prime6":"6<br>6<br>6",
	"prime7":"7<br>7<br>7",
	"prime8":"8<br>8<br>8",
	"prime9":"9<br>9<br>9",
	"welcome":`<img src="images/University_logo.png" alt="University Logo" style="width: 300px; display: block; margin: auto;">
				<h2>Welcome to the study of the Metascience lab!</h2>
				<p>You are taking part in a scientific study led by Miklós Bognár, a researcher at the Department of Affective Psychology at Eötvös Loránd University (ELTE).</p>
				<h3>Participation</h3>
				<p>Participation in this study is entirely voluntary. You may withdraw from the study at any time without providing a reason. ATTENTION: This experiment contains flashing lights.
				If you have any questions, comments, or concerns regarding the study, please contact Miklós Bognár at <a href="mailto:bognar.miklos@ppk.elte.hu">bognar.miklos@ppk.elte.hu</a>.</p>`,
	"button_press":`Continue`,
	"yes/no": ["Yes", "No"],
	"finish":`Finish`,
	"fullscreen":`<p>The experiment will switch to fullscreen mode.</p>`,
	"informed_consent":`<h2>Informed Consent</h2>
				<p>With full awareness of my responsibility, I consent to the use of the data collected about me during the study that do not allow for my personal identification to be made available to other researchers.
				I reserve the right to withdraw from the study at any time during the course of the experiment.
				I declare that today I am participating in a study conducted at Eötvös Loránd University under the supervision of the principal investigator, Miklós Bognár, and that:</p>
				<ul>
				<li>I am participating voluntarily.</li>
				<li>I received adequate information about the nature of the study prior to its commencement.</li>
				<li>I do not suffer from any psychiatric disorder.</li>
				<li>I am not under the influence of alcohol or drugs at the time of the study.</li>
				</ul>
				<p>I acknowledge that my personal data suitable for identification will be treated confidentially.
				I consent to the use of the data collected about me during the study that do not allow for my personal identification to be made available to other researchers.
				I reserve the right to withdraw from the study at any time during the course of the experiment.
				In such a case, all data collected from me up to that point will be deleted.</p>
				<p>I acknowledge that I will receive course credit for the course <em>“Participation in Psychological Experiments and Scientific Activities”</em> only upon full completion of the study.</p>
				<p><strong>I have received detailed information about the circumstances of my participation in the study and agree to the conditions described above.
				If you agree with the above conditions, please click the “Yes” button.</strong></p>`,     
	"data_handling":`<h2 style="text-align: center;">Data Management Information</h2>
				<p style="text-align: justify; max-width: 800px; margin: auto;">
				All personal information collected as part of this study will be treated strictly confidentially. 
				Data collected during the study will be coded and stored on secure computers. The collected data will be aggregated. 
				The Metascience Research Group of the Department of Affective Psychology at ELTE PPK, as the data controller, will handle your personal data confidentially and will not transfer it to any other data controller or processor.
				Further details on this are provided in the document <a href="http://metasciencelab.elte.hu/hozzajarulas-adatkezeleshez/" target="_blank">"Consent for Data Processing"</a>.</p>
				<p>For more detailed information about the data management regulations, see: 
				<a href="https://ppk.elte.hu/file/Hozzajarulas_adatkezeleshez_melleklet_2018.pdf" target="_blank">Data Processing Consent Appendix</a></p>
				<p>Your personal data collected during the study will be used solely to register your course credit for participation. 
				Identifiable data (e.g., NEPTUN code) will be deleted afterward. The data processed include:</p>
				<ul>
					<li>Age</li>
					<li>NEPTUN code</li>
					<li>Gender</li>
				</ul>
				<p>Your responses will not be linked to you in any way. Anonymized data may be shared with other researchers.</p>
				<p><strong>If you agree with the above conditions and consent to participate in the study, please click the “Yes” button.</strong></p>`,
	"age":`How old are you?`,
	"neptun":`What is your NEPTUN code?`,
	"gender":`What is your gender?`,
	"gender_options": ["Male", "Female", "Non-binary", "Prefer not to say"],
	"instruction":`<h2>Instrukciók</h2>
    	<p>
    	During this experiment you will see numerical stimuli (1, 2, 3, 4, 6, 7, 8, 9). First, a prime stimulus will appear on the screen, showing a single number (e.g., "1") repeated three times, one below the other.
    	Next, the target stimulus will appear. It will be either identical to the prime ("1") or different from it ("9").
		Your task is to identify the number shown in the target stimulus as quickly and as accurately as possible by pressing the key assigned to it.</p>
		<h3>Attention: To earn credit, you must respond correctly to at least 60% of the stimuli.</h3>
		<h3>If your performance falls below 60% (because your responses are too slow or inaccurate), you will receive 0 points for the experiment.</h3>
		<p>Please place your hands on the keyboard as shown in the picture:</p>
		<p>Place your left little finger on <span class='key'>1</span>.
		Your right little finger on <span class='key'>9</span>.
		Place your left ring finger on <span class='key'>2</span>.
		Place your right ring finger on <span class='key'>8</span>.
		Place your left middle finger on <span class='key'>3</span>.
		Place your right middle finger on <span class='key'>7</span>.
		Place your left index finger on <span class='key'>4</span>.
		Place your right index finger on <span class='key'>6</span>.</p>
		<img src="images/instruction_pic.png" alt="Hand placement instructions" style="width: 40%; height: 40%;">
		<p style="text-align: center;"><em>When you are ready to begin the experiment, press the space bar.</em></p>`,
"practice_instruction":`<h2>Practice Block</h2>
<p>A short practice block will follow before the experiment begins. You must respond correctly on at least 80% of the trials; otherwise, the practice block will restart. Try to respond as quickly and as accurately as possible. When you are ready, press any key to begin.</p>`,
"practice_intermission":`<div style="text-align: center; max-width: 800px
; margin: auto; font-size: 24px;">
<p>Another short practice block will follow.<br>
 Try to respond as quickly and as accurately as possible. <br> When you are ready, press any key to begin.</p>`,
"practice_end":`<p>The practice section is now complete. The experimental blocks will follow. In the experimental blocks, you will not receive feedback if your response is too slow or incorrect. Try to respond as quickly and as accurately as possible.
When you are ready, press the space bar to begin.</p>
<img src="images/instruction_pic.png" alt="Hand placement instructions" style="width: 40%; height: auto;">
<p style="text-align: center;"><em>When you are ready to begin the experiment, press the space bar.</em></p>`,
	"practice_instruction":`<h2>Practice Block</h2>
				<p>Before the main experiment begins, you will complete a short practice block. You must correctly complete at least 80% of the trials, otherwise the practice block will start over. Try to respond as quickly and accurately as possible! When you are ready, press any key to begin.</p>`,
	"practice_intermission":`<div style="text-align: center; max-width: 800px; margin: auto; font-size: 24px">
				<p>Another short practice block will follow. <br> Try to respond as quickly and accurately as possible!<br>
				When you are ready, press any key to begin.</p>
				<p><strong>The block will automatically start in 2 minutes.</strong></p>
				<p id="timer" style="font-size: 28px; color: darkred;">Start: 2:00</p></div>`,
	"practice_feedback_slow": `<div style='font-size:35px;'>Too slow!</div>`,
	"practice_feedback_incorrect": `<div style='font-size:35px;'>Incorrect response!</div>`,
	"practice_end":`<p>The practice block has ended. The main experimental blocks will follow.
				During the experimental blocks, you will not receive feedback if your response is too slow or incorrect. Try to respond as quickly and accurately as possible!
				When you are ready, press the spacebar to begin.</p>
				<br> 
				<img src="images/instruction_pic.png" alt="Hand placement instructions" style="width: 40%; height: auto;"> 
				<p style="text-align: center;"><em>When you are ready to begin the main experiment, press the spacebar!</em></p></div>`,
	"debrief":`<div style="text-align: center; max-width: 800px; margin: auto; font-size: 24px;">
				<p style="font-weight: bold; font-size: 28px; margin-bottom: 25px;"> <h3>Dear Participant!</h3></p>
				<p>Thank you for participating in our study!</p>
				<p>If you have any comments or questions about the study, please contact us at <a href="mailto:bognar.miklos@ppk.elte.hu">bognar.miklos@ppk.elte.hu</a></p>`
}}