//'use strict';
//
//if (true) {
//    colorVerde = 'Verde';
//}
//
//console.log('Color Verde', colorVerde)


// Global Scope
var colorVerde = 'Verde';

function getColor () {
    return colorVerde;
}

console.log('El color desde GS:', getColor())

// Function Scope
function getColorNow () {
    var colorAmarillo = 'Amarillo';
    console.log('El color desde FS:', colorAmarillo)
}

// Block Scope ES6
if (true) {
    const colorVerde = 'Anaranjado';
    console.log('El color desde BS:', colorVerde)
}

// El BS de 'var' sobrescribe el valor en la variable con GS,
// pero con 'const' el alcance de la variable es solo dentro de '{}'
console.log('El color desde GS II: ', colorVerde)

getColorNow();

