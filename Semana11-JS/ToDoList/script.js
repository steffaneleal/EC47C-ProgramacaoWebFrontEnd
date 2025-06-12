// cria o botão "close" no final dos itens da lista
let myNodelist = document.getElementsByTagName("li");

for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("span"); // criação do span para ser o botão de fechar
    let txt = document.createTextNode("\u00D7"); // caracter x 
    span.className = "close";
    span.appendChild(txt); // adicionou o X
    myNodelist[i].appendChild(span); // a cada item do myNodelist foi adicionado o span criado
}

// faz remover quando o botão é clicado
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none"; // remove a visualização do item removido
    }
}

// criação do código responsável por alterar um item da lista 
let list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


// função que adiciona um elemento
function addElemento() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("tarefa").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    if (inputValue === '') {
        alert("Você precisa descrever a tarefa");
    } else {
        document.getElementById("itemLista").appendChild(li);
    }
    document.getElementById("tarefa").value = "";

    // adiciona a estrutura com o span
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    li.style.backgroundColor = 'pink'; // item 2 do desafio da professora
    li.style.fontFamily = 'sans-serif'; // item 3 do desafio da professora

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}