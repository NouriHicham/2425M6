
//Ejercicio 1 - Aleatorio
document.querySelector("#botonAleatorio").addEventListener("click", function(){
    let num1 = parseInt(document.querySelector("#num1").value)
    let num2 = parseInt(document.querySelector("#num2").value)

    // Math.floor(Math.random() * (max - min + 1) + min)
    let numAleatorio = Math.floor(Math.random() * (num2 - num1 + 1) + num1)

    document.querySelector("#numeroAleatorio").innerHTML =  numAleatorio
})

//Ejercicio 2 - String
document.querySelector("#numeroLetras").innerHTML = document.querySelector("#texto").textContent.length

document.querySelector("#botonMayusculas").addEventListener("click", function(){
    document.querySelector("#numeroLetras").innerHTML = document.querySelector("#texto").textContent.length
    document.querySelector("#texto").textContent = document.querySelector("#texto").textContent.toUpperCase()
})

document.querySelector("#botonMinusculas").addEventListener("click", function(){
    document.querySelector("#numeroLetras").innerHTML = document.querySelector("#texto").textContent.length
    document.querySelector("#texto").textContent = document.querySelector("#texto").textContent.toLowerCase()
})

//Ejercicio 2 - Buscador
document.querySelector("#btnBuscador").addEventListener("click", function(){
    let buscar = document.querySelector("#buscar").value
    let numCoincidencias = document.querySelector("#textoBuscador").innerHTML.match(`${buscar}`)
    console.log(numCoincidencias)
    document.querySelector("#textoBuscador").innerHTML = document.querySelector("#textoBuscador").innerHTML.replaceAll(`${buscar}`, `<span class="bg-primary text-light">${buscar}</span>`)
})
