console.log("hola");
const pantalla = document.querySelector("#pantalla")
let acumulacion = "0"

document.querySelector("#btn1").addEventListener("click", function(){
    if(pantalla.textContent=="0"){
        pantalla.innerHTML = ""
        pantalla.innerHTML += "1"
    }else{
        pantalla.innerHTML += "1"
    }
    
})
document.querySelector("#btn2").addEventListener("click", function(){
    if(pantalla.textContent=="0"){
        pantalla.innerHTML = ""
        pantalla.innerHTML += "2"
    }else{
        pantalla.innerHTML += "2"
    }
})
document.querySelector("#btn3").addEventListener("click", function(){
    if(pantalla.textContent=="0"){
        pantalla.innerHTML = ""
        pantalla.innerHTML += "3"
    }else{
        pantalla.innerHTML += "3"
    }
})
document.querySelector("#btn4").addEventListener("click", function(){
    if(pantalla.textContent=="0"){
        pantalla.innerHTML = ""
        pantalla.innerHTML += "4"
    }else{
        pantalla.innerHTML += "4"
    }
})
document.querySelector("#btn5").addEventListener("click", function(){
    if(pantalla.textContent=="0"){
        pantalla.innerHTML = ""
        pantalla.innerHTML += "5"
    }else{
        pantalla.innerHTML += "5"
    }
})
document.querySelector("#btn6").addEventListener("click", function(){
    if(pantalla.textContent=="0"){
        pantalla.innerHTML = ""
        pantalla.innerHTML += "6"
    }else{
        pantalla.innerHTML += "6"
    }
})
document.querySelector("#btn7").addEventListener("click", function(){
    if(pantalla.textContent=="0"){
        pantalla.innerHTML = ""
        pantalla.innerHTML += "7"
    }else{
        pantalla.innerHTML += "7"
    }
})
document.querySelector("#btn8").addEventListener("click", function(){
    if(pantalla.textContent=="0"){
        pantalla.innerHTML = ""
        pantalla.innerHTML += "8"
    }else{
        pantalla.innerHTML += "8"
    }
})
document.querySelector("#btn9").addEventListener("click", function(){
    if(pantalla.textContent=="0"){
        pantalla.innerHTML = ""
        pantalla.innerHTML += "9"
    }else{
        pantalla.innerHTML += "9"
    }
})
document.querySelector("#btn0").addEventListener("click", function(){
    pantalla.innerHTML += "0"
})
document.querySelector("#btnBorrar").addEventListener("click", function(){
    pantalla.innerHTML = "0"
})

document.querySelector("#btnSuma").addEventListener("click", function(){
    acumulacion += `+${pantalla.innerHTML}`
    pantalla.innerHTML = "0"
    console.log(acumulacion)
})

document.querySelector("#btnResta").addEventListener("click", function(){
    acumulacion += `-${pantalla.innerHTML}`
    pantalla.innerHTML = "0"
    console.log(acumulacion)
})

document.querySelector("#btnIgual").addEventListener("click", function(){
    const resultado = eval(acumulacion)
    pantalla.innerHTML = resultado
    acumulacion = "0"
})