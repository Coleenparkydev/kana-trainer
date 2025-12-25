const stages = {
  basic: [
    "a","i","u","e","o",
    "ka","ki","ku","ke","ko",
    "sa","shi","su","se","so",
    "ta","chi","tsu","te","to",
    "na","ni","nu","ne","no",
    "ha","hi","fu","he","ho",
    "ma","mi","mu","me","mo",
    "ya","yu","yo",
    "ra","ri","ru","re","ro",
    "wa","wo","n"
  ],
  dakuten: [
    "ga","gi","gu","ge","go",
    "za","ji","zu","ze","zo",
    "da","de","do",
    "ba","bi","bu","be","bo",
    "pa","pi","pu","pe","po"
  ],
  yoon: [
    "kya","kyu","kyo",
    "sha","shu","sho",
    "cha","chu","cho",
    "nya","nyu","nyo",
    "hya","hyu","hyo",
    "mya","myu","myo",
    "rya","ryu","ryo",
    "gya","gyu","gyo",
    "ja","ju","jo",
    "bya","byu","byo",
    "pya","pyu","pyo"
  ]
};

const kana = {
  a:{h:"あ",k:"ア"}, i:{h:"い",k:"イ"}, u:{h:"う",k:"ウ"}, e:{h:"え",k:"エ"}, o:{h:"お",k:"オ"},
  ka:{h:"か",k:"カ"}, ki:{h:"き",k:"キ"}, ku:{h:"く",k:"ク"}, ke:{h:"け",k:"ケ"}, ko:{h:"こ",k:"コ"},
  sa:{h:"さ",k:"サ"}, shi:{h:"し",k:"シ"}, su:{h:"す",k:"ス"}, se:{h:"せ",k:"セ"}, so:{h:"そ",k:"ソ"},
  ta:{h:"た",k:"タ"}, chi:{h:"ち",k:"チ"}, tsu:{h:"つ",k:"ツ"}, te:{h:"て",k:"テ"}, to:{h:"と",k:"ト"},
  na:{h:"な",k:"ナ"}, ni:{h:"に",k:"ニ"}, nu:{h:"ぬ",k:"ヌ"}, ne:{h:"ね",k:"ネ"}, no:{h:"の",k:"ノ"},
  ha:{h:"は",k:"ハ"}, hi:{h:"ひ",k:"ヒ"}, fu:{h:"ふ",k:"フ"}, he:{h:"へ",k:"ヘ"}, ho:{h:"ほ",k:"ホ"},
  ma:{h:"ま",k:"マ"}, mi:{h:"み",k:"ミ"}, mu:{h:"む",k:"ム"}, me:{h:"め",k:"メ"}, mo:{h:"も",k:"モ"},
  ya:{h:"や",k:"ヤ"}, yu:{h:"ゆ",k:"ユ"}, yo:{h:"よ",k:"ヨ"},
  ra:{h:"ら",k:"ラ"}, ri:{h:"り",k:"リ"}, ru:{h:"る",k:"ル"}, re:{h:"れ",k:"レ"}, ro:{h:"ろ",k:"ロ"},
  wa:{h:"わ",k:"ワ"}, wo:{h:"を",k:"ヲ"}, n:{h:"ん",k:"ン"},
  ga:{h:"が",k:"ガ"}, gi:{h:"ぎ",k:"ギ"}, gu:{h:"ぐ",k:"グ"}, ge:{h:"げ",k:"ゲ"}, go:{h:"ご",k:"ゴ"},
  za:{h:"ざ",k:"ザ"}, ji:{h:"じ",k:"ジ"}, zu:{h:"ず",k:"ズ"}, ze:{h:"ぜ",k:"ゼ"}, zo:{h:"ぞ",k:"ゾ"},
  da:{h:"だ",k:"ダ"}, de:{h:"で",k:"デ"}, do:{h:"ど",k:"ド"},
  ba:{h:"ば",k:"バ"}, bi:{h:"び",k:"ビ"}, bu:{h:"ぶ",k:"ブ"}, be:{h:"べ",k:"ベ"}, bo:{h:"ぼ",k:"ボ"},
  pa:{h:"ぱ",k:"パ"}, pi:{h:"ぴ",k:"ピ"}, pu:{h:"ぷ",k:"プ"}, pe:{h:"ぺ",k:"ペ"}, po:{h:"ぽ",k:"ポ"},
  kya:{h:"きゃ",k:"キャ"}, kyu:{h:"きゅ",k:"キュ"}, kyo:{h:"きょ",k:"キョ"},
  sha:{h:"しゃ",k:"シャ"}, shu:{h:"しゅ",k:"シュ"}, sho:{h:"しょ",k:"ショ"},
  cha:{h:"ちゃ",k:"チャ"}, chu:{h:"ちゅ",k:"チュ"}, cho:{h:"ちょ",k:"チョ"},
  nya:{h:"にゃ",k:"ニャ"}, nyu:{h:"にゅ",k:"ニュ"}, nyo:{h:"にょ",k:"ニョ"},
  hya:{h:"ひゃ",k:"ヒャ"}, hyu:{h:"ひゅ",k:"ヒュ"}, hyo:{h:"ひょ",k:"ヒョ"},
  mya:{h:"みゃ",k:"ミャ"}, myu:{h:"みゅ",k:"ミュ"}, myo:{h:"みょ",k:"ミョ"},
  rya:{h:"りゃ",k:"リャ"}, ryu:{h:"りゅ",k:"リュ"}, ryo:{h:"りょ",k:"リョ"},
  gya:{h:"ぎゃ",k:"ギャ"}, gyu:{h:"ぎゅ",k:"ギュ"}, gyo:{h:"ぎょ",k:"ギョ"},
  ja:{h:"じゃ",k:"ジャ"}, ju:{h:"じゅ",k:"ジュ"}, jo:{h:"じょ",k:"ジョ"},
  bya:{h:"びゃ",k:"ビャ"}, byu:{h:"びゅ",k:"ビュ"}, byo:{h:"びょ",k:"ビョ"},
  pya:{h:"ぴゃ",k:"ピャ"}, pyu:{h:"ぴゅ",k:"ピュ"}, pyo:{h:"ぴょ",k:"ピョ"}
};

