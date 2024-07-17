let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numeroUsuario = parseInt (document.getElementById ('valorUsuario').value);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento ('p', `Acertaste el número ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById ('reiniciar').removeAttribute ('disabled');
    } else {
        //Es usuario no acertó
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja ();
    }
    return;
}

function condicionesIniciales () {
    asignarTextoElemento ('h1', 'Juego del número secreto');
    asignarTextoElemento ('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
}

function generarNumeroSecreto () {
    let numeroGenerado = Math.floor (Math.random ()*numeroMaximo) + 1;

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el número generado esta incluido en la lista
        if (listaNumerosSorteados.includes (numeroGenerado)) {
            return generarNumeroSecreto ();
        } else {
            listaNumerosSorteados.push (numeroGenerado);
            return numeroGenerado;    
        }
    }
}

function limpiarCaja () {
    document.querySelector ('#valorUsuario').value = ''; //Llamar el input por el ID desde querySelector ('#...')
}

function reiniciarJuego (params) {
    //Indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales ();
    //Limpiar caja
    limpiarCaja ();    
    //Deshabilitar el botón de nuevo juego
    document.getElementById ('reiniciar').setAttribute ('disabled', 'true');

}

condicionesIniciales ();