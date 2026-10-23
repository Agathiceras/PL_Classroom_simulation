/* =====================================================================
   CLASSROOM SIMULATOR — ENGINE
   All the texts live in content/<lang>.js (window.SIM_CONTENT).
   Translators never need to open this file.
   ===================================================================== */
const C = window.SIM_CONTENT, U = C.ui;
const fmt = (s, o) => String(s).replace(/\{(\w+)\}/g, (m, k) => (k in o ? o[k] : m));
document.documentElement.lang = C.lang || 'en';
document.title = U.pageTitle;

/* =========================================================
   ASSETS
   ========================================================= */
const IMG = 'Pictures_students/';
// Audio language follows the content language: en → Audios/ENG/, it → Audios/ITA/, pl → Audios/POL/.
// Every language folder uses the SAME file names; a file missing in ITA/POL falls back to the English one.
const AUDIO_FOLDERS = { en:'ENG', it:'ITA', pl:'POL' };
const LANG = (C.lang || 'en').toLowerCase();
const AUDIO_EN = 'Audios/ENG/';
const AUDIO = 'Audios/' + (AUDIO_FOLDERS[LANG] || 'ENG') + '/';
// Shown on the final screen; the training asks for it (keep in sync with SIM_CODE in the training)
const COMPLETION_CODE = 'PL-SIM-4827';
const P = {
  sofia: IMG + 'girl.png',
  alexander: IMG + 'boy%202.png',
  valentina: IMG + 'girl%202.png',
  mateo: IMG + 'boy.png',
  getReadyTop: IMG + 'c2f3c92a-c4de-40c4-abfc-6efb1add6968.png',
  getReadyBottom: IMG + '2a35aafd-d169-4e99-a7cb-4658f3c788be.png',
  equipment: IMG + '9fb18454-c457-49e1-aca0-4acc7535e017.jpg',
  welcomeTop: IMG + '0183f2c0-5241-4e38-a786-28e7ea158c0c.png',
  welcomeBottom: IMG + '7f041875-ef1a-4755-b64d-c8b0bcb358f9.png',
  micHelp: 'https://mp.kodland.org/task_description_materials/4d1ea1fb-0c4c-4550-86e3-ca4c1b19212b.png',
  catGif: IMG + 'eb25118b-df20-4954-873f-d72af36305ec.gif',
  kodGif: IMG + 'b7d9588c-f5e5-4fa1-b8ce-79df34915afa.gif',
  capsuleTop: IMG + '2d1619ae-274d-4546-a4fe-4f6b956125d3.png',
  workshopTop: IMG + '7e332ccc-20cc-42fb-b622-e2f975e97ed9.png',
  workshopBottom: IMG + 'e28a4a9c-9045-4aea-ae32-c2d7fc3f0cfc.png',
  flipanim: IMG + 'c2188136-40bc-496d-97de-6dad78899624.png',
  video: 'https://mp.kodland.org/task_description_materials/5ba2b201-1ba4-4588-a21c-bf8b2a9a3690.mp4',
  sofiaProject: IMG + 'Sofia_Project.mp4',
  errorVid: IMG + 'Error_project.mp4',
  winVid: IMG + 'Win_project.mp4',
  notes: IMG + 'notes.png'
};

/* =========================================================
   ICONS
   ========================================================= */
const I = {
  back:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
  exit:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="10" height="18" rx="1.5" fill="#ff4d5e"/><path d="M14 12h7m-3-3 3 3-3 3" stroke="#ff4d5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  grid:'<svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>',
  cube:'<svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M12 2 3 6.5l9 4.5 9-4.5L12 2Z"/><path d="M3 8.2v9.3l8 4.3v-9.4L3 8.2Zm10 4.2v9.4l8-4.3V8.2l-8 4.2Z" opacity=".85"/></svg>',
  list:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M9 6h12M9 12h12M9 18h12"/><circle cx="4" cy="6" r="1" fill="#fff"/><circle cx="4" cy="12" r="1" fill="#fff"/><circle cx="4" cy="18" r="1" fill="#fff"/></svg>',
  left:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8cde0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
  right:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  micOff:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9aa0b5" stroke-width="2" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 12 4.9M12 18v3M3 3l18 18"/></svg>',
  chev:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  camOff:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9aa0b5" stroke-width="2" stroke-linecap="round"><path d="M15 10l5-3v10l-5-3M3 3l18 18"/><rect x="2" y="6" width="13" height="12" rx="2"/></svg>',
  pip:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><rect x="12" y="11" width="6" height="5" rx="1" fill="#fff"/></svg>',
  hand:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11V5a1.5 1.5 0 0 1 3 0v5M10 10V3.5a1.5 1.5 0 0 1 3 0V10M13 10V4.5a1.5 1.5 0 0 1 3 0V11M16 11V7a1.5 1.5 0 0 1 3 0v7a7 7 0 0 1-7 7h-.5a6.5 6.5 0 0 1-5-2.4L3.6 14.8a1.5 1.5 0 0 1 2.3-1.9L7 14"/></svg>',
  smile:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M8 14.5a5 5 0 0 0 8 0"/><circle cx="9" cy="10" r=".6" fill="#fff"/><circle cx="15" cy="10" r=".6" fill="#fff"/></svg>',
  laptop:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/></svg>',
  wb:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M14 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9"/><path d="M19 2v6M16 5h6"/></svg>',
  layers:'<svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="m12 2 10 5-10 5L2 7l10-5Z"/><path d="m2 12 10 5 10-5M2 17l10 5 10-5" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/></svg>',
  users:'<svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><circle cx="9" cy="8" r="4"/><path d="M2 20a7 7 0 0 1 14 0Z"/><path d="M16 4a4 4 0 0 1 0 8M18 14a6 6 0 0 1 4 6h-3" fill="none" stroke="#fff" stroke-width="2"/></svg>',
  chat:'<svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-5 4V5a1 1 0 0 1 1-1Z"/><path d="M8 9h8M8 12h5" stroke="#3c4360" stroke-width="2" stroke-linecap="round"/></svg>',
  doc:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7d84a0" stroke-width="2"><path d="M14 3H6v18h12V7l-4-4Z"/><path d="M9 13h6M9 17h6"/></svg>',
  gear:'<svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M19.4 13a7.6 7.6 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a7.4 7.4 0 0 0-1.7-1L15 3h-4l-.3 2.9a7.4 7.4 0 0 0-1.7 1l-2.5-1-2 3.5L6.6 11a7.6 7.6 0 0 0 0 2l-2.1 1.6 2 3.5 2.5-1a7.4 7.4 0 0 0 1.7 1L11 21h4l.3-2.9a7.4 7.4 0 0 0 1.7-1l2.5 1 2-3.5L19.4 13ZM13 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/></svg>',
  atom:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6"><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.5" fill="#fff"/></svg>',
  sun:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7f87a8" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7f87a8" stroke-width="2"><path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5Z"/></svg>',
  check:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5 9-10"/></svg>',
  link:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5b8cff" stroke-width="2.4" stroke-linecap="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>'
};
const BARS = '<span class="bars"><i></i><i></i><i></i><i></i></span>';

/* =========================================================
   LESSON CARDS — built from the content file with these helpers
   ========================================================= */
const H = {
  P,
  tnotes: (html, id) => `<div class="tnotes"${id ? ` id="${id}"` : ''}><div class="tn-label">${U.teacherNotes}</div>${html}</div>`,
  spoiler: (t, html) => `<details class="spoiler"><summary>${t}</summary><div class="sp-body">${html}</div></details>`,
  note: (t, html) => `<div class="note"><div class="note-t">${t}</div>${html}</div>`,
  media: (src, html, narrow) => `<div class="media${narrow ? ' narrow' : ''}"><div class="media-img"><img src="${src}" alt=""></div><div class="media-c">${html}</div></div>`,
  banner: src => `<img class="banner" src="${src}" alt="">`,
  ul: items => `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`,
  ol: items => `<ol>${items.map(i => `<li>${i}</li>`).join('')}</ol>`
};
const ACTIVITIES = C.lesson(H);

/* =========================================================
   STATE
   ========================================================= */
