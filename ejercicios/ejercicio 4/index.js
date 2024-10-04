// document.getElementById("boton").addEventListener("click", function (event) {
//     event.preventDefault();
// });

// document.querySelector(".btn").addEventListener("click", function(event){
//     document.querySelector("#nombreNuevo").innerHTML = document.querySelector("#nombre").innerHTML
//     document.querySelector("#apellidosNuevo").innerHTML = `${document.querySelector("#apellido1").innerHTML} ${document.querySelector("#apellido2").innerHTML}`
// })

document.getElementById("boton").addEventListener("click", function (event) {
    document.querySelector("#nombreNuevo").innerHTML = document.querySelector("#nombre").innerHTML
    document.querySelector("#apellidosNuevo").innerHTML = `${document.querySelector("#apellido1").innerHTML} ${document.querySelector("#apellido2").innerHTML}`
    event.preventDefault();
});