//============================================================================================
//幻灯片的js
    const images = [];
    const hd_recipe =["food_recipe/food1.html","food_recipe/food2.html","food_recipe/food3.html"]
    let hd_index = 1;
    for (let i = 1; i <= 3; i++) {
        images[i] = "img/food" + i + ".jpg";
    }
    function prev_show(){
        hd_index--;
        if(hd_index<1){
            hd_index=3;
        }
            document.getElementById("img").src=images[hd_index]
    }
    function next_show(){
        hd_index++;
        if(hd_index>3){
            hd_index = 1;
        }
        document.getElementById("img").src=images[hd_index]
    }
    function food_recipe() {
        window.location.href = hd_recipe[hd_index - 1];
    }
    let auto;
    function start_auto() {
        auto = setInterval(next_show, 3000); // 3초마다 자동 전환
    }
    window.onload = start_auto();

//============================================================================================
//음식 추천 / 음식 랜덤
    const foodimages=[]
    const foodnames=["마파두부","마라탕","갈비찜","짜장면","연어덮밥","미소라멘","스테이크","찜닭","파스타","칼국수"];
    const recipe = ["food_recipe/food1.html", "food_recipe/food2.html", "food_recipe/food3.html", "food_recipe/food4.html", "food_recipe/food5.html", "food_recipe/food6.html", "food_recipe/food7.html", "food_recipe/food8.html", "food_recipe/food9.html", "food_recipe/food10.html"];
    var index = 0;
    const button = document.getElementById('colorButton');

    for(let j = 1; j<=10; j++){
        foodimages[j]="img/food"+j+".jpg";
    }
        function randomFood() {
            //0이상 10 미만의 부동소수를 반환
            //Math.floor()-수를 내림/버림 함
            //+1 하면 1부터 10까지로됨.
            index = Math.floor(Math.random() * 10) + 1;
            document.getElementById("random_img").src = foodimages[index];
            document.getElementById("random_img").alt = foodnames[index-1];
            document.getElementById("foodname").textContent = foodnames[index - 1];

            r=Math.random() * 225;
            g=Math.random() * 225;
            b=Math.random() * 225;

            const rndCol = 'rgb(' + r +',' + g + ','+ b +')';
            button.style.backgroundColor = rndCol;
        }

        function random_food_recipe() {
            if (index > 0) {
                window.location.href = recipe[index - 1];
            }
        }


//============================================================================================
//음식 카테코리/리스트
const food_category = document.getElementById("food_category");
const foods = document.querySelectorAll("#foodList .food");

food_category.addEventListener("change", change_category);

function change_category() {
    const category = food_category.value;
    foods.forEach((food) => {
        const data_category = food.getAttribute("data-category");
        const img = food.querySelector('img');
        if (category === "all" || data_category === category) {
            food.style.display = "block";
            img.style.display = "block"; //
        } else {
            food.style.display = "none";
            img.style.display = "none"; //
        }
    });
}