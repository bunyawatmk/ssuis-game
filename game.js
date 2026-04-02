const apiKey = "AIzaSyBBqJqIg6CTShy1mvyD22N9ynaMKGmFeoM";

const levelsData = [
    {
        title: "ด่านที่ 1: พื้นฐานเชื้อและการระบาด",
        pairs: [
            { id: "1-1", text: "เชื้อแบคทีเรียหูดับ?", icon: "fa-question-circle", type: "q" },
            { id: "1-1", text: "S. suis (แกรมบวก)", icon: "fa-bacterium", type: "a" },
            { id: "1-2", text: "โรคนี้ติดคนได้หรือไม่?", icon: "fa-people-arrows", type: "q" },
            { id: "1-2", text: "ได้ (Zoonosis)", icon: "fa-check-circle", type: "a" },
            { id: "1-3", text: "ช่องทางรับเชื้อหลัก?", icon: "fa-route", type: "q" },
            { id: "1-3", text: "ปาก จมูก และบาดแผล", icon: "fa-head-side-mask", type: "a" },
            { id: "1-4", text: "สภาพเล้าแบบไหนเสี่ยง?", icon: "fa-wind", type: "q" },
            { id: "1-4", text: "อากาศไม่ถ่ายเท แออัด", icon: "fa-smog", type: "a" }
        ]
    },
    {
        title: "ด่านที่ 2: อาการและการรักษา",
        pairs: [
            { id: "2-1", text: "อาการทางประสาทที่สำคัญ?", icon: "fa-brain", type: "q" },
            { id: "2-1", text: "เยื่อหุ้มสมองอักเสบ", icon: "fa-biohazard", type: "a" },
            { id: "2-2", text: "ความผิดปกติที่ขา/เดิน?", icon: "fa-walking", type: "q" },
            { id: "2-2", text: "ข้อบวม / ขาว่ายน้ำ", icon: "fa-swimmer", type: "a" },
            { id: "2-3", text: "ยาปฏิชีวนะหลักที่ใช้?", icon: "fa-pills", type: "q" },
            { id: "2-3", text: "เพนิซิลลิน (Penicillin)", icon: "fa-prescription-bottle", type: "a" },
            { id: "2-4", text: "วิธีป้องกันที่ดีที่สุด?", icon: "fa-shield-virus", type: "q" },
            { id: "2-4", text: "ระบบ Biosecurity", icon: "fa-user-shield", type: "a" }
        ]
    },
    {
        title: "ด่านที่ 3: บทบาททางเพศและพฤติกรรมเสี่ยง",
        pairs: [
            { id: "3-1", text: "ผู้หญิงเตรียมอาหาร", icon: "fa-utensils", type: "q" },
            { id: "3-1", text: "เสี่ยงรับเชื้อจากเนื้อดิบ", icon: "fa-hand-holding-medical", type: "a" },
            { id: "3-2", text: "ผู้ชายกลัวดูอ่อนแอ", icon: "fa-fist-raised", type: "q" },
            { id: "3-2", text: "หาหมอช้า / ซื้อยากินเอง", icon: "fa-pills", type: "a" },
            { id: "3-3", text: "อบรมแต่หัวหน้าครัวเรือนชาย", icon: "fa-chalkboard-teacher", type: "q" },
            { id: "3-3", text: "ผู้หญิงเลี้ยงจริงขาดความรู้", icon: "fa-female", type: "a" },
            { id: "3-4", text: "บุคลากรแพทย์หญิง 70%", icon: "fa-user-nurse", type: "q" },
            { id: "3-4", text: "ด่านหน้าเสี่ยงดื้อยา", icon: "fa-hospital-user", type: "a" }
        ]
    },
    {
        title: "ด่านที่ 4: อคติและโครงสร้างพื้นฐาน",
        pairs: [
            { id: "4-1", text: "แพทย์กับคนไข้ผู้หญิง", icon: "fa-stethoscope", type: "q" },
            { id: "4-1", text: "อคติจ่ายยาเกินจำเป็น", icon: "fa-prescription", type: "a" },
            { id: "4-2", text: "ผู้นำองค์กรชายล้วน", icon: "fa-user-tie", type: "q" },
            { id: "4-2", text: "นโยบายมองข้ามผู้หญิง", icon: "fa-eye-slash", type: "a" },
            { id: "4-3", text: "เกษตรกรหญิงทุนน้อย", icon: "fa-coins", type: "q" },
            { id: "4-3", text: "พึ่งยาถูกเพื่อพยุงชีพ", icon: "fa-hand-holding-usd", type: "a" },
            { id: "4-4", text: "ผู้หญิงรับบทเป็นผู้ดูแล", icon: "fa-hands-helping", type: "q" },
            { id: "4-4", text: "ขาดเงินซื้อยาคุณภาพ", icon: "fa-money-bill-wave-alt", type: "a" }
        ]
    },
    {
        title: "ด่านที่ 5: สุขภาพหนึ่งเดียว (AMR Finale)",
        pairs: [
            { id: "5-1", text: "ตัวเร่งเชื้อโรคดื้อยา?", icon: "fa-exclamation-triangle", type: "q" },
            { id: "5-1", text: "ใช้ยาพร่ำเพรื่อ/ผิดวิธี", icon: "fa-capsules", type: "a" },
            { id: "5-2", text: "ทำไมสุกรถึงป่วยง่าย?", icon: "fa-bolt", type: "q" },
            { id: "5-2", text: "ความเครียด (Stress)", icon: "fa-tired", type: "a" },
            { id: "5-3", text: "ห้องน้ำไม่สะอาด?", icon: "fa-toilet", type: "q" },
            { id: "5-3", text: "เป็น UTI บ่อยกินยาเยอะ", icon: "fa-bacteria", type: "a" },
            { id: "5-4", text: "เด็กเล่นน้ำ/ดินปนเปื้อน", icon: "fa-child", type: "q" },
            { id: "5-4", text: "เสี่ยงรับยาจากสิ่งแวดล้อม", icon: "fa-water", type: "a" },
            { id: "5-5", text: "สัตว์พาหะนำโรค", icon: "fa-spider", type: "q" },
            { id: "5-5", text: "แมลงวัน นก หนู", icon: "fa-crow", type: "a" },
            { id: "5-6", text: "การจัดการตัดวงจรโรค?", icon: "fa-sync", type: "q" },
            { id: "5-6", text: "เข้าหมด-ออกหมด", icon: "fa-arrow-right-arrow-left", type: "a" }
        ]
    }
];

