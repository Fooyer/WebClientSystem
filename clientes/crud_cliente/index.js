
window.onload = function() {

    var loadingMessage = document.getElementById("loading-message");

    const mensagem1 = document.createElement('div');
    mensagem1.innerHTML = "Carregando Tabela..."
    loadingMessage.appendChild(mensagem1)

    startTable();

    const mensagem2 = document.createElement('div');
    mensagem2.innerHTML = "Tabela Carregada!"
    loadingMessage.parentNode.removeChild(mensagem1);
    loadingMessage.appendChild(mensagem2)

    document.getElementById('prev-page').addEventListener('click', prevPage);
    document.getElementById('next-page').addEventListener('click', nextPage);

    const completo = document.createElement('div');
    completo.innerHTML = "Aguarde..."
    loadingMessage.parentNode.removeChild(mensagem2);
    loadingMessage.appendChild(completo)

    setTimeout(function() {
        loadingMessage.parentNode.removeChild(loadingMessage);
        loadingMessage.style.opacity = 0;
    }, 500000);

};

// Tabela

let rowsPerPage = 20;
let currentPage = 1;
let tableData;

function renderTable() {

    const table = document.getElementById('my-table');

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    table.innerHTML = '';

    for (let i = startIndex; i < endIndex; i++) {
        const row = tableData[i];
        if (!row) break;

        const tr = document.createElement('tr');

        tr.id = "linhaTabela"

        tr.addEventListener('click', obterDadosLinhaTabela);

        tr.innerHTML = `
        <td>${row.id}</td>
        <td>${row.nome}</td>
        <td>${row.email}</td>
        <td>${row.telefone}</td>`

        table.appendChild(tr)
    }
}

function prevPage() {

    if (currentPage > 1) {
        currentPage--
        renderTable()
    }

}

function nextPage() {

    if (currentPage < tableData.length / rowsPerPage) {
        currentPage++;
        renderTable();
    }

}

async function startTable(){

    await fetch("./../data_operations/obterClientes.php").then(Response => Response.json()).then(data => tableData = data)

    renderTable()

}

// Formulário

let flagSelec = 0
let eventoAnt = 0

function obterDadosLinhaTabela(event){

    var tds = event.path[1].getElementsByTagName("td");
    var inputs = document.getElementsByClassName("formularioCliente")[0].getElementsByTagName("input");

    for (var i = 0; i < tds.length; i++) {

        var td = tds[i];
        var conteudo = td.textContent.trim();

        inputs[i].value = conteudo;

    }


    if (flagSelec == 0){

        event.path[1].style.background = "yellow";

        flagSelec = 1
        eventoAnt = event

    }
    else{
        
        eventoAnt.path[1].style.background = "rgb(235, 235, 255)";

        flagSelec = 1
        eventoAnt = event
        event.path[1].style.background = "yellow";

    }

}

function resetForm(){

    eventoAnt.path[1].style.background = "rgb(235, 235, 255)";
   
    flagSelec = 0
    eventoAnt = 0

}