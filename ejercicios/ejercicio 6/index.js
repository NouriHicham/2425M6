document.querySelector("#botonAleatorio").addEventListener("click", function(){
    var num1 = document.querySelector("#num1").value
    var num2 = document.querySelector("#num2").value

    console.log(num1, num2)

    // Math.floor(Math.random() * (max - min + 1) + min)
    var numAleatorio = Math.floor(Math.random() * (num2 - num1 + 1) + num1)

    document.querySelector("#numeroAleatorio").innerHTML =  numAleatorio
})

document.querySelector("#numeroLetras").innerHTML = document.querySelector("#texto").textContent.length

document.querySelector("#botonMayusculas").addEventListener("click", function(){
    document.querySelector("#numeroLetras").innerHTML = document.querySelector("#texto").textContent.length
    document.querySelector("#texto").textContent.toUpperCase
})

document.querySelector("#botonMinusculas").addEventListener("click", function(){
    document.querySelector("#numeroLetras").innerHTML = document.querySelector("#texto").textContent.length
    document.querySelector("#texto").textContent.toLowerCase() = document.querySelector("#texto").value
})