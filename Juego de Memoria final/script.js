const nombre = document.getElementById('nombre');   // nombre de jugador <input> de la parte superior de la pantalla
const puntaje = document.getElementById('puntaje'); // puntaje en pantalla <a> de la parte inferior de la pantalla

var cartas = [];
cartas[0] = "img/chrome.svg";
cartas[1] = "img/chrome.svg";
cartas[2] = "img/facebook.svg";
cartas[3] = "img/facebook.svg";
cartas[4] = "img/firefox.svg";
cartas[5] = "img/firefox.svg";
cartas[6] = "img/google-icon.svg";
cartas[7] = "img/google-icon.svg";
cartas[8] = "img/homer.svg";
cartas[9] = "img/homer.svg";
cartas[10] = "img/html-5.svg";
cartas[11] = "img/html-5.svg";
cartas[12] = "img/instagram-icon.svg";
cartas[13] = "img/instagram-icon.svg";
cartas[14] = "img/internetexplorer.svg";
cartas[15] = "img/internetexplorer.svg";
cartas[16] = "img/javascript.svg";
cartas[17] = "img/javascript.svg";
cartas[18] = "img/opera.svg";
cartas[19] = "img/opera.svg";

var aciertos = 0;           // cuenta los pares encontrados
var intentos = 5;           // total de posibilidades
var carta1 = -1;            // almaceno la imagen de la primera carta
var carta2 = -2;            // almaceno la imagen de la segunda carta
var carta1id = -1;          // guardo el id de la 1er carta
var carta2id = -1;          // guardo el id de la 2da carta
var boton = 0;              // alert que avisa que dejes tu nombre y pongas jugar para mezclar

function jugar() {
    boton = 1;              // apreto jugar!
    mezclar();              // mezclo las cartas
    puntaje.innerHTML = nombre.value + ' comenzo un nuevo juego';
}

function mezclar() {        // mezclo las cartas
    var indiceActual = cartas.length, temp, random;

    // Mientras queden elementos a mezclar...
    while (0 !== indiceActual) {

        // Seleccionar un elemento sin mezclar...
        random = Math.floor(Math.random() * indiceActual);
        indiceActual -= 1;

        // E intercambiarlo con el elemento actual
        temp = cartas[indiceActual];
        cartas[indiceActual] = cartas[random];
        cartas[random] = temp;
    }
}

function girar(carta) {             // volteo la 1era vez y la 2da las comparo
    if (boton == 1) {               // Si presiono jugar (o sea que se mezclaron las cartas)
        if (carta2id == -1 || carta1id == -1) { // Solo muestro la carta si hay 1 visible o ninguna (sino multiple clicks hacen visible multiples cartas)
            carta.src = cartas[carta.id];   // muestro la carta
        }

        if (carta1 == -1) {             // en la 1er jugada
            carta1 = carta.src;         // almacena la ubicacion para comparar si son iguales
            carta1id = carta.id;        // almaceno el id para en caso de falla darla vuelta
        } else {                        // en la 2da jugada
            carta2 = carta.src;         // almacena la ubicacion para comparar si son iguales
            carta2id = carta.id;        // almaceno el id para en caso de falla darla vuelta

            if (carta1.localeCompare(carta2) == 0) {    // comparo si sus imagenes son iguales
                acierto();                              // sumo acierto
            } else {                                    // si las imagenes no son iguales
                if (intentos > 1) {                     // si quedan intentos
                    intentos -= 1;                      // resto 1
                    puntaje.innerHTML = nombre.value + ' le quedan ' + intentos + ' intentos restantes y lleva ' + aciertos + ' aciertos';
                    setTimeout(volteoCarta, 500);       // dejo las cartas visibles 500ml y las doy vuelta
                } else {                                // sino quedan intentos
                    puntaje.innerHTML = nombre.value + ' el juego a finalizado, logro ' + aciertos + ' aciertos. Presione "Jugar" para comenzar nuevamente';
                    setTimeout(finJuego, 50);                         // reseteo las variables para volver a comenzar
                }
            }
        }
    }
    else {
        alert("Ingrese su nombre y presione Jugar para comenzar!")
    }
}

function acierto() {                                // suma acierto y muestra puntaje
    aciertos += 1;
    puntaje.innerHTML = nombre.value + ' le quedan ' + intentos + ' intentos restantes y lleva ' + aciertos + ' aciertos';
    nuevaRonda();
}

function volteoCarta() {                            // si no coinciden las pongo boca abajo
    document.getElementById(carta1id).src = "img/carta_sin_borde.png";
    document.getElementById(carta2id).src = "img/carta_sin_borde.png";
    nuevaRonda();                                   // blanqueo la ronda
}

function nuevaRonda() {                             // borro el id de las cartas de la ronda
    carta1 = -1;
    carta2 = -2;
    carta1id = -1;
    carta2id = -1;
}

function finJuego() {                               // blanqueo el valor de las variables para comenzar un nuevo juego
    alert("Juego Finalizado!!!");       // aviso que finalizo el juego
    document.getElementById('0').src = "img/carta_sin_borde.png";
    document.getElementById('1').src = "img/carta_sin_borde.png";
    document.getElementById('2').src = "img/carta_sin_borde.png";
    document.getElementById('3').src = "img/carta_sin_borde.png";
    document.getElementById('4').src = "img/carta_sin_borde.png";
    document.getElementById('5').src = "img/carta_sin_borde.png";
    document.getElementById('6').src = "img/carta_sin_borde.png";
    document.getElementById('7').src = "img/carta_sin_borde.png";
    document.getElementById('8').src = "img/carta_sin_borde.png";
    document.getElementById('9').src = "img/carta_sin_borde.png";
    document.getElementById('10').src = "img/carta_sin_borde.png";
    document.getElementById('11').src = "img/carta_sin_borde.png";
    document.getElementById('12').src = "img/carta_sin_borde.png";
    document.getElementById('13').src = "img/carta_sin_borde.png";
    document.getElementById('14').src = "img/carta_sin_borde.png";
    document.getElementById('15').src = "img/carta_sin_borde.png";
    document.getElementById('16').src = "img/carta_sin_borde.png";
    document.getElementById('17').src = "img/carta_sin_borde.png";
    document.getElementById('18').src = "img/carta_sin_borde.png";
    document.getElementById('19').src = "img/carta_sin_borde.png";

    cartas[0] = "img/chrome.svg";
    cartas[1] = "img/chrome.svg";
    cartas[2] = "img/facebook.svg";
    cartas[3] = "img/facebook.svg";
    cartas[4] = "img/firefox.svg";
    cartas[5] = "img/firefox.svg";
    cartas[6] = "img/google-icon.svg";
    cartas[7] = "img/google-icon.svg";
    cartas[8] = "img/homer.svg";
    cartas[9] = "img/homer.svg";
    cartas[10] = "img/html-5.svg";
    cartas[11] = "img/html-5.svg";
    cartas[12] = "img/instagram-icon.svg";
    cartas[13] = "img/instagram-icon.svg";
    cartas[14] = "img/internetexplorer.svg";
    cartas[15] = "img/internetexplorer.svg";
    cartas[16] = "img/javascript.svg";
    cartas[17] = "img/javascript.svg";
    cartas[18] = "img/opera.svg";
    cartas[19] = "img/opera.svg";

    aciertos = 0;
    intentos = 5;
    carta1 = -1;
    carta2 = -2;
    carta1id = -1;
    carta2id = -1;
    jugar = 1;
}