let currentLevelIndex = 0;
let cards = [];
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0;
let matchedPairs = 0;
let timerInterval;
let seconds = 0;
let totalSeconds = 0;
let gameStarted = false;
let currentExplanation = "";
let currentAudio = null;

let mqttClient;
let isMultiplayer = false;
let roomId = "";
let isHost = false;
let myClientId = "client-" + Math.random().toString(16).substr(2, 8);

const gameContainer = document.getElementById('game-container');
const welcomeScreen = document.getElementById('welcome-screen');
const gameBoard = document.getElementById('game-board');
const movesDisplay = document.getElementById('moves');
const timeDisplay = document.getElementById('time');
const levelTitle = document.getElementById('level-title');
const levelModal = document.getElementById('level-modal');
const victoryModal = document.getElementById('victory-modal');

const aiCorner = document.getElementById('ai-corner');
const aiLoading = document.getElementById('ai-loading');
const aiContent = document.getElementById('ai-content');
const aiText = document.getElementById('ai-text');
const aiEmpty = document.getElementById('ai-empty');
const audioLoading = document.getElementById('audio-loading');

function onStartGame() {
    Swal.fire({
        title: 'กำลังเข้าสู่เกม...',
        html: 'เตรียมตัวให้พร้อม!',
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => { Swal.showLoading() },
        willClose: () => {
            welcomeScreen.classList.add('hidden');
            gameContainer.classList.remove('hidden');
            initGame(0);
        }
    });
}

function initGame(levelIndex) {
    currentLevelIndex = levelIndex;
    const levelData = levelsData[levelIndex];
    levelTitle.innerText = levelData.title;
    updateLevelIndicator(levelIndex);
    cards = [...levelData.pairs];
    shuffle(cards);
    resetLevelStats();
    renderBoard();
    aiCorner.classList.remove('hidden');
    resetAIBox();
}