let S;
function freshState(){
  return {
    phase:'intro',          // intro | guide | game | done
    view:'console',         // console | room
    room:null,
    dropdown:false,
    clock:-1,               // minutes after 17:00 (-1 = 16:59)
    lives:3, diamonds:0,
    step:0,
    speaking:null,          // room index currently speaking
    following:false,
    busy:false, tried:[],
    await:null,             // pending "click the real control" task in the game
    introDone:true,
    msgs:{},                // chat notifications per room: { text, time }
    share:null,             // screen share in the Classroom view: { room, src }
    notesTab:false, notesSeen:false,
    rooms:[
      { name:'Sofia',     photo:P.sofia,     joined:false, mode:'classroom', activity:null, lead:false, scrollTo:null },
      { name:'Alexander', photo:P.alexander, joined:false, mode:'classroom', activity:null, lead:false, scrollTo:null },
      { name:'Mateo',     photo:P.mateo,     joined:false, mode:'classroom', activity:null, lead:false, scrollTo:null },
      { name:'Valentina', photo:P.valentina, joined:false, mode:'classroom', activity:null, lead:false, scrollTo:null }
    ]
  };
}
const $ = s => document.querySelector(s);
const fmtClock = m => m < 0 ? '16:59' : `${17 + Math.floor(m / 60)}:${String(m % 60).padStart(2,'0')}`;
const initials = n => n.slice(0,2).toUpperCase();
const curRoom = () => S.rooms[S.room];

/* =========================================================
   CLASSROOM RENDERING
   ========================================================= */
function teacherTile(extraClass=''){
  return `<div class="vt teacher ${extraClass}"><div class="av">T</div><span class="lbl">${U.tutorYou}</span></div>`;
}
function studentTile(i){
  const r = S.rooms[i];
  const follow = (S.following && S.room === i && r.lead) ? `<span class="follow-badge">${I.link} ${U.following}</span>` : '';
  const hand = r.hand ? '<span class="hand-ico">✋</span>' : '';
  return `<div class="vt student ${S.speaking === i ? 'speaking' : ''}" data-room="${i}">${follow}<img src="${r.photo}" alt="${r.name}"><span class="lbl">${r.name} ${BARS}${hand}</span><button class="dots" data-action="deco">⋯</button></div>`;
}
function chatPop(i){
  const m = S.msgs[i]; if (!m) return '';
  const n = S.rooms[i].name;
  return `<div class="chat-pop"><div class="cp-head"><span class="cp-av">${initials(n)}</span><div><b>${n}</b><small>${m.time}</small></div><button class="cp-x" data-action="closeMsg" data-arg="${i}">×</button></div><p>${m.text}</p></div>`;
}
function roomBox(i){
  const r = S.rooms[i];
  const hand = r.joined && r.hand ? '<span class="hand-ico">✋</span>' : '';
  const inner = r.joined
    ? `<div class="minis">
         <div class="mini"><div class="av">T</div><span class="lbl">${U.tutorYou}</span></div>
         <div class="mini"><img src="${r.photo}" alt=""><span class="lbl">${r.name} ${BARS}${hand}</span></div>
       </div>`
    : `<div class="av">T</div><span class="lbl">${U.tutorYou}</span>`;
  return `<div class="room-box ${r.joined ? 'joined' : ''} ${hand ? 'hand' : ''}" id="room-${i}" data-action="enterRoom" data-arg="${i}">
            <div class="room-inner"><span class="tag">${r.name}${hand}</span>${r.joined ? '<div style="height:100%;width:100%;padding-top:0">' + inner + '</div>' : inner}</div>
            ${chatPop(i)}
          </div>`;
}
function shareStage(){
  const sh = S.share;
  // No controls and no pointer events: it should look like a live screen share, not a video player
  const inner = `<video id="shareVid" data-src="${sh.src}" src="${sh.src}" muted playsinline preload="auto" ${sh.loop ? 'loop autoplay' : ''}
    disablepictureinpicture controlslist="nodownload nofullscreen noremoteplayback" oncontextmenu="return false"></video>`;
  return `<div class="stage tasks"><div class="share"><button class="share-close" data-action="deco">${U.close}</button>${inner}</div>
    <div class="right-col">${teacherTile()}${studentTile(S.room)}</div></div>`;
}
function header(){
  const online = S.rooms.filter(r => r.joined).length;
  const hearts = [0,1,2].map(k => `<span class="heart ${k >= S.lives ? 'lost' : ''}" id="heart-${k}">❤️</span>`).join('');
  const mode = S.phase === 'guide' ? `<span class="hud-chip mode">${U.modeGuide}</span>` : S.phase === 'game' || S.phase === 'done' ? `<span class="hud-chip mode">${U.modeGame}</span>` : '';
  return `<header class="cr-head">
    ${S.view === 'room' ? `<button class="back" data-action="back">${I.back}</button>` : ''}
    <b>${U.groupName}</b><span class="muted">${fmt(U.online, { n:online })}</span>
    <div class="hud">${mode}<span class="hud-chip">🕐 ${fmtClock(S.clock)}</span><span class="hud-chip">${hearts}</span><span class="hud-chip" id="dia">💎 ${S.diamonds}</span></div>
    ${S.phase !== 'intro' ? `<button class="hdr-btn" data-action="openStructure">${U.structureBtn}</button>` : ''}
    <button class="leave" data-action="deco">${I.exit} ${U.leave}</button>
  </header>`;
}
function consoleView(){
  return `<main class="console">${[0,1,2,3].map(roomBox).join('')}</main>`;
}
function toolbar(r){
  const tasks = r.mode === 'tasks';
  return `<div class="tb">
    <div class="tb-l">
      <button class="tb-btn ${!tasks ? 'on' : ''}" data-action="classroom">${I.grid} ${U.classroom}</button>
      <div class="tb-group ${tasks ? 'on' : ''}">
        <button class="tb-btn" id="btnTasks" data-action="openTasks">${I.cube} ${U.assignments}</button>
        <button class="tb-ico" id="btnList" data-action="toggleDropdown">${I.list}</button>
      </div>
      ${tasks ? `<div class="nav"><button data-action="prevTask" data-tip="${U.prevTask}">${I.left}</button><button id="btnNext" data-action="nextTask" data-tip="${U.nextTask}">${I.right}</button></div>
      <div class="lead ${r.lead ? 'on' : ''}" id="leadToggle" data-action="toggleLead" data-tip="${U.leadGroup}">${U.leadGroup} <i class="sw"></i></div>` : ''}
    </div>
    <div class="tb-c">
      <div class="pair"><button class="ib" data-action="deco">${I.micOff}</button><button class="ib" data-action="deco">${I.chev}</button></div>
      <div class="pair"><button class="ib" data-action="deco">${I.camOff}</button><button class="ib" data-action="deco">${I.chev}</button></div>
      <button class="ib" data-action="deco">${I.pip}</button>
      <button class="ib" data-action="deco">${I.hand}</button>
      <button class="ib" data-action="deco">${I.smile}</button>
      <button class="ib" data-action="deco">${I.laptop}</button>
      <button class="ib" data-action="deco">${I.wb}</button>
      <button class="ib" data-action="deco">${I.layers}</button>
      <button class="ib cnt" data-action="deco">${I.users} 2</button>
      <button class="ib" data-action="deco">${I.chat}</button>
      ${tasks ? `<button class="ib" data-action="deco">${I.doc}</button>` : ''}
      <button class="ib" data-action="deco">${I.gear}</button>
    </div>
    ${!tasks ? `<button class="end" data-action="deco">${I.exit} ${U.endSession}</button>` : ''}
  </div>`;
}
function dropdown(r){
  if (!S.dropdown) return '';
  return `<div class="dd"><div class="dd-scroll" id="ddScroll">${ACTIVITIES.map((a,i) =>
    `<div class="dd-item ${i === r.activity ? 'sel' : ''}" id="dd-${i}" data-action="pickActivity" data-arg="${i}"><span>${a.title}</span>${i === r.activity ? I.check : ''}</div>`).join('')}</div></div>`;
}
function roomView(){
  const r = curRoom();
  const others = [0,1,2,3].filter(i => i !== S.room).map(roomBox).join('');
  let stage;
  if (S.share && S.share.room === S.room && r.mode === 'classroom'){
    stage = shareStage();
  } else if (r.mode === 'tasks' && r.activity !== null){
    const a = ACTIVITIES[r.activity];
    stage = `<div class="stage tasks">
      <div class="kl">
        <div class="kl-head"><span class="kl-logo">kodland</span>
          <div class="kl-right"><span class="theme">${I.sun}<i class="sw"></i>${I.moon}</span><span class="lang">${U.langChip}</span><span class="kl-user">${U.tutor} <i class="kl-av"></i></span></div></div>
        <div class="kl-body"><div class="kl-rail"><span class="atom">${I.atom}</span></div>
          <div class="kl-main"><div class="kl-title">${a.title}</div>
            <div class="task-scroll" id="taskScroll"><div class="task">${a.html}</div></div></div></div>
      </div>
      <div class="right-col">${teacherTile()}${studentTile(S.room)}</div>
    </div>`;
  } else {
    stage = `<div class="stage">${teacherTile()}${studentTile(S.room)}</div>`;
  }
  return `<main class="room-layout">
    <aside class="side">${others}</aside>
    <section class="frame">
      <span class="tag frame-tag">${r.name} <i class="dot"></i></span>
      ${stage}
      ${dropdown(r)}
      ${toolbar(r)}
    </section>
  </main>`;
}

