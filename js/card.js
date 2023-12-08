
    const gezi = document.getElementById('game-board');
    const images = ['card1', 'card2', 'card3', 'card4', 'card5'];
    const gameStart = document.getElementById("start-button2");
    const time = document.getElementById('timer');
    let selectedImages = [];
    let yixuanka = [];
    let over = 0;
    let click_count = 0;
    let timer;
    let seconds = 0;
    let gaming = false;

    gameStart.addEventListener('click',card_game);

    function card_game(){
        if (!gaming) {
            start_game();
            startTimer();
            gaming = true;
        }
    }

    function start_game() {
        const kapai = [...images, ...images];

        for (let i = kapai.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [kapai[i], kapai[j]] = [kapai[j], kapai[i]];
        }

        for (let i = 0; i < kapai.length; i++) {
            const imageName = kapai[i];
            const card = createCard(imageName);
            gezi.appendChild(card);
        }
    }

    function startTimer() {
        timer = setInterval(() => {
            seconds++;
            time.textContent = `Time: ${seconds}`;
        }, 1000);
    }

    function createCard(image) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.backgroundImage = "url('img/card.jpg')";
        card.setAttribute('data-name', image);

        card.addEventListener('click', () => {
            if (yixuanka.length < 2) {
                click_count++;
                card.style.backgroundImage = `url('img/${image}.jpg')`;

                selectedImages.push(image);
                yixuanka.push(card);

                if (selectedImages.length === 2) {
                    setTimeout(checkForMatch, 500);
                }
            }
        });

        return card;
    }

    function checkForMatch() {
        const [firstImage, secondImage] = selectedImages;
        if (firstImage === secondImage) {
            yixuanka.forEach(card => card.style.visibility = 'hidden');
            over++;

            if (over === images.length) {
                setTimeout(() => {
                    alert(`게임종료! 소요시간 ${seconds}초 \n 총 ${click_count} 걸음 만에 완료하였습니다.`);
                    location.reload();
                }, 100);
            }
        } else {
            yixuanka.forEach(card => card.style.backgroundImage = "url('img/card.jpg')");
        }

        selectedImages = [];
        yixuanka = [];
    }
