let startStop = document.getElementById('startStop');
let zerarButton = document.getElementById('zerar');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;


var conteudo01Aprendi = 'Aprendi Tema 01.';
var conteudo02Aprendi = 'Aprendi Tema 02.';
var conteudo03Aprendi = 'Aprendi Tema 03.';
var conteudo04Aprendi = 'Aprendi Tema 04.';
var conteudo05Aprendi = 'Aprendi Tema 05.';
var conteudo01Revisar = 'Revisar Tema 01.';
var conteudo02Revisar = 'Revisar Tema 02.';
var conteudo03Revisar = 'Revisar Tema 03.';
var conteudo04Revisar = 'Revisar Tema 04.';
var conteudo05Revisar = 'Revisar Tema 05.';

startStop.addEventListener('click', function () {
    timer = !timer;

    if(timer) {
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

function changeText(tema) {
    
    if (tema == '01') {
        document.getElementById("colunaAprendi").innerHTML = conteudo01Aprendi
        document.getElementById("colunaRevisar").innerHTML = conteudo01Revisar
    }

    if (tema == '02') {
        document.getElementById("colunaAprendi").innerHTML = conteudo02Aprendi
        document.getElementById("colunaRevisar").innerHTML = conteudo02Revisar
    }

    if (tema == '03') {
        document.getElementById("colunaAprendi").innerHTML = conteudo03Aprendi
        document.getElementById("colunaRevisar").innerHTML = conteudo03Revisar
    }
    
    if (tema == '04') {
        document.getElementById("colunaAprendi").innerHTML = conteudo04Aprendi
        document.getElementById("colunaRevisar").innerHTML = conteudo04Revisar
    }

    if (tema == '05') {
        document.getElementById("colunaAprendi").innerHTML = conteudo05Aprendi
        document.getElementById("colunaRevisar").innerHTML = conteudo05Revisar
    }

}