// 單字庫
const fullWordList = [
    { word: 'absorb', meaning: '吸收', options: ['吸收', '配件', '達到', '酸'] },
    { word: 'accessory', meaning: '配件；附件；附屬的', options: ['配件；附件；附屬的', '達到', '酸', '粉刺'] },
    { word: 'achieve', meaning: '達到；完成；實現', options: ['吸收', '達到；完成；實現', '酸', '粉刺'] },
    { word: 'acid', meaning: '酸', options: ['吸收', '配件', '達到', '酸'] },
    { word: 'acne', meaning: '粉刺；青春痘', options: ['吸收', '配件', '達到', '粉刺；青春痘'] },
    { word: 'action', meaning: '行動；作用', options: ['行動；作用', '激活', '進展', '過敏'] },
    { word: 'activate', meaning: '使活化；激活；啟動', options: ['行動', '使活化；激活；啟動', '進展', '過敏'] },
    { word: 'advance', meaning: '被晉升；進展；提高', options: ['行動', '激活', '被晉升；進展；提高', '過敏'] },
    { word: 'after sun', meaning: '日曬後使用', options: ['日曬後使用', '海藻', '過敏的', '過敏'] },
    { word: 'alga', meaning: '海藻', options: ['日曬後使用', '海藻', '過敏的', '過敏'] },
    { word: 'allergic', meaning: '過敏的', options: ['日曬後使用', '海藻', '過敏的', '杏仁'] },
    { word: 'allergy', meaning: '過敏', options: ['海藻', '過敏的', '過敏', '杏仁'] },
    { word: 'almond', meaning: '杏仁', options: ['過敏的', '過敏', '杏仁', '蘆薈'] },
    { word: 'aloe vera', meaning: '蘆薈', options: ['杏仁', '蘆薈', '琥珀', '塗；敷'] },
    { word: 'amber', meaning: '琥珀；琥珀色；黃褐色', options: ['蘆薈', '琥珀；琥珀色；黃褐色', '塗；敷', '杏黃色'] },
    { word: 'apply', meaning: '塗；敷；申請；應用', options: ['琥珀', '塗；敷；申請；應用', '杏黃色', '腋下'] },
    { word: 'apricot', meaning: '杏黃色；杏仁', options: ['塗；敷', '杏黃色；杏仁', '腋下', '香氣'] },
    { word: 'armpit', meaning: '腋下；腋窩', options: ['杏黃色', '腋下；腋窩', '香氣', '亞洲的'] },
    { word: 'aroma', meaning: '香氣；香味', options: ['腋下', '香氣；香味', '亞洲的', '注意'] },
    { word: 'Asian', meaning: '亞洲的；亞洲人', options: ['香氣', '亞洲的；亞洲人', '注意', '擴大'] },
    { word: 'attention', meaning: '注意', options: ['亞洲的', '注意', '擴大', '禿頭的'] },
    { word: 'augmentation', meaning: '擴大；增加；增加物', options: ['注意', '擴大；增加；增加物', '禿頭的', '球'] },
    { word: 'bald', meaning: '禿頭的', options: ['擴大', '禿頭的', '球', '香膏'] },
    { word: 'ball', meaning: '球', options: ['禿頭的', '球', '香膏', '瀏海'] },
    { word: 'balm', meaning: '香膏；香脂油；香味', options: ['球', '香膏；香脂油；香味', '瀏海', '底部'] },
    { word: 'bangs', meaning: '瀏海', options: ['香膏', '瀏海', '底部', '美麗'] },
    { word: 'base', meaning: '底部', options: ['瀏海', '底部', '美麗', '美容院'] },
    { word: 'beauty', meaning: '美麗；美人；美的事物', options: ['底部', '美麗；美人；美的事物', '美容院', '米黃色'] },
    { word: 'beauty salon', meaning: '美容院', options: ['美麗', '美容院', '米黃色', '生物技術'] },
    { word: 'beige', meaning: '米黃色', options: ['美容院', '米黃色', '生物技術', '刀片'] },
    { word: 'biotech', meaning: '生物技術；生物科技', options: ['米黃色', '生物技術；生物科技', '刀片', '瑕疵'] },
    { word: 'blade', meaning: '刀片', options: ['生物技術', '刀片', '瑕疵', '混和'] },
    { word: 'blemish', meaning: '傷疤；瑕疵；使有缺點', options: ['刀片', '傷疤；瑕疵；使有缺點', '混和', '攪拌器'] },
    { word: 'blend', meaning: '混和', options: ['瑕疵', '混和', '攪拌器', '塊'] },
    { word: 'blender', meaning: '攪拌器', options: ['混和', '攪拌器', '塊', '腮紅'] },
    { word: 'block', meaning: '塊；阻塞物', options: ['攪拌器', '塊；阻塞物', '腮紅', '腮紅刷'] },
    { word: 'book', meaning: '書本', options: ['書本', '筆記本', '雜誌', '報紙'] },
    { word: 'cat', meaning: '貓', options: ['狗', '貓', '兔子', '老鼠'] },
    { word: 'dog', meaning: '狗', options: ['貓', '兔子', '狗', '鳥'] },
    { word: 'elephant', meaning: '大象', options: ['獅子', '老虎', '長頸鹿', '大象'] },
    { word: 'flower', meaning: '花', options: ['花', '樹', '草', '葉子'] },
    { word: 'guitar', meaning: '吉他', options: ['鋼琴', '吉他', '小提琴', '鼓'] },
    { word: 'house', meaning: '房子', options: ['公寓', '房子', '商店', '學校'] },
    { word: 'ice cream', meaning: '冰淇淋', options: ['蛋糕', '餅乾', '冰淇淋', '巧克力'] },
    { word: 'jacket', meaning: '外套', options: ['褲子', '外套', '襯衫', '裙子'] },
    { word: 'key', meaning: '鑰匙', options: ['鑰匙', '門', '鎖', '窗戶'] },
    { word: 'lion', meaning: '獅子', options: ['老虎', '獅子', '豹', '狼'] },
    { word: 'moon', meaning: '月亮', options: ['太陽', '月亮', '星星', '雲'] },
    { word: 'notebook', meaning: '筆記本', options: ['書本', '筆記本', '日記', '字典'] },
    { word: 'orange', meaning: '橘子', options: ['蘋果', '橘子', '香蕉', '梨子'] },
    { word: 'pencil', meaning: '鉛筆', options: ['鉛筆', '原子筆', '蠟筆', '麥克筆'] },
    { word: 'queen', meaning: '女王', options: ['國王', '女王', '公主', '王子'] },
    { word: 'rabbit', meaning: '兔子', options: ['貓', '狗', '兔子', '倉鼠'] },
    { word: 'sun', meaning: '太陽', options: ['月亮', '星星', '太陽', '雲'] },
    { word: 'tree', meaning: '樹', options: ['花', '草', '樹', '葉子'] },
    { word: 'umbrella', meaning: '雨傘', options: ['雨傘', '雨衣', '雨鞋', '雨帽'] },
    { word: 'violin', meaning: '小提琴', options: ['鋼琴', '吉他', '小提琴', '長笛'] },
    { word: 'water', meaning: '水', options: ['茶', '咖啡', '水', '牛奶'] },
    { word: 'xylophone', meaning: '木琴', options: ['鋼琴', '木琴', '吉他', '鼓'] },
    { word: 'zebra', meaning: '斑馬', options: ['獅子', '長頸鹿', '斑馬', '大象'] }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft;
let answers = [];
let wordList = []; // 當前測驗的25個單字

const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const wordElement = document.getElementById('word');
const optionsContainer = document.querySelector('.options-container');
const feedbackElement = document.getElementById('feedback');
const timeElement = document.getElementById('time');
const scoreElement = document.getElementById('score');
const currentQuestionElement = document.getElementById('current-question');
const speakButton = document.getElementById('speak');
const restartButton = document.getElementById('restart-btn');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answers = [];
    // 從完整單字庫中隨機選擇25題
    const shuffledWords = shuffleArray([...fullWordList]);
    wordList = shuffledWords.slice(0, 25);
    showQuestion();
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    updateScore();
}