let lastKey = null;
function render(){
  const sc = $('#taskScroll'), dd = $('#ddScroll');
  const prevTop = sc ? sc.scrollTop : 0, prevDD = dd ? dd.scrollTop : 0;
  // Keep the shared-screen video across re-renders so it doesn't restart or lose its last frame
  const oldVid = $('#shareVid'), vidWasPlaying = oldVid && !oldVid.paused && !oldVid.ended;
  const key = S.view === 'room' ? `${S.room}-${curRoom().activity}-${curRoom().mode}` : 'console';
  const notesTab = S.notesTab && S.phase === 'game' ? `<button class="notes-tab ${S.notesSeen ? 'seen' : ''}" data-action="openNotes">${U.myNotes}</button>` : '';
  $('#app').innerHTML = header() + (S.view === 'console' ? consoleView() : roomView()) + notesTab;
  const sc2 = $('#taskScroll');
  if (sc2){
    const r = curRoom();
    sc2.style.scrollBehavior = 'auto';
    if (r.scrollTo){ const el = document.getElementById(r.scrollTo); if (el) sc2.scrollTop = el.offsetTop - 20; r.scrollTo = null; }
    else if (key === lastKey) sc2.scrollTop = prevTop;
    sc2.style.scrollBehavior = '';
  }
  const dd2 = $('#ddScroll'); if (dd2) dd2.scrollTop = prevDD;
  const ph = $('#shareVid');
  if (oldVid && ph && ph.dataset.src === oldVid.dataset.src){
    ph.replaceWith(oldVid);
    if (vidWasPlaying) oldVid.play().catch(() => {});
  }
  lastKey = key;
  document.body.classList.toggle('qp-room', S.view === 'room');
  requestAnimationFrame(placeOverlays);
  setTimeout(placeOverlays, 400); // re-check once images/fonts have settled
}

/* =========================================================
   CLASSROOM ACTIONS (real behaviour of the platform)
   ========================================================= */
function perform(action, arg){
  const r = S.room !== null ? curRoom() : null;
  switch(action){
    case 'enterRoom':
      if (!S.rooms[arg].joined) return false;
      S.view = 'room'; S.room = +arg; S.dropdown = false; break;
    case 'back': S.view = 'console'; S.dropdown = false; break;
    case 'classroom': r.mode = 'classroom'; S.dropdown = false; break;
    case 'openTasks':
      if (r.activity === null) S.dropdown = !S.dropdown;
      else { r.mode = 'tasks'; S.dropdown = false; }
      break;
    case 'toggleDropdown': S.dropdown = !S.dropdown; break;
    case 'pickActivity': r.activity = +arg; r.mode = 'tasks'; S.dropdown = false; break;
    case 'toggleLead': r.lead = !r.lead; break;
    case 'nextTask': if (r.activity < ACTIVITIES.length - 1) r.activity++; break;
    case 'prevTask': if (r.activity > 0) r.activity--; break;
    default: return false;
  }
  render();
  return true;
}

document.addEventListener('click', e => {
  const el = e.target.closest('[data-action]');
  if (!el || !$('#app').contains(el)) return;
  const action = el.dataset.action, arg = el.dataset.arg;
  const key = arg !== undefined ? `${action}:${arg}` : action;

  // Always available: dismissing a chat notification and opening the tutor's notes
  if (action === 'closeMsg'){ e.stopPropagation(); delete S.msgs[arg]; render(); return; }
  if (action === 'openNotes'){ openNotes(); return; }
  if (action === 'openStructure'){ openStructure(); return; }

  if (S.phase === 'guide'){
    const step = GUIDE[S.step];
    if (step.accept && step.accept.includes(key)){ perform(action, arg); nextGuide(); }
    else nudge();
    return;
  }
  if (S.phase === 'game'){
    gameClick(action, arg, key);
    return;
  }
});

/* =========================================================
   GUIDED TOUR — structure here, texts (title, text) from C.guide (same order)
   ========================================================= */
function join(i){
  S.rooms[i].joined = true;
  toast(fmt(U.joined, { name:S.rooms[i].name }));
}
/* Step fields: next = a Next button (no click needed) · target/accept = the player must click that control
   read = mandatory reading: Next unlocks only once the player has scrolled to the end of `scope`
          (default: the whole card) and opened every collapsible section inside it
   side = the card docks on the left so the content stays fully visible · wide = a wider, centred card */
const GUIDE = [
  { next:true, clock:-1 },
  { clock:0, enter:() => join(0), target:'#room-0', accept:['enterRoom:0'] },
  { clock:1, next:true },
  { target:'.tb-group', accept:['openTasks','toggleDropdown'] },
  { target:'#dd-0', accept:['pickActivity:0'] },
  { next:true, wide:true },
  { clock:2, target:'#taskScroll', side:true, read:{ scope:'#taskScroll .tnotes' } },
  { target:'#leadToggle', accept:['toggleLead'] },
  { clock:3, target:'#taskScroll', side:true, read:{} },
  { target:'#btnNext', accept:['nextTask'] },
  { clock:4, target:'#taskScroll', side:true, read:{} },
  { target:'#btnNext', accept:['nextTask'] },
  { clock:5, target:'#btnNext', accept:['nextTask'] },
  { clock:6, target:'#taskScroll', side:true, read:{} },
  { target:'#btnNext', accept:['nextTask'] },
  // Skips the example card: jumps straight to "Opening the animation workshop", starting from the top
  { clock:7, target:'#taskScroll', side:true, read:{ scope:'#tn-last' }, enter:() => { curRoom().activity = 5; } },
  { clock:8, enter:() => join(1), target:'#room-1', accept:['enterRoom:1'], last:true }
].map((st, i) => Object.assign({}, C.guide[i], st));

/* Step 0 of the guided tour: enter the class that is about to start, from Back Office (the BO simulator, in "enter" mode).
   Either of the two ways works; then the tour begins. A language without C.enter skips the step. */
