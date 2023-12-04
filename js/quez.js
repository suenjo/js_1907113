var questions = [
    "1. 어떤 음식은 이탈리아에서 유래하며 토마토 소스와 치즈로 만들어집니다?",
    "2. 어떤 음식은 중국에서 유래하며 밥과 여러 재료로 만들어집니다?",
    "3. 어떤 음식은 멕시코에서 유래하며 토르티야, 고기, 콩 등을 사용하여 만들어집니다?",
    "4. 어떤 음식은 일본에서 유래하며 밥과 생선과 다양한 재료로 만들어집니다?",
    "5. 어떤 음식은 미국에서 유래하며 햄버거 패티와 빵으로 만들어집니다?",
];
var answers = [
    "1",
    "1",
    "1",
    "1",
    "1",
];

function startButton(){
    resetGame();
    runQuiz();
}

function resetGame() {

    score = 0;
    sum = 0;

    var startButton = document.getElementById('start-button');
    startButton.innerHTML = '다시하기';

    var jieguo = document.getElementById('result');
    jieguo.innerHTML = '';

    var resultImg = document.getElementById('image-cat');
    resultImg.innerHTML = '';

}

function runQuiz() {
    let score = 0, sum = 0;

        for (let i = 0; i < questions.length; i++) {
            let userResponse = prompt(questions[i]);

            if (userResponse === answers[i]) {
                score += 1;
                sum += 20;
            }

            if(userResponse==null){
                alert("게임을 종료하시겠습니까?");
                window.location.href = "./game.html";
                return;
            }

            while (!userResponse) {
                userResponse = prompt("입력값이 필요합니다. \n" + question);
            }

            if (sum === 100) {
                displayImage();
            }
        }
    updateUI(score, sum);
}

function displayImage() {
    var img = document.createElement('img');
    img.src = "img/100.png";
    img.alt = 'img';
    img.style.width = "150px";

    var xiaohei = document.getElementById('image-cat');
    xiaohei.appendChild(img);
}

function updateUI(score, sum) {
    var startButton = document.getElementById('start-button');
    startButton.innerHTML = '다시하기';

    var jieguo = document.getElementById('result');
    jieguo.innerHTML = `총 ${score} 문제 맞음. 당신의 총 점수는 ${sum} 점 입니다.`;
}
