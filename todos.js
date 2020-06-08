var listElement = document.getElementById('lista');
var inputElement= document.getElementById('novoTodo');
var buttonElemenmt = document.getElementById('adicionar');

var todos = JSON.parse(localStorage.getItem('lista_todos'))|| [];

function renderTodos(){
    //limpa listElement
    listElement.innerHTML = '';
    for(todo of todos){
        //cria novo elemento
        var todoElement = document.createElement('li');
        //cria texto do novo elemento
        var todoText = document.createTextNode(todo);

        //cria o link de exclusao de cada linha
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');
        var index  = todos.indexOf(todo);
        linkElement.setAttribute('onclick','delTodo('+index+')');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        //add um elemento dentro de outro
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    //pega valor digitado na input
    var todoText = inputElement.value;
    //função de add novo item no final
    todos.push(todoText);
    //apaga texto da input
    inputElement.value = '';
    renderTodos();
    salveNoStorege();
}

buttonElemenmt.onclick = addTodo;

function delTodo(index){
    todos.splice(index, 1);
    renderTodos();
    salveNoStorege();
}

//salva no storege local sem banco 
function salveNoStorege(){
    //transfomando a lista em JSON e String salvando
    localStorage.setItem('lista_todos', JSON.stringify(todos));
}