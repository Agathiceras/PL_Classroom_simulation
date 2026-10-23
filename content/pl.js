/* =====================================================================
   CLASSROOM SIMULATOR — CONTENT FILE (Polski)
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

  lang: "pl",

  /* ---------- Interface ---------- */
  ui: {
    pageTitle: "Symulator Classroom",
    tutorYou: "Tutor (Ty)",
    tutor: "Tutor",
    langChip: "PL ˅",
    following: "Podąża za nauczycielem",
    close: "Zamknij",
    modeGuide: "Wycieczka z przewodnikiem",
    modeGame: "Gra decyzyjna",
    groupName: "Grupa równoległa #183",
    online: "{n} · 4 online",
    structureBtn: "📋 Struktura lekcji",
    leave: "Wyjdź",
    classroom: "Classroom",
    assignments: "Zadania",
    prevTask: "Poprzednie zadanie",
    nextTask: "Następne zadanie",
    leadGroup: "Prowadź grupę",
    endSession: "Zakończ sesję",
    myNotes: "📝 Moje notatki",
    teacherNotes: "Notatki dla nauczyciela",
    joined: "🔔 Do lekcji dołącza: {name}",

    coachStep: "Wycieczka z przewodnikiem · {n}/{total}",
    coachNext: "Dalej →",
    coachClick: "👆 Kliknij podświetlony element",
    coachOpenAll: "Otwórz każdą sekcję ({o}/{t})",
    coachScrollNotes: "Przewiń do końca notatek",
    coachScrollCard: "Przewiń do końca karty",

    tourDoneTitle: "Wycieczka z przewodnikiem ukończona!",
    tourDoneText: "Wiesz już, jak przebiega lekcja równoległa w Classroom. Gotowy, by wypróbować to w praktyce?",
    backToMenu: "Wróć do menu",
    startGameBtn: "Zacznij grę decyzyjną →",

    gameStartTask: "Jest <b>17:08</b>. Sofia pracuje samodzielnie, a <b>Alexander</b> właśnie dołączył do lekcji. Przejdź do jego pokoju.",
    gameStartMiss: "To nie tutaj — pokój Alexandra jest na pasku bocznym po lewej.",
    gameIntroTitle: "Gra decyzyjna",
    gameIntroP1: "W każdej sytuacji zdecyduj, co zrobiłbyś jako tutor. Czasem wybierasz odpowiedź, a czasem musisz sam <b>kliknąć właściwy przycisk w Classroom</b>.",
    gameIntroP2: "Dobre decyzje dają <b>💎 diament</b>. Zła decyzja kosztuje <b>❤️ życie</b>, ale grasz dalej. Jeśli stracisz wszystkie 3 życia, możesz kupić dodatkowe za <b>💎 3</b> — w przeciwnym razie gra zacznie się od pierwszej sytuacji.",
    letsGo: "Zaczynamy",

    yourMove: "Twój ruch:",
    backToOptions: "← Wróć do opcji",
    hintHere: "Tutaj — spójrz na podświetlony przycisk",
    checkNotesFirst: "Najpierw sprawdź swoje notatki 📝",
    decideInPanel: "Podejmij decyzję w panelu",
    decisionOf: "Decyzja {n} z {total}",
    hideShow: "Ukryj / pokaż",
    openNotesFirst: "📝 Zanim odpowiesz, otwórz <b>Moje notatki</b> (żółta zakładka).",
    isSpeaking: " mówi…",
    you: "Ty:",
    audioMissing: "🔇 Nie udało się odtworzyć „{name}”. Sprawdź, czy folder Audios znajduje się w tym samym folderze co symulator.",

    outTitle: "Skończyły Ci się życia",
    outBuy: "<b>Kup dodatkowe życie za 💎 {cost}</b> i kontynuuj od tej sytuacji.",
    outHave: "Masz 💎 {n}",
    outNeed: " — brakuje Ci jeszcze {n}",
    outRestartInfo: "W przeciwnym razie gra zacznie się od pierwszej sytuacji.",
    restartGame: "Zacznij grę od nowa",
    buyLife: "❤️ Kup życie · 💎 {cost}",
    lifeBought: "❤️ Życie kupione — zostało 💎 {n}",
    wrongTitle: "Zły wybór — tracisz życie",
    livesLeft1: "Zostało 1 życie",
    livesLeftN: "Zostało żyć: {n}",
    tryAgain: "Spróbuj jeszcze raz",
    correctTitle: "Dobrze! Zdobywasz diament",
    continue: "Kontynuuj",

    recapKicker: "Krótkie podsumowanie",
    recapNow: "Teraz:",
    recapContinue: "Dalej →",

    notesTitle: "📝 Twoje własne notatki",
    notesText: "Zapisałeś je w trakcie lekcji. Classroom nie prowadzi tego zapisu za Ciebie — przyzwyczaj się notować, kiedy zaczął każdy uczeń.",
    notesAlt: "Twoje notatki",
    notesBack: "← Wróć do gry",

    soundChecking: "Ładuję dźwięk testowy…",
    soundOk: "🔊 Odtwarzam dźwięk testowy. Jeśli go nie słyszysz, sprawdź głośność i słuchawki, a potem naciśnij przycisk jeszcze raz.",
    soundFail: "⚠️ Nie udało się wczytać plików dźwiękowych. Upewnij się, że folder <b>Audios</b> znajduje się w tym samym folderze co ten symulator."
  },

  /* ---------- Pages ---------- */
  welcome: {
    kicker: "Lekcje równoległe · Szkolenie obowiązkowe",
    title1: "Symulator", title2: "Classroom",
    lead: "Ten symulator krok po kroku odtwarza <b>prawdziwą lekcję równoległą</b> w Classroom. Interfejs, materiały lekcyjne i sytuacje są takie, jakie spotkasz na własnych lekcjach: to, co tu widzisz, dokładnie wydarzy się z Twoimi uczniami.",
    whyTitle: "Dlaczego to ważne",
    whyP1: "Na lekcji równoległej opiekujesz się nawet <b>4 uczniami jednocześnie</b>, a każdy jest w innym momencie swojej lekcji. Nie ma czasu na szukanie informacji w trakcie zajęć, więc każdy krok musi być dla Ciebie naturalny <b>zanim</b> poprowadzisz pierwszą lekcję równoległą.",
    whyP2: "Oczekujemy, że poznasz tę symulację <b>w 100%</b>. Ma formę gry, ale to narzędzie pracy: przechodź ją tyle razy, ile potrzeba, aż każdy krok będzie łatwy i naturalny.",
    howTitle: "Jak z niej korzystać",
    how1: "Przeczytaj <b>strukturę lekcji równoległej</b>. To materiał szkoleniowy i nie jest częścią materiałów lekcyjnych. Możesz otworzyć go ponownie w dowolnym momencie z górnego paska.",
    how1Btn: "📋 Przeczytaj strukturę lekcji",
    how2: "Ukończ <b>wycieczkę z przewodnikiem</b>. Jest obowiązkowa: pokazuje wszystkie narzędzia i kroki z pierwszym uczniem i odblokowuje grę decyzyjną.",
    how3: "Zagraj w <b>grę decyzyjną</b>: 10 prawdziwych sytuacji z tej samej lekcji, w których decydujesz, co zrobić.",
    how4: "<b>Powtarzaj ją</b>, aż stanie się łatwa. Postaw sobie za cel 10/10 decyzji bez utraty życia.",
    soundTitle: "🔊 Włącz dźwięk",
    soundText: "Uczniowie i tutor mówią podczas symulacji. Jeśli możesz, użyj słuchawek i sprawdź dźwięk, zanim zaczniesz.",
    soundBtn: "▶ Sprawdź mój dźwięk",
    start: "ZACZNIJ SYMULACJĘ →"
  },

  /* Krok przed przewodnikiem: trener wchodzi do klasy, która zaraz się zaczyna, z Back Office (dwa sposoby) */
  enter: {
    kicker: "Przed lekcją",
    title: "Twoja klasa zaraz się zaczyna",
    text: "Już prawie czas. <b>Wejdź do klasy</b> z Back Office. Są dwa sposoby: spróbuj jednego — albo obu.",
    way1Title: "Z twojej grupy równoległej",
    way1: "Grupy → Grupy równoległe → otwórz swoją grupę → kliknij ikonę monitora. Aktywne do 60 minut przed lekcją.",
    way2Title: "Z twojego harmonogramu",
    way2: "Profil → Harmonogram → kliknij lekcję → Otwórz konsolę. Aktywne do 30 minut przed lekcją.",
    waiting: "Klikaj śmiało: nic tu nie może pójść źle.",
    done: "✅ Jesteś w środku! Otwieram Classroom…",
    skip: "Pomiń ten krok →"
  },

  menu: {
    kicker: "Lekcje równoległe · Szkolenie dla tutorów",
    lead: "W tej grze przeżyjesz prawdziwe sytuacje z lekcji w Classroom. Jesteś tutorem grupy równoległej z <b>4 uczniami</b>, a nowy uczeń dołącza do lekcji <b>co 10 minut</b>.",
    facts: [
      ["👥", "4 uczniów", "Każdy ma własny pokój w Twojej konsoli Classroom."],
      ["⏱️", "Co 10 minut", "Przychodzi nowy uczeń, więc masz 10 minut na wprowadzenie do lekcji."],
      ["❤️❤️❤️", "3 życia", "Zła decyzja kosztuje jedno życie. Stracisz wszystkie 3 i gra zacznie się od pierwszej sytuacji — chyba że kupisz życie."],
      ["💎", "Diamenty", "Zdobywasz jeden za każdą dobrą decyzję. Skończyły się życia? Wymień 💎 3 na dodatkowe życie."]
    ],
    part1: "Część 1", part2: "Część 2",
    completed: "Ukończono ✓", startHere: "Zacznij tutaj",
    tourTitle: "Wycieczka z przewodnikiem",
    tourText: "Krok po kroku przejdziesz prawdziwą lekcję w Classroom z pierwszym uczniem, żeby oswoić się z jej przebiegiem.",
    tourStart: "Zacznij wycieczkę z przewodnikiem →", tourReplay: "Powtórz wycieczkę z przewodnikiem",
    gameTitle: "Gra decyzyjna",
    gameText: "Wybierz, co zrobić w każdej sytuacji — albo sam kliknij właściwy przycisk w Classroom. Dobre decyzje popychają Cię do przodu, a złe kosztują życie.",
    gamePlay: "Zagraj w grę decyzyjną →", gameLocked: "🔒 Ukończ wycieczkę z przewodnikiem, aby odblokować",
    structure: "📋 Struktura lekcji",
    back: "← Wróć do wprowadzenia"
  },

  structure: {
    note: "📌 Materiał szkoleniowy. Ta struktura <b>nie</b> jest częścią materiałów lekcyjnych. Przeczytaj ją przed symulacją i wracaj do niej, kiedy potrzebujesz odświeżyć wiedzę.",
    title: "Jak działa lekcja równoległa",
    sub: "Każdy uczeń ma <b>60 minut</b>. Uczniowie dołączają <b>jeden po drugim, co 10 minut</b> (17:00, 17:10, 17:20, 17:30), więc każdy jest w innym momencie swojej lekcji.",
    p1: "Onboarding", p1Small: "ok. 10 min · na żywo, 1:1",
    p1Items: ["Rozmowa na rozgrzewkę: przywitaj ucznia i pomóż mu poczuć się swobodnie.", "Otwórz <b>Zadania</b> → pierwsza karta i włącz <b>Prowadź grupę</b>.", "Narzędzia Classroom: mikrofon, kamera i <b>podnoszenie ręki ✋</b>.", "Poznaj ucznia.", "Jak działa lekcja: praca samodzielna z kartami i sposób, w jaki uczeń może Cię przywołać. Poproś, aby <b>powtórzył to własnymi słowami</b>.", "Przykład i otwarcie narzędzia, aż do karty oznaczonej <b>Równoległe (zakończenie wprowadzenia)</b>.", "Motywujące pożegnanie: pomoc jest w kartach, a uczeń może w każdej chwili podnieść rękę."],
    p2: "Praca samodzielna", p2Small: "ok. 40 min · uczeń pracuje sam",
    p2Items: ["Uczeń przechodzi przez karty do pracy samodzielnej.", "Witasz kolejnych uczniów, odpowiadasz na podniesione ręce i wiadomości oraz krótko sprawdzasz, jak im idzie, gdy masz chwilę.", "Karty przypominają uczniom, aby przywołali Cię przed zapisaniem projektu."],
    p3: "Offboarding (zakończenie lekcji)", p3Small: "ok. 10 min · na żywo, 1:1",
    p3Items: ["Uczeń udostępnia ekran i pokazuje swój projekt.", "Feedback: <b>jedna konkretna mocna strona</b> i <b>jeden kolejny krok</b>.", "Karta refleksji: <i>„Co dzisiaj udało Ci się odkryć?”</i>", "Zapowiedź następnej lekcji.", "Pożegnanie w pozytywnym tonie."],
    rulesTitle: "Gdy kilka rzeczy dzieje się naraz",
    rules: ["<b>Onboarding</b> &gt; podniesiona ręka", "<b>Offboarding (zakończenie lekcji)</b> &gt; podniesiona ręka", "Pożegnania następują w kolejności, w jakiej zaczęły się lekcje, więc <b>zapisuj godzinę rozpoczęcia każdego ucznia</b>.", "Masz wolne minuty? Wykorzystaj je dla tego, kto potrzebuje Cię najbardziej, albo na szybkie sprawdzenie, jak idzie."],
    gotIt: "Rozumiem"
  },

  finish: {
    title: "Symulacja ukończona!",
    text: "Przeszedłeś całą lekcję równoległą, od pierwszego onboardingu do ostatniego pożegnania.",
    stepsTitle: "Twoja lekcja krok po kroku",
    steps: [
      ["17:00–17:30", "<b>Onboardingi</b>, jeden co 10 minut: rozmowa na rozgrzewkę, Zadania, <b>Prowadź grupę</b>, narzędzia, jak działa lekcja (uczeń powtarza to własnymi słowami), przykład i motywujące pożegnanie."],
      ["W międzyczasie", "<b>Priorytety</b>: najpierw onboarding; podniesione ręce i wiadomości w przerwach; wolne minuty dla tego, kto potrzebuje Cię najbardziej."],
      ["17:50 →", "<b>Pożegnania</b> w kolejności, w jakiej zaczęły się lekcje (Twoje notatki mówią, kto jest pierwszy): projekt, konkretny feedback, refleksja, następna lekcja, pożegnanie."]
    ],
    perfect: "<b>Idealna lekcja!</b> Zagraj jeszcze raz od czasu do czasu i przejrzyj strukturę lekcji przed pierwszą lekcją równoległą.",
    notPerfect: "<b>Kolejny krok:</b> zagraj jeszcze raz, aż każda decyzja będzie oczywista. Postaw sobie za cel 10/10 bez utraty życia.",
    codeLabel: "🔑 Twój kod ukończenia",
    codeHint: "Skopiuj go do szkolenia, aby ukończyć moduł.",
    structure: "📋 Struktura lekcji",
    menu: "Wróć do menu",
    again: "Zagraj jeszcze raz"
  },

  /* ---------- Guided tour: 17 steps, in order (title + text) ---------- */
  guide: [
    { title: "Twoja konsola Classroom",
      text: "To <b>konsola Classroom</b>: pierwszy ekran, który widzisz po otwarciu lekcji równoległej.<br><br>Każdy z 4 kafelków to osobny <b>pokój</b>, po jednym dla każdego ucznia. Uczniowie widzą tylko swój pokój — nie widzą ani nie słyszą się nawzajem, a Ciebie widzą i słyszą tylko wtedy, gdy jesteś w ich pokoju.<br><br>Nikt jeszcze nie przyszedł, więc w każdym pokoju widać tylko Twoją kamerę (<b>T</b>). Uczniowie dołączają jeden po drugim, <b>co 10 minut</b>." },
    { title: "Przyszedł uczeń!",
      text: "Jest 17:00 i właśnie dołączyła <b>Sofia</b>. Gdy uczeń przychodzi, jego kamera pojawia się w jego pokoju, obok Twojej.<br><br>Aby porozmawiać z uczniem, musisz być <b>w środku</b> jego pokoju. Kliknij pokój Sofii, aby wejść." },
    { title: "Przywitaj Sofię",
      text: "Jesteś w pokoju Sofii: teraz ona Cię widzi i słyszy. Pozostałe pokoje są cały czas widoczne po lewej, więc zauważysz, gdy ktoś przyjdzie lub podniesie rękę.<br><br>Pierwsze 10 minut z każdym uczniem to <b>onboarding</b> (wprowadzenie). Zacznij od <b>rozmowy na rozgrzewkę</b>: przywitaj Sofię po imieniu, zapytaj, jak się czuje, i pomóż jej poczuć się swobodnie.<br><br>Chcesz zobaczyć całą lekcję w skrócie? W każdej chwili otwórz <b>📋 Struktura lekcji</b> na górnym pasku." },
    { title: "Otwórz materiały lekcyjne",
      text: "Materiały lekcyjne (karty aktywności) znajdują się w <b>Zadaniach</b>. Kliknij <b>Zadania</b> — po najechaniu myszą robi się niebieskie." },
    { title: "Wybierz pierwszą aktywność",
      text: "To lista dzisiejszych aktywności, w kolejności. Kliknij pierwszą: <b>„Przygotuj się do pierwszej kreatywnej misji”</b>." },
    { title: "Dwa widoki tej samej karty",
      text: "Zanim pójdziesz dalej, ważne jest, aby zrozumieć, <b>co widzisz Ty</b> i <b>co widzi Sofia</b>. Jesteście na tej samej karcie, ale nie na tym samym ekranie:" +
        "<div class='views'><div class='view'><div class='vh'>👩‍🏫 Co widzisz <b>Ty</b></div><div class='mock'><div class='m-tn'>Notatki dla nauczyciela<small>tylko dla Ciebie</small></div><div class='mk-c'>Treść aktywności</div></div></div>" +
        "<div class='view'><div class='vh'>👧 Co widzi <b>Sofia</b></div><div class='mock'><div class='mk-c'>Treść aktywności</div></div></div></div>" +
        "<ul class='c-list'><li>Ramka z <b>pomarańczową przerywaną obwódką</b> to <b>Notatki dla nauczyciela</b>: ile trwa karta, co powinieneś zrobić i na co uważać.</li><li>Sofia <b>nigdy</b> nie widzi Notatek dla nauczyciela — tylko treść aktywności. Nie czytaj jej ich na głos.</li><li>Notatki zastępują dawne wiki: przestudiuj je <b>przed</b> każdą lekcją.</li></ul>" },
    { title: "Przeczytaj Notatki dla nauczyciela",
      text: "To Notatki dla nauczyciela do pierwszej karty. Wyjaśniają cel dzisiejszej lekcji i to, jak działa lekcja równoległa.<br><br>Przeczytaj je teraz: <b>otwórz każdą sekcję</b> i <b>przewiń do końca notatek</b>. Przycisk Dalej odblokuje się, gdy skończysz." },
    { title: "Prowadź grupę",
      text: "Teraz włącz <b>Prowadź grupę</b>. Ten przełącznik masz tylko Ty — uczniowie go nie mają." +
        "<div class='lead-demo'><div><span class='ld-sw'></span><b>WYŁ.</b> — przechodzisz na inną kartę lub przewijasz, a Sofia zostaje tam, gdzie była. Może patrzeć na coś innego albo tylko na Twoją kamerę.</div>" +
        "<div><span class='ld-sw on'></span><b>WŁ.</b> — każdą kartę, którą otwierasz, i każde przewinięcie Sofia widzi w tym samym czasie.</div></div>" +
        "Kliknij przełącznik — po włączeniu robi się niebieski." },
    { title: "Sofia podąża za Tobą",
      text: "<b>Prowadź grupę</b> jest włączone ✅ Od teraz Sofia widzi dokładnie to, co Ty — bez Notatek dla nauczyciela.<br><br>Przewiń <b>całą kartę</b> tak, jak zrobiłbyś to razem z nią. Przycisk Dalej odblokuje się, gdy dojdziesz do końca." },
    { title: "Następna aktywność",
      text: "Strzałka w prawo przenosi Cię do <b>następnej aktywności</b> lekcji. Ponieważ Prowadź grupę jest włączone, Sofia przechodzi razem z Tobą. Kliknij ją." },
    { title: "Narzędzia Classroom",
      text: "Ponieważ to pierwsza lekcja Sofii, ta karta uczy ją korzystać z Classroom: mikrofonu, kamery i tego, jak <b>podnieść rękę ✋</b>.<br><br>Podniesienie ręki to sposób, w jaki Sofia będzie Cię przywoływać podczas pracy samodzielnej — nawet gdy jesteś w pokoju innego ucznia.<br><br>Przeczytaj kartę do końca, razem z Notatkami dla nauczyciela na dole." },
    { title: "Idź dalej",
      text: "Kliknij <b>Następne zadanie</b>, aby przejść do następnej karty." },
    { title: "Poznajmy się",
      text: "Ta karta służy do <b>poznania ucznia</b>. Na prawdziwej lekcji tutaj pytasz o zainteresowania i o to, co uczeń lubi tworzyć — to pomaga mu poczuć się swobodnie, zanim zacznie pracować sam.<br><br>W tej wycieczce nie musisz tu nic robić. Kliknij <b>Następne zadanie</b>, aby kontynuować." },
    { title: "Jak działa lekcja",
      text: "Ta karta wyjaśnia format równoległy: większość lekcji to <b>praca samodzielna</b> z kartami, a Sofia może Cię przywołać, kiedy tylko będzie Cię potrzebować. Pokaż jej, jak podnieść rękę.<br><br><b>Ważne:</b> nie pytaj tylko „Czy jasne?”. Poproś ją, aby <b>powtórzyła własnymi słowami</b>, jak będzie wyglądać lekcja i co zrobi, jeśli będzie potrzebować pomocy. Niektórzy uczniowie czują się w tym formacie pozostawieni sami sobie nawet po wyjaśnieniu — to, że sami to powtórzą, pozwala Ci mieć pewność, że naprawdę zrozumieli.<br><br>Przeczytaj kartę do końca." },
    { title: "Idź dalej",
      text: "Kliknij <b>Następne zadanie</b>. W tej wycieczce przeskoczymy do <b>ostatniej karty, którą wykonujesz razem</b> z uczniem." },
    { title: "Ostatnia karta wspólna",
      text: "To ostatnia karta, nad którą pracujesz razem z uczniem. Przewiń w dół do <b>Notatek dla nauczyciela</b> na dole karty i przeczytaj je.<br><br>Poszukaj wpisu <b>Tryb: Równoległe (zakończenie wprowadzenia)</b>: oznacza on, że w tym miejscu kończy się wprowadzenie. Pilnuj czasu — zwykle dojdziesz tu <b>przed</b> upływem 10 minut.<br><br>Zakończ wprowadzenie: upewnij się, że wszystko jest jasne, przypomnij Sofii, jak podnieść rękę, i zostaw ją pracującą samodzielnie z kartami." },
    { title: "Przyszedł nowy uczeń",
      text: "Jest 17:08 i <b>Alexander</b> właśnie dołączył do swojego pokoju — spójrz na pasek boczny po lewej.<br><br>To koniec wycieczki z przewodnikiem. Od teraz decyzje należą do Ciebie! Kliknij pokój Alexandra, aby do niego przejść." }
  ],

  /* ---------- Decision game: 10 situations, in order. Options keep their order (A, B, C). ----------
     say   = what the tutor says (it must match the tutor's recorded audio Tutor_D<n>_<letter>.mp3)
     why   = the feedback shown after the choice
     prompt / miss = for options where the player must click a real button                       */
  questions: [
    { who: "Alexander · 17:08",
      q: "Jesteś z <b>Alexandrem</b>, swoim uczniem na 17:10. Przyszedł punktualnie — świetnie! Widzisz, że jest już w aktywnościach. Co powinieneś zrobić, zanim pójdziesz dalej?",
      options: [
        { label: "Powiedz: „Alexander, czy możesz kliknąć <b>Prowadź grupę</b>?”", say: "Alexander, czy możesz kliknąć „Prowadź grupę”?",
          why: "Uczniowie nie mają opcji <b>Prowadź grupę</b> w swoim Classroom i to nie oni ją włączają. Może to zrobić tylko Ty, tutor." },
        { label: "Włącz <b>Prowadź grupę</b>", prompt: "Włącz <b>Prowadź grupę</b> w Classroom Alexandra.", miss: "To nie ten przycisk. Spójrz jeszcze raz na dolny pasek.",
          why: "Dobra robota! Gdy <b>Prowadź grupę</b> jest włączone, ekran Alexandra podąża za Twoim: każdą aktywność i każde przewinięcie widzi w tym samym czasie." },
        { label: "Powiedz: „Alexander, czy możesz przeczytać aktywność?”", say: "Alexander, czy możesz przeczytać aktywność?",
          why: "Nie włączyłeś <b>Prowadź grupę</b>. Ponieważ to jego pierwsza lekcja, Alexander może być w zupełnie innym miejscu platformy i nie patrzeć na aktywność, którą prezentujesz — może widzieć tylko Twoją kamerę." }
      ] },

    { who: "Alexander · 17:17",
      recap: { kicker: "Krótkie podsumowanie · Onboarding", title: "Krok po kroku: co zrobiłeś z Sofią",
        sub: "Onboarding Sofii (17:00–17:08). To kroki, które powtarzasz z <b>każdym</b> uczniem:",
        steps: [
          ["", "<b>Rozmowa na rozgrzewkę</b>: przywitałeś Sofię i pomogłeś jej poczuć się swobodnie."],
          ["", "Otworzyłeś <b>Zadania</b> → pierwsza karta i przeczytałeś <b>Notatki dla nauczyciela</b> (widzisz je tylko Ty)."],
          ["", "Włączyłeś <b>Prowadź grupę</b>, żeby jej ekran podążał za Twoim."],
          ["", "<b>Narzędzia Classroom</b>: mikrofon, kamera i podnoszenie ręki ✋."],
          ["", "Poznałeś ją i wyjaśniłeś, <b>jak działa lekcja</b> — a potem poprosiłeś, żeby powtórzyła to własnymi słowami."],
          ["", "<b>Przykład</b> i otwarcie narzędzia, aż do karty oznaczonej <b>Równoległe (zakończenie wprowadzenia)</b>."],
          ["", "Krótkie pożegnanie i Sofia zaczęła swoją <b>pracę samodzielną</b>."]
        ],
        now: "Jest 17:17. Wykonałeś te same kroki z Alexandrem i dotarłeś do jego ostatniej karty wspólnej. Czas zakończyć jego wprowadzenie." },
      events: ["✋ Sofia podnosi rękę", "🔔 Mateo dołącza do lekcji"],
      q: "Uczeń podnosi rękę, prosząc o pomoc, a chwilę później dołącza kolejny — a Ty właśnie kończysz wprowadzenie z Alexandrem. Jakiego zdania użyjesz, aby zakończyć rozmowę?",
      options: [
        { label: "„Muszę już iść, bo muszę przywitać innych uczniów, więc od teraz będziesz pracować sam. Do zobaczenia na końcu lekcji.”",
          say: "Muszę już iść, bo muszę przywitać innych uczniów, więc od teraz będziesz pracować sam. Do zobaczenia na końcu lekcji.",
          why: "Tak może się zdarzyć — na przykład gdy uczeń świetnie radzi sobie sam — ale to zdanie nie jest zbyt życzliwe i nazywa pracę samodzielną „pracą w pojedynkę”. To nie pomaga uczniowi spojrzeć na nią jak na kolejny sposób uczenia się; brzmi, jakby tutor zostawiał go bez opieki." },
        { label: "„Świetnie, czas na Twoją pracę samodzielną! Wierzę, że poradzisz sobie naprawdę dobrze — wierzę w Twoje umiejętności. Pamiętaj, że w kartach jest pomoc do każdej aktywności, a możesz też podnieść rękę, a ja wrócę do Twojego pokoju, żeby Ci pomóc. Powodzenia i miłej zabawy!”",
          say: "Świetnie, czas na Twoją pracę samodzielną! Wierzę, że poradzisz sobie naprawdę dobrze — wierzę w Twoje umiejętności. Pamiętaj, że w kartach jest pomoc do każdej aktywności, a możesz też podnieść rękę, a ja wrócę do Twojego pokoju, żeby Ci pomóc. Powodzenia i miłej zabawy!",
          why: "To zdanie potwierdza sens pracy samodzielnej, przypomina Alexandrowi o wskazówkach w każdej karcie i daje mu znać, że jeśli potrzebuje pomocy wykraczającej poza to, co oferują karty, może podnieść rękę." },
        { label: "„Wychodzę na chwilę, ale zaraz wrócę, żeby Ci pomóc i wyjaśnić resztę aktywności. Udostępnię też swój ekran, żeby pokazać Ci, jak korzystać z programu.”",
          say: "Wychodzę na chwilę, ale zaraz wrócę, żeby Ci pomóc i wyjaśnić resztę aktywności. Udostępnię też swój ekran, żeby pokazać Ci, jak korzystać z programu.",
          why: "Nie dotrzymasz tej obietnicy: czekają na Ciebie dwaj uczniowie. Poza tym w tym formacie tutor nie wyjaśnia aktywności — uczeń przechodzi przez karty." }
      ] },

    { who: "Konsola · 17:18",
      q: "Świetnie — skończyłeś z drugim uczniem. Teraz zdecyduj, co zrobić najpierw: iść do ucznia, który podnosi rękę, czy do ucznia, który właśnie przyszedł punktualnie na swoją lekcję?",
      options: [
        { label: "Uczeń z podniesioną ręką (Sofia)",
          why: "Onboarding ma pierwszeństwo przed podniesioną ręką. Jeśli opóźnisz onboarding Mateo, opóźnisz też moment, w którym zacznie pracować nad swoimi aktywnościami." },
        { label: "Uczeń czekający na onboarding (Mateo)", prompt: "Przejdź do pokoju <b>Mateo</b>, aby zacząć jego onboarding.", miss: "To nie ten pokój — znajdź pokój Mateo w konsoli.",
          why: "Onboarding ma pierwszeństwo przed podniesioną ręką: opóźnienie onboardingu Mateo opóźniłoby moment, w którym zacznie pracować nad swoimi aktywnościami." }
      ] },

    { who: "Mateo · 17:22",
      recap: { title: "Gdzie jesteś teraz",
        steps: [
          ["17:17", "Zakończyłeś wprowadzenie Alexandra motywującym pożegnaniem: teraz pracuje samodzielnie."],
          ["17:18", "Sofia podniosła rękę ✋, a Mateo dołączył w tym samym momencie."],
          ["17:18", "Poszedłeś najpierw do Mateo, bo <b>onboarding ma pierwszeństwo przed podniesioną ręką</b>."],
          ["17:18–17:22", "Onboarding Mateo: rozmowa na rozgrzewkę, Zadania, <b>Prowadź grupę</b>, narzędzia Classroom…"]
        ],
        now: "Jesteś w połowie onboardingu Mateo, na karcie <i>„Jak będzie przebiegać lekcja?”</i>." },
      msg: "Halo????",
      events: ["🔔 Valentina dołącza do lekcji"],
      q: "Jesteś w trakcie onboardingu Mateo i zauważasz, że <b>Valentina</b>, Twoja czwarta uczennica, przyszła na swoją lekcję wcześniej. Co robisz?",
      options: [
        { label: "Kontynuuję, aż skończę onboarding Mateo",
          why: "Valentina przyszła wcześniej, więc wie, że to normalne, iż jej tutora jeszcze nie ma w pokoju. Dokończenie onboardingu Mateo pozwala wszystkim zachować plan lekcji." },
        { label: "Idę do pokoju Valentiny, żeby nie musiała czekać",
          why: "To przerywa onboarding Mateo i opóźnia jego lekcję, co jest niekorzystne dla wszystkich. Valentina przyszła wcześniej, więc to normalne, że jej tutora jeszcze nie ma w pokoju." },
        { label: "Powiedz: „Mateo, poczekaj chwilę — właśnie dołączyła do lekcji koleżanka.”", say: "Mateo, poczekaj chwilę — właśnie dołączyła do lekcji koleżanka.",
          why: "To przerywa onboarding Mateo i opóźnia jego lekcję, co jest niekorzystne dla wszystkich. Valentina przyszła wcześniej, więc to normalne, że jej tutora jeszcze nie ma w pokoju." }
      ] },

    { who: "Konsola · 17:28",
      msg: "Zobacz mój projekt!!!",
      events: ["💬 Nowa wiadomość od Sofii"],
      q: "Skończyłeś onboarding Mateo i zostały Ci 2 minuty z 10, które poświęcasz na onboarding. Valentina już dołączyła, ale pamiętasz, że Sofia podniosła rękę — a teraz wysyła Ci wiadomość, że skończyła swój projekt. Co robisz?",
      options: [
        { label: "Zaczynam od Valentiny, bo onboarding ma pierwszeństwo przed podniesioną ręką",
          why: "Lekcja Valentiny zaczyna się dopiero za 2 minuty. Gdy masz wolny czas, wykorzystaj go na kontakt z uczniem, który potrzebuje Cię najbardziej." },
        { label: "Idę do Sofii i od razu robię jej offboarding",
          why: "Na offboarding Sofii jest za wcześnie: ma jeszcze mnóstwo czasu lekcji. Teraz potrzebuje feedbacku do projektu — a Ty masz 2 minuty, żeby jej go dać." },
        { label: "Idę do Sofii, wykorzystując 2 minuty do rozpoczęcia lekcji Valentiny, i daję jej feedback",
          why: "Gdy masz wolny czas, najlepiej wykorzystać go na kontakt z uczniami, którzy potrzebują go najbardziej. Jeśli nikt nie ma podniesionej ręki, możesz krótko sprawdzić, jak idzie tym, którzy jej nie podnieśli." }
      ] },

    { who: "Sofia · 17:28",
      q: "Jesteś w pokoju Sofii, a ona udostępnia ekran, żeby pokazać Ci swój projekt. Jaki feedback możesz jej dać w dwie minuty?",
      options: [
        { label: "„Sofio, to jest wspaniałe, naprawdę wspaniałe! Szczerze, to jeden z najpiękniejszych rysunków, jakie zdarzyło mi się oglądać. Jesteś prawdziwą artystką i powinnaś być z siebie bardzo dumna. Rób dalej to, co kochasz — kiedy lubisz to, co robisz, to jest naprawdę ważne, a cała reszta przyjdzie sama.”",
          say: "Sofio, to jest wspaniałe, naprawdę wspaniałe! Szczerze, to jeden z najpiękniejszych rysunków, jakie zdarzyło mi się oglądać. Jesteś prawdziwą artystką i powinnaś być z siebie bardzo dumna. Rób dalej to, co kochasz — kiedy lubisz to, co robisz, to jest naprawdę ważne, a cała reszta przyjdzie sama.",
          why: "Brzmi ciepło, ale to tylko ogólna pochwała: nie mówi Sofii, co dokładnie zrobiła dobrze ani co mogłaby spróbować dalej. Mówienie dużo to nie to samo, co dawanie feedbacku." },
        { label: "„Wow, Sofio, zrobiłaś to całkiem sama! Twoje kształty i kolory świetnie ze sobą współgrają, a wszystkie te klatki sprawiają, że ruch jest płynny. Co chciałabyś dodać następnie?”",
          say: "Wow, Sofio, zrobiłaś to całkiem sama! Twoje kształty i kolory świetnie ze sobą współgrają, a wszystkie te klatki sprawiają, że ruch jest płynny. Co chciałabyś dodać następnie?",
          why: "Krótki, konkretny i motywujący: wskazuje konkretne mocne strony (kształty, kolory, liczbę klatek) i kończy się pytaniem, które zachęca ją do dalszego eksplorowania. Dobry feedback nie polega na długości — polega na konkretności." },
        { label: "„Sofio, wyjaśnię Ci coś ważnego. Animacja poklatkowa opiera się na zjawisku trwałości wzroku: każda klatka jest wyświetlana przez ułamek sekundy, a mózg odczytuje całą sekwencję jako ciągły ruch. W Twoim przypadku temat nie jest zgodny z celem lekcji, którym było ożywienie liter Twojego imienia, więc następnym krokiem byłoby zacząć od nowa, zgodnie z instrukcją.”",
          say: "Sofio, wyjaśnię Ci coś ważnego. Animacja poklatkowa opiera się na zjawisku trwałości wzroku: każda klatka jest wyświetlana przez ułamek sekundy, a mózg odczytuje całą sekwencję jako ciągły ruch. W Twoim przypadku temat nie jest zgodny z celem lekcji, którym było ożywienie liter Twojego imienia, więc następnym krokiem byłoby zacząć od nowa, zgodnie z instrukcją.",
          why: "Brzmi jak wykład dla dorosłego: fachowe słownictwo, brak docenienia jej pracy i skupienie na tym, co jest źle. Z dziećmi mów prosto, konkretnie i zachęcająco — i bądź elastyczny wobec twórczych wyborów." }
      ] },

    { who: "Konsola · 17:50",
      recap: { kicker: "Krótkie podsumowanie · Lekcja do tej pory", title: "Wszyscy czworo uczniów jest na swojej lekcji",
        steps: [
          ["17:00", "Onboarding Sofii."],
          ["17:08", "Onboarding Alexandra."],
          ["17:18", "Onboarding Mateo (przed podniesioną ręką Sofii)."],
          ["17:28", "2 wolne minuty → feedback do projektu Sofii."],
          ["17:30", "Onboarding Valentiny."],
          ["17:40–17:50", "Wszyscy pracują samodzielnie; Ty odpowiadasz na podniesione ręce i wiadomości."]
        ],
        now: "Zaczyna się <b>faza zakończenia lekcji</b>. Każdy uczeń ma 60 minut, więc pożegnania następują w kolejności, w jakiej zaczęły się ich lekcje." },
      events: ["✋ Sofia i Mateo podnoszą ręce"],
      q: "Skończyłeś udzielać Sofii feedbacku i zrobiłeś onboarding Valentiny, a jest już <b>17:50</b>. Jesteś poza pokojami i dwie ręce są podniesione: Sofii i Mateo. Do kogo pójdziesz najpierw?<br><br>Zanim odpowiesz, sprawdź <b>📝 Moje notatki</b> (żółta zakładka). To notatki, które <b>robisz sam</b> w trakcie lekcji — Classroom ich za Ciebie nie tworzy. Zapisywanie, kiedy zaczął każdy uczeń, pozwala Ci wiedzieć, kto żegna się pierwszy.",
      options: [
        { label: "Do Mateo, bo jesteś już wolny od onboardingów, a on ma pytanie",
          why: "Offboarding (zakończenie lekcji) ma pierwszeństwo przed podniesioną ręką. Pójście najpierw do Mateo opóźniłoby zakończenie lekcji Sofii i cały przebieg lekcji. Twoje notatki to pokazują: Sofia to Twoje pierwsze pożegnanie." },
        { label: "Do Sofii, bo jej lekcja za chwilę się kończy", prompt: "Przejdź do pokoju <b>Sofii</b>, aby zacząć jej pożegnanie.", miss: "To nie ten pokój — znajdź pokój Sofii w konsoli.",
          why: "Offboarding (zakończenie lekcji) ma pierwszeństwo przed podniesioną ręką. Wskazówka: postaraj się zakończyć lekcję w około 8 minut, żeby jeszcze zdążyć pomóc Mateo z podniesioną ręką przed offboardingiem Alexandra o 18:00." },
        { label: "Do Mateo, bo jeszcze go nie sprawdzałeś",
          why: "Offboarding (zakończenie lekcji) ma pierwszeństwo przed podniesioną ręką. Pójście najpierw do Mateo opóźniłoby zakończenie lekcji Sofii i cały przebieg lekcji. Twoje notatki to pokazują: Sofia to Twoje pierwsze pożegnanie." }
      ] },

    { who: "Alexander · 18:00",
      recap: { kicker: "Krótkie podsumowanie · Offboarding", title: "Jak wygląda pożegnanie (offboarding)",
        sub: "Około 10 minut, na żywo z uczniem:",
        steps: [
          ["", "Uczeń <b>udostępnia ekran</b> i pokazuje swój projekt."],
          ["", "Dajesz feedback: <b>jedna konkretna mocna strona</b> i <b>jeden kolejny krok</b>."],
          ["", "<b>Refleksja</b>: karta <i>„Co dzisiaj udało Ci się odkryć?”</i> — uczeń ocenia swoje postępy i opowiada Ci o nich."],
          ["", "<b>Zapowiadasz następną lekcję</b> (Canva: potrzebny będzie adres e-mail)."],
          ["", "<b>Pożegnanie</b> w pozytywnym tonie."]
        ],
        now: "Pożegnałeś Sofię i pomogłeś Mateo z jego pytaniem. Jest 18:00: pożegnanie Alexandra. Właśnie ocenił swoje postępy na karcie refleksji." },
      intro: { text: "Kończysz pożegnanie z Alexandrem. Ocenił swoje postępy odpowiedzią „Udało mi się samodzielnie stworzyć projekt”. Posłuchajmy, co ma na ten temat do powiedzenia.",
               btn: "▶ Posłuchaj Alexandra", replay: "Posłuchaj jeszcze raz",
               /* must match the audio Alexander_reflection.mp3 */
               transcript: "Hmm… Było dla mnie dość łatwe, bo już wcześniej używałem tych narzędzi. Zrobiłem wszystko sam, ale nie nauczyłem się niczego nowego, bo już wiedziałem, jak z nich korzystać." },
      q: "Co powiesz Alexandrowi?",
      options: [
        { label: "„Rozumiem — ale hej, świetnie się bawiłeś! W nauce chodzi o zabawę: o to, by tworzyć wspaniałe chwile na lekcji, czuć się swobodnie ze swoimi postępami i spędzać czas na tym, co się lubi. Wynik nie ma aż takiego znaczenia, uwierz mi.”",
          say: "Rozumiem — ale hej, świetnie się bawiłeś! W nauce chodzi o zabawę: o to, by tworzyć wspaniałe chwile na lekcji, czuć się swobodnie ze swoimi postępami i spędzać czas na tym, co się lubi. Wynik nie ma aż takiego znaczenia, uwierz mi.",
          why: "Brzmi wspierająco, ale omija to, co Alexander właśnie Ci powiedział: lekcja była dla niego za łatwa. Powiedzenie, że wynik nie ma znaczenia, nie pomoże mu się rozwijać — jeśli nie podniesiesz poziomu, może się znudzić." },
        { label: "„Super, że już coś z tego umiesz — to daje Ci przewagę. To pierwsza lekcja, więc to normalne, że wydała się łatwa. Powiedz mi, jakich wyzwań chciałbyś spróbować albo czego się nauczyć, a ja uwzględnię to jako dodatkowe zadania na następną lekcję.”",
          say: "Super, że już coś z tego umiesz — to daje Ci przewagę. To pierwsza lekcja, więc to normalne, że wydała się łatwa. Powiedz mi, jakich wyzwań chciałbyś spróbować albo czego się nauczyć, a ja uwzględnię to jako dodatkowe zadania na następną lekcję.",
          why: "Doceniasz to, co już umie, a jednocześnie bierzesz pod uwagę, że trzeba podnieść poziom, żeby się nie nudził — więc starasz się poznać go lepiej i dopasować lekcję do niego." },
        { label: "„To akurat bardzo częste zjawisko, Alexander. Gdy uczący się ma wcześniejsze doświadczenie, odczuwana trudność maleje, ale utrwalanie wiedzy nadal zachodzi. Powtarzanie wzmacnia to, co już umiesz, więc nawet jeśli było łatwo, ćwiczenie było wartościowe dla Twojej długoterminowej nauki.”",
          say: "To akurat bardzo częste zjawisko, Alexander. Gdy uczący się ma wcześniejsze doświadczenie, odczuwana trudność maleje, ale utrwalanie wiedzy nadal zachodzi. Powtarzanie wzmacnia to, co już umiesz, więc nawet jeśli było łatwo, ćwiczenie było wartościowe dla Twojej długoterminowej nauki.",
          why: "To wyjaśnienie w stylu wykładu dla dorosłego. Używa słów, z którymi dziecko się nie utożsami, i nie daje Alexandrowi tego, czego potrzebuje: większego wyzwania." }
      ] },

    { who: "Konsola · 18:07",
      msg: "Pomocy! Nie wiem, co dalej 😟",
      events: ["💬 Nowa wiadomość od Valentiny"],
      q: "Skończyłeś pożegnanie z Alexandrem. Wiesz, że następne pożegnanie to Mateo, ale masz jedną wolną minutę i zauważasz, że Valentina napisała, że ma problem techniczny. Co powinieneś zrobić?",
      options: [
        { label: "Idę do Mateo, bo pożegnanie ma pierwszeństwo przed podniesioną ręką",
          why: "To prawda, że pożegnanie ma pierwszeństwo przed podniesioną ręką, ale masz jeszcze minutę — dość czasu, żeby sprawdzić, jaki problem ma Valentina." },
        { label: "Pomagam Valentinie, bo problem techniczny jest pilniejszy",
          why: "Problem techniczny może być pilny, ale jeszcze nie wiesz, jaki jest: może być bardzo prosty albo tak skomplikowany, że lepiej najpierw wrócić do Mateo." },
        { label: "Wykorzystuję tę minutę, żeby zajrzeć do Valentiny i sprawdzić, czy da się to rozwiązać w tym czasie", prompt: "Przejdź do pokoju <b>Valentiny</b>.", miss: "To nie ten pokój — znajdź pokój Valentiny w konsoli.",
          why: "Masz mało czasu i nie musisz rozwiązywać wszystkiego — ale możesz wykorzystać tę minutę, żeby ją zobaczyć i zrozumieć problem. Jeśli jest prosty, możesz go naprawić. Jeśli jest bardziej złożony, powiedz jej, że musisz pożegnać się z kolegą i że wrócisz, i daj jej aktywność do wykonania, gdy będziesz z Mateo." }
      ] },

    { who: "Valentina · 18:07",
      intro: { text: "Jesteś w pokoju Valentiny. Poświęćmy 30 sekund, żeby zobaczyć, jaki ma problem.", btn: "▶ Zobacz ekran Valentiny", replay: "Obejrzyj jeszcze raz" },
      q: "Co powinieneś zrobić?",
      options: [
        { label: "Powiedz Valentinie, że to bardzo skomplikowany problem i lepiej go naprawić po zakończeniu pożegnania z Mateo",
          say: "Valentino, to dość skomplikowany problem — lepiej naprawmy go, kiedy skończę żegnać się z Mateo.",
          why: "Nie musiałeś tego odkładać: problem był bardzo prosty. Przerwa w obrysie litery V sprawiła, że farba wypełniła całe płótno — dało się to rozwiązać w kilka sekund." },
        { label: "Powiedz jej, że wystarczy zamknąć literę V, bo jest w niej przerwa, przez którą zamalowuje się wszystko",
          say: "Wystarczy, że zamkniesz literę V — jest w niej mała przerwa i dlatego zamalowuje się wszystko.",
          why: "Problem był bardzo prosty: przerwa w obrysie litery V sprawiła, że farba wypełniła całe płótno. Poświęcenie tej minuty na zajrzenie pozwoliło Ci rozwiązać go od razu." },
        { label: "Powiedz jej, żeby poszukała pomocy w kartach, bo nie masz czasu tłumaczyć",
          say: "Poszukaj pomocy w kartach — teraz nie mam czasu tłumaczyć.",
          why: "Karty nie wychwycą za nią tego rodzaju problemu, a naprawa zajmuje tylko kilka sekund. Odesłanie jej do kart zostawia ją z problemem." }
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
      { title: "Przygotuj się do pierwszej kreatywnej misji 🚀", html:
        h.tnotes(`
          <h1>Przygotowanie do lekcji: Animacja imienia w FlipAnim</h1>
          <h2>Przegląd lekcji</h2>
          <p>To pierwsza lekcja programu Digital Creativity lvl 2 w formacie lekcji równoległych. Na początku i na końcu lekcji uczeń pracuje indywidualnie z nauczycielem, a główną część praktyczną wykonuje samodzielnie według kart. Projektem lekcji jest animacja GIF własnego imienia.</p>
          <p>Głównym celem lekcji jest szybkie doświadczenie sukcesu oraz poznanie przez ucznia zasady animacji poklatkowej: ruch powstaje dzięki kolejnym zmianom klatek.</p>
          ${h.spoiler('Misja fabularna lekcji', '<p>Uczeń rozpoczyna pracę w Creativia Studio jako cyfrowy animator. Jego pierwszą misją jest „ożywienie” własnego imienia tak, aby litery pojawiały się jedna po drugiej.</p>')}
          ${h.spoiler('Główny cel lekcji', '<p>Pomóc uczniowi zrozumieć zasadę animacji poklatkowej i zastosować ją podczas tworzenia własnego pliku GIF.</p>')}
          ${h.spoiler('Kluczowy efekt', '<p>Pod koniec lekcji uczeń:</p>' + h.ul(['ma stworzoną animację GIF własnego imienia;','ma litery pojawiające się kolejno na różnych klatkach;','ma czytelne imię, działającą animację zapisaną na komputerze.']))}
          ${h.note('Zwróć uwagę!', '<p>Wzmianki o zadaniach grupowych nie dotyczą tego formatu lekcji.</p>')}
          <video controls preload="none" src="${P.video}"></video>
          <h2>Format lekcji: równoległa</h2>
          <p>Lekcja jest zaplanowana na <strong>60 minut dla jednego ucznia</strong>. Nie ma zadań grupowych. Nauczyciel pomaga na początku i na końcu lekcji; podczas samodzielnej pracy zagląda od czasu do czasu oraz wtedy, gdy uczeń sam go poprosi.</p>
          <h2>Rola nauczyciela</h2>
          <p>W częściach synchronicznych nauczyciel nadaje ton, pokazuje cel i sprawdza gotowość techniczną. Podczas samodzielnej pracy nie prowadzi lekcji za ucznia: pomaga konkretnie, gdy uczeń go poprosi. Przed zapisaniem projektu i na kluczowych etapach kart znajdują się przypomnienia, aby poprosić nauczyciela o pomoc.</p>
          <p>Kluczowa zasada wsparcia: <strong>jedna nowa litera — jedna nowa klatka</strong>. Najpierw minimalny działający efekt, potem ozdoby.</p>
          ${h.spoiler('Cel metodyczny', '<p>Lekcja opiera się na logice dedukcyjnej: uczeń najpierw widzi gotową animację, potem poznaje zasadę jej tworzenia i stosuje ją we własnym projekcie.</p><p>Informacja zwrotna: <strong>nauczyciel + uczeń</strong>. Nie ma informacji zwrotnej od rówieśników. AI nie jest używane na tej lekcji (N/A); w kolejnych lekcjach modułu AI jest dodawane jako trzeci kanał tam, gdzie jest to odpowiednie.</p><p>Główny nacisk kładziemy na poczucie: „Potrafię samodzielnie stworzyć działający projekt cyfrowy”. Błędy są naturalną częścią procesu twórczego.</p>')}
          ${h.spoiler('Na co zwrócić uwagę', h.ul(['Uczeń może narysować całe imię na jednej klatce. Przypominaj o duplikowaniu klatki przed dodaniem każdej nowej litery.','Zostaw czas na zapisanie projektu i sprawdź, czy plik GIF rzeczywiście został pobrany i można go otworzyć.','Wspieraj ucznia, który jest niezadowolony z rysunku: ważne są pomysł, samodzielność i działająca animacja, a nie idealne linie.','Jeśli FlipAnim się nie ładuje, zaproponuj zapasowy serwis BrushNinja.']))}
          <h2>Zakończenie lekcji</h2>
          <p>Uczeń pokazuje nauczycielowi animację, udostępniając ekran. Nauczyciel wskazuje jedną konkretną mocną stronę i pomaga sformułować kolejny krok, który pozwoli ulepszyć projekt.</p>
          <h2>Następna lekcja</h2>
          <p>Na następnej lekcji uczeń pozna Canva i zacznie tworzyć wizytówkę wideo, w której będzie mógł wykorzystać plik GIF ze swoim imieniem.</p>
          <p>Przed rejestracją w Canva przygotuj wcześniej adres e-mail — swój lub rodzica.</p>
          <h3>Następnie zapoznaj się z notatkami dla nauczyciela w kartach synchronicznych oraz kartach do samodzielnej pracy, w których możesz udzielić pomocy.</h3>`) +
        h.banner(P.getReadyTop) +
        `<h1>Przygotuj się na pierwszą kreatywną misję 🚀</h1>
         <blockquote><p>Już za kilka minut wejdziesz do Creativia Studio i stworzysz swoją pierwszą animację — ożywisz własne imię! Sprawdź, czy wszystko jest gotowe na wygodny start.</p></blockquote>` +
        h.media(P.equipment, '<h3>⚙️ Sprawdź sprzęt</h3>' + h.ul(['dźwięk jest włączony i dobrze słyszysz zajęcia;','mikrofon działa;','kamera włącza się i pokazuje obraz.']), true) +
        `<h3 id="space-ready">✨ Przygotuj wygodne miejsce</h3>` +
        h.ul(['znajdź ciche miejsce, w którym nikt nie będzie Ci przeszkadzać;','postaw obok szklankę wody;','usiądź wygodnie i przygotuj się do tworzenia!']) +
        h.note('💡 Jak będą wyglądać zajęcia', '<p>Najpierw krótko popracujesz z nauczycielem. Potem będziesz samodzielnie przechodzić przez karty. Możesz poprosić nauczyciela o pomoc, jeśli czegoś nie rozumiesz lub coś Ci nie wychodzi.</p>') +
        h.banner(P.getReadyBottom) },

      { title: "Witaj w Creativia Studio! ✨", html:
        h.banner(P.welcomeTop) +
        `<h1>Witaj w Creativia Studio! ✨</h1>
         <blockquote><p>Dzisiaj stworzysz swój pierwszy cyfrowy projekt i ożywisz własne imię. Najpierw jednak upewnimy się, że dobrze się widzimy i słyszymy.</p></blockquote>` +
        h.media(P.equipment, '<h3>🎯 Twoje zadanie</h3>' + h.ol(['Sprawdź, czy widzisz i słyszysz nauczyciela.','Włącz mikrofon i kamerę.','Powiedz, jak masz na imię i ile masz lat.'])) +
        h.spoiler('Nie możesz znaleźć przycisku włączania mikrofonu lub kamery?', h.media(P.micHelp, h.ol(['Spójrz na dolny pasek okna zajęć.','Znajdź ikonę mikrofonu 🎙️ i ikonę kamery 🎥.','Kliknij odpowiednią ikonę, aby włączyć urządzenie.']))) +
        h.spoiler('Nie słyszysz nauczyciela? Co zrobić?', h.ol(['Sprawdź głośność na komputerze.','Upewnij się, że w ustawieniach wybrany jest właściwy głośnik.','Zawołaj nauczyciela ✋, aby zauważył problem.'])) +
        h.spoiler('Mikrofon się nie włącza?', h.ol(['Sprawdź, czy dostęp do mikrofonu jest dozwolony.','Kliknij strzałkę obok ikony mikrofonu i wybierz właściwe urządzenie.','Zawołaj nauczyciela ✋ i poczekaj na pomoc.'])) +
        h.spoiler('Kamera się nie włącza?', h.ol(['Sprawdź, czy dostęp do kamery jest dozwolony.','Zamknij inne programy, które mogą korzystać z kamery.','Jeśli kamera nadal nie działa, uczestnicz w zajęciach głosowo.'])) +
        h.banner(P.welcomeBottom) +
        h.tnotes(`<p><strong>Forma:</strong> Równoległe</p><p><strong>Czas:</strong> 1–2 minuty.</p><p><strong>Zadanie nauczyciela:</strong> stworzyć przyjazne rozpoczęcie lekcji i sprawdzić gotowość techniczną na podstawie widocznych działań.</p><p><strong>Co ma zrobić nauczyciel:</strong> włączyć mikrofon i kamerę, przywitać się oraz usłyszeć krótkie powitanie ucznia. To spotkanie 1:1 — bez czekania na swoją kolej w grupie.</p><p><strong>Na co zwrócić uwagę:</strong> w razie poważnych problemów technicznych skontaktuj się z pomocą techniczną.</p>`) },

      { title: "Poznajmy się! 👋", html:
        h.banner(P.capsuleTop) +
        `<h1>Poznajmy się! 👋</h1>
         <p class="sim-note">Uwaga do symulatora: treść tej karty nie jest tu odtworzona. Na swojej lekcji użyj tej karty, aby poznać ucznia, zanim zacznie pracować.</p>` },

      { title: "Jak będzie przebiegać lekcja? 🧭", html:
        h.banner(P.welcomeTop) +
        `<h1>Jak będzie przebiegać lekcja? 🧭</h1>
         <blockquote><p>Dzisiaj będziesz pracować samodzielnie, korzystając z kart. Nauczyciel jest obok: możesz poprosić go o pomoc, jeśli coś się nie otwiera, nie działa lub jest niezrozumiałe.</p></blockquote>` +
        h.media(P.catGif, '<h3>Kiedy poprosić nauczyciela o pomoc?</h3>' + h.ul(['gdy masz pytanie;','gdy nie możesz znaleźć potrzebnego przycisku lub ustawienia;','gdy strona się nie otwiera lub animacja zachowuje się dziwnie;','przed zapisaniem projektu — gdy nie masz pewności, czy wszystko jest gotowe.'])) +
        h.note('💡 Ważne', '<p>Jeśli nie udało się za pierwszym razem — to nie porażka. To sygnał, żeby spróbować jeszcze raz!</p>') +
        h.banner(P.welcomeBottom) +
        h.tnotes(`<p><strong>Format:</strong> Równoległe</p><p><strong>Czas:</strong> 1 minuta.</p><p><strong>Cel karty:</strong> wyjaśnić format równoległy i zmniejszyć obawy przed samodzielną pracą.</p><p><strong>Zadanie nauczyciela:</strong> Pokazać, jak uczeń może przywołać nauczyciela, i wyjaśnić, że główna część lekcji odbędzie się z wykorzystaniem kart.</p>`) },

      { title: "Co Twoje imię może powiedzieć o Tobie? ✨", html:
        `<h1>Co Twoje imię może powiedzieć o Tobie? ✨</h1>
         <blockquote><p>Aby lepiej opowiedzieć o sobie, najpierw napiszemy i ożywimy własne imię. Zobaczmy, jak wygląda przykład, i przeanalizujmy drogę do takiego efektu.</p></blockquote>
         <img class="center-img" src="${P.kodGif}" alt="">
         <h3>🎯 Twoje zadanie</h3>
         <p>Obejrzyj animację razem z nauczycielem i zauważ, jak została wykonana.</p>
         <p><strong>Jakie cechy zauważyłeś w animacji?</strong></p>
         <div class="quiz">
           <label><input type="checkbox"> Litery pojawiają się po kolei</label>
           <label><input type="checkbox"> Litery różnią się kolorem, kształtem lub szczegółami</label>
           <label><input type="checkbox"> Na końcu można przeczytać całe imię</label>
           <label><input type="checkbox"> Całe imię pojawia się od razu</label>
         </div>
         <blockquote><p>Po udzieleniu odpowiedzi kliknij przycisk „Prześlij”.</p></blockquote>
         <button class="submit" type="button">✔ Prześlij</button>
         <blockquote><p>Na przykład jedna litera może przypominać Twoją ulubioną grę, zwierzę, dyscyplinę sportową lub twórcze hobby.</p></blockquote>
         <h2>Plan naszej misji</h2>` +
        h.ol(['Otworzyć edytor i narysować pierwszą literę.','Dowiedzieć się, jak później dodać kolejną literę.','Złożyć całe imię z klatek.','Sprawdzić animację, zapisać GIF i pokazać go nauczycielowi.']) },

      { title: "Otwieramy pracownię animacji 🛠️", html:
        h.banner(P.workshopTop) +
        `<h1>Otwieramy pracownię animacji 🛠️</h1>
         <img class="center-img" src="${P.flipanim}" alt="Edytor FlipAnim">` +
        h.banner(P.workshopBottom) +
        h.tnotes(`<p><strong>Tryb:</strong> Równoległe (zakończenie wprowadzenia).</p><p><strong>Czas:</strong> 1 minuta.</p><p><strong>Cel karty:</strong> upewnić się, że serwis jest otwarty, i bezpiecznie przejść z uczniem do samodzielnej pracy.</p><p><strong>Zadanie nauczyciela:</strong> wysłać link, poczekać na potwierdzenie „widzę obszar do rysowania” i przypomnieć, jak przywołać nauczyciela. Potem uczeń pracuje samodzielnie według kart.</p><p><strong>Na co zwrócić uwagę:</strong> jeśli FlipAnim się nie otwiera — od razu przejdź do BrushNinja. Nie zaczynajcie wspólnie rysować całego projektu: dalej uczeń pracuje według kart.</p>`, 'tn-last') },

      { title: "Pierwsza litera — pierwsza wersja projektu 🖍️", html:
        h.banner(P.capsuleTop) +
        `<h1>Pierwsza litera — pierwsza wersja projektu 🖍️</h1>
         <blockquote><p>Wyobraź sobie, że jesteś odkrywcą nowego narzędzia twórczego. Najpierw spróbuj samodzielnie się z nim zapoznać — tutaj możesz popełniać błędy.</p></blockquote>` +
        h.media(P.flipanim, '<h3>🎯 Twoje zadanie</h3>' + h.ol(['Narysuj na obszarze do rysowania pierwszą literę swojego imienia.','Dodaj kolor lub jeden szczegół, który przypomina o twoich zainteresowaniach.'])) }
    ];

    /* Cards 8–17: only their titles appear in the simulator */
    const notUsed = "Uwaga do symulatora: ta karta nie jest jeszcze częścią bieżących scenariuszy.";
    ["Poznaj narzędzia do rysowania 🎨", "Przesuwaj, obracaj i zmieniaj rozmiar 🔄", "Jak sprawić, by druga litera pojawiła się później? 🤔",
     "Sekret animacji poklatkowej 🎞️", "Jeszcze jedna klatka — jeszcze jedna litera", "Ożyw pozostałe litery 🚀",
     "Sprawdź swoją animację ✅", "Zapisz i oddaj swoją animację 💾", "Jak działa twoja animacja? 🔍", "Pokaż projekt nauczycielowi 🎬"]
      .forEach(t => cards.push({ title: t, html: `<h1>${t}</h1><p class="sim-note">${notUsed}</p>` }));

    /* Card 18: the reflection card (used in decision 8) */
    cards.push({ title: "Co odkryłeś dzisiaj? ✨", html:
      `<h1>Co dzisiaj udało Ci się odkryć? ✨</h1>
       <h3 id="progress">Oceń swoją drogę</h3>
       <p><strong>Oceń swoje postępy!</strong></p>
       <div class="rate"><span class="on">😁 Udało mi się samodzielnie stworzyć projekt</span><span>🤫 Pomogły mi wskazówki w kartach</span><span>🥺 Wciąż potrzebuję ćwiczeń</span></div>
       <p>Świetnie! Na następnej lekcji spróbuj samodzielnie dodać animację do nowego projektu wideo.</p>
       <blockquote><p>Powiedz nauczycielowi jednym zdaniem: co podczas tworzenia animacji okazało się najbardziej interesujące lub zaskakujące?</p></blockquote>` });

    /* Card 19 */
    cards.push({ title: "Przygotuj się do pracy w Canva 🖼️", html: `<h1>Przygotuj się do pracy w programie Canva 🖼️</h1><p class="sim-note">${notUsed}</p>` });
    return cards;
  }
};