const ENTER_KEY = 'pl-sim-entered';
function enterClassStep(then){
  const E = C.enter;
  if (!E){ then(); return; }
  let seen = false; try { seen = localStorage.getItem(ENTER_KEY) === '1'; } catch(e){}
  const box = document.createElement('div');
  box.id = 'enterClass';
  box.innerHTML = `<div class="ec-head"><span class="ec-kicker">${E.kicker}</span><h2>${E.title}</h2><p>${E.text}</p>
      <div class="ec-ways"><div><b>1 · ${E.way1Title}</b><span>${E.way1}</span></div><div><b>2 · ${E.way2Title}</b><span>${E.way2}</span></div></div>
      <div class="ec-foot"><span class="ec-msg">${E.waiting}</span>${seen ? `<button class="btn-ghost" id="ecSkip">${E.skip}</button>` : ''}</div></div>
    <iframe class="ec-frame" title="Back Office" src="BO_enter/enter_class.html?mode=enter&lang=${encodeURIComponent(LANG)}"></iframe>`;
  document.body.appendChild(box);
  let finished = false;
  const finish = () => {
    if (finished) return; finished = true;
    window.removeEventListener('message', onMsg);
    try { localStorage.setItem(ENTER_KEY, '1'); } catch(e){}
    const msg = box.querySelector('.ec-msg'); msg.textContent = E.done; msg.classList.add('ok');
    setTimeout(() => { box.remove(); then(); }, 1600);
  };
  const onMsg = e => { if (e.data && e.data.type === 'enter-class') finish(); };
  window.addEventListener('message', onMsg);
  const sk = box.querySelector('#ecSkip'); if (sk) sk.onclick = () => { finished = true; window.removeEventListener('message', onMsg); box.remove(); then(); };
}
function startGuide(){
  $('#intro').style.display = 'none';
  enterClassStep(() => {
    S.phase = 'guide'; S.step = 0;
    enterStep();
  });
}
function enterStep(){
  const st = GUIDE[S.step];
  S.readEnd = false;
  if (st.clock !== undefined) S.clock = st.clock;
  if (st.enter) st.enter();
  if (st.scrollTo && S.room !== null) curRoom().scrollTo = st.scrollTo;
  render();
  if (st.scrollTo){ const el = document.getElementById(st.scrollTo), sc = $('#taskScroll'); if (el && sc){ sc.style.scrollBehavior='auto'; sc.scrollTop = el.offsetTop - 20; sc.style.scrollBehavior=''; } }
}
function nextGuide(){
  const st = GUIDE[S.step];
  if (st.last){ finishGuide(); return; }
  S.step++;
  enterStep();
}
// Mandatory reading: has the player opened every section and reached the end of the content?
function readProgress(cfg){
  const sc = $('#taskScroll');
  if (!sc) return { done:true, total:0, opened:0, end:true };
  const scope = cfg.scope ? document.querySelector(cfg.scope) : sc;
  // Opening sections is required only where a scope is given (the Teacher notes); elsewhere, scrolling to the end is enough
  const sections = scope && (cfg.scope || cfg.sections) ? [...scope.querySelectorAll('details')] : [];
  const opened = sections.filter(d => d.dataset.seen).length;
  if (!S.readEnd && scope){
    const reached = cfg.scope
      ? scope.getBoundingClientRect().bottom <= sc.getBoundingClientRect().bottom + 8
      : sc.scrollTop + sc.clientHeight >= sc.scrollHeight - 16;
    if (reached) S.readEnd = true;   // once reached, scrolling back up doesn't undo it
  }
  return { total:sections.length, opened, end:S.readEnd, done:S.readEnd && opened === sections.length };
}
document.addEventListener('toggle', e => {
  if (e.target.tagName === 'DETAILS' && e.target.open){ e.target.dataset.seen = '1'; if (S.phase === 'guide') renderCoach(); }
}, true);

function nudge(){
  const c = $('#coach');
  c.classList.remove('shake'); void c.offsetWidth; c.classList.add('shake');
}

function renderCoach(){
  const coach = $('#coach'), spot = $('#spot');
  if (S.phase !== 'guide'){
    coach.style.display = 'none';
    const h = S.phase === 'game' && S.await && S.await.showHint && S.await.hint ? document.querySelector(S.await.hint) : null;
    if (h){ const r = h.getBoundingClientRect(), pad = 6; Object.assign(spot.style, { display:'block', left:(r.left-pad)+'px', top:(r.top-pad)+'px', width:(r.width+pad*2)+'px', height:(r.height+pad*2)+'px' }); }
    else spot.style.display = 'none';
    return;
  }
  const st = GUIDE[S.step];
  const rd = st.read ? readProgress(st.read) : null;
  let foot;
  if (rd){
    const items = [];
    if (rd.total) items.push(`<li class="${rd.opened === rd.total ? 'ok' : ''}">${fmt(U.coachOpenAll, { o:rd.opened, t:rd.total })}</li>`);
    items.push(`<li class="${rd.end ? 'ok' : ''}">${st.read.scope ? U.coachScrollNotes : U.coachScrollCard}</li>`);
    foot = `<ul class="c-check">${items.join('')}</ul><div class="c-foot"><span></span><button class="btn-p" id="coachNext" ${rd.done ? '' : 'disabled'}>${U.coachNext}</button></div>`;
  } else if (st.next){
    foot = `<div class="c-foot"><span></span><button class="btn-p" id="coachNext">${U.coachNext}</button></div>`;
  } else {
    foot = `<div class="c-foot"><span class="c-hint">${U.coachClick}</span><span></span></div>`;
  }
  coach.className = (st.side ? 'side ' : '') + (st.wide ? 'wide' : '');
  coach.innerHTML = `<div class="c-step">${fmt(U.coachStep, { n:S.step + 1, total:GUIDE.length })}</div><h4>${st.title}</h4><div class="c-text">${st.text}</div>${foot}`;
  coach.style.display = 'block';
  const btn = $('#coachNext'); if (btn) btn.onclick = () => { if (!btn.disabled) nextGuide(); };
  if (st.side){
    // Docked over the sidebar so the card being read stays fully visible
    const t = st.target ? document.querySelector(st.target) : null;
    if (t){ const r = t.getBoundingClientRect(), pad = 6; Object.assign(spot.style, { display:'block', left:(r.left-pad)+'px', top:(r.top-pad)+'px', width:(r.width+pad*2)+'px', height:(r.height+pad*2)+'px' }); }
    coach.style.left = '12px'; coach.style.top = '66px';
    return;
  }

  const t = st.target ? document.querySelector(st.target) : null;
  const vw = innerWidth, vh = innerHeight, m = 16, pad = 6;
  let r = null;
  if (t){
    r = t.getBoundingClientRect();
    // keep spotlight inside the scroll container when the target is inside it
    const sc = t.closest('.task-scroll');
    if (sc && sc !== t){
      const b = sc.getBoundingClientRect();
      r = { left:r.left, right:r.right, top:Math.max(r.top,b.top), bottom:Math.min(r.bottom,b.bottom), width:r.width };
      r.height = Math.max(0, r.bottom - r.top);
    }
    Object.assign(spot.style, { display:'block', left:(r.left-pad)+'px', top:(r.top-pad)+'px', width:(r.width+pad*2)+'px', height:(r.height+pad*2)+'px' });
  } else spot.style.display = 'none';

  const cw = coach.offsetWidth, ch = coach.offsetHeight;
  let x, y;
  const fits = (x,y) => x >= 8 && y >= 64 && x + cw <= vw - 8 && y + ch <= vh - 8;
  const clampX = x => Math.min(Math.max(8, x), vw - cw - 8);
  const clampY = y => Math.min(Math.max(64, y), vh - ch - 8);
  if (!r){ x = (vw - cw) / 2; y = (vh - ch) / 2; }
  else {
    const cands = [
      [r.right + m + pad, clampY(r.top + r.height/2 - ch/2)],
      [r.left - m - pad - cw, clampY(r.top + r.height/2 - ch/2)],
      [clampX(r.left + r.width/2 - cw/2), r.top - m - pad - ch],
      [clampX(r.left + r.width/2 - cw/2), r.bottom + m + pad]
    ];
    const ok = cands.find(c => fits(c[0], c[1]));
    if (ok){ [x, y] = ok; } else { x = vw - cw - 20; y = 76; }
  }
  coach.style.left = x + 'px'; coach.style.top = y + 'px';
}

// Alexander's room as the tutor finds it: he's already on the first activity, Lead the group is OFF
function setupAlexander(){
  const a = S.rooms[1];
  a.mode = 'tasks'; a.activity = 0; a.lead = false; a.scrollTo = 'space-ready';
}

// The decision game unlocks once the guided tour has been completed (remembered in this browser)
const TOUR_KEY = 'crsim_tour_done_v1';
function tourDone(){ try { return localStorage.getItem(TOUR_KEY) === '1'; } catch(e){ return tourDoneMem; } }
let tourDoneMem = false;
function setTourDone(){ tourDoneMem = true; try { localStorage.setItem(TOUR_KEY, '1'); } catch(e){} }

function finishGuide(){
  S.phase = 'done';
  qIndex = 0;
  setTourDone();
  setupAlexander();
  render();
  modal(`<div class="m-card info">
    <div class="m-icon">🎓</div>
    <h2>${U.tourDoneTitle}</h2>
    <p>${U.tourDoneText}</p>
    <div class="btns"><button class="btn-p" id="mMenu">${U.backToMenu}</button><button class="btn-y" id="mGo">${U.startGameBtn}</button></div></div>`);
  $('#mMenu').onclick = restart;
  $('#mGo').onclick = () => { closeModal(); S.phase = 'game'; beginDecisions(); };
}

