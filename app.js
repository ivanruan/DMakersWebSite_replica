let fraseSecreta = "ita2024";
let intentos = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let fraseIngresada = document.getElementById('valorUsuario').value;
    
    if (fraseIngresada === fraseSecreta) {
        asignarTextoElemento('mensajeEstado', `ACCESO CONCEDIDO. Accediste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        activarBoton();
    } else {
        asignarTextoElemento('mensajeEstado', 'ACCESO DENEGADO');
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('mensajeGrande', '¡Adelante!');
    asignarTextoElemento('mensajeEstado', 'Ingresa un código válido en el campo');
    intentos = 1;
    desactivarBoton();
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
}

function activarBoton() {
    let boton = document.getElementById('reiniciar');
    boton.removeAttribute('disabled');
    boton.style.pointerEvents = 'auto'; // Habilitar eventos de puntero
}

function desactivarBoton() {
    let boton = document.getElementById('reiniciar');
    boton.setAttribute('disabled', 'true');
    boton.style.pointerEvents = 'none'; // Deshabilitar eventos de puntero
}

function redirigir() {
    window.location.href = './pagina_secreta.html'; // URL de destino
}

condicionesIniciales();