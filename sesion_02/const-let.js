// 'let' permite reasignar el valor a una variable

let myTestTool = 'Selenium';

myTestTool = 'Cypress';

console.log('Test Tool', myTestTool);

// 'const' no permite reasignar el valor a una variable a
// a menos que este modificando la estructuras
// de objetos que se le definieron a la variable (Por referencia )

const myCourse = {
    name: 'TS'
}

// myCourse = { name: 'JS'} Error por intentar modificar el valor de la variable

myCourse.name = 'JS'

console.log('Lenguaje', myCourse.name)