// Level definitions - each level has practice and test
const levelDefinitions = [
  // Hiragana Basic (Levels 1-10)
  { id: 1, name: "Vowels (あ)", type: "hiragana", stage: "basic", subset: ["a","i","u","e","o"] },
  { id: 2, name: "K-Row (か)", type: "hiragana", stage: "basic", subset: ["ka","ki","ku","ke","ko"] },
  { id: 3, name: "S-Row (さ)", type: "hiragana", stage: "basic", subset: ["sa","shi","su","se","so"] },
  { id: 4, name: "T-Row (た)", type: "hiragana", stage: "basic", subset: ["ta","chi","tsu","te","to"] },
  { id: 5, name: "N-Row (な)", type: "hiragana", stage: "basic", subset: ["na","ni","nu","ne","no"] },
  { id: 6, name: "H-Row (は)", type: "hiragana", stage: "basic", subset: ["ha","hi","fu","he","ho"] },
  { id: 7, name: "M-Row (ま)", type: "hiragana", stage: "basic", subset: ["ma","mi","mu","me","mo"] },
  { id: 8, name: "Y-Row (や)", type: "hiragana", stage: "basic", subset: ["ya","yu","yo"] },
  { id: 9, name: "R-Row (ら)", type: "hiragana", stage: "basic", subset: ["ra","ri","ru","re","ro"] },
  { id: 10, name: "W & N (わ)", type: "hiragana", stage: "basic", subset: ["wa","wo","n"] },
  
  // Hiragana Dakuten (Levels 11-15)
  { id: 11, name: "G-Row (が)", type: "hiragana", stage: "dakuten", subset: ["ga","gi","gu","ge","go"] },
  { id: 12, name: "Z-Row (ざ)", type: "hiragana", stage: "dakuten", subset: ["za","ji","zu","ze","zo"] },
  { id: 13, name: "D-Row (だ)", type: "hiragana", stage: "dakuten", subset: ["da","de","do"] },
  { id: 14, name: "B-Row (ば)", type: "hiragana", stage: "dakuten", subset: ["ba","bi","bu","be","bo"] },
  { id: 15, name: "P-Row (ぱ)", type: "hiragana", stage: "dakuten", subset: ["pa","pi","pu","pe","po"] },
  
  // Hiragana Yoon (Levels 16-20)
  { id: 16, name: "Yoon K/S (きゃ)", type: "hiragana", stage: "yoon", subset: ["kya","kyu","kyo","sha","shu","sho"] },
  { id: 17, name: "Yoon C/N (ちゃ)", type: "hiragana", stage: "yoon", subset: ["cha","chu","cho","nya","nyu","nyo"] },
  { id: 18, name: "Yoon H/M (ひゃ)", type: "hiragana", stage: "yoon", subset: ["hya","hyu","hyo","mya","myu","myo"] },
  { id: 19, name: "Yoon R/G (りゃ)", type: "hiragana", stage: "yoon", subset: ["rya","ryu","ryo","gya","gyu","gyo"] },
  { id: 20, name: "Yoon J/B/P (じゃ)", type: "hiragana", stage: "yoon", subset: ["ja","ju","jo","bya","byu","byo","pya","pyu","pyo"] },
  
  // Katakana Basic (Levels 21-30)
  { id: 21, name: "Vowels (ア)", type: "katakana", stage: "basic", subset: ["a","i","u","e","o"] },
  { id: 22, name: "K-Row (カ)", type: "katakana", stage: "basic", subset: ["ka","ki","ku","ke","ko"] },
  { id: 23, name: "S-Row (サ)", type: "katakana", stage: "basic", subset: ["sa","shi","su","se","so"] },
  { id: 24, name: "T-Row (タ)", type: "katakana", stage: "basic", subset: ["ta","chi","tsu","te","to"] },
  { id: 25, name: "N-Row (ナ)", type: "katakana", stage: "basic", subset: ["na","ni","nu","ne","no"] },
  { id: 26, name: "H-Row (ハ)", type: "katakana", stage: "basic", subset: ["ha","hi","fu","he","ho"] },
  { id: 27, name: "M-Row (マ)", type: "katakana", stage: "basic", subset: ["ma","mi","mu","me","mo"] },
  { id: 28, name: "Y-Row (ヤ)", type: "katakana", stage: "basic", subset: ["ya","yu","yo"] },
  { id: 29, name: "R-Row (ラ)", type: "katakana", stage: "basic", subset: ["ra","ri","ru","re","ro"] },
  { id: 30, name: "W & N (ワ)", type: "katakana", stage: "basic", subset: ["wa","wo","n"] },
  
  // Katakana Dakuten (Levels 31-35)
  { id: 31, name: "G-Row (ガ)", type: "katakana", stage: "dakuten", subset: ["ga","gi","gu","ge","go"] },
  { id: 32, name: "Z-Row (ザ)", type: "katakana", stage: "dakuten", subset: ["za","ji","zu","ze","zo"] },
  { id: 33, name: "D-Row (ダ)", type: "katakana", stage: "dakuten", subset: ["da","de","do"] },
  { id: 34, name: "B-Row (バ)", type: "katakana", stage: "dakuten", subset: ["ba","bi","bu","be","bo"] },
  { id: 35, name: "P-Row (パ)", type: "katakana", stage: "dakuten", subset: ["pa","pi","pu","pe","po"] },
  
  // Katakana Yoon (Levels 36-40)
  { id: 36, name: "Yoon K/S (キャ)", type: "katakana", stage: "yoon", subset: ["kya","kyu","kyo","sha","shu","sho"] },
  { id: 37, name: "Yoon C/N (チャ)", type: "katakana", stage: "yoon", subset: ["cha","chu","cho","nya","nyu","nyo"] },
  { id: 38, name: "Yoon H/M (ヒャ)", type: "katakana", stage: "yoon", subset: ["hya","hyu","hyo","mya","myu","myo"] },
  { id: 39, name: "Yoon R/G (リャ)", type: "katakana", stage: "yoon", subset: ["rya","ryu","ryo","gya","gyu","gyo"] },
  { id: 40, name: "Yoon J/B/P (ジャ)", type: "katakana", stage: "yoon", subset: ["ja","ju","jo","bya","byu","byo","pya","pyu","pyo"] },
  
  // Review Levels (41-44)
  { id: 41, name: "Hiragana Review", type: "hiragana", stage: "all", subset: [...stages.basic, ...stages.dakuten, ...stages.yoon] },
  { id: 42, name: "Katakana Review", type: "katakana", stage: "all", subset: [...stages.basic, ...stages.dakuten, ...stages.yoon] },
  { id: 43, name: "Mixed Basic", type: "mixed", stage: "basic", subset: stages.basic },
  { id: 44, name: "Master Challenge", type: "mixed", stage: "all", subset: [...stages.basic, ...stages.dakuten, ...stages.yoon] },
];

