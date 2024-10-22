document.querySelector("#botonAleatorio").addEventListener("click", function(){
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    //hacer parse
    console.log(num1, num2)

    // Math.floor(Math.random() * (max - min + 1) + min)
    let numAleatorio = Math.floor(Math.random() * (num2 - num1 + 1) + num1)
    console.log(numAleatorio)

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