
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
let rand;
let posicion = 1;
let comprobar = false;
let aciertos = 0;
let fallos = 0;

function generarQuiz(){
    rand = Math.floor(Math.random() * quiz.length);
    
    document.querySelector("#question").innerHTML = `${quiz[rand].pregunta}`

    for(let i=0;i<4;i++){
        document.querySelector(`#answer${i+1}`).innerHTML = `${quiz[rand].respuestas[i].texto}`
    }

}

function deshabilitarBotones(siono){
    document.getElementById("answer1").disabled = siono
    document.getElementById("answer2").disabled = siono
    document.getElementById("answer3").disabled = siono
    document.getElementById("answer4").disabled = siono
}

generarQuiz();

function botones(numeroArray){
    document.getElementById("result").style.display = "block";

    deshabilitarBotones(true);

    if(quiz[rand].respuestas[numeroArray].esCorrecta==true){
        console.log("es correcto")
        document.querySelector("#result").innerHTML = `Es correcto`
        document.querySelector('#result').style.backgroundColor = "#4a93fd";
        comprobar=true;
    }else{
        console.log("es incorrecto")
        for(let i=0;i<4;i++){
            if(quiz[rand].respuestas[i].esCorrecta==true){
                document.querySelector("#result").innerHTML = `Es incorrecto, la respuesta correcta es: ${quiz[rand].respuestas[i].texto}`
                i=4
                document.querySelector('#result').style.backgroundColor = "red";
            }
        }
        
    }
}

function cambiarColor(){
    const casillas=document.querySelectorAll(".div")

    for(i=0;i<19;i++){
        casillas[i].style.backgroundColor = "cadetblue"
    }

    casillas[posicion-1].style.backgroundColor = "#e74c3c"
}

cambiarColor();

document.querySelector("#answer1").addEventListener("click", function(){
    botones(0);
})

document.querySelector("#answer2").addEventListener("click", function(){
    botones(1);
})

document.querySelector("#answer3").addEventListener("click", function(){
    botones(2);
})

document.querySelector("#answer4").addEventListener("click", function(){
    botones(3);
})

document.querySelector("#next-question").addEventListener("click", function(){
    generarQuiz();
    deshabilitarBotones(false);
    document.getElementById("result").style.display = "none";

    if(comprobar==true){
        aciertos++;
        posicion++;
        if(posicion>=20){
            posicion=20;
        }
        if(posicion==20){
            alert("Enhorabuena");
        }
        

    }else{
        fallos++;
        posicion=posicion-3;
        if(posicion<0){
            posicion=1;
        }
    }
    comprobar=false;

    cambiarColor();

    console.log("aciertos: ", aciertos)
    console.log("fallos: ", fallos)
})