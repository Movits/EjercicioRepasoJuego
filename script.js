const divContenedorSelect = document.querySelector("#contenedor-usuario1");
const opcSelect = document.querySelector("#opcion-select");
const divImg1 = document.querySelector("#img-1");
const divImg2 = document.querySelector("#img-2");
const divContenedorUsuario2 = document.querySelector("#contenedor-usuario2");

IMG_1 = "https://png.pngtree.com/png-clipart/20190902/original/pngtree-hand-drawn-cartoon-style-clenched-fist-png-image_4390418.jpg";
IMG_2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2UJxPS0KZrqc9L06blBrDYED_h3SLrD5jLjiq4gPiWyew3VKwtzPJxcUEGc7_4J8pnF8&usqp=CAU";
IMG_3 = "https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-gesture-scissors-hand-cartoon-pose-image_1439363.jpg";

function opcionAleatoria() {
    return Math.floor(Math.random() * 3);
  }

function generarImg1() {
    if (opcSelect.value == 0) {
        divImg1.innerHTML = `
            <img src="${IMG_1}" alt="">
        `;
    } else if (opcSelect.value == 1){
        divImg1.innerHTML = `
            <img src="${IMG_2}" alt="">
        `;
    } else if (opcSelect.value == 2){
        divImg1.innerHTML = `
            <img src="${IMG_3}" alt="">
        `;
    } else {
        divImg1.innerHTML = ``;
    }

    generarImg2();
}

function generarImg2() {
    if (opcionAleatoria() == 0) {
        divImg2.innerHTML = `
            <img src="${IMG_1}" alt="">
        `;
    } else if (opcionAleatoria() == 1){
        divImg2.innerHTML = `
            <img src="${IMG_2}" alt="">
        `;
    } else if (opcionAleatoria() == 2){
        divImg2.innerHTML = `
            <img src="${IMG_3}" alt="">
        `;
    }
}