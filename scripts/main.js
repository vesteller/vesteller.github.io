let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.jpg') {
      miImage.setAttribute('src','images/firefox2.jpg');
    } else {
      miImage.setAttribute('src', 'images/firefox-icon.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    let a = parseInt(prompt('Introduzca su altura en cm: '));
    let b = parseInt(prompt('Introduzca su peso en kg: '));
    let imc = b / a;
    if (imc < 16) {
        let d = 'Infrapeso: Delgadez Severa';
    } else if (16 <= imc and imc <= 16.99) {
        let d = 'Infrapeso: Delgadez moderada';
    } else if (17 <= imc and imc <= 18.49) {
        let d = 'Infrapeso: Delgadez aceptable';
    } else if (18.50 <= imc and imc <= 24.99) {
        let d = 'Peso Normal';
    } else if (25.00 <= imc and imc <= 29.99) {
        let d = 'Sobrepeso';
    } else if (30.00 <= imc and imc <= 34.99) {
        let d = 'Obeso: Tipo I';
    } else if (35.00 <= imc and imc <= 40.00) {
        let d = 'Obeso: Tipo II';
    } else if (imc > 40.00) {
        let d = 'Obeso: Tipo III';
    } 
    
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Mozilla is FINO, ' + miNombre + ' de acuerdo a su imc ud es: ' + d;
    }
  }
  

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es fino,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}
