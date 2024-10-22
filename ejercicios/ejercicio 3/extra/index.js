
// Función para cargar el archivo Excel
async function cargarExcel() {
    try {
        // Ruta al archivo Excel
        const response = await fetch('preguntas.xlsx');
        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });

        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

        // Procesar los datos y llenar el array quiz
        let quiz = {};

        // Agrupar las respuestas por pregunta
        jsonData.forEach(row => {
            const pregunta = row.Pregunta;
            const respuesta = row.Respuesta;
            const esCorrecta = row.EsCorrecta === true || row.EsCorrecta === 'true'; // Comprobamos si es verdadero

            // Inicializar la pregunta si no existe
            if (!quiz[pregunta]) {
                quiz[pregunta] = { pregunta, respuestas: [] };
            }

            // Agregar la respuesta a la pregunta
            quiz[pregunta].respuestas.push({ texto: respuesta, esCorrecta });
        });

        // Convertir el objeto quiz a un array
        let quizArray = Object.values(quiz);

        //generar la primera pregunta
        if (quizArray.length > 0) {
            //console.log(quizArray)
            return quizArray
        } else {
            document.querySelector("#question").innerHTML = "No se encontraron preguntas en el archivo Excel.";
            deshabilitarBotones(true);
        }
    } catch (error) {
        console.error("Error al cargar el archivo Excel:", error);
        document.querySelector("#question").innerHTML = "Error al cargar las preguntas.";
        deshabilitarBotones(true);
    }
}

let quiz = cargarExcel();
console.log(quiz)

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