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
    let a = parseInt(prompt('Introduzca el valor de A: '));
    let b = parseInt(prompt('Introduzca el valor de B: '));
    let c = a + b;
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Mozilla is FINO, ' + miNombre + ' A + B = ' + c;
    }
  }
  

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}