function showQuestion() {
    if (currentQuestionIndex >= 25) {
        showResults();
        return;
    }

    const question = wordList[currentQuestionIndex];
    wordElement.textContent = question.word;
    feedbackElement.textContent = '';
    feedbackElement.className = 'feedback';
    currentQuestionElement.textContent = currentQuestionIndex + 1;

    const shuffledOptions = shuffleArray([...question.options]);
    const optionButtons = document.querySelectorAll('.option');
    optionButtons.forEach((button, index) => {
        button.textContent = shuffledOptions[index];
        button.disabled = false;
        button.className = 'option';
    });

    startTimer();
}

function startTimer() {
    timeLeft = 15;
    timeElement.textContent = timeLeft;
    clearInterval(timer);
    
    timer = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleAnswer(null);
        }
    }, 1000);
}

function handleAnswer(selectedOption) {
    clearInterval(timer);
    const question = wordList[currentQuestionIndex];
    const isCorrect = selectedOption === question.meaning;
    
    // 記錄答案
    answers.push({
        word: question.word,
        correct: isCorrect,
        userAnswer: selectedOption || '未作答',
        correctAnswer: question.meaning
    });

    // 更新分數
    if (isCorrect) {
        score += 4;
        updateScore();
    }

    // 顯示正確答案和反饋
    const optionButtons = document.querySelectorAll('.option');
    optionButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent === question.meaning) {
            button.classList.add('correct');
        } else if (button.textContent === selectedOption) {
            button.classList.add('incorrect');
        }
    });

    // 顯示反饋訊息
    showFeedback(isCorrect, question.meaning);

    // 2秒後顯示下一題
    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 2000);
}

function showFeedback(isCorrect, correctAnswer) {
    feedbackElement.textContent = isCorrect 
        ? '答對了！' 
        : `答錯了！正確答案是：${correctAnswer}`;
    feedbackElement.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
}

function updateScore() {
    scoreElement.textContent = score;
}

function showResults() {
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    const finalScoreElement = document.getElementById('final-score');
    finalScoreElement.textContent = score;

    const answerList = document.getElementById('answer-list');
    answerList.innerHTML = '';
    
    answers.forEach((answer, index) => {
        const answerItem = document.createElement('div');
        answerItem.className = `answer-item ${answer.correct ? 'correct' : 'incorrect'}`;
        answerItem.innerHTML = `
            <div>
                <strong>${index + 1}. ${answer.word}</strong>
                <div>你的答案: ${answer.userAnswer}</div>
                <div>正確答案: ${answer.correctAnswer}</div>
            </div>
            <div>${answer.correct ? '✓' : '✗'}</div>
        `;
        answerList.appendChild(answerItem);
    });
}

// 語音合成
function speakWord() {
    const word = wordElement.textContent;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
}

// 事件監聽器
optionsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('option') && !e.target.disabled) {
        handleAnswer(e.target.textContent);
    }
});

speakButton.addEventListener('click', speakWord);
restartButton.addEventListener('click', startQuiz);

// 開始測驗
startQuiz();
