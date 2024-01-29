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
    let a = parseFloat(prompt('Introduzca su altura en m: '));
    let b = parseFloat(prompt('Introduzca su peso en kg: '));
    let imc = b / (a*a);
    let d = ''
    if (imc < 16) {
        d = 'Infrapeso: Delgadez Severa';
    } else if (16 <= imc && imc <= 16.99) {
        d = 'Infrapeso: Delgadez moderada';
    } else if (17 <= imc && imc <= 18.49) {
        d = 'Infrapeso: Delgadez aceptable';
    } else if (18.50 <= imc && imc <= 24.99) {
        d = 'Peso Normal';
    } else if (25.00 <= imc && imc <= 29.99) {
        d = 'Sobrepeso';
    } else if (30.00 <= imc && imc <= 34.99) {
        d = 'Obeso: Tipo I';
    } else if (35.00 <= imc && imc <= 40.00) {
        d = 'Obeso: Tipo II';
    } else if (imc > 40.00) {
        d = 'Obeso: Tipo III';
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