function toggleKnowledgeBox() {
    const box = document.getElementById('manual-knowledge-box');
    if (box.classList.contains('hidden')) {
        box.classList.remove('hidden');
        setTimeout(() => box.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    } else {
        box.classList.add('hidden');
    }
}

function resetAIBox() {
    aiLoading.classList.add('hidden');
    aiContent.classList.add('hidden');
    aiEmpty.classList.remove('hidden');
    aiCorner.classList.remove('ai-pulse');
}

function updateLevelIndicator(index) {
    const totalDots = 5;
    for (let i = 0; i < totalDots; i++) {
        const dot = document.getElementById(`dot-${i + 1}`);
        const line = document.getElementById(`line-${i + 1}`);
        if (dot) dot.className = 'level-dot';
        if (line) line.className = 'level-line';
        if (i < index) {
            if (dot) dot.classList.add('completed');
            if (line) line.classList.add('filled');
        } else if (i === index) {
            if (dot) dot.classList.add('active');
        }
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderBoard() {
    gameBoard.innerHTML = '';
    const cardCount = cards.length;
    let cols = 'grid-cols-4';
    let gap = 'gap-2 md:gap-3';
    if (cardCount === 12) { cols = 'grid-cols-4'; gap = 'gap-2'; }
    gameBoard.className = `grid ${cols} ${gap} w-full`;
    cards.forEach((item) => {
        const cardElement = document.createElement('div');
        const heightClass = cardCount >= 12 ? 'h-24 md:h-28' : 'h-28 md:h-36';
        cardElement.className = `card-container w-full ${heightClass}`;
        const typeClass = item.type === 'q' ? 'type-q' : 'type-a';
        const tagLabel = item.type === 'q' ? 'คำถาม' : 'คำตอบ';
        const tagClass = item.type === 'q' ? 'tag-q' : 'tag-a';
        cardElement.innerHTML = `
            <div class="card w-full h-full" data-id="${item.id}">
                <div class="card-face card-front"></div>
                <div class="card-face card-back ${typeClass}">
                    <span class="card-type-tag ${tagClass}">${tagLabel}</span>
                    <span class="text-content ${typeClass}">${item.text}</span>
                </div>
            </div>
        `;
        const cardInner = cardElement.querySelector('.card');
        cardInner.addEventListener('click', function () { flipCard(this, true); });
        gameBoard.appendChild(cardElement);
    });
}

function flipCard(cardWrapper, isLocalAction = false) {
    const card = cardWrapper;
    if (!gameStarted) {
        startTimer();
        gameStarted = true;
        if (isLocalAction && isMultiplayer) sendGameAction('START_TIMER', {});
    }
    if (lockBoard) return;
    if (card === firstCard) return;
    if (card.classList.contains('flipped')) return;
    if (isLocalAction && isMultiplayer) {
        const cardIndex = Array.from(gameBoard.children).indexOf(card.parentElement);
        sendGameAction('FLIP', { cardIndex: cardIndex });
    }
    card.classList.add('flipped');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = card;
        return;
    }
    secondCard = card;
    incrementMoves();
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.id === secondCard.dataset.id;
    if (isMatch) { disableCards(); } else { unflipCards(); }
}

function disableCards() {
    const card1 = firstCard;
    const card2 = secondCard;
    setTimeout(() => {
        const back1 = card1.querySelector('.card-back');
        const back2 = card2.querySelector('.card-back');
        back1.classList.remove('type-q', 'type-a');
        back2.classList.remove('type-q', 'type-a');
        back1.classList.add('matched-style');
        back2.classList.add('matched-style');
        card1.classList.add('card-match-anim');
        card2.classList.add('card-match-anim');
        back1.innerHTML += '<i class="fas fa-check-circle" style="position:absolute;top:5px;right:6px;color:#059669;font-size:0.9rem"></i>';
        back2.innerHTML += '<i class="fas fa-check-circle" style="position:absolute;top:5px;right:6px;color:#059669;font-size:0.9rem"></i>';
    }, 200);
    const text1 = firstCard.querySelector('.text-content').innerText;
    const text2 = secondCard.querySelector('.text-content').innerText;
    fetchAIExplanation(text1, text2, firstCard.dataset.id);
    matchedPairs++;
    resetBoard();
    if (matchedPairs === cards.length / 2) {
        setTimeout(levelComplete, 1500);
    }
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function incrementMoves() {
    moves++;
    movesDisplay.innerText = moves;
}

const explanationCache = {};

const backupKnowledge = {
    "1-1": "S. suis (สเตรปโตคอคคัส ซูอิส) เป็นแบคทีเรียแกรมบวกตัวจิ๋วที่มีแคปซูลหุ้มตัว ช่วยให้มันหลบหลีกภูมิคุ้มกันได้เก่ง มันคือสาเหตุหลักของโรค 'หูดับ' ซึ่งไม่ได้ทำให้หมูป่วยเท่านั้น แต่ยังมีอันตรายร้ายแรงหากติดต่อสู่คน การรู้จักตัวตนของมันจึงเป็นก้าวแรกของการป้องกันโรค",
    "1-2": "โรคหูดับถือเป็น 'โรคติดต่อระหว่างสัตว์และคน' (Zoonosis) ที่มีความรุนแรงสูงมาก หากเรากินเนื้อหมูสุกๆ ดิบๆ หรือมีบาดแผลแล้วไปสัมผัสหมูป่วย เชื้อจะเข้าสู่กระแสเลือด นำไปสู่ภาวะเยื่อหุ้มสมองอักเสบ หูหนวกถาวร หรือถึงขั้นเสียชีวิตได้",
    "1-3": "เชื้อ S. suis อาศัยอยู่ตามทอนซิลและโพรงจมูกของหมู มันจึงแพร่กระจายได้ง่ายมากผ่านทางจมูก ปาก และบาดแผล โดยเฉพาะเวลาหมูอยู่ใกล้ชิดกัน หรือเวลาคนชำแหละเนื้อหมูโดยไม่สวมถุงมือป้องกัน ทำให้การรักษาสุขอนามัยเป็นสิ่งจำเป็นสูงสุด",
    "1-4": "โรงเรือนที่แออัดและอากาศไม่ถ่ายเทเปรียบเสมือน 'เตาอบเชื้อโรค' สภาพอับชื้นทำให้ก๊าซแอมโมเนียพุ่งสูงจนบาดทำลายเยื่อบุทางเดินหายใจของหมู ทำให้เชื้อแบคทีเรียที่ซ่อนอยู่ฉวยโอกาสโจมตีและแพร่กระจายไปทั้งฝูงได้อย่างรวดเร็ว",
    "2-1": "เมื่อเชื้อเข้าสู่กระแสเลือด มันชอบที่จะพุ่งเป้าไปที่สมอง ทำให้เกิด 'เยื่อหุ้มสมองอักเสบ' (Meningitis) หมูจะแสดงอาการทางประสาทอย่างชัดเจน เช่น ชักเกร็ง คอแข็ง ตาเหลือก ซึ่งเป็นสัญญาณอันตรายว่าเชื้อได้ทำลายระบบประสาทส่วนกลางแล้ว",
    "2-2": "นอกจากสมองแล้ว เชื้อยังมักไปสะสมและแบ่งตัวตามข้อต่อต่างๆ ทำให้เกิดภาวะข้ออักเสบเป็นหนอง หมูจะเจ็บปวดจนไม่อยากเดิน หรือหากล้มลงนอนจะแสดงอาการชักตะกุยขาไปมาในอากาศ คล้ายกับกำลังว่ายน้ำอยู่",
    "2-3": "ยาเพนิซิลลิน (Penicillin) เป็นยาปฏิชีวนะกลุ่มแรกๆ ที่ยังคงใช้เป็น 'อาวุธหลัก' ในการรักษาโรคหูดับได้อย่างมีประสิทธิภาพ แต่หัวใจสำคัญคือต้องให้สัตวแพทย์เป็นผู้สั่งจ่าย และต้องใช้ให้ครบโดส เพื่อป้องกันไม่ให้เชื้อแบคทีเรียรอดตายและพัฒนากลายเป็นเชื้อดื้อยา",
    "2-4": "ไม่มีการรักษาใดดีไปกว่าการป้องกัน ระบบความปลอดภัยทางชีวภาพ (Biosecurity) คือกำแพงด่านแรกของฟาร์ม ตั้งแต่การพ่นยาฆ่าเชื้อรถเข้าออก การเปลี่ยนชุดก่อนเข้าฟาร์ม ไปจนถึงการกักกันสัตว์ใหม่ เพื่อสกัดกั้นไม่ให้เชื้อ S. suis หรือโรคอื่นๆ เล็ดลอดเข้ามาได้",
    "3-1": "ในหลายวัฒนธรรม ผู้หญิงมักรับบทบาทหลักในการเข้าครัวทำอาหาร ทำให้พวกเธอมีความเสี่ยงสูงที่จะสัมผัสเชื้อ S. suis ผ่านแผลเล็กๆ ที่มือขณะหั่นหรือล้างเนื้อหมูดิบ การสวมถุงมือและแยกเขียงหั่นเนื้อกับผักจึงเป็นเรื่องที่แม่ครัวต้องใส่ใจ",
    "3-2": "ค่านิยมที่มองว่า 'ลูกผู้ชายต้องเข้มแข็ง' (Toxic Masculinity) ทำให้ผู้ชายหลายคนเมื่อป่วยจะไม่ยอมไปหาหมอ แต่เลือกที่จะทนหรือไปซื้อยาปฏิชีวนะแรงๆ มากินเอง พฤติกรรมกินยาผิดวิธีแบบนี้นอกจากจะไม่หายขาดแล้ว ยังเป็นตัวเร่งให้เกิดวิกฤตเชื้อดื้อยาระดับโลกอีกด้วย",
    "3-3": "โครงการส่งเสริมความรู้ด้านปศุสัตว์มักเชิญ 'หัวหน้าครอบครัว' ซึ่งส่วนใหญ่เป็นผู้ชายไปอบรม แต่ในความเป็นจริง ผู้หญิงมักเป็นคนคลุกคลีให้อาหารและดูแลหมูป่วย เมื่อความรู้เรื่องการใช้ยาไปไม่ถึงผู้ปฏิบัติงานจริง การให้ยาผิดพลาดจึงเกิดขึ้นได้ง่าย",
    "3-4": "รู้หรือไม่ว่าบุคลากรทางการแพทย์และผู้ดูแลผู้ป่วยกว่า 70% ทั่วโลกคือผู้หญิง? พวกเธอคือ 'ด่านหน้า' ที่ต้องสัมผัสสารคัดหลั่งและดูแลผู้ป่วยติดเชื้อดื้อยาอย่างใกล้ชิด ทำให้ผู้หญิงในสายอาชีพนี้แบกรับความเสี่ยงด้านสุขภาพที่สูงกว่าอย่างหลีกเลี่ยงไม่ได้",
    "4-1": "งานวิจัยพบความจริงที่น่าตกใจว่า แพทย์บางส่วนอาจมีอคติโดยไม่รู้ตัว มักประเมินว่าผู้หญิงอ่อนแอหรือกังวลเกินจริง จึงมีแนวโน้มจ่ายยาปฏิชีวนะให้คนไข้หญิงมากกว่าคนไข้ชาย การได้รับยาเกินความจำเป็นตลอดช่วงชีวิต ทำให้ผู้หญิงเสี่ยงต่อภาวะดื้อยามากขึ้น",
    "4-2": "เมื่อที่ประชุมกำหนดนโยบายสาธารณสุขมีสัดส่วนผู้นำชายที่มากเกินไป ปัญหาเชิงโครงสร้างที่ผู้หญิงต้องเผชิญ เช่น ภาระการดูแลผู้ป่วยที่บ้าน มักจะตกหล่นและไม่ถูกนำมาพิจารณาเป็นนโยบายระดับชาติ ทำให้การแก้ปัญหาเชื้อดื้อยาไม่ครอบคลุมทุกมิติ",
    "4-3": "ความเหลื่อมล้ำทางเศรษฐกิจทำให้เกษตรกรหญิงรายย่อยมักเข้าไม่ถึงแหล่งเงินทุนและบริการสัตวแพทย์ เมื่อหมูป่วย พวกเธอจึงไม่มีทางเลือกอื่นนอกจากต้องพึ่งพายาปฏิชีวนะราคาถูกหรือยาชุดเพื่อรักษาทรัพย์สินเดียวที่มี เป็นการใช้ยาด้วยความจำใจจากโครงสร้างที่ไม่เอื้ออำนวย",
    "4-4": "สังคมมักคาดหวังให้ผู้หญิงรับบทบาทเป็น 'ผู้ดูแลหลัก' ของครอบครัว แต่หากพวกเธอไม่มีอำนาจทางการเงินหรือรายได้ของตัวเอง เมื่อมีคนป่วย ก็อาจจำใจต้องไปหาซื้อยาชุดหรือยาที่ไม่ได้มาตรฐานตามร้านชำมาใช้รักษาตามมีตามเกิด",
    "5-1": "วิกฤตเชื้อดื้อยา (AMR) ไม่ได้เกิดจากธรรมชาติเพียงอย่างเดียว แต่ถูกเร่งด้วยน้ำมือมนุษย์! การซื้อยากินพร่ำเพรื่อ กินยาไม่ครบโดส หรือเอายาฆ่าเชื้อแบคทีเรียไปกินแก้โรคหวัด (ไวรัส) ล้วนเป็นการฝึกฝนให้แบคทีเรียรู้จักยาและกลายพันธุ์จนยาเดิมใช้ไม่ได้ผลอีกต่อไป",
    "5-2": "ความเครียดคือศัตรูเงียบที่ทำลายภูมิคุ้มกัน ไม่ว่าจะเป็นการย้ายคอก อากาศที่ร้อนจัด หรือการหย่านมลูกหมูเร็วเกินไป สิ่งเหล่านี้ทำให้ร่างกายหมูอ่อนแอลง เปิดประตูให้เชื้อ S. suis ที่แอบซ่อนอยู่ตามทอนซิล ลุกฮือขึ้นมาแบ่งตัวและก่อโรครุนแรงได้ทันที",
    "5-3": "เนื่องจากสรีระที่สั้นกว่า ผู้หญิงจึงเสี่ยงติดเชื้อทางเดินปัสสาวะ (UTI) ได้ง่าย ยิ่งหากโครงสร้างพื้นฐานอย่างห้องน้ำสาธารณะไม่สะอาด พวกเธอจะป่วยซ้ำซาก นำไปสู่ความจำเป็นต้องกินยาปฏิชีวนะบ่อยครั้งจนเกิดการสะสมและเสี่ยงต่อเชื้อดื้อยา",
    "5-4": "เด็กๆ เป็นวัยที่กำลังเรียนรู้ ชอบวิ่งเล่น คลุกฝุ่น คลุกทราย หรือเล่นน้ำตามธรรมชาติ หากสภาพแวดล้อมเหล่านั้นมีการปนเปื้อนของยาปฏิชีวนะตกค้างจากฟาร์มปศุสัตว์หรือชุมชน เด็กๆ ก็กลายเป็นกลุ่มเปราะบางที่เสี่ยงจะรับเชื้อดื้อยาเข้าสู่ร่างกายตั้งแต่ยังเล็ก",
    "5-5": "กำแพงฟาร์มที่แน่นหนาอาจไร้ความหมาย หากละเลย 'สายลับ' ตัวจิ๋วอย่าง แมลงวัน นก และหนู สัตว์พาหะเหล่านี้สามารถนำพาเชื้อโรคดื้อยาหรือ S. suis บินข้ามจากฟาร์มหนึ่งไปยังอีกฟาร์มหนึ่ง การควบคุมแมลงและสัตว์ฟันแทะจึงขาดไม่ได้เลย",
    "5-6": "การเลี้ยงหมูแบบ 'เข้าหมด-ออกหมด' (All-in All-out) คือเคล็ดลับสำคัญในการตัดวงจรโรค เมื่อจับหมูออกขายหมดแล้ว ต้องมีการล้าง พักเล้า และฉีดพ่นยาฆ่าเชื้อให้สะอาดหมดจดก่อนนำหมูรุ่นใหม่เข้ามา เพื่อรับประกันว่าจะไม่มีเชื้อโรคตกค้างส่งต่อไปยังรุ่นถัดไป"
};

async function fetchAIExplanation(term1, term2, pairId) {
    aiEmpty.classList.add('hidden');
    aiContent.classList.add('hidden');
    aiLoading.classList.remove('hidden');
    aiCorner.classList.add('ai-pulse');
    const cacheKey = [term1, term2].sort().join('||');
    if (pairId && backupKnowledge[pairId]) {
        currentExplanation = backupKnowledge[pairId];
        setTimeout(() => displayAIResult(currentExplanation), 500);
        return;
    }
    if (explanationCache[cacheKey]) {
        currentExplanation = explanationCache[cacheKey];
        displayAIResult(currentExplanation);
        return;
    }
    const fallbackText = `ความสัมพันธ์ระหว่าง "${term1}" และ "${term2}" เป็นสิ่งสำคัญในการเข้าใจโรค S. suis และผลกระทบตามแนวทาง One Health`;
    try {
        const modelName = "gemini-1.5-flash";
        const prompt = `Explain the connection between '${term1}' and '${term2}' regarding Streptococcus suis, Antimicrobial Resistance (AMR), and Gender roles in One Health context. Provide a highly detailed, comprehensive, and very fun, energetic, and engaging explanation for Thai students. Act like a friendly, enthusiastic older brother. Use clear Thai language, about 4-6 sentences long.`;
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        if (!response.ok) throw new Error('API request failed');
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
            currentExplanation = text;
            explanationCache[cacheKey] = text;
        } else {
            currentExplanation = fallbackText;
        }
    } catch (e) {
        console.error("AI Error:", e);
        currentExplanation = fallbackText + " (ใช้ข้อมูลสำรองเนื่องจากต่อ AI ไม่ได้)";
    }
    displayAIResult(currentExplanation);
    playAIAudio();
}

function displayAIResult(text) {
    aiLoading.classList.add('hidden');
    aiCorner.classList.remove('ai-pulse');
    aiContent.classList.remove('hidden');
    aiText.innerText = text;
}

async function playAIAudio() {
    if (!currentExplanation) return;
    if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
    window.speechSynthesis.cancel();
    const btn = document.getElementById('btn-play-audio');
    const loading = document.getElementById('audio-loading');
    btn.disabled = true;
    btn.classList.add('opacity-50');
    loading.classList.remove('hidden');
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: "Say cheerfully, enthusiastically, and engagingly like a fun podcaster: " + currentExplanation }] }],
                generationConfig: {
                    responseModalities: ["AUDIO"],
                    speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Puck" } } }
                }
            })
        });
        if (!response.ok) throw new Error('TTS API Error');
        const data = await response.json();
        const audioBase64 = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (audioBase64) {
            const binaryString = atob(audioBase64);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) { bytes[i] = binaryString.charCodeAt(i); }
            const wavBytes = pcm16ToWav(bytes, 24000);
            const blob = new Blob([wavBytes], { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(blob);
            currentAudio = new Audio(audioUrl);
            currentAudio.play();
            currentAudio.onended = () => { btn.disabled = false; btn.classList.remove('opacity-50'); };
        } else { throw new Error("No audio data"); }
    } catch (e) {
        console.error("TTS Error:", e);
        const utterance = new SpeechSynthesisUtterance(currentExplanation);
        utterance.lang = 'th-TH';
        speechSynthesis.speak(utterance);
        btn.disabled = false;
        btn.classList.remove('opacity-50');
    } finally { loading.classList.add('hidden'); }
}

