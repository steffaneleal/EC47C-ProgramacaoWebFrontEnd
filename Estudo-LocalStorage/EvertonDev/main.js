function salvarNome() {
    let nome = document.getElementById('nome').value;

    localStorage.setItem('nomeUsuario', nome);
    exibirMsg('Informações salvas com sucesso');
}

function exibirMsg(mensagem) {
    let pMsg = document.getElementById('mensagem');
    pMsg.textContent = mensagem
}

window.onload = function () {
    let nomeArmazenado = localStorage.getItem('nomeUsuario');

    if (nomeArmazenado) {
        exibirMsg(`Olá, ${nomeArmazenado}! Seu nome está salvo.`);
    } else {
        exibirMsg('Digite seu nome acima e clique em "Salvar Nome".')
    }
}