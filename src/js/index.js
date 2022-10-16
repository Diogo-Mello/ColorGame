const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');

var numerosOrdenados = [];
var quantidade = 4;

for (let i = 1; i <= quantidade; i++) {
    numerosOrdenados.push(Math.floor(Math.random() * 4))
}

function acender() {


    numerosOrdenados.forEach(function (numerosOrdenadoss, x) {
        console.log(x)

        if (numerosOrdenados[x] == 0) {
            acenderCor1();
        }
        else if (numerosOrdenados[x] == 1) {
            acenderCor2();
        }
        else if (numerosOrdenados[x] == 2) {
            acenderCor3();
        }
        else {
            acenderCor4();
        }
    })
}

function acenderCor1() {
    color1.style.backgroundColor = 'var(--cor1Forte)'
    color1.style.boxShadow = '-1rem -rem 20px var(--cor1Forte)'

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


color1.addEventListener('click', function () {
    color1.style.backgroundColor = 'var(--cor1Forte)'
    color1.style.boxShadow = '-1rem -rem 20px var(--cor1Forte)'

    setTimeout(function () {
        color1.style.backgroundColor = 'var(--cor1)'
        color1.style.boxShadow = ''
    }, 500)
})

color2.addEventListener('click', function () {
    color2.style.backgroundColor = 'var(--cor2Forte)'
    color2.style.boxShadow = '1rem -1rem 20px var(--cor2Forte)'


    setTimeout(function () {
        color2.style.backgroundColor = 'var(--cor2)'
        color2.style.boxShadow = ''
    }, 500)
})

color3.addEventListener('click', function () {
    color3.style.backgroundColor = 'var(--cor3Forte)'
    color3.style.boxShadow = '-1rem 1rem 20px var(--cor3Forte)'

    setTimeout(function () {
        color3.style.backgroundColor = 'var(--cor3)'
        color3.style.boxShadow = ''
    }, 500)
})

color4.addEventListener('click', function () {
    color4.style.backgroundColor = 'var(--cor4Forte)'
    color4.style.boxShadow = '1rem 1rem 20px var(--cor4Forte)'

    setTimeout(function () {
        color4.style.backgroundColor = 'var(--cor4)'
        color4.style.boxShadow = ''
    }, 500)
})