function store() {
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (name.value.length == 0) {
        alert('Informe um e-mail!');
    } else if (pw.value.length == 0) {
        alert('Informe uma senha!');
    } else if (name.value.length == 0 && pw.value.length == 0) {
        alert('Informe um e-mail e uma senha!');
    } else if (pw.value.length > 8) {
        alert('Máximo de 8 caracteres!');
    } else if (!pw.value.match(numbers)) {
        alert('Deve conter pelo menos 1 número');
    } else if (!pw.value.match(upperCaseLetters)) {
        alert('Deve conter uma letra maiúscula');
    } else if (!pw.value.match(lowerCaseLetters)) {
        alert('Deve conter uma letra minúscula');
    } else {
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Sua conta foi criada.');
    }
}

function check() {
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if (userName.value == storedName && userPw.value == storedPw) {
        alert('Login realizado');
    } else {
        alert('Erro ao fazer login');
    }
}