let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteado= [];



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;

}
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
if (numeroSecreto === numeroUsuario){
    asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
}else {
    if(numeroUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'el numero es menor');
    }else{
        asignarTextoElemento('p', 'El numero es Mayor');
    }
    intentos++;
    limpiarCaja();
}
return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
   
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteado);
    if (listaNumerosSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();

    }else{
        listaNumerosSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero Secreto!');
    asignarTextoElemento('p','Digita un numero de 1 al 100');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //iniciar mensaje de intervalo de numeros
    condicionesIniciales();
    //Generar el numero aleatorio
    
    //iniciar el numero de intentos
    //deshabilitar el boton de nuevojuego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();