/* Starts the game straight from the menu, without the guided tour.
   The lesson is set up as the tour leaves it: Sofia working on her own, Alexander just arrived (17:08). */
function startGame(){
  closeModal(); caption(null); hideTask(); hideQP();
  $('#intro').style.display = 'none';
  qIndex = 0;
  S = freshState();
  S.phase = 'game';
  S.clock = 8;
  const sofia = S.rooms[0];
  sofia.joined = true; sofia.mode = 'tasks'; sofia.activity = 5; sofia.lead = true;
  S.rooms[1].joined = true;
  setupAlexander();
  S.view = 'room'; S.room = 0;
  render();
  toast(fmt(U.joined, { name:S.rooms[1].name }));
  awaitClick({ text:U.gameStartTask, accept:['enterRoom:1'], free:['back'], hint:'#room-1', miss:U.gameStartMiss, onDone: beginDecisions });
}

function beginDecisions(){
  render();
  modal(`<div class="m-card info">
    <div class="m-icon">🎮</div>
    <h2>${U.gameIntroTitle}</h2>
    <p>${U.gameIntroP1}</p>
    <p>${U.gameIntroP2}</p>
    <div class="m-lives">${'❤️'.repeat(S.lives)}</div>
    <div class="btns"><button class="btn-y" id="mGo">${U.letsGo}</button></div></div>`);
  $('#mGo').onclick = () => { closeModal(); runQuestion(); };
}

/* ---------- "Do it in Classroom" tasks: the player must click the real control ---------- */
function awaitClick(cfg){
  S.await = Object.assign({ misses:0, showHint:false, free:[] }, cfg);
  showTask(cfg.text, cfg.back);
}
function showTask(html, back){
  const t = $('#task');
  t.innerHTML = `<span class="t-ico">👆</span><span><b>${U.yourMove}</b> ${html}</span>${back ? `<button class="t-back" id="tBack">${U.backToOptions}</button>` : ''}`;
  t.style.display = 'flex';
  const b = $('#tBack'); if (b) b.onclick = () => { S.await = null; hideTask(); placeOverlays(); showQuestion(); };
}
function hideTask(){ $('#task').style.display = 'none'; }

/* =========================================================
   DECISION GAME
   Structure here (setup, option kinds, actions, audio); texts from C.questions (same order).
   Option kinds:  say  = the tutor says a line (optionally the student answers with audio)
                  pick = a decision, no line
                  do   = the tutor must click the real control (action / hint / prompt / miss)
   ========================================================= */
function clearWorld(){
  S.rooms.forEach(r => { r.hand = false; });
  S.msgs = {}; S.share = null; S.notesTab = false;
}
function at(min){ S.clock = min; }
function inRoom(i, cfg){ S.view = 'room'; S.room = i; S.dropdown = false; Object.assign(S.rooms[i], cfg || {}); }
function atConsole(){ S.view = 'console'; S.room = null; S.dropdown = false; }
function leave(i){ S.rooms[i].joined = false; S.rooms[i].hand = false; }
const msgOf = n => C.questions[n].msg;

const Q_STRUCT = [
  /* 1 — Lead the group */
  { room:1, present:[0,1],
    options:[ { kind:'say', audio:'Alexander_1_wrong.mp3' },
              { kind:'do', correct:true, action:'toggleLead', hint:'#leadToggle' },
              { kind:'say', audio:'Alexander_2_wrong.mp3' } ] },
  /* 2 — Closing the introduction */
  { room:1, present:[0,1,2],
    setup(){ clearWorld(); at(17); S.following = true;
      inRoom(1, { mode:'tasks', activity:5, lead:true, scrollTo:'tn-last' });
      S.rooms[0].hand = true; S.rooms[2].joined = true; },
    options:[ { kind:'say' }, { kind:'say', correct:true }, { kind:'say' } ] },
  /* 3 — Raised hand vs onboarding */
  { present:[0,1,2],
    setup(){ clearWorld(); at(18); atConsole(); S.rooms[0].hand = true; S.rooms[2].joined = true; },
    options:[ { kind:'pick', action:'enterRoom:0' },
              { kind:'do', correct:true, action:'enterRoom:2', hint:'#room-2' } ] },
  /* 4 — A student arrives early */
  { room:2, present:[0,1,2,3],
    setup(){ clearWorld(); at(22); S.following = true; S.rooms[0].hand = true;
      inRoom(2, { mode:'tasks', activity:3, lead:true }); S.rooms[3].joined = true;
      S.msgs[3] = { text:msgOf(3), time:'17:22' }; },
    options:[ { kind:'pick', correct:true }, { kind:'pick', action:'enterRoom:3' }, { kind:'say' } ] },
  /* 5 — Two spare minutes */
  { present:[0,1,2,3],
    setup(){ clearWorld(); at(28); atConsole(); S.rooms[0].hand = true; S.msgs[0] = { text:msgOf(4), time:'17:28' }; },
    options:[ { kind:'pick', action:'enterRoom:3' }, { kind:'pick' }, { kind:'pick', correct:true, action:'enterRoom:0' } ] },
  /* 6 — Feedback on Sofia's project */
  { room:0, present:[0,1,2,3],
    setup(){ clearWorld(); at(28); inRoom(0, { mode:'classroom' }); S.share = { room:0, src:P.sofiaProject, loop:true }; },
    options:[ { kind:'say', voice:'Tutor_D6_A_v2.mp3' }, { kind:'say', correct:true, voice:'Tutor_D6_B_v2.mp3' }, { kind:'say', voice:'Tutor_D6_C_v2.mp3' } ] },
  /* 7 — Two raised hands at 17:50 (check the notes) */
  { requireNotes:true, present:[0,1,2,3],
    setup(){ clearWorld(); at(50); atConsole(); S.rooms[0].hand = true; S.rooms[2].hand = true; S.notesTab = true; S.notesSeen = false; },
    options:[ { kind:'pick', action:'enterRoom:2' }, { kind:'do', correct:true, action:'enterRoom:0', hint:'#room-0' }, { kind:'pick' } ] },
  /* 8 — Alexander's reflection */
  { room:1, present:[1,2,3],
    setup(){ clearWorld(); at(60); S.following = true; leave(0); inRoom(1, { mode:'tasks', activity:17, lead:true, scrollTo:'progress' }); },
    intro:{ run(done){ speak(1, 'Alexander_reflection.mp3', C.questions[7].intro.transcript, done); } },
    options:[ { kind:'say', voice:'Tutor_D8_A_v2.mp3' }, { kind:'say', correct:true }, { kind:'say', voice:'Tutor_D8_C_v2.mp3' } ] },
  /* 9 — One spare minute and a technical problem */
  { present:[2,3], preload:[ 'errorVid' ],
    setup(){ clearWorld(); at(67); atConsole(); leave(0); leave(1); S.rooms[3].hand = true; S.msgs[3] = { text:msgOf(8), time:'18:07' }; },
    options:[ { kind:'pick', action:'enterRoom:2' }, { kind:'pick' }, { kind:'do', correct:true, action:'enterRoom:3', hint:'#room-3' } ] },
  /* 10 — Valentina's screen */
  { room:3, present:[2,3], preload:[ 'winVid' ],
    setup(){ clearWorld(); at(67); leave(0); leave(1); inRoom(3, { mode:'classroom' }); S.share = { room:3, src:P.errorVid }; },
    intro:{ run(done){
      let pending = 2; const fin = () => { if (--pending === 0) done(); };
      playShare(P.errorVid, () => speak(3, 'Valentina_wrong.mp3', null, fin), fin); } },
    options:[ { kind:'say' },
              { kind:'say', correct:true,
                // Valentina fixes the V on screen first, then thanks the tutor once the video has finished
                post(done){ playShare(P.winVid, null, () => speak(3, 'Valentina_corrected.mp3', null, done)); } },
              { kind:'say' } ] }
];
// Merge structure + texts (texts: who, q, recap, events, intro text/buttons, option label/say/why/prompt/miss)
const QUESTIONS = Q_STRUCT.map((s, i) => {
  const t = C.questions[i];
  return Object.assign({}, t, s, {
    intro: s.intro ? Object.assign({}, t.intro, s.intro) : undefined,
    recap: t.recap ? { kicker:t.recap.kicker, title:t.recap.title, sub:t.recap.sub, now:t.recap.now, steps:t.recap.steps.map(x => ({ time:x[0], text:x[1] })) } : undefined,
    options: s.options.map((o, k) => Object.assign({}, t.options[k], o))
  });
});
let qIndex = 0;
const LIFE_COST = 3;   // diamonds needed to buy a life when the player runs out

