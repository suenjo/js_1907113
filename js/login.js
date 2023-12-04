function login_O(){
    var loginLink = document.getElementById("login-link");

    if (localStorage.getItem('login') === 'yes') {
        loginLink.innerHTML = '<a href="#" onclick="logout()">로그아웃</a>';
    } else {
        loginLink.innerHTML = '<a href="zhuce.html">회원가입</a><a href="login.html">로그인</a>';
    }
}

function logout() {
    // 로그아웃 처리: "loginyes" 키를 로컬 스토리지에서 제거
    localStorage.removeItem('login');
    alert("로그아웃 되었습니다.")
    if (window.location.pathname.endsWith('/game.html')) {
        window.location.href = './index.html';
    }
    login_O();
}

function startGame() {

    if (localStorage.getItem('login') === 'yes') {
        window.location.href='./game.html'
    } else {
        alert("로그인 후 사용가능");

    }

}

login_O();