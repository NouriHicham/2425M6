
//metodo de document para seleccionar algo: querySelector
const boton1 = document.querySelector("#btn1");

console.log(boton1);

console.log(document.querySelector("h1"));

//capturas lo que tiene el h1 con innerHTML
const titulo = document.querySelector("h1")

console.log(titulo.innerHTML)

titulo.innerHTML = "<em>Otro Título</em>"

//sirve para captar eventos como un click, un boton, etc.
boton1.addEventListener("click", fnBoton1)

function fnBoton1(){
    console.log("click boton 1")
}

//lo mismos pero en boton 2 y de forma resumida

document.querySelector("#btn2").addEventListener("click", function(){console.log("click en boton 2")})


//evaluando textos
const operacion = "2+3"
console.log("operacion: ", operacion)
console.log("resultado: ", eval(operacion))