function pcm16ToWav(pcmData, sampleRate) {
    const numChannels = 1;
    const bitsPerSample = 16;
    const byteRate = sampleRate * numChannels * bitsPerSample / 8;
    const blockAlign = numChannels * bitsPerSample / 8;
    const wavHeader = new ArrayBuffer(44);
    const view = new DataView(wavHeader);
    const writeString = (view, offset, string) => { for (let i = 0; i < string.length; i++) { view.setUint8(offset + i, string.charCodeAt(i)); } };
    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + pcmData.length, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, byteRate, true);
    view.setUint16(32, blockAlign, true);
    view.setUint16(34, bitsPerSample, true);
    writeString(view, 36, 'data');
    view.setUint32(40, pcmData.length, true);
    const wavBody = new Uint8Array(wavHeader.byteLength + pcmData.length);
    wavBody.set(new Uint8Array(wavHeader), 0);
    wavBody.set(pcmData, wavHeader.byteLength);
    return wavBody;
}

const knowledgeData = {
    antibiotics: [
        { title: "วิกฤตเชื้อดื้อยา (AMR)", icon: "fa-exclamation-triangle", color: "text-red-500", content: `<div class="mb-3"><p class="mb-3">การใช้ยาปฏิชีวนะมากเกินจำเป็นหรือใช้ผิดวิธี ก่อให้เกิดวิกฤต <strong>"เชื้อดื้อยาต้านจุลชีพ" (AMR)</strong></p><div class="bg-red-50 p-4 rounded-md border-l-4 border-red-500 text-sm"><strong>ข้อควรระวัง:</strong> ยาปฏิชีวนะฆ่าแบคทีเรียเท่านั้น ไม่ฆ่าไวรัส</div></div>` },
        { title: "การจัดการฟาร์ม (Management)", icon: "fa-shield-alt", color: "text-blue-500", content: `<div class="mb-4"><p class="mb-4">เน้นการใช้ยาเป็นทางเลือกสุดท้าย:</p><ul class="list-disc pl-5 space-y-2 text-sm"><li><strong>Biosecurity:</strong> ระบบ "เข้าหมด-ออกหมด"</li><li><strong>สิ่งแวดล้อม:</strong> ควบคุมความเครียดและก๊าซแอมโมเนีย</li><li><strong>โภชนาการ:</strong> อาหารครบและน้ำสะอาด</li></ul></div>` },
        { title: "นวัตกรรมทดแทนยา (Alternative)", icon: "fa-seedling", color: "text-green-500", content: `<div class="grid md:grid-cols-2 gap-4"><div class="bg-green-50 p-3 rounded"><h4 class="font-bold text-green-700">วัคซีน</h4><p class="text-xs">ป้องกันต้นเหตุ กระตุ้นภูมิคุ้มกัน</p></div><div class="bg-blue-50 p-3 rounded"><h4 class="font-bold text-blue-700">Probiotics</h4><p class="text-xs">ปรับสมดุลจุลินทรีย์ลำไส้</p></div><div class="bg-yellow-50 p-3 rounded"><h4 class="font-bold text-yellow-700">สมุนไพร</h4><p class="text-xs">ต้านเชื้อแบคทีเรียและลดอักเสบ</p></div><div class="bg-purple-50 p-3 rounded"><h4 class="font-bold text-purple-700">กรดอินทรีย์</h4><p class="text-xs">ปรับสภาพลำไส้ไม่ให้เชื้อโรคโต</p></div></div>` }
    ],
    ssuis: [
        { title: "ลักษณะและการระบาด", icon: "fa-microscope", color: "text-blue-600", content: `<p class="mb-2 text-sm">แบคทีเรียแกรมบวก รูปร่างกลม Serotype 2 ก่อโรครุนแรงสุด</p><ul class="list-disc pl-5 text-sm"><li><strong>กลุ่มเสี่ยง:</strong> สุกรอนุบาล (5-10 สัปดาห์)</li><li><strong>ช่องทาง:</strong> สัมผัสจมูกต่อจมูก, การกิน</li></ul>` },
        { title: "อาการและรอยโรค", icon: "fa-stethoscope", color: "text-purple-600", content: `<ul class="list-disc pl-5 mb-2 text-sm"><li><strong>ระบบประสาท:</strong> เยื่อหุ้มสมองอักเสบ ชักเกร็ง</li><li><strong>ระบบข้อ:</strong> ข้ออักเสบ บวม ขาเจ็บ</li></ul>` },
        { title: "การรักษาและควบคุม", icon: "fa-pills", color: "text-green-600", content: `<p class="text-sm mb-2"><strong>การรักษา:</strong> ยาปฏิชีวนะกลุ่ม Penicillin หรือ Amoxicillin</p><p class="text-sm"><strong>การป้องกัน:</strong> Biosecurity, ลดความเครียด, วัคซีน</p>` }
    ],
    gender_amr: [
        { title: "บทบาทในครัวเรือน", icon: "fa-home", color: "text-green-600", content: `<p class="mb-2 text-sm"><strong>ผู้หญิง:</strong> มักเป็นผู้ดูแลใกล้ชิดผู้ป่วย เสี่ยงสัมผัสแหล่งเชื้อ</p><p class="text-sm"><strong>การเข้าถึงทุน:</strong> เกษตรกรหญิงรายย่อยมักขาดทุนทรัพย์</p>` },
        { title: "พฤติกรรมสถานพยาบาล", icon: "fa-hospital", color: "text-purple-600", content: `<ul class="list-disc pl-5 space-y-1 text-sm"><li><strong>ด่านหน้า:</strong> บุคลากรแพทย์ 70% คือผู้หญิง</li><li><strong>ผู้ชาย:</strong> ค่านิยมชายเป็นใหญ่ทำให้ไม่กล้าหาหมอ</li><li><strong>อคติ:</strong> แพทย์มักจ่ายยาให้คนไข้หญิงมากกว่า</li></ul>` },
        { title: "นโยบายระดับชาติ", icon: "fa-balance-scale", color: "text-indigo-600", content: `<p class="mb-2 text-sm">ผู้นำองค์กรสุขภาพกว่า 70% เป็นผู้ชาย ทำให้นโยบายมักมองข้ามปัญหาความเปราะบางของผู้หญิง</p><p class="text-sm"><strong>ทางออก:</strong> เพิ่มสัดส่วนผู้หญิงในคณะทำงาน AMR</p>` }
    ]
};

