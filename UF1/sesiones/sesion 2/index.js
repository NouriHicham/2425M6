/*
console.log('Sesion 2')

//sumar numeros
//Pedir datos con prompt
const numero = prompt(`Introduce un numero: `)

console.log("numero: ", numero)

const numero2 = prompt(`Introduce un numero: `)

console.log("numero2: ", numero2)

console.log('suma: ', parseInt(numero)+parseInt(numero2))
*/

//Juego de los numeros
const numeroAdivinar = 10

let intentos= 3
while(intentos!=0){
    const numeroIntrod = prompt('Introduce un numero: ')

    if(numeroIntrod>numeroAdivinar){
        console.log('Es mayor')
    }else if(numeroIntrod<numeroAdivinar){
        console.log('Es menor')
    }else{
        console.log('Oleeeee')
        intentos=1
    }

    intentos=intentos-1
}