let startStop = document.getElementById('startStop');
let zerarButton = document.getElementById('zerar');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;
let timerInterval;

startStop.addEventListener('click', function () {
    timer = !timer;

    if (timer) {
        timerInterval = setInterval(focusTime, 10);
    } else {
        clearInterval(timerInterval);
    }
});

zerarButton.addEventListener('click', function () {
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    updateTimerDisplay();
});


function focusTime() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        updateTimerDisplay();
    }
}

function updateTimerDisplay() {
    let hrString = hour < 10 ? "0" + hour : hour;
    let minString = minute < 10 ? "0" + minute : minute;
    let secString = second < 10 ? "0" + second : second;
    
    document.getElementById('hours').innerHTML = hrString;
    document.getElementById('mins').innerHTML = minString;
    document.getElementById('secs').innerHTML = secString;
}

let listaTema = JSON.parse(localStorage.getItem('tema')) || [];
let ultimoIdTema = JSON.parse(localStorage.getItem('ultimoIdTema')) || 0;
let listaAprendizados = JSON.parse(localStorage.getItem('aprendizados')) || [];
let listaRevisar = JSON.parse(localStorage.getItem('revisar')) || [];
let listaData = JSON.parse(localStorage.getItem('datas')) || [];
let temaSelecionado = null;
mostraTema();

bt1.onclick = function () {
    let tema = prompt('Digite o novo tema');
    let idTema = ultimoIdTema + 1;
    ultimoIdTema++;
    listaTema.push({
        id: idTema,
        texto: tema
    });

    localStorage.setItem('tema', JSON.stringify(listaTema));
    localStorage.setItem('ultimoIdTema', ultimoIdTema);
    mostraTema();
}


function mostraTema() {
    ulTemas.innerHTML = '';
    listaTema.forEach(function (item) {
        let listItem = document.createElement('li');
        
        let temaButton = document.createElement('button');
        temaButton.classList.add('tema-button');
        temaButton.innerText = item.texto;
        temaButton.addEventListener('click', function () {
            selecionaTema(item.id);
        });
        
        let editButton = document.createElement('button');
        editButton.id = 'editButton_' + item.id;
        editButton.classList.add('editButtonClass');
        editButton.insertAdjacentHTML('beforeend', '&#9998;');
        editButton.addEventListener('click', function () {
            editarTema(item.id);
        });
        
        let deleteButton = document.createElement('button');
        deleteButton.id = 'deleteButton_' + item.id;
        deleteButton.classList.add('deleteButtonClass');
        deleteButton.insertAdjacentHTML('beforeend', '&#10006;');
        deleteButton.addEventListener('click', function () {
            excluirTema(item.id);
        });

        listItem.appendChild(temaButton);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        
        ulTemas.appendChild(listItem);
    });
}

    function editarTema(id) {
        let novoTexto = prompt('Digite o novo texto para o tema');
        if (novoTexto !== null) {
            let temaIndex = listaTema.findIndex(item => item.id === id);
            if (temaIndex !== -1) {
                listaTema[temaIndex].texto = novoTexto;
                localStorage.setItem('tema', JSON.stringify(listaTema));
                mostraTema();
            }
        }
    }
    
    function excluirTema(id) {
        let confirmarExclusao = confirm('Tem certeza que deseja excluir este tema?');
        if (confirmarExclusao) {
            listaTema = listaTema.filter(item => item.id !== id);
            localStorage.setItem('tema', JSON.stringify(listaTema));
            mostraTema();
        }
    }


function selecionaTema(t) {
    temaSelecionado = listaTema.find(item => item.id == t);
    temaOQueAprendiHoje.innerHTML = "Tema: " + temaSelecionado.texto;
    temaOquePrecisoRevisar.innerHTML = "Tema: " + temaSelecionado.texto;
    temaOquePrecisoData.innerHTML = "Tema: " + temaSelecionado.texto;
    bt2.disabled = false;
    bt3.disabled = false;
    bt4.disabled = false;
    mostraOQueAprendiHoje();
    mostraOQuePrecisoRevisar();
    mostraOQuePrecisoLembrar();
}

bt2.onclick = function () {
    let aprendi = prompt('Digite o que você aprendeu');
    let idAprendizado = 'aprendizado_' + (listaAprendizados.length + 1); 
    listaAprendizados.push({
        id: idAprendizado,
        tema: temaSelecionado.id,
        texto: aprendi
    });
    localStorage.setItem('aprendizados', JSON.stringify(listaAprendizados));
    mostraOQueAprendiHoje();
}

function editarAprendizado(id) {
    let novoTexto = prompt('Digite o novo texto para o aprendizado');
    if (novoTexto !== null) {
        let aprendizado = listaAprendizados.find(item => item.tema === temaSelecionado.id && item.id === id);
        if (aprendizado) {
            aprendizado.texto = novoTexto;
            localStorage.setItem('aprendizados', JSON.stringify(listaAprendizados));
            mostraOQueAprendiHoje();
        }
    }
}

function excluirAprendizado(id) {
    let confirmarExclusao = confirm('Tem certeza que deseja excluir este aprendizado?');
    if (confirmarExclusao) {
        listaAprendizados = listaAprendizados.filter(item => !(item.tema === temaSelecionado.id && item.id === id));
        localStorage.setItem('aprendizados', JSON.stringify(listaAprendizados));
        mostraOQueAprendiHoje();
    }
}

