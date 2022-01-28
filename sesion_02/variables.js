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
    var colorAmarillo = 'Anaranjado';
    console.log('El color desde BS:', colorAmarillo)
}

// El BS de 'var' sobrescribe el valor en la variable con GS, 
// pero con 'const' el alcance de la variable es solo dentro de '{}'
console.log('El color desde GS II: ', colorVerde)

getColorNow();