/* ---------- Media helpers ---------- */
function setSpeaking(i){
  S.speaking = i;
  document.querySelectorAll('.vt.student').forEach(el => el.classList.toggle('speaking', i !== null && el.dataset.room === String(i)));
}
// A student talks: speaking ring + caption (with transcript if given) while the audio plays
function speak(i, file, transcript, done){
  setSpeaking(i);
  caption(`<span class="eq"><i></i><i></i><i></i><i></i></span><span><span class="who">${S.rooms[i].name}</span>${transcript ? ': “' + transcript + '”' : U.isSpeaking}</span>`);
  playAudio(AUDIO + file, () => { setSpeaking(null); caption(null); done(); });
}
// Builds a shared-screen <video>: no controls and no pointer events, so it reads as a live screen share
function makeShareVideo(src){
  const v = document.createElement('video');
  v.muted = true; v.playsInline = true; v.preload = 'auto';
  v.disablePictureInPicture = true;
  v.setAttribute('controlslist', 'nodownload nofullscreen noremoteplayback');
  v.oncontextmenu = () => false;
  v.src = src; v.dataset.src = src;
  return v;
}
// Videos loaded in the background ahead of time, so they start instantly when swapped in
const preloaded = {};
function preloadAsset(key){ const src = P[key]; if (!preloaded[src]){ const v = makeShareVideo(src); v.load(); preloaded[src] = v; } }

// Plays the shared-screen video once from the start; when it ends it stays on its last frame
function playShare(src, onStart, onEnd){
  let v = $('#shareVid');
  if (!v){ onStart && onStart(); onEnd && onEnd(); return; }
  S.share.src = src;
  if (v.dataset.src !== src){
    const nv = preloaded[src] || makeShareVideo(src);
    delete preloaded[src];
    nv.id = 'shareVid';
    v.replaceWith(nv);
    v = nv;
  }
  v.loop = false;
  let started = false, ended = false, guard = null;
  const end = () => {
    if (ended) return; ended = true; clearTimeout(guard);
    // If the video stalled before its natural end, jump to its last frame
    if (!v.ended && v.duration){ v.pause(); try { v.currentTime = Math.max(0, v.duration - 0.05); } catch(e){} }
    start(); onEnd && onEnd();
  };
  const start = () => {
    if (started) return; started = true;
    // Safety net: carry on even if the 'ended' event never arrives (e.g. a stalled video)
    guard = setTimeout(end, v.duration ? (v.duration - v.currentTime) * 1000 + 2000 : 20000);
    onStart && onStart();
  };
  v.onplaying = start;
  v.onended = end;
  v.onerror = () => setTimeout(end, 1500);
  setTimeout(start, 6000);   // still not playing after 6 s: don't leave the player waiting
  try { v.currentTime = 0; } catch(e){}
  v.play().catch(() => setTimeout(end, 1500));
}

/* ---------- Flow ---------- */
function runQuestion(){
  const Q = QUESTIONS[qIndex];
  S.tried = []; S.busy = false; S.await = null;
  S.introDone = !Q.intro;
  if (Q.present) S.rooms.forEach((r, k) => { r.joined = Q.present.includes(k); });
  if (Q.setup) Q.setup();
  render();
  (Q.preload || []).forEach(preloadAsset);
  // Options are shown in a random order, kept the same while the player retries this situation
  S.order = Q.options.map((_, k) => k).sort(() => Math.random() - 0.5);
  const go = () => { (Q.events || []).forEach(e => toast(e)); showQuestion(); };
  if (Q.recap) showRecap(Q.recap, go); else go();
}

function gameClick(action, arg, key){
  // Waiting for the player to click a real Classroom control
  if (S.await){
    const a = S.await;
    if (a.accept.includes(key)){
      S.await = null; hideTask();
      perform(action, arg);
      a.onDone();
      return;
    }
    if (a.free.includes(key)){ perform(action, arg); return; }
    a.misses++;
    if (a.misses >= 2){ a.showHint = true; toast(U.hintHere, true); placeOverlays(); }
    else toast(a.miss, true);
    return;
  }
  // While a decision is open, clicking the control an option refers to counts as choosing it
  if (isQPOpen() && !S.busy && S.introDone){
    const Q = QUESTIONS[qIndex];
    const i = Q.options.findIndex((o, k) => o.action === key && !S.tried.includes(k));
    if (i >= 0){
      const o = Q.options[i];
      if (Q.requireNotes && !S.notesSeen){ toast(U.checkNotesFirst, true); return; }
      if (o.kind === 'do'){ hideQP(); perform(action, arg); doneDo(o); }
      else choose(i);
      return;
    }
  }
  if (action === 'deco' || S.busy) return;
  if (isQPOpen()) toast(U.decideInPanel, true);
}

function doneDo(o){
  S.busy = true;
  if (o.action === 'toggleLead') S.following = true;
  render();
  const lt = o.hint && $(o.hint); if (lt) lt.classList.add('flash');
  setTimeout(() => correct(o), 1300);
}

function showQuestion(){
  const Q = QUESTIONS[qIndex];
  S.busy = false;
  const qp = $('#qp');
  qp.className = '';
  const head = `<div class="qp-head"><span>${fmt(U.decisionOf, { n:qIndex + 1, total:QUESTIONS.length })}</span><span>${Q.who}</span><button class="qp-min" id="qpMin" title="${U.hideShow}">–</button></div>`;

  if (!S.introDone){
    qp.innerHTML = head + `<div class="qp-body"><p class="qp-q">${Q.intro.text}</p><button class="btn-y" id="introBtn">${Q.intro.btn}</button></div>`;
    showQP();
    $('#introBtn').onclick = () => {
      S.busy = true; qp.classList.add('busy', 'mini');
      Q.intro.run(() => { S.introDone = true; showQuestion(); });
    };
  } else {
    const locked = Q.requireNotes && !S.notesSeen;
    qp.innerHTML = head + `<div class="qp-body">
      <p class="qp-q">${Q.q}</p>
      ${locked ? `<p class="qp-lock">${U.openNotesFirst}</p>` : ''}
      ${(S.order || Q.options.map((_, k) => k)).map((i, pos) => { const o = Q.options[i]; return `<button class="qp-opt ${S.tried.includes(i) ? 'tried' : ''} ${locked ? 'locked' : ''}" data-opt="${i}"><span class="k">${'ABC'[pos]}</span><span>${o.label}</span></button>`; }).join('')}
      ${Q.intro && Q.intro.replay ? `<button class="qp-replay" id="replayBtn">🔁 ${Q.intro.replay}</button>` : ''}</div>`;
    showQP();
    qp.querySelectorAll('.qp-opt').forEach(b => b.onclick = () => choose(+b.dataset.opt));
    const rb = $('#replayBtn');
    if (rb) rb.onclick = () => { S.busy = true; qp.classList.add('busy', 'mini'); Q.intro.run(() => showQuestion()); };
  }
  $('#qpMin').onclick = () => qp.classList.toggle('mini');
}

function choose(i){
  if (S.busy) return;
  const Q = QUESTIONS[qIndex], o = Q.options[i];
  if (Q.requireNotes && !S.notesSeen){ toast(U.checkNotesFirst, true); return; }

  if (o.kind === 'do'){
    // The tutor has to find and click the real control in Classroom
    hideQP();
    awaitClick({ text:o.prompt, accept:[o.action], hint:o.hint, miss:o.miss, back:true, onDone:() => doneDo(o) });
    return;
  }
  S.busy = true;
  $('#qp').classList.add('busy');
  const resolve = () => {
    if (!o.correct) return wrong(i, o);
    if (!o.post) return correct(o);
    $('#qp').classList.add('mini');   // keep the shared screen visible while the student acts
    o.post(() => correct(o));
  };
  if (o.kind === 'pick'){ setTimeout(resolve, 250); return; }

  // say: the tutor says the line first, then the student may answer (audio), then feedback
  // Recordings are named after the option's original letter (A/B/C as written in QUESTIONS), not its shuffled position
  tutorSay(o.say, o.voice || `Tutor_D${qIndex + 1}_${'ABC'[i]}.mp3`, () => {
    if (o.audio) speak(Q.room, o.audio, null, resolve);
    else resolve();
  }, !!o.voice);
}

