let startStop = document.getElementById('startStop');
let zerarButton = document.getElementById('zerar');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;

startStop.addEventListener('click', function () {
    timer = !timer;

    if (timer) {
        focusTime();
    }
});

zerarButton.addEventListener('click', function () {
    // Reseta as variáveis quando o botão de zerar é clicado
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    timer = false;

    // Atualiza o display do cronômetro
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
        setTimeout(focusTime, 10);
    }
}

function updateTimerDisplay() {
    let hrString = hour;
    let minString = minute;
    let secString = second;
    let countString = count;

    if (hour < 10) {
        hrString = "0" + hrString;
    }

    if (minute < 10) {
        minString = "0" + minString;
    }

    if (second < 10) {
        secString = "0" + secString;
    }

    document.getElementById('hours').innerHTML = hrString;
    document.getElementById('mins').innerHTML = minString;
    document.getElementById('secs').innerHTML = secString;
    setTimeout(focusTime, 10);
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
    listaTema.forEach(
        function (item) {
            ulTemas.innerHTML += '<li><button class="tema-button" onclick="selecionaTema(' + item.id + ')">' + item.texto + '</button></li>'
        }
    );
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
    listaAprendizados.push({
        tema: temaSelecionado.id,
        texto: aprendi
    });
    localStorage.setItem('aprendizados', JSON.stringify(listaAprendizados));
    mostraOQueAprendiHoje();
}

function mostraOQueAprendiHoje() {
    ulOQueAprendiHoje.innerHTML = '';
    let aprendizadosDoTema = listaAprendizados.filter(item => item.tema == temaSelecionado.id);
    aprendizadosDoTema.forEach(
        function (item) {
            ulOQueAprendiHoje.innerHTML += '<li>' + item.texto + '</li>';
        }
    );
}

bt3.onclick = function () {
    let aprendi = prompt('Digite o que você precisa revisar');
    listaRevisar.push({
        tema: temaSelecionado.id,
        texto: aprendi
    });
    localStorage.setItem('revis ar', JSON.stringify(listaRevisar));
    mostraOQuePrecisoRevisar();
}

function mostraOQuePrecisoRevisar() {
    ulOQuePrecisoRevisar.innerHTML = '';
    let revisarDoTema = listaRevisar.filter(item => item.tema == temaSelecionado.id);
    revisarDoTema.forEach(
        function (item) {
            ulOQuePrecisoRevisar.innerHTML += '<li>' + item.texto + '</li>';
        }
    );
}

bt4.onclick = function () {
    let data = prompt('Digite o evento dessa data');
    listaData.push({
        tema: temaSelecionado.id,
        texto: data
    });
    localStorage.setItem('datas', JSON.stringify(listaData));
    mostraOQuePrecisoLembrar();
}

function mostraOQuePrecisoLembrar() {
    ulDatasImportantes.innerHTML = '';
    let dataDoTema = listaData.filter(item => item.tema == temaSelecionado.id);
    dataDoTema.forEach(
        function (item) {
            ulDatasImportantes.innerHTML += '<li>' + item.texto + '</li>';
        }
    );
}
