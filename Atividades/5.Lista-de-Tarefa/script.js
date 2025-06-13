// Lista de tarefas e contador
var taskList = []; // Array vazio para armazenar as tarefas
var count = 1; // Contador para IDs únicos

// Função para adicionar uma nova tarefa
function addTask(description) {
  var newTask = { id: count++, description: description }; // Cria novo objeto tarefa
  taskList.push(newTask); // Adiciona a tarefa ao array
  // localStorage.setItem('taskList', JSON.stringify(taskList)); // Salva no localStorage
  
  // Para ambiente Claude (substitua pela linha acima em produção):
  console.log('Tarefa salva:', newTask);
  
  renderTaskList();
}

// Função para excluir uma tarefa
function deleteTask(taskId) {
  var updatedTaskList = taskList.filter(function (task) {
    return task.id !== taskId; // Retorna todas as tarefas exceto a selecionada
  });

  if (updatedTaskList.length < taskList.length) { // Verifica se a lista mudou
    taskList = updatedTaskList;
    // localStorage.setItem('taskList', JSON.stringify(taskList)); // Atualiza localStorage
    
    // Para ambiente Claude (substitua pela linha acima em produção):
    console.log('Tarefa excluída. Lista atual:', taskList);
    taskList.display.none;
    
    renderTaskList(); // Re-renderiza a lista completa
  } else {
    alert('Tarefa não encontrada.');
  }
}

// Função para recuperar a lista de tarefas do localStorage
function getTaskList() {
  // var storedList = JSON.parse(localStorage.getItem('taskList')); // Converte string JSON para objeto
  // taskList = storedList || []; // Se não existir, usa array vazio
  
  // Para ambiente Claude (substitua pelas linhas acima em produção):
  taskList = taskList || [];
  console.log('Tarefas carregadas:', taskList);
}

// Função para renderizar a lista de tarefas no HTML
function renderTaskList() {
  var taskListElement = document.getElementById('itemLista');

  taskList.forEach(function (task) {
    var listItem = document.createElement('li');
    listItem.style.backgroundColor = 'pink'; // Estilo da tarefa
    listItem.style.fontFamily = 'sans-serif'; // Estilo da tarefa
    
    // Conteúdo do item da lista
    listItem.innerHTML = '<span>' + task.description + '</span>' + 
                        '<span class="close" onclick="deleteTask(' + task.id + ')">\u00D7</span>';
    
    taskListElement.appendChild(listItem);
  });
}

// Função que adiciona um elemento (adaptada da sua função original)
function addElemento() {
  var inputValue = document.getElementById("tarefa").value.trim();
  
  if (inputValue === '') {
    alert("Você precisa descrever a tarefa");
    return;
  }
  
  addTask(inputValue); // Chama a função de adicionar tarefa
  document.getElementById("tarefa").value = ""; // Limpa o input
}

// Funcionalidade para marcar tarefa como concluída (mantendo sua lógica original)
var list = document.querySelector('ul');
if (list) {
  list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
}

// Recuperar a lista de tarefas do localStorage ao carregar a página
getTaskList();

// Renderizar a lista de tarefas no HTML
renderTaskList();

// Código original para itens já existentes no HTML
var myNodelist = document.getElementsByTagName("li");
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}