let currentTab = 'antibiotics';
let openAccordionIndex = null;

function switchTab(tab) { currentTab = tab; openAccordionIndex = null; renderKnowledgeUI(); }
function toggleAccordion(index) { openAccordionIndex = openAccordionIndex === index ? null : index; renderKnowledgeUI(); }

function renderKnowledgeUI() {
    const tabAntibiotics = document.getElementById('tab-antibiotics');
    const tabSsuis = document.getElementById('tab-ssuis');
    const tabGender = document.getElementById('tab-gender');
    const inactiveClass = 'flex-1 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all duration-200 text-gray-500 hover:text-gray-700';
    const activeBase = 'flex-1 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all duration-200 bg-white shadow-sm';
    tabAntibiotics.className = inactiveClass;
    tabSsuis.className = inactiveClass;
    tabGender.className = inactiveClass;
    if (currentTab === 'antibiotics') {
        tabAntibiotics.className = activeBase + ' text-indigo-700';
        document.getElementById('section-title').innerText = 'นวัตกรรมลดยาปฏิชีวนะ';
        document.getElementById('section-subtitle').innerText = 'ทางเลือกใหม่เพื่อความยั่งยืน';
    } else if (currentTab === 'ssuis') {
        tabSsuis.className = activeBase + ' text-red-700';
        document.getElementById('section-title').innerText = 'โรคหูดับ (S. suis)';
        document.getElementById('section-subtitle').innerText = 'ระบาดวิทยาและการควบคุมโรค';
    } else if (currentTab === 'gender_amr') {
        tabGender.className = activeBase + ' text-purple-700';
        document.getElementById('section-title').innerText = 'ความเสมอภาคและวิกฤตดื้อยา';
        document.getElementById('section-subtitle').innerText = 'บทบาททางสังคมที่มีผลต่อ AMR';
    }
    const container = document.getElementById('accordion-container');
    container.innerHTML = '';
    const items = knowledgeData[currentTab];
    items.forEach((item, index) => {
        const isOpen = openAccordionIndex === index;
        const div = document.createElement('div');
        div.className = "border border-gray-200 rounded-lg mb-3 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 bg-white";
        div.innerHTML = `
            <button onclick="toggleAccordion(${index})" class="w-full flex items-center justify-between p-4 text-left transition-colors duration-200 ${isOpen ? 'bg-blue-50 text-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'}">
                <div class="flex items-center gap-3"><i class="fas ${item.icon} text-lg ${isOpen ? 'text-blue-600' : 'text-gray-400'}"></i><span class="font-semibold text-sm md:text-base">${item.title}</span></div>
                <i class="fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} ${isOpen ? 'text-blue-600' : 'text-gray-400'}"></i>
            </button>
            ${isOpen ? `<div class="p-5 bg-white text-gray-600 leading-relaxed border-t border-gray-100">${item.content}</div>` : ''}
        `;
        container.appendChild(div);
    });
}

