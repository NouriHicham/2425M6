
//Ejercicio 1 - Aleatorio
document.querySelector("#botonAleatorio").addEventListener("click", function(){
    let num1 = parseInt(document.querySelector("#num1").value)
    let num2 = parseInt(document.querySelector("#num2").value)

    // Math.floor(Math.random() * (max - min + 1) + min)
    let numAleatorio = Math.floor(Math.random() * (num2 - num1 + 1) + num1)

    document.querySelector("#numeroAleatorio").innerHTML =  numAleatorio
})

//Ejercicio 2 - String
document.querySelector("#numeroLetras").innerHTML = document.querySelector("#texto").value.length

document.querySelector("#botonMayusculas").addEventListener("click", function(){
    document.querySelector("#numeroLetras").innerHTML =  document.querySelector("#texto").value.length
    document.querySelector("#texto").value = document.querySelector("#texto").value.toUpperCase()
})

document.querySelector("#botonMinusculas").addEventListener("click", function(){
    document.querySelector("#numeroLetras").innerHTML = document.querySelector("#texto").value.length
    document.querySelector("#texto").value = document.querySelector("#texto").value.toLowerCase()
})

//Ejercicio 2 - Buscador
document.querySelector("#btnBuscador").addEventListener("click", function(){
    //coge lo que hay dentro del textarea y lo pone en la caja del buscador
    document.querySelector("#textoBuscador").innerHTML = document.querySelector("#texto").value

    //resumen 10 palabras
    let array10pal = document.querySelector("#texto").value.split(/[ .]/)
    console.log(array10pal)
    document.querySelector("#resumen").innerHTML = ""
    for(let i=0;i<10;i++){
        document.querySelector("#resumen").innerHTML += ' '+array10pal[i]
    }
    document.querySelector("#resumen").innerHTML += ' ...'
    //document.querySelector("#resumen").innerHTML = 
    
    let buscar = document.querySelector("#buscar").value
    let numCoincidencias = document.querySelector("#textoBuscador").innerHTML.match(`${buscar}`)

    document.querySelector("#textoBuscador").innerHTML = document.querySelector("#textoBuscador").innerHTML.replaceAll(`${buscar}`, `<span class="bg-primary text-light">${buscar}</span>`)
})

//Ejercicio 3 - Date
document.querySelector("#btnConvNombre").addEventListener("click", function(){
    let arrayNom = document.querySelector("#nombreEj3").value.split(" ")
    //console.log(arrayNom)

    document.querySelector("#nomConv").innerHTML = arrayNom[0].toUpperCase()
    for(let i=1;i<arrayNom.length;i++){
        document.querySelector("#nomConv").innerHTML += '-'+arrayNom[i].toUpperCase()
    }
})

document.querySelector("#btnConvFecha").addEventListener("click", function(){
    let arrayFecha = document.querySelector("#fechaEj3").value.split("/")

    document.querySelector("#fechaConv").innerHTML = arrayFecha[0].toUpperCase()
    for(let i=1;i<arrayFecha.length;i++){
        document.querySelector("#fechaConv").innerHTML += '-'+arrayFecha[i].toUpperCase()
    }
})

//Ejercicio 4 - Generador de contraseñas
function numRand2(){
    let rand2 = Math.floor(Math.random() * (2 - 1 + 1) + 1)
    return rand2
}

function numRandLetra(){
    let randLetra = Math.floor(Math.random() * (25 - 0 + 1) + 0)
    return randLetra
}

document.querySelector("#btnPassword").addEventListener("click", function(){
    const min = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
    const may = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
    const arrayMin = min.split(" ")
    const arrayMay = may.split(" ")
    //console.log(arrayMay)

    let contra = ""
    for(let i=0; i<10; i++){
        if(numRand2()==1){
            //console.log("min")
            contra = contra + arrayMin[numRandLetra()]
        }else{
            //console.log("may")
            contra = contra + arrayMay[numRandLetra()]
        }
    }

    document.querySelector("#pass").value = contra
})

//Ejercicio 5 - Generador de emoticonos
function numRand(){
    let num = Math.floor(Math.random() * (24 - 0 + 1) + 0)
    return num
}

document.querySelector("#btnEmoji").addEventListener("click", function(){
    const emojis = ['😀', '😂', '😍', '😎', '🥳','👍', '🎉', '❤️', '🌟', '🚀','🐶', '🐱', '🐰', '🦊', '🐻','🍕', '🍣', '🍩', '🌮', '🍦','⚽', '🏀', '🎮', '🎸', '🎨'];

    document.querySelector("#emoji").innerHTML = emojis[numRand()] 
    
})