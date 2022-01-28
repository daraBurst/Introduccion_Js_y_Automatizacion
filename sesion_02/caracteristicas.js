const myName = 'Fernando';
const MyName = 'Eduardo';

console.log('MyName', myName, MyName)

function myDogName () {
    return 'Toby'
}

function MyDogName () {
    return 'Carl'
}

console.log('myDogName', myDogName(), MyDogName())

class myCar {
    constructor () {
        console.log('BWW')
    }
}

class MyCar {
    constructor () {
        console.log('Audi')
    }
}

new myCar();
new MyCar();