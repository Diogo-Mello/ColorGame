const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');

const som = document.getElementById('audio');

const tempoEntreElementos = 1000;

let delay = 500;

var numerosOrdenados = [];
var quantidade = 0;

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
    mudarQuantidade();

    gerarNumeros();

    acender();
}

function girarCores() {
    acenderCor1();

    setTimeout(function(){
        acenderCor2()
    },300)

    setTimeout(function(){
        acenderCor4()
    },600)

    setTimeout(function(){
        acenderCor3()
    },900)

    setTimeout(function(){
        acenderCor1();
    },1200)

    setTimeout(function(){
        acenderCor2()
    },1500)

    setTimeout(function(){
        acenderCor4()
    },1800)

    setTimeout(function(){
        acenderCor3()
    },2100)
}

function acender() {
    numerosOrdenados.forEach(function (numerosOrdenados, x) {
        setTimeout(function () {
            if (numerosOrdenados == 0) {
                acenderCor1();
            }
            else if (numerosOrdenados == 1) {
                acenderCor2();
            }
            else if (numerosOrdenados == 2) {
                acenderCor3();
            }
            else {
                acenderCor4();
            }
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