// Game state
let currentUnlockedLevel = 1;
let practiceCompleted = {}; // Track which levels have practice completed
let testPassed = {}; // Track which levels have test passed
let streak = 0;

// Quiz state
let currentLevelData = null;
let currentMode = ""; // "practice" or "test"
let currentQuestion = 0;
let correctAnswers = 0;
let totalQuestions = 10;
let currentRomaji = "";
let currentAudio = null;
let answered = false;
let quizTypes = ["kana-to-romaji", "romaji-to-kana", "audio-to-kana", "audio-to-romaji", "draw-kana"];
let currentQuizType = "";

// Initialize
function init() {
  loadProgress();
  renderLevelGrid();
  updateHeaderStats();
}

// Save/Load progress
function saveProgress() {
  const data = {
    currentUnlockedLevel,
    practiceCompleted,
    testPassed,
    streak
  };
  localStorage.setItem('kanaProgress', JSON.stringify(data));
}

function loadProgress() {
  const saved = localStorage.getItem('kanaProgress');
  if (saved) {
    const data = JSON.parse(saved);
    currentUnlockedLevel = data.currentUnlockedLevel || 1;
    practiceCompleted = data.practiceCompleted || {};
    testPassed = data.testPassed || {};
    streak = data.streak || 0;
  }
}

