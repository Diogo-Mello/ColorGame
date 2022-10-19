const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
var ordem;
var posicao = 0;

const audioSelecao = document.getElementById('audioSelecao');
const audioPerdeu = document.getElementById('audioPerdeu');
const audioVenceu = document.getElementById('audioVenceu');

const indexNivel = document.getElementById('nivel');
const indexRecord = document.getElementById('record');
const indexButton = document.getElementById('button');

const tempoEntreElementos = 1000;

let delay = 500;
var record = 0;
var nivel;

var numerosOrdenados = [];
var quantidade = 0;

if (localStorage.record) {
    record = JSON.parse(localStorage.getItem('record'))
    indexRecord.innerHTML = record;
}

function mudarQuantidade() {
    quantidade += 1;
    delay = 500;
}

function gerarNumeros() {
    numerosOrdenados = [];
    for (let i = 1; i <= quantidade; i++) {
        numerosOrdenados.push(Math.floor(Math.random() * 4))
    }
}

function acenderTudo() {
    posicao = 0

    removerOnClick();

    mudarQuantidade();

    gerarNumeros();

    acender();
}

function errou() {
    posicao = 0;
    quantidade = 0;

    audioPerdeu.play();

    acenderCor1();
    acenderCor2();
    acenderCor3();
    acenderCor4();

    setTimeout(function () {
        acenderTudo();
    }, 1000)

}

function acender() {
    nivel = numerosOrdenados.length;
    if (nivel > record) {
        record = nivel;
        localStorage.record = JSON.stringify(record);
    }
    indexNivel.innerHTML = nivel;
    indexRecord.innerHTML = record;

    numerosOrdenados.forEach(function (numeroOrdenado, x) {
        setTimeout(function () {
            if (numeroOrdenado == 0) {
                acenderCor1();
            }
            else if (numeroOrdenado == 1) {
                acenderCor2();
            }
            else if (numeroOrdenado == 2) {
                acenderCor3();
            }
            else {
                acenderCor4();
            }
            let ultimaPosicao = numerosOrdenados.length - 1;
            if (x == ultimaPosicao) {
                setTimeout(function () {
                    adicionarOnClick();
                }, 1000)
            }
            audioSelecao.play();
        }, delay)

        delay += tempoEntreElementos;
    })
}

function acenderCor1() {
    color1.style.backgroundColor = 'var(--cor1Forte)'
    color1.style.boxShadow = '-1rem -1rem 20px var(--cor1Forte)'

    setTimeout(function () {
        color1.style.backgroundColor = 'var(--cor1)'
        color1.style.boxShadow = ''
    }, 500)
};

function acenderCor2() {
    color2.style.backgroundColor = 'var(--cor2Forte)'
    color2.style.boxShadow = '1rem -1rem 20px var(--cor2Forte)'


    setTimeout(function () {
        color2.style.backgroundColor = 'var(--cor2)'
        color2.style.boxShadow = ''
    }, 500)
}

function acenderCor3() {
    color3.style.backgroundColor = 'var(--cor3Forte)'
    color3.style.boxShadow = '-1rem 1rem 20px var(--cor3Forte)'

    setTimeout(function () {
        color3.style.backgroundColor = 'var(--cor3)'
        color3.style.boxShadow = ''
    }, 500)
}

function acenderCor4() {
    color4.style.backgroundColor = 'var(--cor4Forte)'
    color4.style.boxShadow = '1rem 1rem 20px var(--cor4Forte)'

    setTimeout(function () {
        color4.style.backgroundColor = 'var(--cor4)'
        color4.style.boxShadow = ''
    }, 500)
}

function adicionarOnClick() {
    color1.setAttribute('onclick', 'verificarAcerto(0)');
    color2.setAttribute('onclick', 'verificarAcerto(1)');
    color3.setAttribute('onclick', 'verificarAcerto(2)');
    color4.setAttribute('onclick', 'verificarAcerto(3)');
    color1.style.cursor = 'pointer';
    color2.style.cursor = 'pointer';
    color3.style.cursor = 'pointer';
    color4.style.cursor = 'pointer';
}

function removerOnClick() {
    color1.removeAttribute('onclick');
    color2.removeAttribute('onclick');
    color3.removeAttribute('onclick');
    color4.removeAttribute('onclick');
    color1.style.cursor = '';
    color2.style.cursor = '';
    color3.style.cursor = '';
    color4.style.cursor = '';
}

function verificarAcerto(cor) {

    ordem = numerosOrdenados[posicao]

    if (cor != ordem) {
        errou();
    } else if (cor == 0) {
        audioSelecao.play();
        acenderCor1();
        verificarUltimoAcerto()
        posicao++
    } else if (cor == 1) {
        audioSelecao.play();
        acenderCor2();
        verificarUltimoAcerto()
        posicao++
    } else if (cor == 2) {
        audioSelecao.play();
        acenderCor3();
        verificarUltimoAcerto()
        posicao++
    } else {
        audioSelecao.play();
        acenderCor4();
        verificarUltimoAcerto()
        posicao++
    }
}

function verificarUltimoAcerto() {
    if (posicao == numerosOrdenados.length - 1) {
        audioVenceu.play()
        setTimeout(function () {
            acenderTudo();
        }, 1000)
    }
}

function jogar () {
    acenderTudo();
    indexButton.innerHTML = ''
}