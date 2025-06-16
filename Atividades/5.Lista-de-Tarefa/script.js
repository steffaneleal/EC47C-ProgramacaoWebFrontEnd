// Lista de tarefas com localStorage

// Criar uma lista vazia de tarefas
var listaTarefas = [];
var count = 1;

// Função para adicionar uma nova tarefa
function adicionarTarefa(descricao) {
    var novaTarefa = { id: count++, descricao: descricao, concluida: false };
    listaTarefas.push(novaTarefa);
    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));
    renderizarListaTarefas();
}

// Função para excluir uma tarefa
function excluirTarefa(tarefaId) {
    var listaAtualizada = listaTarefas.filter(function (tarefa) {
        return tarefa.id !== tarefaId;
    });

    if (listaAtualizada.length < listaTarefas.length) {
        listaTarefas = listaAtualizada;
        localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));
        renderizarListaTarefas();
    } else {
        alert('Tarefa não encontrada.');
    }
}

// Função para alternar status da tarefa (marcada/desmarcada)
function alternarTarefa(tarefaId) {
    listaTarefas.forEach(function(tarefa) {
        if (tarefa.id === tarefaId) {
            tarefa.concluida = !tarefa.concluida;
        }
    });
    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));
    renderizarListaTarefas();
}

// Função para recuperar a lista de tarefas do localStorage
function obterListaTarefas() {
    var listaArmazenada = JSON.parse(localStorage.getItem('listaTarefas'));
    listaTarefas = listaArmazenada || [];
    
    // Atualiza o count para o próximo ID
    if (listaTarefas.length > 0) {
        var maiorId = 0;
        listaTarefas.forEach(function(tarefa) {
            if (tarefa.id > maiorId) {
                maiorId = tarefa.id;
            }
        });
        count = maiorId + 1;
    }
}

// Função para renderizar a lista de tarefas no HTML
function renderizarListaTarefas() {
    var elementoLista = document.getElementById('itemLista');
    elementoLista.innerHTML = '';

    listaTarefas.forEach(function (tarefa) {
        var itemLista = document.createElement('li');
        
        if (tarefa.concluida) {
            itemLista.className = 'checked';
        }
        
        itemLista.innerHTML = tarefa.descricao + '<span class="close" onclick="excluirTarefa(' + tarefa.id + ')">\u00D7</span>';
        
        // Adiciona click para marcar/desmarcar
        itemLista.onclick = function(event) {
            if (event.target.className !== 'close') {
                alternarTarefa(tarefa.id);
            }
        };
        
        elementoLista.appendChild(itemLista);
        itemLista.style.backgroundColor = 'pink';
    });
}

// Função original do projeto (mantida para compatibilidade)
function addElemento() {
    var inputValue = document.getElementById("tarefa").value;
    
    if (inputValue === '') {
        alert("Você precisa descrever a tarefa");
    } else {
        adicionarTarefa(inputValue);
        document.getElementById("tarefa").value = "";
    }
}

// Recuperar a lista de tarefas do localStorage
obterListaTarefas();

// Renderizar a lista de tarefas no HTML
renderizarListaTarefas();