function mostraOQueAprendiHoje() {
    ulOQueAprendiHoje.innerHTML = '';
    let aprendizadosDoTema = listaAprendizados.filter(item => item.tema == temaSelecionado.id);
    aprendizadosDoTema.forEach(function (item) {
        let listItem = document.createElement('li');
        listItem.innerText = item.texto;

        let editarButton = document.createElement('button');
        editarButton.classList.add('editarButton_'); // Adiciona a classe
        editarButton.innerHTML = '&#9998;';
        editarButton.style.fontSize = '10px';
        editarButton.addEventListener('click', function () {
            editarAprendizado(item.id);
        });

        let excluirButton = document.createElement('button');
        excluirButton.classList.add('excluirButton_'); // Adiciona a classe
        excluirButton.innerHTML = '&#10006;';
        excluirButton.style.fontSize = '10px';
        excluirButton.addEventListener('click', function () {
            excluirAprendizado(item.id);
        });

        listItem.appendChild(editarButton);
        listItem.appendChild(excluirButton);

        ulOQueAprendiHoje.appendChild(listItem);
    });
}

bt3.onclick = function () {
    let revisar = prompt('Digite o que você precisa revisar');
    let idRevisar = 'revisar_' + Date.now();
    listaRevisar.push({
        id: idRevisar,
        tema: temaSelecionado.id,
        texto: revisar
    });
    localStorage.setItem('revisar', JSON.stringify(listaRevisar));
    mostraOQuePrecisoRevisar();
}

function editarRevisar(id) {
    let novoTexto = prompt('Digite o novo texto para a revisão');
    if (novoTexto !== null) {
        let revisarIndex = listaRevisar.findIndex(item => item.tema === temaSelecionado.id && item.id === id);
        if (revisarIndex !== -1) {
            listaRevisar[revisarIndex].texto = novoTexto;
            localStorage.setItem('revisar', JSON.stringify(listaRevisar));
            mostraOQuePrecisoRevisar();
        }
    }
}

function excluirRevisar(id) {
    let confirmarExclusao = confirm('Tem certeza que deseja excluir esta revisão?');
    if (confirmarExclusao) {
        listaRevisar = listaRevisar.filter(item => !(item.tema === temaSelecionado.id && item.id === id));
        localStorage.setItem('revisar', JSON.stringify(listaRevisar));
        mostraOQuePrecisoRevisar();
    }
}

function mostraOQuePrecisoRevisar() {
    ulOQuePrecisoRevisar.innerHTML = '';
    let revisarDoTema = listaRevisar.filter(item => item.tema == temaSelecionado.id);
    revisarDoTema.forEach(function (item) {
        let listItem = document.createElement('li');
        listItem.innerText = item.texto;

        let editarButton = document.createElement('button');
        editarButton.classList.add('editarButton_'); 
        editarButton.innerHTML = '&#9998;';
        editarButton.style.fontSize = '10px';
        editarButton.addEventListener('click', function () {
            editarRevisar(item.id);
        });

        let excluirButton = document.createElement('button');
        excluirButton.classList.add('excluirButton_');
        excluirButton.innerHTML = '&#10006;';
        excluirButton.style.fontSize = '10px';
        excluirButton.addEventListener('click', function () {
            excluirRevisar(item.id);
        });

        listItem.appendChild(editarButton);
        listItem.appendChild(excluirButton);

        ulOQuePrecisoRevisar.appendChild(listItem);
    });
}

bt4.onclick = function () {
    let data = prompt('Digite o evento dessa data');
    let idData = 'data_' + Date.now();
    listaData.push({
        id: idData,
        tema: temaSelecionado.id,
        texto: data
    });
    localStorage.setItem('datas', JSON.stringify(listaData));
    mostraOQuePrecisoLembrar();
}

function editarData(id) {
    let novoTexto = prompt('Digite o novo evento para esta data');
    if (novoTexto !== null) {
        let dataIndex = listaData.findIndex(item => item.tema === temaSelecionado.id && item.id === id);
        if (dataIndex !== -1) {
            listaData[dataIndex].texto = novoTexto;
            localStorage.setItem('datas', JSON.stringify(listaData));
            mostraOQuePrecisoLembrar();
        }
    }
}

function excluirData(id) {
    let confirmarExclusao = confirm('Tem certeza que deseja excluir este evento?');
    if (confirmarExclusao) {
        listaData = listaData.filter(item => !(item.tema === temaSelecionado.id && item.id === id));
        localStorage.setItem('datas', JSON.stringify(listaData));
        mostraOQuePrecisoLembrar();
    }
}

function mostraOQuePrecisoLembrar() {
    ulDatasImportantes.innerHTML = '';
    let dataDoTema = listaData.filter(item => item.tema == temaSelecionado.id);
    dataDoTema.forEach(function (item) {
        let listItem = document.createElement('li');
        listItem.innerText = item.texto;

        let editarButton = document.createElement('button');
        editarButton.classList.add('editarButton_');
        editarButton.innerHTML = '&#9998;';
        editarButton.style.fontSize = '10px';
        editarButton.addEventListener('click', function () {
            editarData(item.id);
        });

        let excluirButton = document.createElement('button');
        excluirButton.classList.add('excluirButton_');
        excluirButton.innerHTML = '&#10006;';
        excluirButton.style.fontSize = '10px';
        excluirButton.addEventListener('click', function () {
            excluirData(item.id);
        });

        listItem.appendChild(editarButton);
        listItem.appendChild(excluirButton);

        ulDatasImportantes.appendChild(listItem);
        
    });
}
