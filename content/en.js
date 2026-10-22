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

  lang: "en",

  /* ---------- Interface ---------- */
  ui: {
    pageTitle: "Classroom Simulator",
    tutorYou: "Tutor (you)",
    tutor: "Tutor",
    langChip: "EN ˅",
    following: "Following the teacher",
    close: "Close",
    modeGuide: "Guided tour",
    modeGame: "Decision game",
    groupName: "Parallel group #183",
    online: "{n} · 4 online",
    structureBtn: "📋 Lesson structure",
    leave: "Leave",
    classroom: "Classroom",
    assignments: "Assignments",
    prevTask: "Previous task",
    nextTask: "Next task",
    leadGroup: "Lead the group",
    endSession: "End session",
    myNotes: "📝 My notes",
    teacherNotes: "Teacher notes",
    joined: "🔔 {name} joined the lesson",

    coachStep: "Guided tour · {n}/{total}",
    coachNext: "Next →",
    coachClick: "👆 Click the highlighted element",
    coachOpenAll: "Open every section ({o}/{t})",
    coachScrollNotes: "Scroll to the end of the notes",
    coachScrollCard: "Scroll to the end of the card",

    tourDoneTitle: "Guided tour complete!",
    tourDoneText: "You now know how a parallel lesson flows in Classroom. Ready to put it into practice?",
    backToMenu: "Back to menu",
    startGameBtn: "Start the decision game →",

    gameStartTask: "It’s <b>17:08</b>. Sofia is working on her own and <b>Alexander</b> has just joined the lesson. Go to his room.",
    gameStartMiss: "Not there — Alexander’s room is in the sidebar on the left.",
    gameIntroTitle: "The decision game",
    gameIntroP1: "In each situation, decide what you would do as the tutor. Sometimes you choose an answer; sometimes you have to <b>click the right button in Classroom</b> yourself.",
    gameIntroP2: "Correct decisions earn a <b>💎 diamond</b>. A wrong decision costs a <b>❤️ life</b>, but you keep playing. If you lose all 3 lives, you can buy an extra life for <b>💎 3</b> — otherwise the game starts again from the first situation.",
    letsGo: "Let’s go",

    yourMove: "Your move:",
    backToOptions: "← Back to options",
    hintHere: "Here it is — look at the highlighted control",
    checkNotesFirst: "Check your notes first 📝",
    decideInPanel: "Make your decision in the panel",
    decisionOf: "Decision {n} of {total}",
    hideShow: "Hide / show",
    openNotesFirst: "📝 Open <b>My notes</b> (the yellow tab) before you answer.",
    isSpeaking: " is speaking…",
    you: "You:",
    audioMissing: "🔇 Couldn’t play “{name}”. Check that the Audios folder is in the same folder as the simulator.",

    outTitle: "You’re out of lives",
    outBuy: "<b>Buy an extra life for 💎 {cost}</b> and continue from this situation.",
    outHave: "You have 💎 {n}",
    outNeed: " — you need {n} more",
    outRestartInfo: "Otherwise, the game starts again from the first situation.",
    restartGame: "Restart the game",
    buyLife: "❤️ Buy a life · 💎 {cost}",
    lifeBought: "❤️ Life bought — 💎 {n} left",
    wrongTitle: "Wrong choice — you lost a life",
    livesLeft1: "1 life left",
    livesLeftN: "{n} lives left",
    tryAgain: "Try again",
    correctTitle: "Correct! You earned a diamond",
    continue: "Continue",

    recapKicker: "Quick recap",
    recapNow: "Now:",
    recapContinue: "Continue →",

    notesTitle: "📝 Your own notes",
    notesText: "You wrote these down during the lesson. Classroom doesn’t keep this record for you — get used to noting when each student started.",
    notesAlt: "Your notes",
    notesBack: "← Back to the game",

    soundChecking: "Checking the sound files…",
    soundOk: "✅ You should have heard a short chime, and the sound files are ready. If you heard nothing, check your volume.",
    soundFail: "⚠️ The sound files couldn’t be loaded. Make sure the <b>Audios</b> folder is in the same folder as this simulator."
  },

  /* ---------- Pages ---------- */
  welcome: {
    kicker: "Parallel lessons · Mandatory training",
    title1: "Classroom", title2: "Simulator",
    lead: "This simulator recreates a <b>real parallel lesson</b> in Classroom, step by step. The interface, the lesson materials and the situations are the ones you’ll find in your own lessons: what you see here is exactly what will happen with your students.",
    whyTitle: "Why this matters",
    whyP1: "In a parallel lesson you look after up to <b>4 students at the same time</b>, each at a different point of their lesson. There’s no time to look things up while it’s happening, so every step has to feel natural <b>before</b> your first parallel lesson.",
    whyP2: "You’re expected to become <b>100% familiar</b> with this simulation. It’s presented as a game, but it’s a work tool: go through it as many times as you need, until every step feels easy and comfortable.",
    howTitle: "How to use it",
    how1: "Read the <b>structure of a parallel lesson</b>. It’s a training reference and isn’t part of the lesson materials. You can open it again at any time from the top bar.",
    how1Btn: "📋 Read the lesson structure",
    how2: "Complete the <b>guided tour</b>. It’s mandatory: it shows you every tool and step with your first student, and it unlocks the decision game.",
    how3: "Play the <b>decision game</b>: 10 real situations from the same lesson, where you decide what to do.",
    how4: "<b>Repeat it</b> until it feels easy. Aim for 10/10 decisions without losing a life.",
    soundTitle: "🔊 Sound on",
    soundText: "Students and the tutor speak during the simulation. Use headphones if you can, and check your sound before you start.",
    soundBtn: "▶ Test my sound",
    start: "START SIMULATION →"
  },

  menu: {
    kicker: "Parallel lessons · Tutor training",
    lead: "In this game you’ll live through real situations from a lesson in Classroom. You are the tutor of a parallel group of <b>4 students</b>, and a new student joins the lesson <b>every 10 minutes</b>.",
    facts: [
      ["👥", "4 students", "Each one has their own room in your Classroom console."],
      ["⏱️", "Every 10 minutes", "A new student arrives, so you have 10 minutes to introduce the lesson."],
      ["❤️❤️❤️", "3 lives", "A wrong decision costs one life. Lose all 3 and the game starts again from the first situation — unless you buy a life."],
      ["💎", "Diamonds", "Earn one for every correct decision. Out of lives? Trade 💎 3 for an extra life."]
    ],
    part1: "Part 1", part2: "Part 2",
    completed: "Completed ✓", startHere: "Start here",
    tourTitle: "Guided tour",
    tourText: "A step-by-step tour of a real Classroom lesson with your first student, so you get familiar with how the lesson flows.",
    tourStart: "Start the guided tour →", tourReplay: "Replay the guided tour",
    gameTitle: "Decision game",
    gameText: "Choose what to do in each situation — or click the right button in Classroom yourself. Correct decisions move you forward; wrong ones cost you a life.",
    gamePlay: "Play the decision game →", gameLocked: "🔒 Complete the guided tour to unlock",
    structure: "📋 Lesson structure",
    back: "← Back to the introduction"
  },

  structure: {
    note: "📌 Training reference. This structure is <b>not</b> included in the lesson materials. Read it before the simulation and come back to it whenever you need a refresher.",
    title: "How a parallel lesson works",
    sub: "Each student has <b>60 minutes</b>. Students join <b>one by one, every 10 minutes</b> (17:00, 17:10, 17:20, 17:30), so each one is at a different point of their lesson.",
    p1: "Onboarding", p1Small: "about 10 min · live, 1:1",
    p1Items: ["Small talk: greet the student and help them feel comfortable.", "Open <b>Assignments</b> → the first card, and turn on <b>Lead the group</b>.", "Classroom tools: microphone, camera and <b>raising their hand ✋</b>.", "Get to know the student.", "How the lesson works: independent work with the cards, and how to call you. Ask them to <b>repeat it in their own words</b>.", "The example and opening the tool, up to the card marked <b>SYNCHRONOUS (end of the introduction)</b>.", "A motivating goodbye: help is in the cards, and they can raise their hand any time."],
    p2: "Independent work", p2Small: "about 40 min · student on their own",
    p2Items: ["The student works through the self-study cards.", "You onboard the next students, answer raised hands and messages, and check in briefly when you have time.", "The cards remind students to call you before saving their project."],
    p3: "Offboarding (closing)", p3Small: "about 10 min · live, 1:1",
    p3Items: ["The student shares their screen and shows their project.", "Feedback: <b>one specific strength</b> and <b>one next step</b>.", "Reflection card: <i>“What did you discover today?”</i>", "Preview of the next lesson.", "Goodbye on a positive note."],
    rulesTitle: "When several things happen at once",
    rules: ["<b>Onboarding</b> &gt; raised hand", "<b>Offboarding (closing)</b> &gt; raised hand", "Goodbyes follow the order in which lessons started, so <b>write down each student’s start time</b>.", "Spare minutes? Use them for whoever needs you most, or for a quick check-in."],
    gotIt: "Got it"
  },

  finish: {
    title: "Simulation complete!",
    text: "You’ve made it through a full parallel lesson, from the first onboarding to the last goodbye.",
    stepsTitle: "Your lesson, step by step",
    steps: [
      ["17:00–17:30", "<b>Onboardings</b>, one every 10 minutes: small talk, Assignments, <b>Lead the group</b>, tools, how the lesson works (the student repeats it back), the example, and a motivating goodbye."],
      ["In between", "<b>Priorities</b>: onboarding first; raised hands and messages in the gaps; spare minutes for whoever needs you most."],
      ["17:50 →", "<b>Goodbyes</b> in the order the lessons started (your notes tell you who’s first): project, specific feedback, reflection, next lesson, goodbye."]
    ],
    perfect: "<b>Perfect lesson!</b> Play it again from time to time, and review the lesson structure before your first parallel lesson.",
    notPerfect: "<b>Next step:</b> play it again until every decision feels obvious. Aim for 10/10 without losing a life.",
    codeLabel: "🔑 Your completion code",
    codeHint: "Copy it into the training to complete the module.",
    structure: "📋 Lesson structure",
    menu: "Back to menu",
    again: "Play the game again"
  },

  /* ---------- Guided tour: 17 steps, in order (title + text) ---------- */
  guide: [
    { title: "Your Classroom console",
      text: "This is the <b>Classroom console</b>: the first screen you see when you open a parallel lesson.<br><br>Each of the 4 boxes is a separate <b>room</b>, one per student. Students only see their own room — they can’t see or hear each other, and they only see or hear you when you’re inside their room.<br><br>Nobody has arrived yet, so each room only shows your camera (<b>T</b>). Students join one by one, <b>every 10 minutes</b>." },
    { title: "A student has arrived!",
      text: "It’s 17:00 and <b>Sofia</b> has just joined. When a student arrives, their camera appears in their room, next to yours.<br><br>To talk to a student, you have to be <b>inside</b> their room. Click on Sofia’s room to go in." },
    { title: "Welcome Sofia",
      text: "You’re inside Sofia’s room: now she can see and hear you. The other rooms stay visible on the left, so you’ll notice when someone arrives or raises a hand.<br><br>The first 10 minutes with each student are the <b>onboarding</b> (the introduction). Start with some <b>small talk</b>: greet Sofia by name, ask how she’s doing and help her feel comfortable.<br><br>Want to see the whole lesson at a glance? Open <b>📋 Lesson structure</b> in the top bar at any moment." },
    { title: "Open the lesson materials",
      text: "The lesson materials (the activity cards) are in <b>Assignments</b>. Click <b>Assignments</b> — it turns blue when your mouse is over it." },
    { title: "Choose the first activity",
      text: "This is the list of today’s activities, in order. Click the first one: <b>“Get ready for your first creative mission”</b>." },
    { title: "Two views of the same card",
      text: "Before you go on, it’s important to understand <b>what you see</b> and <b>what Sofia sees</b>. You’re both on the same card, but not on the same screen:" +
        "<div class='views'><div class='view'><div class='vh'>👩‍🏫 What <b>you</b> see</div><div class='mock'><div class='m-tn'>Teacher notes<small>only for you</small></div><div class='mk-c'>Activity content</div></div></div>" +
        "<div class='view'><div class='vh'>👧 What <b>Sofia</b> sees</div><div class='mock'><div class='mk-c'>Activity content</div></div></div></div>" +
        "<ul class='c-list'><li>The box with the <b>orange dashed border</b> is the <b>Teacher notes</b>: how long the card takes, what you should do and what to watch out for.</li><li>Sofia <b>never</b> sees the Teacher notes — only the activity content. Don’t read them out to her.</li><li>The notes replace the old wiki: study them <b>before</b> every lesson.</li></ul>" },
    { title: "Read the Teacher notes",
      text: "These are the Teacher notes of the first card. They explain the goal of today’s lesson and how a parallel lesson works.<br><br>Read them now: <b>open every section</b> and <b>scroll to the end of the notes</b>. Next unlocks when you’re done." },
    { title: "Lead the group",
      text: "Now turn on <b>Lead the group</b>. Only you have this switch — students don’t." +
        "<div class='lead-demo'><div><span class='ld-sw'></span><b>OFF</b> — you move to another card or scroll, and Sofia stays where she was. She may be looking at something else, or only at your camera.</div>" +
        "<div><span class='ld-sw on'></span><b>ON</b> — every card you open and every scroll you make, Sofia sees at the same time.</div></div>" +
        "Click the switch — it turns blue when it’s on." },
    { title: "Sofia is following you",
      text: "<b>Lead the group</b> is on ✅ From now on, Sofia sees exactly what you see — without the Teacher notes.<br><br>Scroll through the <b>whole card</b> as you would with her. Next unlocks when you reach the end." },
    { title: "Next activity",
      text: "The arrow pointing right takes you to the <b>next activity</b> of the lesson. Because Lead the group is on, Sofia moves with you. Click it." },
    { title: "Classroom tools",
      text: "Because this is Sofia’s first lesson, this card teaches her to use Classroom: the microphone, the camera and how to <b>raise her hand ✋</b>.<br><br>Raising her hand is how Sofia will call you during her independent work — even when you’re in another student’s room.<br><br>Read the card to the end, including the Teacher notes at the bottom." },
    { title: "Keep going",
      text: "Click <b>Next task</b> to go to the next card." },
    { title: "Getting to know each other",
      text: "This card is for <b>getting to know the student</b>. In a real lesson, this is where you’d ask about their interests and what they like to create — it helps them feel comfortable before working on their own.<br><br>In this tour you don’t need to do anything here. Click <b>Next task</b> to continue." },
    { title: "How the lesson works",
      text: "This card explains the parallel format: most of the lesson is <b>independent work</b> with the cards, and Sofia can call you whenever she needs you. Show her how to raise her hand.<br><br><b>Important:</b> don’t just ask “Is it clear?”. Ask her to <b>repeat in her own words</b> how the lesson will work and what she’ll do if she needs help. Some students feel left alone in this format even after the explanation — hearing them repeat it is how you know they really got it.<br><br>Read the card to the end." },
    { title: "Keep going",
      text: "Click <b>Next task</b>. For this tour, we’ll skip ahead to the <b>last card you do together</b> with the student." },
    { title: "The last synchronous card",
      text: "This is the last card you work on together with the student. Scroll down to the <b>Teacher notes</b> at the bottom of the card and read them.<br><br>Look for <b>Format: SYNCHRONOUS (end of the introduction)</b>: it tells you this is where the introduction ends. Keep an eye on the time — you’ll usually get here <b>before</b> the 10 minutes are up.<br><br>Close the introduction: confirm that everything is clear, remind Sofia how to raise her hand, and leave her working on her own with the cards." },
    { title: "A new student has arrived",
      text: "It’s 17:08 and <b>Alexander</b> has just joined his room — look at the sidebar on the left.<br><br>This is the end of the guided tour. From now on, the decisions are yours! Click Alexander’s room to go and see him." }
  ],

  /* ---------- Decision game: 10 situations, in order. Options keep their order (A, B, C). ----------
     say   = what the tutor says (it must match the tutor's recorded audio Tutor_D<n>_<letter>.mp3)
     why   = the feedback shown after the choice
     prompt / miss = for options where the player must click a real button                       */
  questions: [
    { who: "Alexander · 17:08",
      q: "You’re with <b>Alexander</b>, your 17:10 student. He arrived on time — great! You can see he’s already in the activities. What should you do before moving on?",
      options: [
        { label: "Say: “Alexander, can you click <b>Lead the group</b>?”", say: "Alexander, can you click “Lead the group”?",
          why: "Students don’t have the <b>Lead the group</b> option in their Classroom, and they’re not the ones who turn it on. Only you, the tutor, can activate it." },
        { label: "Turn on <b>Lead the group</b>", prompt: "Turn on <b>Lead the group</b> in Alexander’s Classroom.", miss: "That’s not the right control. Look again at the bottom bar.",
          why: "Well done! With <b>Lead the group</b> on, Alexander’s screen now follows yours: every activity and every scroll you make, he sees at the same time." },
        { label: "Say: “Alexander, can you read the activity?”", say: "Alexander, can you read the activity?",
          why: "You didn’t turn on <b>Lead the group</b>. Since this is his first lesson, Alexander may be somewhere else on the platform, not looking at the activity you’re presenting — he may only be seeing your camera." }
      ] },

    { who: "Alexander · 17:17",
      recap: { kicker: "Quick recap · Onboarding", title: "Step by step: what you did with Sofia",
        sub: "Sofia’s onboarding (17:00–17:08). These are the steps you repeat with <b>every</b> student:",
        steps: [
          ["", "<b>Small talk</b>: you greeted Sofia and helped her feel comfortable."],
          ["", "Opened <b>Assignments</b> → the first card, and read the <b>Teacher notes</b> (only you can see them)."],
          ["", "Turned on <b>Lead the group</b>, so her screen follows yours."],
          ["", "<b>Classroom tools</b>: microphone, camera and raising her hand ✋."],
          ["", "Got to know her and explained <b>how the lesson works</b> — then asked her to repeat it in her own words."],
          ["", "The <b>example</b> and opening the tool, up to the card marked <b>SYNCHRONOUS (end of the introduction)</b>."],
          ["", "A short goodbye, and Sofia started her <b>independent work</b>."]
        ],
        now: "It’s 17:17. You’ve done the same steps with Alexander, and you’ve reached his last synchronous card. Time to close his introduction." },
      events: ["✋ Sofia raised her hand", "🔔 Mateo joined the lesson"],
      q: "A student raises their hand for help, and shortly after, the next student joins — and you’re about to finish the introduction with Alexander. Which phrase would you use to end the interaction?",
      options: [
        { label: "“I have to go because I need to welcome other students, so from now on you’ll work alone. See you at the end of the lesson.”",
          say: "I have to go because I need to welcome other students, so from now on you’ll work alone. See you at the end of the lesson.",
          why: "This may well happen — for example, if the student is doing great on their own — but the phrase isn’t very kind, and it calls independent work “working alone”. That doesn’t help the student see it as another way of learning; it sounds like the tutor is leaving them unattended." },
        { label: "“Great, it’s time for your independent work! I trust you’ll do really well — I believe in your skills. Remember that the cards have help for every activity, and you can also raise your hand and I’ll come back to your room to help you. Good luck and have fun!”",
          say: "Great, it’s time for your independent work! I trust you’ll do really well — I believe in your skills. Remember that the cards have help for every activity, and you can also raise your hand and I’ll come back to your room to help you. Good luck and have fun!",
          why: "This phrase reaffirms independent work, reminds Alexander of the guidance in every card, and lets him know that if he needs help beyond what the cards offer, he can raise his hand." },
        { label: "“I’m leaving for a short moment, but I’ll be right back to help you and explain the rest of the activities. I’ll also share my screen to show you how to use the program.”",
          say: "I’m leaving for a short moment, but I’ll be right back to help you and explain the rest of the activities. I’ll also share my screen to show you how to use the program.",
          why: "You can’t keep this promise: you have two students waiting for you. Also, in this format the tutor doesn’t explain the activities — the student works through the cards." }
      ] },

    { who: "Console · 17:18",
      q: "Perfect — you’ve finished with your second student. Now decide what to do first: should you go to the student who is raising their hand, or to the student who has just arrived on time for their lesson?",
      options: [
        { label: "The student raising their hand (Sofia)",
          why: "Onboarding comes before a raised hand. If you delay Mateo’s onboarding, you also delay the moment he can start working on his activities." },
        { label: "The student waiting for their onboarding (Mateo)", prompt: "Go to <b>Mateo’s</b> room to start his onboarding.", miss: "Not that one — find Mateo’s room in the console.",
          why: "Onboarding comes before a raised hand: delaying Mateo’s onboarding would delay the time he can start working on his activities." }
      ] },

    { who: "Mateo · 17:22",
      recap: { title: "Where you are now",
        steps: [
          ["17:17", "You closed Alexander’s introduction with a motivating goodbye: he’s now working on his own."],
          ["17:18", "Sofia raised her hand ✋ and Mateo arrived at the same time."],
          ["17:18", "You went to Mateo first, because <b>onboarding comes before a raised hand</b>."],
          ["17:18–17:22", "Mateo’s onboarding: small talk, Assignments, <b>Lead the group</b>, Classroom tools…"]
        ],
        now: "You’re halfway through Mateo’s onboarding, on the card <i>“How will the lesson work?”</i>." },
      msg: "Hi????",
      events: ["🔔 Valentina joined the lesson"],
      q: "You’re in the middle of Mateo’s onboarding and you notice that <b>Valentina</b>, your fourth student, has arrived early for her lesson. What do you do?",
      options: [
        { label: "Keep going until I finish Mateo’s onboarding",
          why: "Valentina arrived early, so she knows it’s normal for her tutor not to be in the room yet. Finishing Mateo’s onboarding keeps everyone’s lesson on schedule." },
        { label: "Go to Valentina’s room so she doesn’t have to wait",
          why: "This stops Mateo’s onboarding and delays his lesson, which is counterproductive for everyone. Valentina arrived early, so it’s normal for her tutor not to be in the room yet." },
        { label: "Say: “Mateo, wait a moment — a classmate has just joined the lesson.”", say: "Mateo, wait a moment — a classmate has just joined the lesson.",
          why: "This stops Mateo’s onboarding and delays his lesson, which is counterproductive for everyone. Valentina arrived early, so it’s normal for her tutor not to be in the room yet." }
      ] },

    { who: "Console · 17:28",
      msg: "Look at my project!!!",
      events: ["💬 New message from Sofia"],
      q: "You’ve finished Mateo’s onboarding with 2 minutes left of the 10 you spend on an onboarding. Valentina has already arrived, but you remember that Sofia raised her hand — and now she’s sending you a message saying she’s finished her project. What do you do?",
      options: [
        { label: "Start with Valentina, because onboarding comes before a raised hand",
          why: "Valentina’s lesson doesn’t start for another 2 minutes. When you have spare time, use it to connect with the student who needs you most." },
        { label: "Go to Sofia and do her offboarding while you’re there",
          why: "It’s too early for Sofia’s offboarding: she still has plenty of lesson time left. Right now she needs feedback on her project — and you have 2 minutes to give it." },
        { label: "Go to Sofia, using the 2 minutes left before Valentina’s lesson starts, and give her feedback",
          why: "When you have spare time, it’s best to use it to connect with the students who need it most. If nobody has their hand up, you can briefly check in on those who haven’t raised it." }
      ] },

    { who: "Sofia · 17:28",
      q: "You’re in Sofia’s room and she’s sharing her screen to show you her project. What feedback could you give her in two minutes?",
      options: [
        { label: "“Sofia, this is amazing, truly amazing! Honestly, it’s one of the most beautiful drawings I’ve seen. You’re a real artist and you should be very proud of yourself. Keep doing what you love — when you enjoy what you do, that’s what really matters, and everything else will come.”",
          say: "Sofia, this is amazing, truly amazing! Honestly, it’s one of the most beautiful drawings I’ve seen. You’re a real artist and you should be very proud of yourself. Keep doing what you love — when you enjoy what you do, that’s what really matters, and everything else will come.",
          why: "It sounds warm, but it’s only general praise: it doesn’t tell Sofia what exactly she did well or what she could try next. Talking a lot isn’t the same as giving feedback." },
        { label: "“Wow, Sofia, you made this all by yourself! Your shapes and colours work really well, and all those frames make the movement smooth. What would you like to add next?”",
          say: "Wow, Sofia, you made this all by yourself! Your shapes and colours work really well, and all those frames make the movement smooth. What would you like to add next?",
          why: "Short, specific and motivating: it names concrete strengths (shapes, colours, the number of frames) and ends with a question that invites her to keep exploring. Good feedback isn’t about length — it’s about being specific." },
        { label: "“Sofia, let me explain something important. Frame-by-frame animation is based on the persistence of vision: each frame is shown for a fraction of a second and the brain reads the sequence as continuous motion. In your case, the theme doesn’t follow the lesson objective, which was to animate the letters of your name, so the next step would be to start again following the instructions.”",
          say: "Sofia, let me explain something important. Frame-by-frame animation is based on the persistence of vision: each frame is shown for a fraction of a second and the brain reads the sequence as continuous motion. In your case, the theme doesn’t follow the lesson objective, which was to animate the letters of your name, so the next step would be to start again following the instructions.",
          why: "This sounds like a lecture for an adult: technical vocabulary, no recognition of her work, and the focus is on what’s wrong. With children, keep it simple, specific and encouraging — and be flexible about creative choices." }
      ] },

    { who: "Console · 17:50",
      recap: { kicker: "Quick recap · The lesson so far", title: "All four students are in their lesson",
        steps: [
          ["17:00", "Sofia’s onboarding."],
          ["17:08", "Alexander’s onboarding."],
          ["17:18", "Mateo’s onboarding (before Sofia’s raised hand)."],
          ["17:28", "2 spare minutes → feedback on Sofia’s project."],
          ["17:30", "Valentina’s onboarding."],
          ["17:40–17:50", "Everyone works independently; you answer raised hands and messages."]
        ],
        now: "The <b>closing phase</b> begins. Each student has 60 minutes, so goodbyes follow the order in which their lessons started." },
      events: ["✋ Sofia and Mateo raised their hands"],
      q: "You’ve finished giving Sofia feedback and Valentina’s onboarding, and it’s now <b>17:50</b>. You’re outside the rooms and two hands are raised: Sofia’s and Mateo’s. Who would you go to first?<br><br>Before you answer, check <b>📝 My notes</b> (the yellow tab). These are notes <b>you take yourself</b> during the lesson — Classroom doesn’t create them for you. Writing down when each student started is how you know who says goodbye first.",
      options: [
        { label: "Mateo, since you’re free from onboardings and he has a question",
          why: "Offboarding (closing) comes before a raised hand. Going to Mateo first would delay Sofia’s closing and the whole flow of the lesson. Your notes show it: Sofia is your first goodbye." },
        { label: "Sofia, since her lesson is about to end", prompt: "Go to <b>Sofia’s</b> room to start her goodbye.", miss: "Not that one — find Sofia’s room in the console.",
          why: "Offboarding (closing) comes before a raised hand. Tip: try to finish the closing in about 8 minutes, so you can still help Mateo with his raised hand before Alexander’s offboarding at 18:00." },
        { label: "Mateo, since you haven’t checked on him yet",
          why: "Offboarding (closing) comes before a raised hand. Going to Mateo first would delay Sofia’s closing and the whole flow of the lesson. Your notes show it: Sofia is your first goodbye." }
      ] },

    { who: "Alexander · 18:00",
      recap: { kicker: "Quick recap · Offboarding", title: "How a goodbye (offboarding) works",
        sub: "About 10 minutes, live with the student:",
        steps: [
          ["", "The student <b>shares their screen</b> and shows their project."],
          ["", "You give feedback: <b>one specific strength</b> and <b>one next step</b>."],
          ["", "<b>Reflection</b>: the card <i>“What did you discover today?”</i> — the student rates their progress and tells you about it."],
          ["", "You <b>preview the next lesson</b> (Canva: an email address will be needed)."],
          ["", "<b>Goodbye</b> on a positive note."]
        ],
        now: "You’ve said goodbye to Sofia and helped Mateo with his question. It’s 18:00: Alexander’s goodbye. He has just rated his progress on the reflection card." },
      intro: { text: "You’re finishing Alexander’s goodbye. He rated his progress with “I made the project by myself”. Let’s hear what he has to say about it.",
               btn: "▶ Listen to Alexander", replay: "Listen again",
               /* must match the audio Alexander_reflection.mp3 */
               transcript: "Hmm… It was pretty easy for me because I had used these tools before. I did everything by myself, but I didn’t really learn anything new because I already knew how to use them." },
      q: "What would you say to Alexander?",
      options: [
        { label: "“I see — but hey, you had a lot of fun! Learning is all about fun: making great moments out of the lesson, feeling comfortable with your own progress and spending time doing the things you love. The result doesn’t matter that much, believe me.”",
          say: "I see — but hey, you had a lot of fun! Learning is all about fun: making great moments out of the lesson, feeling comfortable with your own progress and spending time doing the things you love. The result doesn’t matter that much, believe me.",
          why: "It sounds supportive, but it avoids what Alexander just told you: the lesson was too easy for him. Saying the result doesn’t matter won’t help him grow — if you don’t raise the level, he may get bored." },
        { label: "“It’s great that you already know some of this — that gives you an advantage. It’s the first lesson, so it’s normal for it to feel easy. Tell me what kind of challenges you’d like to see or learn, and I’ll keep them in mind as extra activities for the next lesson.”",
          say: "It’s great that you already know some of this — that gives you an advantage. It’s the first lesson, so it’s normal for it to feel easy. Tell me what kind of challenges you’d like to see or learn, and I’ll keep them in mind as extra activities for the next lesson.",
          why: "You recognise what he already knows, and you also take into account that you need to raise the level so he doesn’t get bored — so you try to get to know him better and adapt the lesson to him." },
        { label: "“That’s actually a very common phenomenon, Alexander. When learners have prior experience, the perceived difficulty decreases, but consolidation still takes place. Repetition reinforces what you already know, so even if it felt easy, the practice was valuable for your long-term learning.”",
          say: "That’s actually a very common phenomenon, Alexander. When learners have prior experience, the perceived difficulty decreases, but consolidation still takes place. Repetition reinforces what you already know, so even if it felt easy, the practice was valuable for your long-term learning.",
          why: "This is a lecture-style explanation for an adult. It uses words a child won’t relate to, and it doesn’t give Alexander what he needs: a bigger challenge." }
      ] },

    { who: "Console · 18:07",
      msg: "Help! I don’t know how to continue 😟",
      events: ["💬 New message from Valentina"],
      q: "You’ve finished Alexander’s goodbye. You know the next goodbye is Mateo’s, but you have one minute to spare, and you notice that Valentina has written to say she has a technical problem. What should you do?",
      options: [
        { label: "Go on to Mateo, because a goodbye comes before a raised hand",
          why: "It’s true that a goodbye comes before a raised hand, but you still have a minute — enough time to find out what Valentina’s problem is." },
        { label: "Help Valentina, because a technical problem is more urgent",
          why: "A technical problem may be urgent, but you don’t know what it is yet: it could be very easy, or so complicated that you should go back to Mateo first." },
        { label: "Use that minute to check on Valentina and see whether it can be solved in that time", prompt: "Go to <b>Valentina’s</b> room.", miss: "Not that one — find Valentina’s room in the console.",
          why: "You have little time, and you don’t need to solve everything — but you can use that minute to see her and understand the problem. If it’s easy, you can fix it. If it’s more complex, tell her you need to say goodbye to a classmate and that you’ll come back, and give her an activity to work on while you’re with Mateo." }
      ] },

    { who: "Valentina · 18:07",
      intro: { text: "You’re in Valentina’s room. Let’s take 30 seconds to see what her problem is.", btn: "▶ Watch Valentina’s screen", replay: "Watch again" },
      q: "What should you do?",
      options: [
        { label: "Tell Valentina it’s a very complex problem and it’s better to fix it once you’ve finished Mateo’s goodbye",
          say: "Valentina, this is a very complex problem — it’s better if we fix it once I’ve finished saying goodbye to Mateo.",
          why: "You didn’t need to postpone it: the problem was very simple. A gap in the outline of the V made the paint fill the whole canvas — you could solve it in a few seconds." },
        { label: "Tell her she just needs to close the letter V, because there’s a gap that makes everything get painted",
          say: "You just need to close the letter V — there’s a small gap, and that’s why everything gets painted.",
          why: "The problem was very simple: a gap in the outline of the V made the paint fill the whole canvas. Taking that minute to look let you solve it on the spot." },
        { label: "Tell her to look in the cards for help, because you don’t have time to explain",
          say: "Look in the cards for help — I don’t have time to explain right now.",
          why: "The cards can’t spot this kind of issue for her, and the fix only takes a few seconds. Sending her to the cards leaves her stuck." }
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
      { title: "Get ready for your first creative mission 🚀", html:
        h.tnotes(`
          <h1>Preparing for the lesson: Animating a Name in FlipAnim</h1>
          <h2>Lesson overview</h2>
          <p>This is the first lesson in the Digital Creativity lvl 2 programme, delivered in a parallel format. The student works one-to-one with the tutor at the beginning and end of the lesson, then completes the main practical tasks independently using the cards. The lesson project is a GIF animation of the student’s own name.</p>
          <p>The main focus of the lesson is to give the student a quick experience of success and introduce the principle of frame-by-frame animation: movement is created by changing frames in sequence.</p>
          ${h.spoiler('Lesson Story Mission', '<p>The student begins working in Creativia Studio as a digital animator. Their first mission is to bring their name to life by making the letters appear one by one.</p>')}
          ${h.spoiler('Main Lesson Goal', '<p>Help the student understand the principle of frame-by-frame animation and use it to create their own GIF.</p>')}
          ${h.spoiler('Key Result', '<p>By the end of the lesson, the student has:</p>' + h.ul(['created a GIF animation of their own name;','made the letters appear in sequence across different frames;','made sure the name is readable, the animation works, and it is saved on the computer.']))}
          ${h.note('Please note!', '<p>References to group activities are not relevant to this lesson format.</p>')}
          <video controls preload="none" src="${P.video}"></video>
          <h2>Lesson format: parallel</h2>
          <p>The lesson is designed for <strong>60 minutes per student</strong>. There are no group activities. The tutor provides support at the beginning and end; during self-study, they check in from time to time and whenever the student asks for help.</p>
          <h2>The tutor’s role</h2>
          <p>In the synchronous parts, the tutor sets the tone, explains the goal, and checks that the technical setup is ready. During self-study, the tutor does not lead the lesson for the student; they provide targeted help when the student asks. The cards include reminders to call the tutor before saving and at key steps.</p>
          <p>Key support algorithm: <strong>one new letter — one new frame</strong>. Start with a minimum working result, then add decorations.</p>
          ${h.spoiler('Teaching Focus', '<p>The lesson follows a deductive approach: the student first sees a finished animation, then explores how it was made and applies the principle in their own project.</p><p>Feedback: <strong>Tutor + Self</strong>. There is no peer feedback. AI is not used in this lesson (N/A); in later lessons in the module, AI is added as a third feedback channel where appropriate.</p><p>The main focus is the feeling: “I can create a working digital project on my own.” Mistakes are a normal part of the creative process.</p>')}
          ${h.spoiler('Important points', h.ul(['The student may draw their whole name on one frame. Remind them to duplicate the frame before adding each new letter.','Leave time for saving, and check that the GIF has downloaded successfully and opens correctly.','Support students who are unhappy with their drawing: the idea, independence, and a working animation matter more than perfect lines.','If FlipAnim does not load, suggest BrushNinja as an alternative service.']))}
          <h2>Lesson ending</h2>
          <p>The student shows their animation to the tutor by sharing their screen. The tutor highlights one specific strength and helps the student identify the next step for improvement.</p>
          <h2>Next lesson</h2>
          <p>In the next lesson, the student will explore Canva and begin creating a video introduction, where they can use the GIF of their name.</p>
          <p>For Canva registration, prepare an email address in advance: the student’s own or a parent’s.</p>
          <h3>Next, review the tutor notes in the synchronous cards and in the self-study cards where support may be needed.</h3>`) +
        h.banner(P.getReadyTop) +
        `<h1>Get ready for your first creative mission 🚀</h1>
         <blockquote><p>In just a few minutes, you’ll enter Creativia Studio and create your first animation — bringing your own name to life! Check that everything is ready for a comfortable start.</p></blockquote>` +
        h.media(P.equipment, '<h3>⚙️ Check your equipment</h3>' + h.ul(['your sound is on and you can hear the lesson clearly;','your microphone is working;','The camera turns on and shows your picture.']), true) +
        `<h3 id="space-ready">✨ Get your space ready</h3>` +
        h.ul(['Find a quiet place where you won’t be distracted;','Put a glass of water nearby;','Sit comfortably and get ready to create!']) +
        h.note('💡 The structure of the lesson', '<p>First, you’ll work with your tutor for a little while. Then you’ll work through the cards on your own. You can ask your tutor for help if something is unclear or isn’t working.</p>') +
        h.banner(P.getReadyBottom) },

      { title: "Welcome to Creativia Studio! ✨", html:
        h.banner(P.welcomeTop) +
        `<h1>Welcome to Creativia Studio! ✨</h1>
         <blockquote><p>Today, you’ll create your first digital project and bring your own name to life. First, let’s make sure you can see and hear each other clearly.</p></blockquote>` +
        h.media(P.equipment, '<h3>🎯 Your task</h3>' + h.ol(['Check that you can see and hear your tutor.','Turn on your microphone and camera.','Say your name and how old you are.'])) +
        h.spoiler('I can’t find the button to turn on my microphone or camera', h.media(P.micHelp, h.ol(['Look at the bottom bar of the lesson window.','Find the microphone icon 🎙️ and the camera icon 🎥.','Click the right icon to turn on the device.']))) +
        h.spoiler('I can’t hear my tutor. What should I do?', h.ol(['Check the volume on your computer.','Make sure the correct speaker is selected in the settings.','Raise your hand ✋ so your tutor notices the problem.'])) +
        h.spoiler('Can’t turn on your microphone?', h.ol(['Check whether microphone access is allowed.','Click the arrow next to the microphone icon and choose the right device.','Raise your hand ✋ and wait for help from your tutor.'])) +
        h.spoiler('Can’t turn on your camera?', h.ol(['Check whether camera access is allowed.','Close any other programmes that might be using the camera.','If the camera still doesn’t work, keep taking part using your voice.'])) +
        h.banner(P.welcomeBottom) +
        h.tnotes(`<p><strong>Format:</strong> LIVE.</p><p><strong>Time:</strong> 1–2 minutes.</p><p><strong>Card objective:</strong> create a friendly start to the lesson and check technical readiness through observable actions.</p><p><strong>Tutor instructions:</strong> turn on the microphone and camera, say hello, and hear the student’s short greeting. This is a 1:1 format, so there is no need to wait for a group turn.</p><p><strong>Points to note:</strong> contact technical support for serious technical issues.</p>`) },

      { title: "Let’s get to know each other! 👋", html:
        h.banner(P.capsuleTop) +
        `<h1>Let’s get to know each other! 👋</h1>
         <p class="sim-note">Simulator note: the content of this card isn’t reproduced here. In your lesson, use this card to get to know the student before they start working.</p>` },

      { title: "How will the lesson work? 🧭", html:
        h.banner(P.welcomeTop) +
        `<h1>How will the lesson work? 🧭</h1>
         <blockquote><p>Today, you’ll work independently using task cards. Your tutor is nearby, so call them over if something won’t open, isn’t working or doesn’t make sense.</p></blockquote>` +
        h.media(P.catGif, '<h3>When should you call the tutor over?</h3>' + h.ul(['you have a question;','you can’t find the right button or setting;','a website won’t open or an animation is behaving strangely;','before saving your project—if you’re not sure everything is ready.'])) +
        h.note('💡 Important', '<p>If it doesn’t work the first time, that isn’t a failure. It’s a sign to try again!</p>') +
        h.banner(P.welcomeBottom) +
        h.tnotes(`<p><strong>Format:</strong> SYNCHRONOUS.</p><p><strong>Time:</strong> 1 minute.</p><p><strong>Card goal:</strong> to explain the parallel format and help students feel less worried about working independently.</p><p><strong>What the tutor should do:</strong> show the student how to call the tutor over, and explain that most of the lesson will be completed using task cards.</p>`) },

      { title: "What can your name tell people about you? ✨", html:
        `<h1>What can your name tell people about you? ✨</h1>
         <blockquote><p>To help tell people about yourself, you’ll first write and bring your own name to life. Let’s look at an example and find out how to create something like it.</p></blockquote>
         <img class="center-img" src="${P.kodGif}" alt="">
         <h3>🎯 Your task</h3>
         <p>Look at the animation with your tutor and notice how it was made.</p>
         <p><strong>What features did you notice in the animation?</strong></p>
         <div class="quiz">
           <label><input type="checkbox"> The letters appear one at a time</label>
           <label><input type="checkbox"> The letters have different colours, shapes or details</label>
           <label><input type="checkbox"> At the end, you can read the whole name</label>
           <label><input type="checkbox"> The whole name appears at once</label>
         </div>
         <blockquote><p>After answering, click the «Submit» button.</p></blockquote>
         <button class="submit" type="button">✔ Submit</button>
         <blockquote><p>For example, one letter could remind people of your favourite game, animal, sport or creative hobby.</p></blockquote>
         <h2>Our mission plan</h2>` +
        h.ol(['Open the editor and draw the first letter.','Learn how to add the next letter later.','Put your full name together, frame by frame.','Check your animation, save it as a GIF, and show it to your tutor.']) },

      { title: "Opening the animation workshop 🛠️", html:
        h.banner(P.workshopTop) +
        `<h1>Opening the animation workshop 🛠️</h1>
         <img class="center-img" src="${P.flipanim}" alt="FlipAnim editor">` +
        h.banner(P.workshopBottom) +
        h.tnotes(`<p><strong>Format:</strong> SYNCHRONOUS (end of the introduction).</p><p><strong>Time:</strong> 1 minute.</p><p><strong>Card goal:</strong> make sure the service is open and help the student move safely into self-study.</p><p><strong>What the tutor should do:</strong> send the link, wait for confirmation that the student can see the canvas, and remind them how to call the tutor. The student then works independently using the cards.</p><p><strong>What to pay attention to:</strong> if FlipAnim does not open, switch straight to BrushNinja. Do not start drawing the whole project together: the learner continues with the cards.</p>`, 'tn-last') },

      { title: "First letter — first version of your project 🖍️", html:
        h.banner(P.capsuleTop) +
        `<h1>First letter — first version of your project 🖍️</h1>
         <blockquote><p>Imagine you’re exploring a new creative tool. First, try to work it out on your own — it’s OK to make mistakes here.</p></blockquote>` +
        h.media(P.flipanim, '<h3>🎯 Your task</h3>' + h.ol(['Draw the first letter of your name on the canvas.','Add a colour or one detail that shows something you’re interested in.'])) }
    ];

    /* Cards 8–17: only their titles appear in the simulator */
    const notUsed = "Simulator note: this card isn’t part of the current scenarios yet.";
    ["Explore the drawing tools 🎨", "Move, rotate and resize 🔄", "How can you make the second letter appear later? 🤔",
     "The secret of frame-by-frame animation 🎞️", "One more frame, one more letter", "Bring the rest of your letters to life 🚀",
     "Check your animation ✅", "Save and submit your animation 💾", "How does your animation work? 🔍", "Mini Animation Premiere! 🎬"]
      .forEach(t => cards.push({ title: t, html: `<h1>${t}</h1><p class="sim-note">${notUsed}</p>` }));

    /* Card 18: the reflection card (used in decision 8) */
    cards.push({ title: "What did you discover today? ✨", html:
      `<h1>What did you discover today? ✨</h1>
       <h3 id="progress">Think about your progress</h3>
       <p><strong>Rate your progress!</strong></p>
       <div class="rate"><span class="on">😁 I made the project by myself</span><span>🤫 The tips in the cards helped me</span><span>🥺 I still need more practice</span></div>
       <p>Great! In the next lesson, try adding animation to a new video project by yourself.</p>
       <blockquote><p>Tell your tutor in one sentence: what was the most interesting or surprising part of making your animation?</p></blockquote>` });

    /* Card 19 */
    cards.push({ title: "Get ready to use Canva 🖼️", html: `<h1>Get ready to use Canva 🖼️</h1><p class="sim-note">${notUsed}</p>` });
    return cards;
  }
};
