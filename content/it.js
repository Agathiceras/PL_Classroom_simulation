/* =====================================================================
   CLASSROOM SIMULATOR — CONTENT FILE (English)
   ---------------------------------------------------------------------
   TRANSLATORS: this is the ONLY file to translate (see README.md in the Translation_Package folder).
   - Translate ONLY the text inside quotes / backticks.
   - Do NOT change: key names (title:, text:…), anything in {curly braces},
     HTML tags (<b>, <br>, <div class="…">…), ${h.…} / ${…} expressions, ids, emojis, times.
   - The lesson cards (section "lesson") must use the OFFICIAL translation
     from the PDF "First_lesson_classroom_<LANG>.pdf" — do not translate them freely.
   - The order of every list must stay the same (guide steps, decisions, options).
   ===================================================================== */
window.SIM_CONTENT = {

  lang: "it",

  /* ---------- Interface ---------- */
  ui: {
    pageTitle: "Simulatore Classroom",
    tutorYou: "Tutor (tu)",
    tutor: "Tutor",
    langChip: "IT ˅",
    following: "Segui l’insegnante",
    close: "Chiudi",
    modeGuide: "Tour guidato",
    modeGame: "Gioco delle decisioni",
    groupName: "Gruppo parallelo #183",
    online: "{n} · 4 in linea",
    structureBtn: "📋 Struttura della lezione",
    leave: "Esci",
    classroom: "Classroom",
    assignments: "Attività",
    prevTask: "Attività precedente",
    nextTask: "Attività successiva",
    leadGroup: "Guida il gruppo",
    endSession: "Termina sessione",
    myNotes: "📝 I miei appunti",
    teacherNotes: "Note per l’insegnante",
    joined: "🔔 {name} è entrato nella lezione",

    coachStep: "Tour guidato · {n}/{total}",
    coachNext: "Avanti →",
    coachClick: "👆 Clicca sull’elemento evidenziato",
    coachOpenAll: "Apri tutte le sezioni ({o}/{t})",
    coachScrollNotes: "Scorri fino alla fine delle note",
    coachScrollCard: "Scorri fino alla fine della scheda",

    tourDoneTitle: "Tour guidato completato!",
    tourDoneText: "Ora sai come si svolge una lezione parallela in Classroom. Vuoi mettere in pratica quello che hai imparato?",
    backToMenu: "Torna al menu",
    startGameBtn: "Inizia il gioco delle decisioni →",

    gameStartTask: "Sono le <b>17:08</b>. Sofia sta lavorando in autonomia e <b>Alexander</b> è appena entrato nella lezione. Vai nella sua stanza.",
    gameStartMiss: "Non lì: la stanza di Alexander è nella barra laterale a sinistra.",
    gameIntroTitle: "Il gioco delle decisioni",
    gameIntroP1: "In ogni situazione, decidi cosa faresti come tutor. A volte scegli una risposta; altre volte devi <b>cliccare sul pulsante giusto in Classroom</b>.",
    gameIntroP2: "Ogni decisione corretta ti fa guadagnare un <b>💎 diamante</b>. Una decisione sbagliata ti costa una <b>❤️ vita</b>, ma puoi continuare a giocare. Se perdi tutte e 3 le vite, puoi comprarne una in più per <b>💎 3</b>; altrimenti il gioco ricomincia dalla prima situazione.",
    letsGo: "Iniziamo",

    yourMove: "Tocca a te:",
    backToOptions: "← Torna alle opzioni",
    hintHere: "Eccolo: guarda il comando evidenziato",
    checkNotesFirst: "Prima controlla i tuoi appunti 📝",
    decideInPanel: "Scegli cosa fare nel pannello",
    decisionOf: "Decisione {n} di {total}",
    hideShow: "Nascondi / mostra",
    openNotesFirst: "📝 Apri <b>I miei appunti</b> (la scheda gialla) prima di rispondere.",
    isSpeaking: " sta parlando…",
    you: "Tu:",
    audioMissing: "🔇 Impossibile riprodurre «{name}». Controlla che la cartella Audios si trovi nella stessa cartella del simulatore.",

    outTitle: "Hai esaurito le vite",
    outBuy: "<b>Compra una vita in più per 💎 {cost}</b> e riprendi da questa situazione.",
    outHave: "Hai 💎 {n}",
    outNeed: " — te ne servono ancora {n}",
    outRestartInfo: "Altrimenti il gioco ricomincia dalla prima situazione.",
    restartGame: "Ricomincia il gioco",
    buyLife: "❤️ Compra una vita · 💎 {cost}",
    lifeBought: "❤️ Vita acquistata — ti restano 💎 {n}",
    wrongTitle: "Scelta sbagliata: hai perso una vita",
    livesLeft1: "Ti resta 1 vita",
    livesLeftN: "Ti restano {n} vite",
    tryAgain: "Riprova",
    correctTitle: "Corretto! Hai guadagnato un diamante",
    continue: "Continua",

    recapKicker: "Breve riepilogo",
    recapNow: "Ora:",
    recapContinue: "Continua →",

    notesTitle: "📝 I tuoi appunti personali",
    notesText: "Hai preso questi appunti durante la lezione. Classroom non tiene questa registrazione per te: abituati ad annotare quando ha iniziato ogni studente.",
    notesAlt: "I tuoi appunti",
    notesBack: "← Torna al gioco",

    soundChecking: "Verifica dei file audio in corso…",
    soundOk: "✅ Dovresti aver sentito un breve suono: i file audio sono pronti. Se non hai sentito nulla, controlla il volume.",
    soundFail: "⚠️ Impossibile caricare i file audio. Assicurati che la cartella <b>Audios</b> si trovi nella stessa cartella di questo simulatore."
  },

  /* ---------- Pages ---------- */
  welcome: {
    kicker: "Lezioni parallele · Formazione obbligatoria",
    title1: "Classroom", title2: "Simulatore",
    lead: "Questo simulatore ricrea una <b>vera lezione parallela</b> in Classroom, passo dopo passo. L’interfaccia, i materiali e le situazioni sono quelli che troverai nelle tue lezioni: ciò che vedi qui è esattamente quello che succederà con i tuoi studenti.",
    whyTitle: "Perché è importante",
    whyP1: "In una lezione parallela segui fino a <b>4 studenti contemporaneamente</b>, ciascuno in un momento diverso della propria lezione. Non c’è tempo per cercare informazioni mentre la lezione è in corso: per questo ogni passaggio deve venirti naturale <b>prima</b> della tua prima lezione parallela.",
    whyP2: "Devi acquisire <b>il 100% di familiarità</b> con questa simulazione. Si presenta come un gioco, ma è uno strumento di lavoro: ripetila tutte le volte che ti servono, finché non ti senti a tuo agio in ogni passaggio.",
    howTitle: "Come usarlo",
    how1: "Leggi la <b>struttura di una lezione parallela</b>. È un riferimento per la formazione e non fa parte dei materiali della lezione. Puoi riaprirla in qualsiasi momento dalla barra in alto.",
    how1Btn: "📋 Leggi la struttura della lezione",
    how2: "Completa il <b>tour guidato</b>. È obbligatorio: ti mostra tutti gli strumenti e i passaggi con il tuo primo studente e sblocca il gioco delle decisioni.",
    how3: "Fai il <b>gioco delle decisioni</b>: 10 situazioni reali della stessa lezione, in cui scegli tu cosa fare.",
    how4: "<b>Ripetilo</b> finché non ti viene naturale. Punta a 10/10 decisioni corrette senza perdere vite.",
    soundTitle: "🔊 Attiva l’audio",
    soundText: "Durante la simulazione parlano sia gli studenti sia il tutor. Se puoi, usa le cuffie e controlla l’audio prima di iniziare.",
    soundBtn: "▶ Prova l’audio",
    start: "AVVIA LA SIMULAZIONE →"
  },

  menu: {
    kicker: "Lezioni parallele · Formazione tutor",
    lead: "In questo gioco vivrai situazioni reali di una lezione in Classroom. Sei il tutor di un gruppo parallelo di <b>4 studenti</b> e un nuovo studente entra nella lezione <b>ogni 10 minuti</b>.",
    facts: [
      ["👥", "4 studenti", "Ognuno ha la propria stanza nella tua console di Classroom."],
      ["⏱️", "Ogni 10 minuti", "Arriva un nuovo studente, quindi hai 10 minuti per introdurre la lezione."],
      ["❤️❤️❤️", "3 vite", "Una decisione sbagliata ti costa una vita. Se le perdi tutte e 3, il gioco ricomincia dalla prima situazione, a meno che tu non compri una vita."],
      ["💎", "Diamanti", "Ne guadagni uno per ogni decisione corretta. Hai finito le vite? Usa 💎 3 per comprarne una in più."]
    ],
    part1: "Parte 1", part2: "Parte 2",
    completed: "Completato ✓", startHere: "Inizia da qui",
    tourTitle: "Tour guidato",
    tourText: "Un tour passo dopo passo di una vera lezione in Classroom con il tuo primo studente, per prendere familiarità con lo svolgimento della lezione.",
    tourStart: "Avvia il tour guidato →", tourReplay: "Ripeti il tour guidato",
    gameTitle: "Gioco delle decisioni",
    gameText: "Scegli cosa fare in ogni situazione oppure clicca sul pulsante giusto in Classroom. Le decisioni corrette ti fanno andare avanti; quelle sbagliate ti costano una vita.",
    gamePlay: "Avvia il gioco delle decisioni →", gameLocked: "🔒 Completa il tour guidato per sbloccare",
    structure: "📋 Struttura della lezione",
    back: "← Torna all’introduzione"
  },

  structure: {
    note: "📌 Riferimento per la formazione. Questa struttura <b>non</b> è inclusa nei materiali della lezione. Leggila prima della simulazione e consultala ogni volta che hai bisogno di ripassare.",
    title: "Come funziona una lezione parallela",
    sub: "Ogni studente ha <b>60 minuti</b>. Gli studenti entrano <b>uno alla volta, ogni 10 minuti</b> (17:00, 17:10, 17:20, 17:30), quindi ciascuno si trova in un momento diverso della propria lezione.",
    p1: "Accoglienza e introduzione", p1Small: "circa 10 min · in diretta, 1:1",
    p1Items: ["Scambia due parole: saluta lo studente e aiutalo a sentirsi a proprio agio.", "Apri <b>Attività</b> → la prima scheda e attiva <b>Guida il gruppo</b>.", "Strumenti di Classroom: microfono, videocamera e <b>alzata di mano ✋</b>.", "Conosci meglio lo studente.", "Spiega come funziona la lezione: il lavoro autonomo con le schede e come chiamarti. Chiedigli di <b>ripeterlo con parole sue</b>.", "Guarda l’esempio e apri lo strumento, fino alla scheda con la dicitura <b>SINCRONA (conclusione dell’avvio)</b>.", "Saluta e incoraggia lo studente: nelle schede trova gli aiuti e può alzare la mano in qualsiasi momento."],
    p2: "Lavoro autonomo", p2Small: "circa 40 min · lo studente lavora in autonomia",
    p2Items: ["Lo studente lavora seguendo le schede di studio autonomo.", "Accogli gli studenti successivi, rispondi alle alzate di mano e ai messaggi e, quando hai tempo, fai un breve controllo.", "Le schede ricordano agli studenti di chiamarti prima di salvare il progetto."],
    p3: "Conclusione della lezione", p3Small: "circa 10 min · in diretta, 1:1",
    p3Items: ["Lo studente condivide lo schermo e mostra il progetto.", "Feedback: <b>un punto di forza concreto</b> e <b>un passo successivo</b>.", "Scheda di riflessione: <i>«Che cosa hai scoperto oggi?»</i>", "Anticipazione della prossima lezione.", "Saluto finale positivo."],
    rulesTitle: "Quando succedono più cose contemporaneamente",
    rules: ["<b>Accoglienza e introduzione</b> &gt; alzata di mano", "<b>Conclusione della lezione</b> &gt; alzata di mano", "I saluti seguono l’ordine di inizio delle lezioni, quindi <b>annota l’orario di inizio di ogni studente</b>.", "Hai qualche minuto libero? Dedicalo a chi ha più bisogno di te o fai un breve controllo."],
    gotIt: "Ho capito"
  },

  finish: {
    title: "Simulazione completata!",
    text: "Hai gestito un’intera lezione parallela, dalla prima accoglienza all’ultimo saluto.",
    stepsTitle: "La tua lezione, passo dopo passo",
    steps: [
      ["17:00–17:30", "<b>Accoglienza e introduzione</b>, una ogni 10 minuti: due parole per mettere a proprio agio lo studente, Attività, <b>Guida il gruppo</b>, strumenti, funzionamento della lezione (lo studente lo ripete con parole sue), esempio e saluto di incoraggiamento."],
      ["Tra una fase e l’altra", "<b>Priorità</b>: prima l’accoglienza; alzate di mano e messaggi negli intervalli; minuti liberi per chi ha più bisogno di te."],
      ["17:50 →", "<b>Saluti finali</b> nell’ordine di inizio delle lezioni (i tuoi appunti ti dicono chi viene prima): progetto, feedback specifico, riflessione, prossima lezione, saluto."]
    ],
    perfect: "<b>Lezione perfetta!</b> Ripeti il gioco ogni tanto e ripassa la struttura della lezione prima della tua prima lezione parallela.",
    notPerfect: "<b>Prossimo passo:</b> ripeti il gioco finché ogni decisione ti viene naturale. Punta a 10/10 senza perdere vite.",
    codeLabel: "🔑 Il tuo codice di completamento",
    codeHint: "Copialo nella formazione per completare il modulo.",
    structure: "📋 Struttura della lezione",
    menu: "Torna al menu",
    again: "Gioca di nuovo"
  },

  /* ---------- Guided tour: 17 steps, in order (title + text) ---------- */
  guide: [
    { title: "La tua console di Classroom",
      text: "Questa è la <b>console di Classroom</b>: la prima schermata che vedi quando apri una lezione parallela.<br><br>Ognuno dei 4 riquadri è una <b>stanza</b> separata, una per studente. Gli studenti vedono solo la propria stanza: non possono vedersi né sentirsi tra loro e possono vedere e sentire te solo quando sei nella loro stanza.<br><br>Non è ancora arrivato nessuno, quindi ogni stanza mostra solo la tua videocamera (<b>T</b>). Gli studenti entrano uno alla volta, <b>ogni 10 minuti</b>." },
    { title: "È arrivata una studentessa!",
      text: "Sono le 17:00 e <b>Sofia</b> è appena entrata. Quando arriva uno studente, la sua videocamera compare nella sua stanza, accanto alla tua.<br><br>Per parlare con uno studente devi essere <b>dentro</b> la sua stanza. Clicca sulla stanza di Sofia per entrare." },
    { title: "Accogli Sofia",
      text: "Sei nella stanza di Sofia: ora può vederti e sentirti. Le altre stanze restano visibili a sinistra, così noterai quando arriva qualcuno o alza la mano.<br><br>I primi 10 minuti con ogni studente sono dedicati all’<b>accoglienza e all’introduzione</b>. Inizia <b>scambiando due parole</b>: saluta Sofia chiamandola per nome, chiedile come sta e aiutala a sentirsi a proprio agio.<br><br>Vuoi avere una panoramica della lezione? Puoi aprire <b>📋 Struttura della lezione</b> dalla barra in alto in qualsiasi momento." },
    { title: "Apri i materiali della lezione",
      text: "I materiali della lezione (le schede delle attività) si trovano in <b>Attività</b>. Clicca su <b>Attività</b>: diventa blu quando ci passi sopra con il mouse." },
    { title: "Scegli la prima attività",
      text: "Questo è l’elenco delle attività di oggi, in ordine. Clicca sulla prima: <b>«Preparati per la tua prima missione creativa»</b>." },
    { title: "Due visualizzazioni della stessa scheda",
      text: "Prima di proseguire, è importante capire <b>cosa vedi tu</b> e <b>cosa vede Sofia</b>. Siete sulla stessa scheda, ma le vostre schermate sono diverse:" +
        "<div class='views'><div class='view'><div class='vh'>👩‍🏫 Cosa vedi <b>tu</b></div><div class='mock'><div class='m-tn'>Note per l’insegnante<small>solo per te</small></div><div class='mk-c'>Contenuto dell’attività</div></div></div>" +
        "<div class='view'><div class='vh'>👧 Cosa vede <b>Sofia</b></div><div class='mock'><div class='mk-c'>Contenuto dell’attività</div></div></div></div>" +
        "<ul class='c-list'><li>Il riquadro con il <b>bordo arancione tratteggiato</b> contiene le <b>Note per l’insegnante</b>: quanto dura la scheda, cosa devi fare e a cosa prestare attenzione.</li><li>Sofia <b>non vede mai</b> le Note per l’insegnante, ma solo il contenuto dell’attività. Non leggerle ad alta voce.</li><li>Le note sostituiscono la vecchia wiki: studiale <b>prima</b> di ogni lezione.</li></ul>" },
    { title: "Leggi le Note per l’insegnante",
      text: "Queste sono le Note per l’insegnante della prima scheda. Spiegano l’obiettivo della lezione di oggi e come funziona una lezione parallela.<br><br>Leggile ora: <b>apri tutte le sezioni</b> e <b>scorri fino alla fine delle note</b>. Il pulsante Avanti si sblocca quando hai finito." },
    { title: "Guida il gruppo",
      text: "Ora attiva <b>Guida il gruppo</b>. Questo interruttore è disponibile solo per te, non per gli studenti." +
        "<div class='lead-demo'><div><span class='ld-sw'></span><b>OFF</b> — cambi scheda o scorri la pagina, ma Sofia resta dove si trovava. Potrebbe guardare qualcos’altro o vedere solo la tua videocamera.</div>" +
        "<div><span class='ld-sw on'></span><b>ON</b> — Sofia vede contemporaneamente ogni scheda che apri e ogni scorrimento che fai.</div></div>" +
        "Clicca sull’interruttore: diventa blu quando è attivo." },
    { title: "Sofia ti sta seguendo",
      text: "<b>Guida il gruppo</b> è attivo ✅ Da ora Sofia vede esattamente quello che vedi tu, senza le Note per l’insegnante.<br><br>Scorri <b>tutta la scheda</b> come faresti con lei. Il pulsante Avanti si sblocca quando arrivi alla fine." },
    { title: "Attività successiva",
      text: "La freccia verso destra ti porta all’<b>attività successiva</b> della lezione. Poiché Guida il gruppo è attivo, anche Sofia passa alla nuova attività. Cliccala." },
    { title: "Gli strumenti di Classroom",
      text: "Questa è la prima lezione di Sofia, quindi la scheda le insegna a usare Classroom: il microfono, la videocamera e come <b>alzare la mano ✋</b>.<br><br>Sofia alzerà la mano per chiamarti durante il lavoro autonomo, anche quando sarai nella stanza di un altro studente.<br><br>Leggi tutta la scheda, comprese le Note per l’insegnante in fondo." },
    { title: "Prosegui",
      text: "Clicca su <b>Attività successiva</b> per passare alla prossima scheda." },
    { title: "Conosciamoci",
      text: "Questa scheda serve a <b>conoscere meglio lo studente</b>. In una vera lezione, qui gli chiederesti quali sono i suoi interessi e cosa gli piace creare: lo aiuta a sentirsi a proprio agio prima di lavorare in autonomia.<br><br>In questo tour non devi fare nulla qui. Clicca su <b>Attività successiva</b> per continuare." },
    { title: "Come si svolge la lezione",
      text: "Questa scheda spiega il formato parallelo: gran parte della lezione è dedicata al <b>lavoro autonomo</b> con le schede e Sofia può chiamarti quando ha bisogno. Mostrale come alzare la mano.<br><br><b>Importante:</b> non limitarti a chiedere «È chiaro?». Chiedile di <b>ripetere con parole sue</b> come si svolgerà la lezione e cosa farà se avrà bisogno di aiuto. Alcuni studenti si sentono lasciati soli anche dopo la spiegazione: farli ripetere ti permette di verificare che abbiano davvero capito.<br><br>Leggi tutta la scheda." },
    { title: "Prosegui",
      text: "Clicca su <b>Attività successiva</b>. In questo tour passeremo direttamente all’<b>ultima scheda da svolgere insieme</b> allo studente." },
    { title: "L’ultima scheda sincrona",
      text: "Questa è l’ultima scheda che svolgi insieme allo studente. Scorri fino alle <b>Note per l’insegnante</b> in fondo alla scheda e leggile.<br><br>Cerca la dicitura <b>Modalità: SINCRONA (conclusione dell’avvio)</b>: indica che l’introduzione termina qui. Tieni d’occhio il tempo: di solito arriverai a questo punto <b>prima</b> che siano trascorsi i 10 minuti.<br><br>Concludi l’introduzione: verifica che sia tutto chiaro, ricorda a Sofia come alzare la mano e lasciala lavorare in autonomia con le schede." },
    { title: "È arrivato un nuovo studente",
      text: "Sono le 17:08 e <b>Alexander</b> è appena entrato nella sua stanza: guarda la barra laterale a sinistra.<br><br>Il tour guidato finisce qui. Da ora le decisioni spettano a te! Clicca sulla stanza di Alexander per raggiungerlo." }
  ],

  /* ---------- Decision game: 10 situations, in order. Options keep their order (A, B, C). ----------
     say   = what the tutor says (it must match the tutor's recorded audio Tutor_D<n>_<letter>.mp3)
     why   = the feedback shown after the choice
     prompt / miss = for options where the player must click a real button                       */
  questions: [
    { who: "Alexander · 17:08",
      q: "Sei con <b>Alexander</b>, il tuo studente delle 17:10. È arrivato puntuale: bene! Vedi che è già nella sezione delle attività. Cosa dovresti fare prima di proseguire?",
      options: [
        { label: "Di’: «Alexander, puoi cliccare su <b>Guida il gruppo</b>?»", say: "Alexander, puoi cliccare su «Guida il gruppo»?",
          why: "Gli studenti non hanno l’opzione <b>Guida il gruppo</b> in Classroom e non spetta a loro attivarla. Solo tu, il tutor, puoi farlo." },
        { label: "Attiva <b>Guida il gruppo</b>", prompt: "Attiva <b>Guida il gruppo</b> nel Classroom di Alexander.", miss: "Non è il comando giusto. Guarda di nuovo la barra in basso.",
          why: "Ben fatto! Con <b>Guida il gruppo</b> attivo, lo schermo di Alexander segue il tuo: vede contemporaneamente ogni attività che apri e ogni scorrimento che fai." },
        { label: "Di’: «Alexander, puoi leggere l’attività?»", say: "Alexander, puoi leggere l’attività?",
          why: "Non hai attivato <b>Guida il gruppo</b>. Essendo la sua prima lezione, Alexander potrebbe trovarsi altrove sulla piattaforma e non vedere l’attività che stai presentando: potrebbe vedere solo la tua videocamera." }
      ] },

    { who: "Alexander · 17:17",
      recap: { kicker: "Breve riepilogo · Accoglienza e introduzione", title: "Passo dopo passo: cosa hai fatto con Sofia",
        sub: "Accoglienza e introduzione di Sofia (17:00–17:08). Questi sono i passaggi da ripetere con <b>ogni</b> studente:",
        steps: [
          ["", "<b>Due parole per iniziare</b>: hai salutato Sofia e l’hai aiutata a sentirsi a proprio agio."],
          ["", "Hai aperto <b>Attività</b> → la prima scheda e hai letto le <b>Note per l’insegnante</b> (le vedi solo tu)."],
          ["", "Hai attivato <b>Guida il gruppo</b>, così il suo schermo segue il tuo."],
          ["", "<b>Strumenti di Classroom</b>: microfono, videocamera e alzata di mano ✋."],
          ["", "L’hai conosciuta meglio e hai spiegato <b>come si svolge la lezione</b>, poi le hai chiesto di ripeterlo con parole sue."],
          ["", "L’<b>esempio</b> e l’apertura dello strumento, fino alla scheda con la dicitura <b>SINCRONA (conclusione dell’avvio)</b>."],
          ["", "Un breve saluto e Sofia ha iniziato il suo <b>lavoro autonomo</b>."]
        ],
        now: "Sono le 17:17. Hai seguito gli stessi passaggi con Alexander e sei arrivato alla sua ultima scheda sincrona. È il momento di concludere l’introduzione." },
      events: ["✋ Sofia ha alzato la mano", "🔔 Mateo è entrato nella lezione"],
      q: "Uno studente alza la mano per chiedere aiuto e, poco dopo, entra lo studente successivo. Tu stai per concludere l’introduzione con Alexander. Quale frase useresti per terminare l’interazione?",
      options: [
        { label: "«Devo andare perché devo accogliere altri studenti, quindi da ora lavorerai da solo. Ci vediamo alla fine della lezione.»",
          say: "Devo andare perché devo accogliere altri studenti, quindi da ora lavorerai da solo. Ci vediamo alla fine della lezione.",
          why: "Potrebbe anche succedere, per esempio se lo studente lavora benissimo in autonomia, ma la frase è poco gentile e presenta il lavoro autonomo come «lavorare da soli». Non aiuta lo studente a vederlo come un altro modo di imparare: sembra che il tutor lo stia lasciando senza supporto." },
        { label: "«Bene, è il momento di lavorare in autonomia! Sono sicuro che te la caverai benissimo: hai tutte le capacità per farlo. Ricorda che nelle schede trovi gli aiuti per ogni attività. Puoi anche alzare la mano e tornerò nella tua stanza per aiutarti. Buon lavoro e divertiti!»",
          say: "Bene, è il momento di lavorare in autonomia! Sono sicuro che te la caverai benissimo: hai tutte le capacità per farlo. Ricorda che nelle schede trovi gli aiuti per ogni attività. Puoi anche alzare la mano e tornerò nella tua stanza per aiutarti. Buon lavoro e divertiti!",
          why: "Questa frase valorizza il lavoro autonomo, ricorda ad Alexander le indicazioni presenti in ogni scheda e gli fa sapere che può alzare la mano se ha bisogno di un aiuto in più." },
        { label: "«Mi allontano un attimo, ma torno subito per aiutarti e spiegarti le altre attività. Condividerò anche lo schermo per mostrarti come usare il programma.»",
          say: "Mi allontano un attimo, ma torno subito per aiutarti e spiegarti le altre attività. Condividerò anche lo schermo per mostrarti come usare il programma.",
          why: "Non puoi mantenere questa promessa: hai due studenti che ti aspettano. Inoltre, in questo formato il tutor non spiega le attività: lo studente lavora seguendo le schede." }
      ] },

    { who: "Console · 17:18",
      q: "Perfetto, hai finito con il tuo secondo studente. Ora decidi cosa fare prima: vai dallo studente che ha alzato la mano o da quello appena arrivato in orario per la sua lezione?",
      options: [
        { label: "Dallo studente che ha alzato la mano (Sofia)",
          why: "L’accoglienza ha la precedenza sull’alzata di mano. Se rimandi l’introduzione di Mateo, ritardi anche il momento in cui potrà iniziare a lavorare sulle sue attività." },
        { label: "Dallo studente in attesa dell’accoglienza (Mateo)", prompt: "Vai nella stanza di <b>Mateo</b> per iniziare ad accoglierlo.", miss: "Non quella: cerca la stanza di Mateo nella console.",
          why: "L’accoglienza ha la precedenza sull’alzata di mano: rimandare l’introduzione di Mateo ritarderebbe il momento in cui potrà iniziare a lavorare sulle sue attività." }
      ] },

    { who: "Mateo · 17:22",
      recap: { title: "A che punto sei",
        steps: [
          ["17:17", "Hai concluso l’introduzione di Alexander con un saluto di incoraggiamento: ora sta lavorando in autonomia."],
          ["17:18", "Sofia ha alzato la mano ✋ e nello stesso momento è arrivato Mateo."],
          ["17:18", "Sei andato prima da Mateo perché <b>l’accoglienza ha la precedenza sull’alzata di mano</b>."],
          ["17:18–17:22", "Accoglienza e introduzione di Mateo: due parole per iniziare, Attività, <b>Guida il gruppo</b>, strumenti di Classroom…"]
        ],
        now: "Sei a metà dell’introduzione di Mateo, sulla scheda <i>«Come si svolgerà la lezione?»</i>." },
      msg: "Ciao????",
      events: ["🔔 Valentina è entrata nella lezione"],
      q: "Sei nel pieno dell’introduzione di Mateo e noti che <b>Valentina</b>, la tua quarta studentessa, è arrivata in anticipo. Cosa fai?",
      options: [
        { label: "Proseguo finché non ho finito l’introduzione di Mateo",
          why: "Valentina è arrivata in anticipo, quindi sa che è normale non trovare ancora il tutor nella stanza. Completare l’introduzione di Mateo permette di rispettare i tempi delle lezioni di tutti." },
        { label: "Vado nella stanza di Valentina per non farla aspettare",
          why: "Così interrompi l’introduzione di Mateo e ritardi la sua lezione, con conseguenze negative per tutti. Valentina è arrivata in anticipo, quindi è normale che il tutor non sia ancora nella sua stanza." },
        { label: "Dico: «Mateo, aspetta un attimo: è appena entrato un altro studente.»", say: "Mateo, aspetta un attimo: è appena entrato un altro studente.",
          why: "Così interrompi l’introduzione di Mateo e ritardi la sua lezione, con conseguenze negative per tutti. Valentina è arrivata in anticipo, quindi è normale che il tutor non sia ancora nella sua stanza." }
      ] },

    { who: "Console · 17:28",
      msg: "Guarda il mio progetto!!!",
      events: ["💬 Nuovo messaggio da Sofia"],
      q: "Hai finito l’introduzione di Mateo e ti restano 2 dei 10 minuti previsti. Valentina è già arrivata, ma ricordi che Sofia aveva alzato la mano e ora ti sta scrivendo che ha finito il progetto. Cosa fai?",
      options: [
        { label: "Inizio con Valentina, perché l’accoglienza ha la precedenza sull’alzata di mano",
          why: "Mancano ancora 2 minuti all’inizio della lezione di Valentina. Quando hai del tempo libero, usalo per seguire lo studente che ha più bisogno di te." },
        { label: "Vado da Sofia e, già che ci sono, concludo la sua lezione",
          why: "È troppo presto per concludere la lezione di Sofia: le resta ancora molto tempo. Ora ha bisogno di un feedback sul suo progetto e tu hai 2 minuti per darglielo." },
        { label: "Vado da Sofia e le do un feedback nei 2 minuti rimasti prima dell’inizio della lezione di Valentina",
          why: "Quando hai del tempo libero, è meglio dedicarlo agli studenti che ne hanno più bisogno. Se nessuno ha la mano alzata, puoi fare un breve controllo con chi non l’ha alzata." }
      ] },

    { who: "Sofia · 17:28",
      q: "Sei nella stanza di Sofia e lei sta condividendo lo schermo per mostrarti il suo progetto. Quale feedback potresti darle in due minuti?",
      options: [
        { label: "«Sofia, è stupendo, davvero stupendo! Sinceramente, è uno dei disegni più belli che abbia mai visto. Sei una vera artista e dovresti essere molto fiera di te. Continua a fare ciò che ami: quando ti piace quello che fai, è questo che conta davvero, e tutto il resto verrà da sé.»",
          say: "Sofia, è stupendo, davvero stupendo! Sinceramente, è uno dei disegni più belli che abbia mai visto. Sei una vera artista e dovresti essere molto fiera di te. Continua a fare ciò che ami: quando ti piace quello che fai, è questo che conta davvero, e tutto il resto verrà da sé.",
          why: "Il tono è caloroso, ma sono solo elogi generici: non dicono a Sofia cosa ha fatto bene nello specifico o cosa potrebbe provare a fare dopo. Parlare tanto non equivale a dare un feedback." },
        { label: "«Wow, Sofia, hai fatto tutto da sola! Le forme e i colori funzionano molto bene insieme e tutti quei fotogrammi rendono il movimento fluido. Cosa ti piacerebbe aggiungere adesso?»",
          say: "Wow, Sofia, hai fatto tutto da sola! Le forme e i colori funzionano molto bene insieme e tutti quei fotogrammi rendono il movimento fluido. Cosa ti piacerebbe aggiungere adesso?",
          why: "Breve, specifico e motivante: evidenzia punti di forza concreti (forme, colori, numero di fotogrammi) e termina con una domanda che la invita a continuare a sperimentare. Un buon feedback non dipende dalla lunghezza, ma da quanto è specifico." },
        { label: "«Sofia, lascia che ti spieghi una cosa importante. L’animazione fotogramma per fotogramma si basa sulla persistenza della visione: ogni fotogramma viene mostrato per una frazione di secondo e il cervello interpreta la sequenza come un movimento continuo. Nel tuo caso, il tema non rispetta l’obiettivo della lezione, che era animare le lettere del tuo nome, quindi il prossimo passo sarebbe ricominciare seguendo le istruzioni.»",
          say: "Sofia, lascia che ti spieghi una cosa importante. L’animazione fotogramma per fotogramma si basa sulla persistenza della visione: ogni fotogramma viene mostrato per una frazione di secondo e il cervello interpreta la sequenza come un movimento continuo. Nel tuo caso, il tema non rispetta l’obiettivo della lezione, che era animare le lettere del tuo nome, quindi il prossimo passo sarebbe ricominciare seguendo le istruzioni.",
          why: "Sembra una spiegazione rivolta a un adulto: lessico tecnico, nessun riconoscimento del suo lavoro e attenzione concentrata sugli errori. Con i bambini, usa parole semplici, sii specifico e incoraggiante e lascia spazio alle scelte creative." }
      ] },

    { who: "Console · 17:50",
      recap: { kicker: "Breve riepilogo · La lezione finora", title: "Tutti e quattro gli studenti stanno svolgendo la lezione",
        steps: [
          ["17:00", "Accoglienza e introduzione di Sofia."],
          ["17:08", "Accoglienza e introduzione di Alexander."],
          ["17:18", "Accoglienza e introduzione di Mateo (prima di rispondere alla mano alzata di Sofia)."],
          ["17:28", "2 minuti liberi → feedback sul progetto di Sofia."],
          ["17:30", "Accoglienza e introduzione di Valentina."],
          ["17:40–17:50", "Tutti lavorano in autonomia; tu rispondi alle alzate di mano e ai messaggi."]
        ],
        now: "Inizia la <b>fase conclusiva</b>. Ogni studente ha 60 minuti, quindi i saluti seguono l’ordine di inizio delle lezioni." },
      events: ["✋ Sofia e Mateo hanno alzato la mano"],
      q: "Hai finito di dare il feedback a Sofia e hai concluso l’introduzione di Valentina. Ora sono le <b>17:50</b>. Sei fuori dalle stanze e ci sono due mani alzate: quella di Sofia e quella di Mateo. Da chi andresti prima?<br><br>Prima di rispondere, controlla <b>📝 I miei appunti</b> (la scheda gialla). Sono appunti che <b>prendi tu</b> durante la lezione: Classroom non li crea per te. Annotare quando ha iniziato ogni studente ti permette di sapere chi salutare per primo.",
      options: [
        { label: "Da Mateo, perché ho finito le introduzioni e lui ha una domanda",
          why: "La conclusione della lezione ha la precedenza sull’alzata di mano. Andare prima da Mateo ritarderebbe la conclusione di Sofia e lo svolgimento dell’intera lezione. I tuoi appunti lo confermano: Sofia è la prima da salutare." },
        { label: "Da Sofia, perché la sua lezione sta per finire", prompt: "Vai nella stanza di <b>Sofia</b> per iniziare a concludere la sua lezione.", miss: "Non quella: cerca la stanza di Sofia nella console.",
          why: "La conclusione della lezione ha la precedenza sull’alzata di mano. Un consiglio: cerca di concludere in circa 8 minuti, così potrai ancora aiutare Mateo prima della conclusione di Alexander alle 18:00." },
        { label: "Da Mateo, perché non sono ancora passato a vedere come va",
          why: "La conclusione della lezione ha la precedenza sull’alzata di mano. Andare prima da Mateo ritarderebbe la conclusione di Sofia e lo svolgimento dell’intera lezione. I tuoi appunti lo confermano: Sofia è la prima da salutare." }
      ] },

    { who: "Alexander · 18:00",
      recap: { kicker: "Breve riepilogo · Conclusione della lezione", title: "Come si svolge la conclusione della lezione",
        sub: "Circa 10 minuti, in diretta con lo studente:",
        steps: [
          ["", "Lo studente <b>condivide lo schermo</b> e mostra il progetto."],
          ["", "Dai un feedback: <b>un punto di forza concreto</b> e <b>un passo successivo</b>."],
          ["", "<b>Riflessione</b>: la scheda <i>«Che cosa hai scoperto oggi?»</i>; lo studente valuta i propri progressi e te ne parla."],
          ["", "<b>Anticipi la prossima lezione</b> (Canva: servirà un indirizzo email)."],
          ["", "<b>Saluto finale</b> positivo."]
        ],
        now: "Hai salutato Sofia e aiutato Mateo con la sua domanda. Sono le 18:00: è il momento di salutare Alexander. Ha appena valutato i suoi progressi nella scheda di riflessione." },
      intro: { text: "Stai concludendo la lezione di Alexander. Ha valutato i suoi progressi scegliendo «Sono riuscito a realizzare il progetto da solo». Ascoltiamo cosa ne pensa.",
               btn: "▶ Ascolta Alexander", replay: "Ascolta di nuovo",
               /* must match the audio Alexander_reflection.mp3 */
               transcript: "Mmh… Per me è stato abbastanza facile, perché avevo già usato questi strumenti. Ho fatto tutto da solo, però non ho imparato granché di nuovo, perché sapevo già usarli." },
      q: "Cosa diresti ad Alexander?",
      options: [
        { label: "«Capisco, però ti sei divertito tanto! Imparare vuol dire soprattutto divertirsi: passare bei momenti durante la lezione, sentirsi a proprio agio con i propri progressi e dedicarsi alle cose che ci piacciono. Il risultato non conta poi così tanto, credimi.»",
          say: "Capisco, però ti sei divertito tanto! Imparare vuol dire soprattutto divertirsi: passare bei momenti durante la lezione, sentirsi a proprio agio con i propri progressi e dedicarsi alle cose che ci piacciono. Il risultato non conta poi così tanto, credimi.",
          why: "Sembra incoraggiante, ma non affronta quello che Alexander ti ha appena detto: la lezione era troppo facile per lui. Dire che il risultato non conta non lo aiuta a crescere: se non alzi il livello, potrebbe annoiarsi." },
        { label: "«È un’ottima cosa che tu sappia già fare alcune di queste cose: parti avvantaggiato. È la prima lezione, quindi è normale che ti sembri facile. Dimmi quali sfide ti piacerebbe affrontare o cosa vorresti imparare: ne terrò conto per preparare delle attività in più per la prossima lezione.»",
          say: "È un’ottima cosa che tu sappia già fare alcune di queste cose: parti avvantaggiato. È la prima lezione, quindi è normale che ti sembri facile. Dimmi quali sfide ti piacerebbe affrontare o cosa vorresti imparare: ne terrò conto per preparare delle attività in più per la prossima lezione.",
          why: "Riconosci ciò che sa già fare e tieni conto della necessità di alzare il livello per evitare che si annoi. Per questo cerchi di conoscerlo meglio e di adattare la lezione alle sue esigenze." },
        { label: "«In realtà è un fenomeno molto comune, Alexander. Quando uno studente ha già esperienza, la difficoltà percepita diminuisce, ma il consolidamento avviene comunque. La ripetizione rafforza ciò che sai già, quindi, anche se ti è sembrato facile, l’esercizio è stato utile per il tuo apprendimento a lungo termine.»",
          say: "In realtà è un fenomeno molto comune, Alexander. Quando uno studente ha già esperienza, la difficoltà percepita diminuisce, ma il consolidamento avviene comunque. La ripetizione rafforza ciò che sai già, quindi, anche se ti è sembrato facile, l’esercizio è stato utile per il tuo apprendimento a lungo termine.",
          why: "È una spiegazione in stile lezione frontale, rivolta a un adulto. Usa parole poco vicine al linguaggio di un bambino e non offre ad Alexander ciò di cui ha bisogno: una sfida più impegnativa." }
      ] },

    { who: "Console · 18:07",
      msg: "Aiuto! Non so come continuare 😟",
      events: ["💬 Nuovo messaggio da Valentina"],
      q: "Hai finito di salutare Alexander. Sai che il prossimo da salutare è Mateo, ma hai un minuto libero e noti che Valentina ti ha scritto per un problema tecnico. Cosa dovresti fare?",
      options: [
        { label: "Vado da Mateo, perché il saluto finale ha la precedenza sull’alzata di mano",
          why: "È vero che il saluto finale ha la precedenza sull’alzata di mano, ma hai ancora un minuto: basta per capire quale sia il problema di Valentina." },
        { label: "Aiuto Valentina, perché un problema tecnico è più urgente",
          why: "Un problema tecnico può essere urgente, ma non sai ancora di cosa si tratta: potrebbe essere semplicissimo oppure così complicato da rendere necessario tornare prima da Mateo." },
        { label: "Uso quel minuto per passare da Valentina e capire se il problema si può risolvere in quel tempo", prompt: "Vai nella stanza di <b>Valentina</b>.", miss: "Non quella: cerca la stanza di Valentina nella console.",
          why: "Hai poco tempo e non devi per forza risolvere tutto, ma puoi usare quel minuto per andare da lei e capire il problema. Se è semplice, puoi risolverlo. Se è più complesso, spiegale che devi salutare un altro studente e che tornerai, poi assegnale un’attività da svolgere mentre sei con Mateo." }
      ] },

    { who: "Valentina · 18:07",
      intro: { text: "Sei nella stanza di Valentina. Prendiamoci 30 secondi per capire qual è il problema.", btn: "▶ Guarda lo schermo di Valentina", replay: "Guarda di nuovo" },
      q: "Cosa dovresti fare?",
      options: [
        { label: "Dico a Valentina che il problema è molto complesso e che è meglio risolverlo dopo aver salutato Mateo",
          say: "Valentina, questo problema è molto complesso: è meglio risolverlo dopo che avrò finito di salutare Mateo.",
          why: "Non serviva rimandare: il problema era semplicissimo. Un’apertura nel contorno della V faceva riempire di colore tutta la tela: potevi risolverlo in pochi secondi." },
        { label: "Le dico che deve solo chiudere il contorno della V, perché c’è un’apertura che fa colorare tutto",
          say: "Devi solo chiudere il contorno della V: c’è una piccola apertura, ed è per questo che si colora tutto.",
          why: "Il problema era semplicissimo: un’apertura nel contorno della V faceva riempire di colore tutta la tela. Usare quel minuto per controllare ti ha permesso di risolverlo subito." },
        { label: "Le dico di cercare aiuto nelle schede, perché non ho tempo di spiegare",
          say: "Cerca aiuto nelle schede: adesso non ho tempo di spiegarti.",
          why: "Le schede non possono individuare questo problema al posto suo e bastano pochi secondi per risolverlo. Rimandarla alle schede la lascia bloccata." }
      ] }
  ],

  /* ---------- LESSON CARDS (Digital Creativity lvl 2 — Lesson 1), shown inside Classroom ----------
     TRANSLATORS: use the official text from "First_lesson_classroom_<LANG>.pdf" for these cards.
     Keep every h.xxx(...) call, ${...} expression, id="..." and the order of the cards.
     h = helpers: h.tnotes(html, id) teacher-notes box · h.spoiler(title, html) · h.note(title, html)
     h.media(img, html, narrow) · h.banner(img) · h.ul([...]) · h.ol([...]) · h.P = images            */
  lesson: function (h) {
    const P = h.P;
    const cards = [
      { title: "Preparati per la tua prima missione creativa 🚀", html:
        h.tnotes(`
          <h1>Preparazione alla lezione: Animazione del nome in FlipAnim</h1>
          <h2>Panoramica della lezione</h2>
          <p>Questa è la prima lezione del programma Digital Creativity lvl 2 in formato parallel. All’inizio e alla fine della lezione, lo studente lavora individualmente con l’insegnante; la parte pratica principale viene svolta in autonomia seguendo le schede. Il progetto della lezione è una GIF animata del proprio nome.</p>
          <p>L’obiettivo principale della lezione è fornire rapidamente un primo successo e presentare il principio dell’animazione «fotogramma per fotogramma», dove il movimento è dato dalla successione dei fotogrammi.</p>
          ${h.spoiler('La missione della lezione', '<p>Lo studente inizia a lavorare in Creativia Studio nel ruolo di animatore digitale. La sua prima missione è dare vita al proprio nome, facendo comparire le lettere una dopo l’altra.</p>')}
          ${h.spoiler('Obiettivo principale della lezione', '<p>Aiutare lo studente a capire il principio dell’animazione «fotogramma per fotogramma» e a metterlo in pratica creando la propria GIF.</p>')}
          ${h.spoiler('Risultato atteso', '<p>Alla fine della lezione, lo studente avrà:</p>' + h.ul(['creato una GIF animata del proprio nome;','fatto comparire le lettere in sequenza su fotogrammi diversi;','creato un’animazione con un nome leggibile, funzionante e salvata sul computer.']))}
          ${h.note('Attenzione!', '<p>I riferimenti alle attività di gruppo non sono pertinenti per questo formato di lezione.</p>')}
          <video controls preload="none" src="${P.video}"></video>
          <h2>Formato della lezione: parallel</h2>
          <p>La lezione dura <strong>60 minuti per studente</strong>. Non sono previste attività di gruppo. L’insegnante supporta lo studente all’inizio e alla fine; durante il self-study interviene periodicamente e quando lo studente chiede aiuto.</p>
          <h2>Ruolo dell’insegnante</h2>
          <p>Nelle parti sincrone, l’insegnante dà il tono alla lezione, presenta l’obiettivo e verifica che tutto sia pronto dal punto di vista tecnico. Durante il self-study non guida la lezione al posto dello studente: interviene in modo mirato quando lo studente chiede aiuto. Prima di salvare e nei passaggi più importanti delle schede, viene ricordato allo studente di chiamare l’insegnante.</p>
          <p>Regole chiave per il supporto: <strong>una nuova lettera = un nuovo fotogramma</strong> Prima ottenere un’animazione funzionante, successivamente aggiungere eventuali dettagli.</p>
          ${h.spoiler('Focus didattico', '<p>La lezione segue una logica deduttiva: lo studente vede prima un’animazione finita, poi ne analizza il principio di creazione e lo applica nel proprio progetto.</p><p>Feedback: <strong>Tutor + Self</strong>. Non è previsto il feedback dei compagni. In questa lezione non si usa l’AI (N/A); nelle lezioni successive del modulo, l’AI viene aggiunta come terzo canale laddove utile.</p><p>L’aspetto più importante è far dire allo studente: «Posso creare da solo un progetto digitale funzionante». Gli errori sono una parte normale del processo creativo.</p>')}
          ${h.spoiler('A cosa prestare attenzione', h.ul(['Lo studente potrebbe disegnare tutto il nome in un solo fotogramma. Ricordategli di duplicare il fotogramma prima di aggiungere ogni nuova lettera.','Lasciare il tempo per salvare il lavoro e verificare che la GIF sia stata scaricata correttamente e si apra correttamente.','Supportare lo studente se non è soddisfatto del progetto: contano l’idea, l’autonomia e un’animazione funzionante, non linee perfette.','Se FlipAnim non funziona, proponete come alternativa BrushNinja.']))}
          <h2>Conclusione della lezione</h2>
          <p>Lo studente mostra l’animazione all’insegnante condividendo lo schermo. L’insegnante evidenzia un punto di forza concreto e aiuta lo studente a definire il prossimo passo per migliorare.</p>
          <h2>Prossima lezione</h2>
          <p>Nella prossima lezione, lo studente scoprirà Canva e inizierà a creare un video presentazione in cui potrà usare la GIF creata a lezione.</p>
          <p>Per registrarsi a Canva, occorre prima un indirizzo email: quello dell’insegnante o quello di un genitore.</p>
          <h3>Come passo successivo, consulta le note per l’insegnante nelle schede delle lezioni in diretta e nelle schede di self-study, dove è disponibile supporto.</h3>`) +
        h.banner(P.getReadyTop) +
        `<h1>Preparati per la tua prima missione creativa 🚀</h1>
         <blockquote><p>Tra pochi minuti entrerai in Creativia Studio e creerai la tua prima animazione: darai vita al tuo nome! Controlla di avere tutto il necessario per iniziare alla grande.</p></blockquote>` +
        h.media(P.equipment, '<h3>⚙️ Controlla l’equipaggiamento</h3>' + h.ul(['l’audio è attivo e senti bene la lezione;','il tuo microfono funziona e il tutor può sentirti;','la tua videocamera funziona e il tutor può vederti;']), true) +
        `<h3 id="space-ready">✨ Prepara uno spazio comodo</h3>` +
        h.ul(['trova un posto tranquillo dove nessuno ti disturbi;','tieni vicino un bicchiere d’acqua;','mettiti comodo e preparati a creare!']) +
        h.note('💡 Come si svolgerà la lezione', '<p>All’inizio lavorerai per poco tempo con l’insegnante. Poi proseguirai da solo con le schede. Puoi chiamare l’insegnante se qualcosa non è chiaro o non riesci a farlo.</p>') +
        h.banner(P.getReadyBottom) },

      { title: "Benvenuto in Creativia Studio! ✨", html:
        h.banner(P.welcomeTop) +
        `<h1>Benvenuto in Creativia Studio! ✨</h1>
         <blockquote><p>Oggi creerai il tuo primo progetto digitale e darai vita al tuo nome. Prima, però, assicuriamoci di vederci e sentirci bene.</p></blockquote>` +
        h.media(P.equipment, '<h3>🎯 La tua attività</h3>' + h.ol(['Assicurati di vedere e sentire bene l’insegnante.','Accendi il microfono e la videocamera.','Di’ come ti chiami e quanti anni hai.'])) +
        h.spoiler('Non riesci a trovare il pulsante per accendere il microfono o la videocamera?', h.media(P.micHelp, h.ol(['Guarda la barra in basso nella finestra della lezione.','Trova l’icona del microfono 🎙️ e quella della videocamera 🎥.','Clicca sulle rispettive icone per accendere il dispositivo corrispondente.']))) +
        h.spoiler('Non senti l’insegnante? Che cosa puoi fare?', h.ol(['Controlla il volume del computer.','Assicurati che nelle impostazioni siano selezionati gli altoparlanti (o le cuffie/auricolari) corretti.','Chiama l’insegnante ✋ per segnalare il problema.'])) +
        h.spoiler('Il microfono non si accende?', h.ol(['Controlla che l’accesso al microfono sia consentito.','Clicca sulla freccia accanto all’icona del microfono e scegli il dispositivo giusto.','Chiama l’insegnante ✋ e aspetta il suo aiuto.'])) +
        h.spoiler('La videocamera non si accende?', h.ol(['Controlla che l’accesso alla videocamera sia consentito.','Chiudi gli altri programmi che potrebbero usare la videocamera.','Se la videocamera continua a non funzionare, partecipa alla lezione usando solo la voce.'])) +
        h.banner(P.welcomeBottom) +
        h.tnotes(`<p><strong>Formato:</strong> SINCRONO.</p><p><strong>Durata:</strong> 1–2 minuti.</p><p><strong>Obiettivo della scheda:</strong> creare un inizio di lezione accogliente e verificare la preparazione tecnica attraverso semplici azioni osservabili.</p><p><strong>Cosa deve fare il tutor:</strong> attivare microfono e videocamera, salutare e ascoltare un breve saluto dello studente. È un incontro individuale: non bisogna aspettare il proprio turno in gruppo.</p><p><strong>A cosa prestare attenzione:</strong> in caso di problemi tecnici importanti, contatta l’assistenza tecnica.</p>`) },

      { title: "Conosciamoci! 👋", html:
        h.banner(P.capsuleTop) +
        `<h1>Conosciamoci! 👋</h1>
         <p class="sim-note">Nota del simulatore: il contenuto di questa scheda non è riprodotto qui. Durante la lezione, usa questa scheda per conoscere meglio lo studente prima che inizi a lavorare.</p>` },

      { title: "Come si svolgerà la lezione? 🧭", html:
        h.banner(P.welcomeTop) +
        `<h1>Come si svolgerà la lezione? 🧭</h1>
         <blockquote><p>Oggi lavorerai in autonomia con le schede. L’insegnante è a disposizione: chiamalo se qualcosa non si apre, non funziona o non ti è chiaro.</p></blockquote>` +
        h.media(P.catGif, '<h3>Quando chiamare l’insegnante?</h3>' + h.ul(['hai una domanda;','non riesci a trovare il pulsante o l’impostazione che ti serve;','il sito non si apre o l’animazione si comporta in modo strano;','prima di salvare il progetto, se non sei sicuro che sia tutto pronto.'])) +
        h.note('💡 Importante', '<p>Se non ci riesci al primo tentativo, non è un fallimento. È un segnale per riprovare!</p>') +
        h.banner(P.welcomeBottom) +
        h.tnotes(`<p><strong>Formato:</strong> SINCRONO.</p><p><strong>Tempo:</strong> 1 minuto.</p><p><strong>Obiettivo della scheda:</strong> spiegare il formato parallel e ridurre l’ansia prima del lavoro in autonomia.</p><p><strong>Cosa deve fare l’insegnante:</strong> mostrare come uno studente può chiamare l’insegnante e spiegare che la parte principale della lezione si svolgerà con le schede.</p>`) },

      { title: "Cosa racconta di te il tuo nome? ✨", html:
        `<h1>Cosa racconta di te il tuo nome? ✨</h1>
         <blockquote><p>Per raccontare meglio chi sei, inizia a scrivere e dare vita al tuo nome. Osserva l’esempio e scopriamo insieme come ottenere questo risultato.</p></blockquote>
         <img class="center-img" src="${P.kodGif}" alt="">
         <h3>🎯 La tua attività</h3>
         <p>Osserva l’animazione con l’insegnante e nota come è stata realizzata.</p>
         <p><strong>Quali caratteristiche hai notato nell’animazione?</strong></p>
         <div class="quiz">
           <label><input type="checkbox"> Le lettere compaiono una alla volta</label>
           <label><input type="checkbox"> Le lettere hanno colori, forme o dettagli diversi</label>
           <label><input type="checkbox"> Alla fine si può leggere tutto il nome</label>
           <label><input type="checkbox"> Tutto il nome compare subito</label>
         </div>
         <blockquote><p>Dopo aver risposto, clicca sul pulsante «Invia».</p></blockquote>
         <button class="submit" type="button">✔ Invia</button>
         <blockquote><p>Per esempio, una lettera può richiamare il tuo gioco preferito, un animale, uno sport o un’attività creativa.</p></blockquote>
         <h2>Il piano della nostra missione</h2>` +
        h.ol(['Apri l’editor e disegna la prima lettera.','Scopri come aggiungere la lettera successiva in seguito.','Componi tutto il nome fotogramma per fotogramma.','Controlla l’animazione, salva la GIF e mostrala all’insegnante.']) },

      { title: "Apriamo il laboratorio di animazione 🛠️", html:
        h.banner(P.workshopTop) +
        `<h1>Apriamo il laboratorio di animazione 🛠️</h1>
         <img class="center-img" src="${P.flipanim}" alt="FlipAnim editor">` +
        h.banner(P.workshopBottom) +
        h.tnotes(`<p><strong>Modalità:</strong> SINCRONA (conclusione dell’avvio).</p><p><strong>Durata:</strong> 1 minuto.</p><p><strong>Obiettivo della scheda:</strong> verificare che il servizio sia aperto e accompagnare lo studente allo studio autonomo in modo sicuro.</p><p><strong>Cosa deve fare il tutor:</strong> inviare il link, attendere la conferma «vedo la tela» e ricordare come chiamare l’insegnante. Poi lo studente lavora in autonomia seguendo le schede.</p><p><strong>A cosa prestare attenzione:</strong> se FlipAnim non si apre, passa subito a BrushNinja. Non iniziate a disegnare insieme l’intero progetto: da qui in poi lo studente segue le schede.</p>`, 'tn-last') },

      { title: "La prima lettera: la prima versione del progetto 🖍️", html:
        h.banner(P.capsuleTop) +
        `<h1>La prima lettera: la prima versione del progetto 🖍️</h1>
         <blockquote><p>Immagina di essere un esploratore di un nuovo strumento creativo. Prova prima a capire come funziona da solo: qui puoi anche sbagliare.</p></blockquote>` +
        h.media(P.flipanim, '<h3>🎯 La tua attività</h3>' + h.ol(['Disegna sulla tela la prima lettera del tuo nome.','Aggiungi un colore o un dettaglio che ricordi ciò che ti piace.'])) }
    ];

    /* Cards 8–17: only their titles appear in the simulator */
    const notUsed = "Nota del simulatore: questa scheda non fa ancora parte degli scenari attuali.";
    ["Scopri gli strumenti per disegnare 🎨", "Sposta, ruota e ridimensiona 🔄", "Come fare apparire la seconda lettera più tardi? 🤔",
     "Il segreto dell’animazione fotogramma per fotogramma 🎞️", "Un altro fotogramma, un’altra lettera", "Dai vita alle altre lettere 🚀",
     "Controlla la tua animazione ✅", "Salva e consegna la tua animazione 💾", "Come funziona la tua animazione? 🔍", "Mostra il progetto all’insegnante 🎬"]
      .forEach(t => cards.push({ title: t, html: `<h1>${t}</h1><p class="sim-note">${notUsed}</p>` }));

    /* Card 18: the reflection card (used in decision 8) */
    cards.push({ title: "Che cosa hai scoperto oggi? ✨", html:
      `<h1>Che cosa hai scoperto oggi? ✨</h1>
       <h3 id="progress">Valuta il tuo percorso</h3>
       <p><strong>Valuta i tuoi progressi!</strong></p>
       <div class="rate"><span class="on">😁 Sono riuscito a realizzare il progetto da solo</span><span>🤫 Mi hanno aiutato i suggerimenti nelle schede</span><span>🥺 Ho ancora bisogno di fare pratica</span></div>
       <p>Ottimo! Nella prossima lezione prova ad aggiungere da solo un’animazione a un nuovo progetto video.</p>
       <blockquote><p>Racconta all’insegnante in una frase: che cosa ti è sembrato più interessante o sorprendente mentre creavi l’animazione?</p></blockquote>` });

    /* Card 19 */
    cards.push({ title: "Preparati a lavorare con Canva 🖼️", html: `<h1>Preparati a lavorare con Canva 🖼️</h1><p class="sim-note">${notUsed}</p>` });
    return cards;
  }
};