renderKnowledgeUI();

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => { seconds++; totalSeconds++; updateTimeDisplay(); }, 1000);
}

function updateTimeDisplay() {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    timeDisplay.innerText = `${mins}:${secs}`;
}

function resetLevelStats() {
    moves = 0; seconds = 0; matchedPairs = 0; gameStarted = false;
    clearInterval(timerInterval);
    movesDisplay.innerText = '0';
    timeDisplay.innerText = '00:00';
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function levelComplete() {
    clearInterval(timerInterval);
    document.getElementById('modal-level-num').innerText = currentLevelIndex + 1;
    document.getElementById('level-time').innerText = timeDisplay.innerText;
    document.getElementById('level-moves').innerText = moves;
    if (currentLevelIndex < levelsData.length - 1) {
        document.getElementById('modal-msg').innerText = "เยี่ยมมาก! เตรียมตัวสำหรับด่านถัดไป";
        levelModal.classList.remove('hidden');
    } else { showVictory(); }
}

function nextLevel(isLocalAction = true) {
    if (isLocalAction && isMultiplayer) sendGameAction('NEXT_LEVEL', {});
    levelModal.classList.add('hidden');
    initGame(currentLevelIndex + 1);
}

function showVictory() {
    const mins = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    document.getElementById('total-time').innerText = `${mins}:${secs}`;
    victoryModal.classList.remove('hidden');
}

function restartGame(isLocalAction = true) {
    if (isLocalAction && isMultiplayer) sendGameAction('RESTART', {});
    victoryModal.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    gameContainer.classList.add('hidden');
    totalSeconds = 0;
}

function openMultiplayerModal() {
    if (isMultiplayer) { if (confirm('ต้องการตัดการเชื่อมต่อหรือไม่?')) { disconnectMQTT(); } }
    else { document.getElementById('multiplayer-modal').classList.remove('hidden'); }
}

function connectMQTT() {
    const input = document.getElementById('room-id-input').value.trim();
    if (!input) return alert("กรุณาใส่ชื่อห้อง");
    roomId = input;
    document.getElementById('multiplayer-modal').classList.add('hidden');
    const btn = document.getElementById('btn-multiplayer');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> กำลังเชื่อมต่อ...';
    mqttClient = new Paho.MQTT.Client("broker.emqx.io", 8083, myClientId);
    mqttClient.onConnectionLost = onConnectionLost;
    mqttClient.onMessageArrived = onMessageArrived;
    mqttClient.connect({ onSuccess: onConnect, onFailure: onFailure, keepAliveInterval: 30 });
}

function onConnect() {
    isMultiplayer = true;
    const btn = document.getElementById('btn-multiplayer');
    btn.className = 'mp-btn connected';
    btn.innerHTML = `<i class="fas fa-circle" style="font-size:0.5rem;color:#059669"></i> ห้อง: ${roomId}`;
    mqttClient.subscribe(`ssuis-game/${roomId}/action`);
}

function onFailure(responseObject) { alert('เชื่อมต่อล้มเหลว: ' + responseObject.errorMessage); resetMultiplayerUI(); }
function onConnectionLost(responseObject) { if (responseObject.errorCode !== 0) console.log('Connection Lost: ' + responseObject.errorMessage); resetMultiplayerUI(); }
function disconnectMQTT() { if (mqttClient) mqttClient.disconnect(); resetMultiplayerUI(); }

function resetMultiplayerUI() {
    isMultiplayer = false;
    const btn = document.getElementById('btn-multiplayer');
    btn.className = 'mp-btn';
    btn.innerHTML = '<i class="fas fa-users"></i><span id="multiplayer-status">เล่นกับเพื่อน</span>';
}

function sendGameAction(type, payload) {
    if (!mqttClient || !isMultiplayer) return;
    const message = new Paho.MQTT.Message(JSON.stringify({ sender: myClientId, type: type, payload: payload }));
    message.destinationName = `ssuis-game/${roomId}/action`;
    mqttClient.send(message);
}

function onMessageArrived(message) {
    try {
        const data = JSON.parse(message.payloadString);
        if (data.sender === myClientId) return;
        switch (data.type) {
            case 'FLIP': handleRemoteFlip(data.payload.cardIndex); break;
            case 'START_TIMER': if (!gameStarted) { startTimer(); gameStarted = true; } break;
            case 'NEXT_LEVEL': nextLevel(false); break;
            case 'RESTART': restartGame(false); break;
        }
    } catch (e) { console.error("Msg Parse Error", e); }
}

function handleRemoteFlip(index) {
    const cardContainer = gameBoard.children[index];
    if (cardContainer) {
        const card = cardContainer.querySelector('.card');
        if (card && !card.classList.contains('flipped')) flipCard(card, false);
    }
}
