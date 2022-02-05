const elementoInput = document.querySelector("input");
const elementoLista = document.querySelector("ul");
const addBtn = document.querySelector("#add");
const limparBtn = document.querySelector("#limpar")

const tarefas = JSON.parse(localStorage.getItem("lista_tarefas")) || [];


function imprimirTarefas() {

    elementoLista.innerHTML = "";

    for (item of tarefas) {
        const itemLista = document.createElement("li");
        const itemTexto = document.createTextNode(item);

        itemLista.appendChild(itemTexto);
        elementoLista.appendChild(itemLista);

        const itemDelete = document.createElement("a");
        const textDelete = document.createTextNode("delete");
        const pos = tarefas.indexOf(item);

        itemDelete.setAttribute('class', 'material-icons');
        itemDelete.setAttribute('href', '#');
        itemDelete.setAttribute("onclick", `deletaTarefa(${pos})`)

        itemDelete.appendChild(textDelete);
        itemLista.appendChild(itemDelete);

    }
}

imprimirTarefas();

function addTarefas() {
    const valorTarefa = elementoInput.value;

    if (valorTarefa == "") {
        alert("Digite uma tarefa!")
    } else {
        tarefas.push(valorTarefa);
        elementoInput.value = "";

        imprimirTarefas();
        listStorage()
    }
}

document.addEventListener ('keypress', (event) => {
    if(event.key === "Enter"){
    addTarefas();
    imprimirTarefas();
    listStorage()
}
  });
  

addBtn.setAttribute('onclick', 'addTarefas()');

function deletaTarefa(pos) {
    tarefas.splice(pos, 1);
    imprimirTarefas();
    listStorage();
}

function deletaLista(pos) {
    tarefas.splice(pos, tarefas.length);
    imprimirTarefas();
    listStorage();
}

limparBtn.setAttribute('onclick', 'deletaLista()');

function listStorage(){
    localStorage.setItem("lista_tarefas", JSON.stringify(tarefas));
}
