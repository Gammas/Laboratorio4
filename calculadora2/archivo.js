var visor = document.getElementById("visor"); //obtiene el elemento ue hace referencia al visor

function agregarnumero(numero) {
    var visor = document.getElementById("visor");
    var contenidoVisor = visor.innerText;
    var nuevoValor = contenidoVisor + numero;
    visor.innerHTML = nuevoValor;
}

function escribirVisor(texto) {
    visor.innerHTML = texto;
}

function limpiarVisor() {
    visor.innerHTML = "";
}

function sumar() {
    var operando1 = operando1+Number(visor.innerText);
    escribirVisor(operando1);
    ultimaOp = "+";
}

function igual(){
    var operando2 = Number(visor.innerText);
    switch(ultimaOp){
        case "+":
            var resultado = operando1+operando2;
            break;
    }
    operand1 = 0;

}
function restar() {

}
function multiplicar() {

}
function dividir() {

}