// The tutor's recorded voice (Audios/<LANG>/Tutor_D<decision>_<letter>.mp3) with the line on screen.
// If the recording is missing, the line stays on screen for its reading time instead.
function tutorSay(text, file, done, quiet){
  const readMs = Math.min(9000, 1600 + text.length * 35);
  const tile = document.querySelector('.vt.teacher');
  if (tile) tile.classList.add('speaking');
  caption(`<span class="eq"><i></i><i></i><i></i><i></i></span><span><span class="who">${U.you}</span> “${text}”</span>`);
  playAudio(AUDIO + file, () => {
    const t = document.querySelector('.vt.teacher'); if (t) t.classList.remove('speaking');
    caption(null);
    done();
  }, readMs, quiet);
}

// Shown once per file when a sound can't be loaded (e.g. the Audios folder isn't next to the simulator)
const audioWarned = {};
function audioMissing(src){
  const name = src.split('/').pop();
  if (audioWarned[name]) return; audioWarned[name] = true;
  toast(fmt(U.audioMissing, { name }), true);
}

function playAudio(src, done, fallbackMs, quiet){
  // Not recorded yet in this language? Play the English recording instead
  if (AUDIO !== AUDIO_EN && src.startsWith(AUDIO)){
    const t = new Audio(src);
    let checked = false;   // only the first answer counts: clearing the test player fires an extra error event
    t.onloadedmetadata = () => { if (checked) return; checked = true; t.onerror = null; t.removeAttribute('src'); playAudio2(src, done, fallbackMs, quiet); };
    t.onerror = () => { if (checked) return; checked = true; playAudio2(AUDIO_EN + src.slice(AUDIO.length), done, fallbackMs, quiet); };
    t.preload = 'metadata'; t.load();
    return;
  }
  playAudio2(src, done, fallbackMs, quiet);
}
function playAudio2(src, done, fallbackMs, quiet){
  const a = new Audio(src);
  let fin = false;
  const f = () => { if (fin) return; fin = true; done(); };
  const fb = fallbackMs || 1500;
  a.addEventListener('error', () => { if (!quiet) audioMissing(src); });
  a.onended = () => setTimeout(f, 400);
  // Safety net: continue after the clip's length even if 'ended' never fires
  a.onloadedmetadata = () => { if (isFinite(a.duration)) setTimeout(f, a.duration * 1000 + 1500); };
  a.onerror = () => setTimeout(f, fb);
  a.play().catch(() => setTimeout(f, Math.max(fb, 2500)));
  setTimeout(f, 60000);
}

function wrong(i, o){
  S.lives--;
  S.tried.push(i);
  render();
  const h = $('#heart-' + S.lives); if (h){ h.classList.add('breaking'); }
  hideQP();
  if (S.lives <= 0){
    // Out of lives: a life can be bought for LIFE_COST diamonds to keep playing from this situation
    const canBuy = S.diamonds >= LIFE_COST;
    modal(`<div class="m-card bad">
      <div class="m-icon">💔</div><h2>${U.outTitle}</h2>
      <p>${o.why}</p>
      <div class="m-lives">🖤🖤🖤</div>
      <div class="shop ${canBuy ? '' : 'off'}">
        <p>${fmt(U.outBuy, { cost:LIFE_COST })}</p>
        <p class="shop-bal">${fmt(U.outHave, { n:S.diamonds })}${canBuy ? '' : fmt(U.outNeed, { n:LIFE_COST - S.diamonds })}</p>
      </div>
      <p>${U.outRestartInfo}</p>
      <div class="btns"><button class="btn-p" id="mRestart">${U.restartGame}</button><button class="btn-y" id="mBuy" ${canBuy ? '' : 'disabled'}>${fmt(U.buyLife, { cost:LIFE_COST })}</button></div>
      <p><button class="link-btn" id="mMenu">${U.backToMenu}</button></p></div>`);
    $('#mRestart').onclick = startGame;
    $('#mMenu').onclick = restart;
    if (canBuy) $('#mBuy').onclick = () => {
      S.diamonds -= LIFE_COST; S.lives = 1;
      render();
      const hh = $('#heart-0'); if (hh) hh.classList.add('dia-pop');
      closeModal(); showQuestion();
      toast(fmt(U.lifeBought, { n:S.diamonds }), true);
    };
  } else {
    modal(`<div class="m-card bad">
      <div class="m-icon">❌</div><h2>${U.wrongTitle}</h2>
      <p>${o.why}</p>
      <div class="m-lives">${'❤️'.repeat(S.lives)}${'🖤'.repeat(3 - S.lives)}</div>
      <p style="font-size:13px;color:#7a8094">${S.lives === 1 ? U.livesLeft1 : fmt(U.livesLeftN, { n:S.lives })}</p>
      <div class="btns"><button class="btn-y" id="mRetry">${U.tryAgain}</button></div></div>`);
    $('#mRetry').onclick = () => { closeModal(); showQuestion(); };
  }
}

function correct(o){
  S.diamonds++;
  render();
  const d = $('#dia'); if (d) d.classList.add('dia-pop');
  hideQP();
  modal(`<div class="m-card good">
    <div class="m-icon">💎</div><h2>${U.correctTitle}</h2>
    <p>${o.why}</p>
    <div class="btns"><button class="btn-y" id="mCont">${U.continue}</button></div></div>`);
  $('#mCont').onclick = () => {
    closeModal();
    qIndex++;
    if (qIndex < QUESTIONS.length) runQuestion();
    else finish();
  };
}

/* ---------- Parallel lesson structure (reference sheet) ---------- */
function structureHTML(){
  const X = C.structure;
  return `<div class="sheet-card">
    <div class="sheet-note">${X.note}</div>
    <h2>${X.title}</h2>
    <p class="sheet-sub">${X.sub}</p>
    <div class="phase-row">
      <div class="ph p1"><div class="ph-t"><span>1</span>${X.p1}<small>${X.p1Small}</small></div><ol>${X.p1Items.map(t => `<li>${t}</li>`).join('')}</ol></div>
      <div class="ph p2"><div class="ph-t"><span>2</span>${X.p2}<small>${X.p2Small}</small></div><ul>${X.p2Items.map(t => `<li>${t}</li>`).join('')}</ul></div>
      <div class="ph p3"><div class="ph-t"><span>3</span>${X.p3}<small>${X.p3Small}</small></div><ol>${X.p3Items.map(t => `<li>${t}</li>`).join('')}</ol></div>
    </div>
    <h3>${X.rulesTitle}</h3>
    <div class="rules">${X.rules.map(t => `<div>${t}</div>`).join('')}</div>
    <div class="btns"><button class="btn-y" id="sheetClose">${X.gotIt}</button></div>
  </div>`;
}
function openStructure(){
  const s = $('#sheet');
  s.innerHTML = structureHTML();
  s.style.display = 'flex';
  $('#sheetClose').onclick = () => { s.style.display = 'none'; s.innerHTML = ''; };
}

/* ---------- Recap between situations ---------- */
function showRecap(rc, done){
  modal(`<div class="m-card info recap">
    <div class="rc-kicker">${rc.kicker || U.recapKicker}</div>
    <h2>${rc.title}</h2>
    ${rc.sub ? `<p>${rc.sub}</p>` : ''}
    <ol class="rc-steps">${rc.steps.map((s, k) => `<li style="animation-delay:${0.15 + k * 0.35}s">${s.time ? `<span class="rc-time">${s.time}</span>` : ''}<span>${s.text}</span></li>`).join('')}</ol>
    ${rc.now ? `<div class="rc-now" style="animation-delay:${0.15 + rc.steps.length * 0.35}s"><b>${U.recapNow}</b> ${rc.now}</div>` : ''}
    <div class="btns"><button class="btn-y" id="rcGo">${U.recapContinue}</button></div></div>`);
  $('#rcGo').onclick = () => { closeModal(); done(); };
}

