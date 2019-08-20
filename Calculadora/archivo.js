var display = document.getElementById("display"); //obtiene el elemento que hace referencia al visor
var operadorA;
var operadorB;
var operacion;
var resultado;

function agregarDato(disp) {
    display.value = display.value + disp;
}

function escribirDisplay(valor) {
    display.value = valor;
}

function limpiarDisplay() {
    display.value = "";
    display.placeholder = "Operador A";
}

function limpiarTodo() {
    display.value = "";
    display.placeholder = "Operador A";
    operadorA = 0;
    operadorB = 0;
    resultado = 0;
    operacion = "";
}

function sumar() {
    operadorA = Number(display.value);
    operacion = "+";
    limpiarDisplay();
    display.placeholder = "+";
}

function restar() {
    operadorA = Number(display.value);
    operacion = "-";
    limpiarDisplay();
    display.placeholder = "-";
}
function multiplicar() {
    operadorA = Number(display.value);
    operacion = "*";
    limpiarDisplay();
    display.placeholder = "*";
}
function dividir() {
    operadorA = Number(display.value);
    operacion = "/";
    limpiarDisplay();
    display.placeholder = "/";
}

function resultado() {
    operadorB = Number(display.value);
    switch (operacion) {
        case "+":
            resultado = parseFloat(operadorA) + parseFloat(operadorB);
            break;
        case "-":
            resultado = parseFloat(operadorA) - parseFloat(operadorB);
            break;
        case "*":
            resultado = parseFloat(operadorA) * parseFloat(operadorB);
            break;
        case "/":
            if (operadorB != 0) {
                resultado = parseFloat(operadorA) / parseFloat(operadorB);
            }
            else {
                display.value = "Operador B = 0";
            }
            break;
    }
    escribirDisplay(resultado);
    blanqueo();
}

function blanqueo() {
    operadorA = 0;
    operadorB = 0;
    resultado = 0;
    operacion = "";
    display.placeholder = "Operador A";
}