// Render level grid
function renderLevelGrid() {
  const grid = document.getElementById('levelGrid');
  grid.innerHTML = '';
  
  levelDefinitions.forEach(level => {
    const isUnlocked = level.id <= currentUnlockedLevel;
    const hasPractice = practiceCompleted[level.id];
    const hasTest = testPassed[level.id];
    
    const card = document.createElement('div');
    card.className = `level-card ${!isUnlocked ? 'locked' : ''}`;
    
    card.innerHTML = `
      <div class="level-header-card">
        <div class="level-icon">${hasTest ? '✓' : isUnlocked ? '📝' : '🔒'}</div>
        <div class="level-info">
          <div class="level-title">Level ${level.id}</div>
          <div class="level-name">${level.name}</div>
        </div>
      </div>
      <div class="level-buttons">
        <button class="mode-btn practice-btn ${hasPractice ? 'completed' : ''}" 
                ${!isUnlocked ? 'disabled' : ''} 
                onclick="startLevel(${level.id}, 'practice')">
          ${hasPractice ? '✓ Practice' : '📖 Practice'}
        </button>
        <button class="mode-btn test-btn ${hasTest ? 'completed' : ''}" 
                ${!isUnlocked || !hasPractice ? 'disabled' : ''} 
                onclick="startLevel(${level.id}, 'test')">
          ${hasTest ? '✓ Test' : '🎯 Test'}
        </button>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// Start a level
function startLevel(levelId, mode) {
  const level = levelDefinitions.find(l => l.id === levelId);
  currentLevelData = level;
  currentMode = mode;
  currentQuestion = 0;
  correctAnswers = 0;
  
  document.getElementById('homeScreen').style.display = 'none';
  document.getElementById('quizScreen').style.display = 'flex';
  
  // Update header based on mode
  const modeText = mode === 'practice' ? '📖 Practice Mode' : '🎯 Test Mode';
  document.getElementById('quizScreen').setAttribute('data-mode', mode);
  
  nextQuestion();
}

// Go back home
function goHome() {
  document.getElementById('homeScreen').style.display = 'block';
  document.getElementById('quizScreen').style.display = 'none';
  if (currentAudio) {
    currentAudio.pause();
  }
}

// Next question
function nextQuestion() {
  if (currentQuestion >= totalQuestions) {
    showCompletion();
    return;
  }
  
  currentQuestion++;
  answered = false;
  
  // Pick random quiz type
  currentQuizType = quizTypes[Math.floor(Math.random() * quizTypes.length)];
  
  // Update mode text
  const modeText = currentMode === 'practice' ? '📖 Practice -' : '🎯 Test -';
  document.getElementById('modeText').textContent = modeText;
  document.getElementById('questionNum').textContent = currentQuestion;
  document.getElementById('feedback').innerHTML = '';
  document.getElementById('continueBtn').style.display = 'none';
  
  const progressPercent = ((currentQuestion - 1) / totalQuestions) * 100;
  document.getElementById('quizProgressFill').style.width = progressPercent + '%';
  
  const list = currentLevelData.subset;
  currentRomaji = list[Math.floor(Math.random() * list.length)];
  
  const kanaChar = getKanaChar(currentRomaji, currentLevelData.type);
  
  // Clear previous question UI
  document.getElementById('romaji').innerHTML = '';
  document.getElementById('choices').innerHTML = '';
  document.querySelector('.audio-btn').style.display = 'none';
  
  // Setup question based on type
  if (currentQuizType === "kana-to-romaji") {
    setupKanaToRomaji(kanaChar, currentRomaji, list);
  } else if (currentQuizType === "romaji-to-kana") {
    setupRomajiToKana(currentRomaji, kanaChar, list);
  } else if (currentQuizType === "audio-to-kana") {
    setupAudioToKana(currentRomaji, kanaChar, list);
  } else if (currentQuizType === "audio-to-romaji") {
    setupAudioToRomaji(currentRomaji, list);
  } else if (currentQuizType === "draw-kana") {
    setupDrawKana(currentRomaji, kanaChar);
  }
}

// Get kana character (handles mixed type)
function getKanaChar(romaji, type) {
  if (type === "mixed") {
    // Randomly choose hiragana or katakana for mixed levels
    const randomType = Math.random() < 0.5 ? "h" : "k";
    return kana[romaji][randomType];
  }
  return kana[romaji][type === "hiragana" ? "h" : "k"];
}

// Quiz Type 1: Kana → Romaji (히라가나 보고 로마자 선택)
function setupKanaToRomaji(kanaChar, correctRomaji, list) {
  document.getElementById('romaji').textContent = kanaChar;
  
  let options = [correctRomaji];
  while (options.length < 4) {
    const r = list[Math.floor(Math.random() * list.length)];
    if (!options.includes(r)) options.push(r);
  }
  options.sort(() => Math.random() - 0.5);
  
  const choices = document.getElementById('choices');
  options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option, correctRomaji, btn);
    choices.appendChild(btn);
  });
}

// Quiz Type 2: Romaji → Kana (로마자 보고 히라가나 선택)
function setupRomajiToKana(romaji, correctKana, list) {
  document.getElementById('romaji').textContent = romaji;
  
  let options = [correctKana];
  while (options.length < 4) {
    const r = list[Math.floor(Math.random() * list.length)];
    const k = getKanaChar(r, currentLevelData.type);
    if (!options.includes(k)) options.push(k);
  }
  options.sort(() => Math.random() - 0.5);
  
  const choices = document.getElementById('choices');
  options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option, correctKana, btn);
    choices.appendChild(btn);
  });
}

// Quiz Type 3: Audio → Kana (소리 듣고 히라가나 선택)
function setupAudioToKana(romaji, correctKana, list) {
  document.querySelector('.audio-btn').style.display = 'flex';
  document.getElementById('romaji').innerHTML = '<div class="instruction">Listen and choose the correct character</div>';
  
  // For mixed type, use hiragana audio
  const audioType = currentLevelData.type === "mixed" ? "hiragana" : currentLevelData.type;
  const audioStage = currentLevelData.stage === "all" ? "basic" : currentLevelData.stage;
  currentAudio = new Audio(`audio/${audioType}/${audioStage}/${romaji}.mp3`);
  currentAudio.play();
  
  let options = [correctKana];
  while (options.length < 4) {
    const r = list[Math.floor(Math.random() * list.length)];
    const k = getKanaChar(r, currentLevelData.type);
    if (!options.includes(k)) options.push(k);
  }
  options.sort(() => Math.random() - 0.5);
  
  const choices = document.getElementById('choices');
  options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option, correctKana, btn);
    choices.appendChild(btn);
  });
}

// Quiz Type 4: Audio → Romaji (소리 듣고 로마자 선택)
function setupAudioToRomaji(correctRomaji, list) {
  document.querySelector('.audio-btn').style.display = 'flex';
  document.getElementById('romaji').innerHTML = '<div class="instruction">Listen and choose the correct romaji</div>';
  
  // For mixed type, use hiragana audio
  const audioType = currentLevelData.type === "mixed" ? "hiragana" : currentLevelData.type;
  const audioStage = currentLevelData.stage === "all" ? "basic" : currentLevelData.stage;
  currentAudio = new Audio(`audio/${audioType}/${audioStage}/${correctRomaji}.mp3`);
  currentAudio.play();
  
  let options = [correctRomaji];
  while (options.length < 4) {
    const r = list[Math.floor(Math.random() * list.length)];
    if (!options.includes(r)) options.push(r);
  }
  options.sort(() => Math.random() - 0.5);
  
  const choices = document.getElementById('choices');
  options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option, correctRomaji, btn);
    choices.appendChild(btn);
  });
}

// Quiz Type 5: Draw Kana (로마자 보고 글자 그리기)
function setupDrawKana(romaji, correctKana) {
  document.getElementById('romaji').innerHTML = `
    <div class="draw-prompt">Draw: <strong>${romaji}</strong></div>
    <canvas id="drawCanvas" width="300" height="300"></canvas>
    <div class="draw-controls">
      <button onclick="clearCanvas()" class="clear-btn">Clear</button>
    </div>
  `;
  
  const canvas = document.getElementById('drawCanvas');
  const ctx = canvas.getContext('2d');
  let isDrawing = false;
  
  ctx.strokeStyle = '#1a1a2e';
  ctx.lineWidth = 8;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  canvas.onmousedown = canvas.ontouchstart = (e) => {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };
  
  canvas.onmousemove = canvas.ontouchmove = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    ctx.lineTo(x, y);
    ctx.stroke();
  };
  
  canvas.onmouseup = canvas.ontouchend = () => {
    isDrawing = false;
  };
  
  // Show correct answer after drawing
  const choices = document.getElementById('choices');
  const submitBtn = document.createElement('button');
  submitBtn.className = 'answer-btn submit-draw';
  submitBtn.textContent = 'Submit Drawing';
  submitBtn.onclick = () => {
    // Show correct answer
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = `<div class="feedback-correct">The correct character is: <span style="font-size: 48px">${correctKana}</span></div>`;
    submitBtn.disabled = true;
    correctAnswers++; // Count as correct for practice
    document.getElementById('continueBtn').style.display = 'block';
    answered = true;
  };
  choices.appendChild(submitBtn);
}

function clearCanvas() {
  const canvas = document.getElementById('drawCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Check answer
function checkAnswer(selected, correct, btn) {
  if (answered) return;
  answered = true;
  
  const feedback = document.getElementById('feedback');
  const allBtns = document.querySelectorAll('.answer-btn');
  
  if (selected === correct) {
    btn.classList.add('correct');
    feedback.innerHTML = '<div class="feedback-correct">✓ Correct!</div>';
    correctAnswers++;
    streak++;
  } else {
    btn.classList.add('wrong');
    allBtns.forEach(b => {
      if (b.textContent === correct) {
        b.classList.add('correct');
      }
    });
    feedback.innerHTML = `<div class="feedback-wrong">✗ Wrong! Correct: ${correct}</div>`;
    streak = 0;
  }
  
  allBtns.forEach(b => b.disabled = true);
  document.getElementById('continueBtn').style.display = 'block';
}

// Play audio
function playAudio() {
  if (currentAudio) {
    currentAudio.currentTime = 0;
    currentAudio.play();
  }
}

// Show completion
function showCompletion() {
  const isPractice = currentMode === 'practice';
  const score = correctAnswers;
  const total = totalQuestions;
  const percentage = (score / total) * 100;
  
  let passed = false;
  let message = '';
  
  if (isPractice) {
    // Practice always passes
    passed = true;
    practiceCompleted[currentLevelData.id] = true;
    message = 'Practice Complete!';
  } else {
    // Test requires 80% to pass
    if (percentage >= 80) {
      passed = true;
      testPassed[currentLevelData.id] = true;
      
      // Unlock next level
      if (currentLevelData.id === currentUnlockedLevel) {
        currentUnlockedLevel++;
      }
      
      message = 'Test Passed! 🎉';
    } else {
      message = 'Test Failed. Try again!';
    }
  }
  
  saveProgress();
  
  // Update modal
  document.getElementById('modalCorrect').textContent = `${score}/${total} (${percentage.toFixed(0)}%)`;
  
  const modalIcon = document.querySelector('.completion-icon');
  const modalTitle = document.querySelector('.modal-content h2');
  const xpRow = document.querySelector('.stat-row:last-child');
  
  modalIcon.textContent = passed ? '🎉' : '😞';
  modalTitle.textContent = message;
  xpRow.style.display = 'none'; // Hide XP row
  
  document.getElementById('completionModal').style.display = 'flex';
}

// Close modal
function closeModal() {
  document.getElementById('completionModal').style.display = 'none';
  goHome();
  renderLevelGrid();
  updateHeaderStats();
}

// Update header stats
function updateHeaderStats() {
  document.getElementById('headerStreak').textContent = streak;
  
  // Count total tests passed
  const totalPassed = Object.keys(testPassed).length;
  document.getElementById('headerXP').textContent = totalPassed;
  
  // Update progress overview
  document.getElementById('currentLevel').textContent = currentUnlockedLevel;
  document.getElementById('currentXP').textContent = totalPassed;
  document.getElementById('neededXP').textContent = levelDefinitions.length;
  
  const progressPercent = (totalPassed / levelDefinitions.length) * 100;
  document.getElementById('xpFill').style.width = progressPercent + '%';
}

// Initialize on load
init();