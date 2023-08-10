const divContenedorSelect = document.querySelector("#contenedor-usuario1");
const opcSelect = document.querySelector("#opcion-select");
const divImg1 = document.querySelector("#img-1");
const divImg2 = document.querySelector("#img-2");
const pResultado = document.querySelector("#resultado");

const PIEDRA = 0;
const PAPEL = 1;
const TIJERA = 2;

IMG_1 = "https://png.pngtree.com/png-clipart/20190902/original/pngtree-hand-drawn-cartoon-style-clenched-fist-png-image_4390418.jpg";
IMG_2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2UJxPS0KZrqc9L06blBrDYED_h3SLrD5jLjiq4gPiWyew3VKwtzPJxcUEGc7_4J8pnF8&usqp=CAU";
IMG_3 = "https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-gesture-scissors-hand-cartoon-pose-image_1439363.jpg";
const imgs = [IMG_1, IMG_2, IMG_3];

function opcionAleatoria(max) {
    return Math.floor(Math.random() * max);
}

function jugar() {
    let resultadoAleatorio = opcionAleatoria(3);
    let opcUsuario = parseInt(opcSelect.value);
    divImg1.innerHTML = `<img src="${imgs[opcUsuario]}" alt="">`;
    divImg2.innerHTML = `<img src="${imgs[resultadoAleatorio]}" alt="">`;

    if (opcUsuario == resultadoAleatorio) {
        pResultado.innerHTML = `EMPATASTE`;
    }
    else {
        switch (opcUsuario) {
            case PIEDRA:
                Comparacion(resultadoAleatorio , PAPEL);
                break;
            case PAPEL:
                Comparacion(resultadoAleatorio , TIJERA);
                break;
            case TIJERA:
                Comparacion(resultadoAleatorio , PIEDRA);
                break;
            default:
                break;
        }
    }
}

function Comparacion(resultadoAleatorio, jugadaIdeal) {
    if (resultadoAleatorio == jugadaIdeal) {
        pResultado.innerHTML = `PERDISTE`;
    } else {
        pResultado.innerHTML = `GANASTE`;
    }
}