/* ---------- Tutor notes (scene 7) ---------- */
function openNotes(){
  modal(`<div class="m-card notes-card">
    <h2 style="margin:0 0 4px">${U.notesTitle}</h2>
    <p style="margin:0 0 14px">${U.notesText}</p>
    <img src="${P.notes}" alt="${U.notesAlt}">
    <div class="btns"><button class="btn-y" id="mNotesBack">${U.notesBack}</button></div></div>`);
  $('#mNotesBack').onclick = () => { S.notesSeen = true; closeModal(); render(); if (isQPOpen()) showQuestion(); };
}

function finish(){
  S.phase = 'done';
  render();
  const X = C.finish;
  const perfect = S.diamonds >= QUESTIONS.length && S.lives === 3;
  modal(`<div class="m-card info debrief">
    <div class="m-icon">🏁</div><h2>${X.title}</h2>
    <p style="text-align:center">${X.text}</p>
    <div class="m-lives">${'❤️'.repeat(S.lives)}${'🖤'.repeat(3 - S.lives)} &nbsp; 💎 ${S.diamonds} / ${QUESTIONS.length}</div>
    <div class="rc-kicker" style="margin-top:14px">${X.stepsTitle}</div>
    <ol class="rc-steps">${X.steps.map((s, k) => `<li style="animation-delay:${0.1 + k * 0.25}s"><span class="rc-time">${s[0]}</span><span>${s[1]}</span></li>`).join('')}</ol>
    <div class="rc-now" style="animation-delay:.85s">${perfect ? X.perfect : X.notPerfect}</div>
    <div class="simcode"><span>${X.codeLabel}</span><b>${COMPLETION_CODE}</b><small>${X.codeHint}</small></div>
    <div class="btns"><button class="btn-p" id="mStruct">${X.structure}</button><button class="btn-p" id="mMenu">${X.menu}</button><button class="btn-y" id="mAgain">${X.again}</button></div></div>`);
  $('#mStruct').onclick = openStructure;
  $('#mAgain').onclick = startGame;
  $('#mMenu').onclick = restart;
}

// Back to the start menu
function restart(){
  closeModal(); caption(null); hideTask(); hideQP();
  qIndex = 0;
  S = freshState();
  render();
  showIntro();
}

/* =========================================================
   OVERLAYS
   ========================================================= */
function placeOverlays(){ renderCoach(); }
// The decision panel is docked on the right; in the console view the rooms make room for it
function showQP(){ $('#qp').style.display = 'block'; document.body.classList.add('qp-open'); }
function hideQP(){ $('#qp').style.display = 'none'; document.body.classList.remove('qp-open'); }
const isQPOpen = () => $('#qp').style.display === 'block';
function modal(html){ const m = $('#modal'); m.innerHTML = html; m.style.display = 'flex'; }
function closeModal(){ const m = $('#modal'); m.style.display = 'none'; m.innerHTML = ''; }
function caption(html){ const c = $('#caption'); if (!html){ c.style.display = 'none'; return; } c.innerHTML = html; c.style.display = 'flex'; }
// Toasts queue up (e.g. "hand raised" then "student joined"); now=true replaces whatever is showing
let toastQ = [], toastT = null;
function toast(msg, now){
  if (now){ toastQ = []; clearTimeout(toastT); toastT = null; }
  toastQ.push(msg);
  if (!toastT) nextToast();
}
function nextToast(){
  const t = $('#toast'), m = toastQ.shift();
  if (!m){ t.style.display = 'none'; toastT = null; return; }
  t.textContent = m; t.style.display = 'block';
  toastT = setTimeout(nextToast, m.length > 60 ? 5000 : 2500);
}

window.addEventListener('resize', placeOverlays);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeOverlays);
document.addEventListener('scroll', () => { if (S.phase === 'guide' || S.await) renderCoach(); }, true);

/* =========================================================
   INTRO / PLAYER GUIDE
   ========================================================= */
function showIntro(){
  const el = $('#intro'), X = C.menu, W = C.welcome;
  const unlocked = tourDone();
  el.innerHTML = `<div class="intro-wrap">
    <span class="intro-kicker">${X.kicker}</span>
    <h1>${W.title1} <span>${W.title2}</span></h1>
    <p class="lead-p">${X.lead}</p>
    <div class="facts">${X.facts.map(f => `<div class="fact"><div class="fi">${f[0]}</div><b>${f[1]}</b><span>${f[2]}</span></div>`).join('')}</div>
    <div class="phases">
      <div class="phase"><div class="pn">${X.part1} · ${unlocked ? X.completed : X.startHere}</div><b>${X.tourTitle}</b><span>${X.tourText}</span>
        <button class="btn-y" id="startBtn">${unlocked ? X.tourReplay : X.tourStart}</button></div>
      <div class="phase ${unlocked ? '' : 'locked'}"><div class="pn">${X.part2}</div><b>${X.gameTitle}</b><span>${X.gameText}</span>
        <button class="btn-y" id="gameBtn" ${unlocked ? '' : 'disabled'}>${unlocked ? X.gamePlay : X.gameLocked}</button></div>
    </div>
    <div class="sound-row"><button class="btn-ghost" id="iStructure">${X.structure}</button><button class="btn-ghost" id="iBack">${X.back}</button></div>
  </div>`;
  el.style.display = 'block';
  el.scrollTop = 0;
  $('#iStructure').onclick = openStructure;
  $('#iBack').onclick = showWelcome;
  $('#startBtn').onclick = startGuide;
  if (unlocked) $('#gameBtn').onclick = startGame;
}

/* First page: what the simulator is and how it must be used. The menu (showIntro) opens after START SIMULATION. */
function showWelcome(){
  const el = $('#intro'), W = C.welcome;
  el.innerHTML = `<div class="intro-wrap">
    <span class="intro-kicker">${W.kicker}</span>
    <h1>${W.title1} <span>${W.title2}</span></h1>
    <p class="lead-p">${W.lead}</p>
    <div class="welcome-box"><h3>${W.whyTitle}</h3><p>${W.whyP1}</p><p>${W.whyP2}</p></div>
    <div class="welcome-box">
      <h3>${W.howTitle}</h3>
      <ol class="how">
        <li><div>${W.how1}<br><button class="btn-ghost" id="wStructure">${W.how1Btn}</button></div></li>
        <li><div>${W.how2}</div></li>
        <li><div>${W.how3}</div></li>
        <li><div>${W.how4}</div></li>
      </ol>
    </div>
    <div class="welcome-box">
      <h3>${W.soundTitle}</h3>
      <p>${W.soundText}</p>
      <div class="sound-row"><button class="btn-ghost" id="wSound">${W.soundBtn}</button><span id="soundMsg"></span></div>
    </div>
    <button class="btn-y btn-start" id="wStart">${W.start}</button>
  </div>`;
  el.style.display = 'block';
  el.scrollTop = 0;
  $('#wStructure').onclick = openStructure;
  $('#wSound').onclick = soundTest;
  $('#wStart').onclick = showIntro;
}

// Plays a short chime (checks the speakers) and loads one of the simulator's sound files (checks the Audios folder)
function soundTest(){
  const msg = $('#soundMsg');
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [660, 880].forEach((hz, k) => {
      const o = ctx.createOscillator(), g = ctx.createGain(), t = ctx.currentTime + k * 0.18;
      o.frequency.value = hz; o.connect(g); g.connect(ctx.destination);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.3, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
      o.start(t); o.stop(t + 0.4);
    });
  } catch(e){}
  msg.textContent = U.soundChecking;
  const a = new Audio(AUDIO + 'Alexander_reflection.mp3');
  a.preload = 'metadata';
  a.onloadedmetadata = () => { msg.innerHTML = U.soundOk; };
  a.onerror = () => { if (a.src.indexOf(AUDIO_EN) < 0 && AUDIO !== AUDIO_EN){ a.src = AUDIO_EN + 'Alexander_reflection.mp3'; a.load(); return; } msg.innerHTML = U.soundFail; };
  a.load();
}

S = freshState();
render();
showWelcome();
