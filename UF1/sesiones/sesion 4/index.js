console.log("Sesion 4")

//array
const frutas = ['pera', 'manzana', 'platano', 9, 32, "34"];

//acceso a posicion del arrays
console.log(frutas[2]);

//array de dos dimensiones
const barquitos = [
    ["1A","1B","1C"],
    ["2A","2B","2C"],
    ["3A","3B","3C"],
]

console.log(barquitos[2][1])

const persona = {
    nombre : 'Pepe',
    apellidos : 'Lotillas Rotas',
}

console.log("nombre = ", persona.nombre);

const arrayPersonas = [
    {
        nombre : 'Pepe',
        apellidos : 'Lotillas Rotas',
    },
    {
        nombre : 'Sara',
        apellidos : 'Lotus Rotas',
    },
    {
        nombre : 'Andres',
        apellidos : 'Roto Rotas',
    }
]

console.log(arrayPersonas[2].nombre)

//ejercicio acceder a datos
const alumnes = [
    {
      nom: "Joan Pérez",
      edat: 18,
      correu: "joan.perez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 8.5 },
        { nom: "Bases de Dades", nota: 7.0 },
        { nom: "Sistemes Operatius", nota: 6.5 }
      ]
    },
    {
      nom: "Maria Sánchez",
      edat: 19,
      correu: "maria.sanchez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 9.0 },
        { nom: "Bases de Dades", nota: 8.0 },
        { nom: "Sistemes Operatius", nota: 7.5 }
      ]
    },
    {
      nom: "Pere Martínez",
      edat: 20,
      correu: "pere.martinez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 7.5 },
        { nom: "Bases de Dades", nota: 6.0 },
        { nom: "Sistemes Operatius", nota: 8.0 }
      ]
    }
  ];

  //La nota de sistemas operativos de Maria Sanchez es:
  console.log(alumnes[1].moduls[2].nota)

  //Nombre del segundo modulo de Pere
  console.log(alumnes[2].moduls[1].nom)

  //recorrer elementos de un array con for

  for(let i=0;i<arrayPersonas.length;i++){
    console.log("nombre de ", i, [arrayPersonas[i].nombre])
  }

  //otro ejercicio soobre imprimir con bucles en un html

  //imprimimos en una lista
  const listas = ["Pepe", "Jose", "Maria"]

  for(let i=0;i<listas.length;i++){
    document.querySelector("#lista").innerHTML += "<li>"+listas[i]+"</li>"
  }

  //imprimimos en una tabla
  document.querySelector("#tablaNombres").innerHTML="<tr><td>Nombre</td><td>Apellidos</td></tr>"
  
  for(let i=0;i<arrayPersonas.length;i++){
    document.querySelector("#tablaNombres").innerHTML += `<tr><td> ${arrayPersonas[i].nombre} </td><td>${arrayPersonas[i].apellidos}</td></tr>`
  }

  //ejercicio de quiz antes de hacer el verdadero

  const quiz = [
    {
      pregunta: "¿Cuál es el planeta más cercano al Sol?",
      respuestas: [
        { texto: "Mercurio", esCorrecta: true },
        { texto: "Venus", esCorrecta: false },
        { texto: "Marte", esCorrecta: false },
        { texto: "Júpiter", esCorrecta: false }
      ]
    },
    {
      pregunta: "¿En qué año llegó el hombre a la Luna?",
      respuestas: [
        { texto: "1969", esCorrecta: true },
        { texto: "1970", esCorrecta: false },
        { texto: "1959", esCorrecta: false },
        { texto: "1980", esCorrecta: false }
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
        { texto: "China", esCorrecta: true },
        { texto: "India", esCorrecta: false },
        { texto: "Estados Unidos", esCorrecta: false },
        { texto: "Rusia", esCorrecta: false }
      ]
    }
  ];
  
  for(let i=0;i<quiz.length;i++){
    document.querySelector("#quiz").innerHTML += `<h2>${quiz[i].pregunta}</h2>`
    for(let j=0;j<4;j++){
      document.querySelector("#quiz").innerHTML += `<button>${quiz[i].respuestas[j].texto}</button>`
    }
  }

  