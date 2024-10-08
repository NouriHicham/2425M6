
document.getElementById("boton").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#nombreNuevo").innerHTML = document.querySelector("#nombre").value
    document.querySelector("#apellidosNuevo").innerHTML = ` ${document.querySelector("#apellido1").value} ${document.querySelector("#apellido2").value}`
    document.querySelector("#dniNuevo").innerHTML = document.querySelector("#dni").value
    let urlimg = document.querySelector("#url_img").value
    document.querySelector(".card-img-top").setAttribute('src', urlimg);
});