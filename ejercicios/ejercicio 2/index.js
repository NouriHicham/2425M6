const quiz = [
    {
      pregunta: "¿Cuál es el planeta más cercano al Sol?",
      respuestas: [
        { texto: "Marte", esCorrecta: false },
        { texto: "Venus", esCorrecta: false },
        { texto: "Mercurio", esCorrecta: true },
        { texto: "Júpiter", esCorrecta: false }
      ]
    },
    {
      pregunta: "¿En qué año llegó el hombre a la Luna?",
      respuestas: [
        { texto: "1980", esCorrecta: false },
        { texto: "1970", esCorrecta: false },
        { texto: "1959", esCorrecta: false },
        { texto: "1969", esCorrecta: true }
      ]
    },
    {
      pregunta: "¿Cuál es el metal más abundante en la corteza terrestre?",
      respuestas: [
        { texto: "Aluminio", esCorrecta: true },
        { texto: "Hierro", esCorrecta: false },
        { texto: "Cobre", esCorrecta: false },
        { texto: "Oro", esCorrecta: false }
      ]
    },
    {
      pregunta: "¿Qué país tiene la mayor cantidad de población en el mundo?",
      respuestas: [
        { texto: "Estados Unidos", esCorrecta: false },
        { texto: "India", esCorrecta: false },
        { texto: "China", esCorrecta: true },
        { texto: "Rusia", esCorrecta: false }
      ]
    }
];


// saca un numero random entre el numero de preguntas que haya en el array
let rand = Math.floor(Math.random() * quiz.length);

document.querySelector("#question").innerHTML = `${quiz[rand].pregunta}`

for(let i=0;i<4;i++){
    document.querySelector(`#answer${i+1}`).innerHTML = `${quiz[rand].respuestas[i].texto}`
}

document.querySelector("#answer1").addEventListener("click", function(){
    document.getElementById("result").style.display = "block";
    if(quiz[rand].respuestas[0].esCorrecta==true){
        console.log("es correcto")
        document.querySelector("#result").innerHTML = `Es correcto`
    }else{
        console.log("es incorrecto")
        document.querySelector("#result").innerHTML = `Es incorrecto`
    }
})

document.querySelector("#answer2").addEventListener("click", function(){
    document.getElementById("result").style.display = "block";
    if(quiz[rand].respuestas[1].esCorrecta==true){
        console.log("es correcto")
        document.querySelector("#result").innerHTML = `Es correcto`
    }else{
        console.log("es incorrecto")
        document.querySelector("#result").innerHTML = `Es incorrecto`
    }
})

document.querySelector("#answer3").addEventListener("click", function(){
    document.getElementById("result").style.display = "block";
    if(quiz[rand].respuestas[2].esCorrecta==true){
        console.log("es correcto")
        document.querySelector("#result").innerHTML = `Es correcto`
    }else{
        console.log("es incorrecto")
        document.querySelector("#result").innerHTML = `Es incorrecto`
    }
})

document.querySelector("#answer4").addEventListener("click", function(){
    document.getElementById("result").style.display = "block";
    if(quiz[rand].respuestas[3].esCorrecta==true){
        console.log("es correcto")
        document.querySelector("#result").innerHTML = `Es correcto`
    }else{
        console.log("es incorrecto")
        document.querySelector("#result").innerHTML = `Es incorrecto`
    }
})