// selecionar as coisas que preciso acessar via DOM
const nameForm = document.querySelector("#name-form");
const welcomeContainer = document.querySelector("#welcome");
const logoutBtn = document.querySelector("#logout");

function checkUser() {
    const userName = localStorage.getItem('name');

    if (userName) {
        nameForm.style.display = 'none'; // se o usuário estiver logado, vai remover o formulário
        welcomeContainer.style.display = 'block'; // e vai fazer aparecer o container de boas vindas
        
        const userNameElement = document.querySelector("#username");

        userNameElement.textContent = userName;
    } else {
        nameForm.style.display = 'block';
        welcomeContainer.style.display = 'none';
    }
}

// fazer o submit salvar o nome no localStorage
nameForm.addEventListener("submit", (e) => {
    e.preventDefault(); // e representa o evento em si / preventDefault não deixa a página carregar quando aperta o botão de enviar (submit) 

    const nameInput = document.querySelector('#name');

    localStorage.setItem('name', nameInput.value);

    nameInput.value = '';

    checkUser();
});


logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("name");

    checkUser();
});


// Application start
checkUser();