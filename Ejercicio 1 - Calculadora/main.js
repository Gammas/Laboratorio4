// CONSTANTES
const OPERADORES = ['+', '-', '/', '*'];

// ELEMENTOS
const visorResultado = obtenerElementoPorId('visorResultado');
const visorOperacion = obtenerElementoPorId('visorOperacion');
const historiaLista = obtenerElementoPorId('historia');
const historiaListado = obtenerElementoPorId('historiaListado');
const historiaBoton = obtenerElementoPorId('historiaBoton');

// VARIABLES
let historia = [];
let operacionEnCursoIndex = -1;

// FUNCIONES
function obtenerElementoPorId(idElemento) {
  return document.getElementById(idElemento);
}

function crearHistoriaItem() {
  const p = document.createElement('p');
  p.innerHTML = obtenerOperacionDeLaHistoria();
  historiaListado.appendChild(p);
}

function iniciarHistoria() {
  if(operacionEnCursoIndex > -1) {
    crearHistoriaItem();
  }
  operacionEnCursoIndex++;
  let operacion = {
    num1: null,
    num2: null,
    operador: '',
    resultado: 0
  };

  historia.push(operacion);
}

function obtenerNumeroVisor() {
  const visorNumero = Number(visorResultado.innerHTML);
  visorResultado.innerHTML = '0';
  return visorNumero;
}

function mostrarDatosVisor() {
  visorResultado.innerHTML = historia[operacionEnCursoIndex].resultado;
  visorOperacion.innerHTML = obtenerOperacionDeLaHistoria();
}

function obtenerOperacionDeLaHistoria(){
  return historia[operacionEnCursoIndex].num1 +
    ' ' + historia[operacionEnCursoIndex].operador +
    ' ' + historia[operacionEnCursoIndex].num2 +
    ' = ' + historia[operacionEnCursoIndex].resultado;
}

function guardarHistoria(limpiarVisor) {
  if(historia[operacionEnCursoIndex].num2) {
    iniciarHistoria();
  }
  if(limpiarVisor) {
    visorResultado.innerHTML = "0";
    visorOperacion.innerHTML = "";
  }
}

function operar(operador){
  guardarHistoria();
  historia[operacionEnCursoIndex].num1 = obtenerNumeroVisor();
  historia[operacionEnCursoIndex].operador = operador;

  escribirVisor(`${historia[operacionEnCursoIndex].num1} ${historia[operacionEnCursoIndex].operador} `)
}

function obtenerResultado() {
  historia[operacionEnCursoIndex].num2 = obtenerNumeroVisor();
  historia[operacionEnCursoIndex].resultado = calcular();

  mostrarDatosVisor();
}

function escribirNumerosEnVisor(valor) {
  const valorVisor = visorResultado.innerHTML;
  if(valorVisor === "0") {
    visorResultado.innerHTML = '';
  }
  visorResultado.innerHTML += valor;
  visorOperacion.innerHTML += valor;
}

function escribirVisor(valor) {
  visorOperacion.innerHTML = valor;
}

function calcular() {
  const operador = historia[operacionEnCursoIndex].operador;
  let resultado;
  switch(operador){
    case '+':
      resultado = suma();
      break;
    case '-':
      resultado = resta();
      break;
    case '*':
      resultado = multiplicacion();
      break;
    case '/':
      resultado = division();
      break;
    default:
      resultado = 0;
      break;
  }

  return resultado;
}

function suma() {
  return historia[operacionEnCursoIndex].num1 + historia[operacionEnCursoIndex].num2 
}

function resta() {
  return historia[operacionEnCursoIndex].num1 - historia[operacionEnCursoIndex].num2 
}

function multiplicacion() {
  return historia[operacionEnCursoIndex].num1 * historia[operacionEnCursoIndex].num2 
}

function division() {
  return historia[operacionEnCursoIndex].num1 / historia[operacionEnCursoIndex].num2 
}

function mostrarOcultarHistoria(){
  if(historiaLista.classList.contains('ver')) {
    historiaLista.classList.remove('ver');
    historiaBoton.classList.remove('activado');
  } else {
    historiaLista.classList.add('ver');
    historiaBoton.classList.add('activado');
  }
}

function limpiarHistoria() {
  historia = [];
  operacionEnCursoIndex = -1;
  historiaListado.innerHTML = "";
}

// FUNCIONAMIENTO
iniciarHistoria();