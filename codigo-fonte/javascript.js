let startStop = document.getElementById('startStop');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

let timer = false;


startStop.addEventListener('click', function () {
    timer = !timer;

    if(timer) {
        focusTime();
    }
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
}

let listaTema = JSON.parse(localStorage.getItem('tema')) || [];
let ultimoIdTema = JSON.parse(localStorage.getItem('ultimoIdTema')) || 0;
let listaAprendizados = JSON.parse(localStorage.getItem('O que aprendi hoje...')) || [];
let temaSelecionado = null;
mostraTema();

bt1.onclick = function() {
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
    function(item) {
      ulTemas.innerHTML += '<li><button class="tema-button" onclick="selecionaTema(' + item.id + ')">' + item.texto + '</button></li>'
    }
  );
}

function selecionaTema(t) {
    temaSelecionado = listaTema.find(item => item.id == t);
    temaOQueAprendiHoje.innerHTML = "Tema: " + temaSelecionado.texto;
    bt2.disabled = false;
    mostraOQueAprendiHoje();
}


bt2.onclick = function() {
  let aprendi = prompt('Digite o que você aprendeu');
  listaAprendizados.push({
    tema: temaSelecionado.id,
    texto: aprendi
  });
  localStorage.setItem('O que aprendi hoje', JSON.stringify(listaAprendizados));
  mostraOQueAprendiHoje();
}

function mostraOQueAprendiHoje () {
  ulOQueAprendiHoje.innerHTML = '';
  let aprendizadosDoTema = listaAprendizados.filter(item => item.tema == temaSelecionado.id);
  aprendizadosDoTema.forEach(
    function(item) {
        ulOQueAprendiHoje.innerHTML += '<li>' + item.texto + '</li>';
    }
  );
}
