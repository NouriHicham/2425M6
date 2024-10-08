const arrayPersonas = [
    {
        nombre : 'Elena',
        apellidos : 'Vegante Pormar',
        dni: '212121121A',
        urlimg: 'https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/rostro-mujer-adulta.jpg?w=500&ssl=1'
    },
    {
        nombre : 'Perico',
        apellidos : 'Mepiedras Rocosas',
        dni: '123456789A',
        urlimg: 'https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/hombre-maduro-guapo.jpg?w=500&ssl=1'
    },
]

document.getElementById("boton").addEventListener("click", function (event) {
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value
    const ap1 = document.querySelector("#apellido1").value
    const ap2 = document.querySelector("#apellido2").value
    const dni = document.querySelector("#dni").value
    const urlimg = document.querySelector("#urlImg").value

    document.querySelector("#nombreNuevo").innerHTML = nombre
    document.querySelector("#apellidosNuevo").innerHTML = ` ${ap1} ${ap2}`
    document.querySelector("#dniNuevo").innerHTML = dni
    document.querySelector(".card-img-top").setAttribute('src', urlimg);

    arrayPersonas.push({nombre: nombre, apellidos: `${ap1} ${ap2}`, dni: dni, urlimg: urlimg});
    document.querySelector("#tabla").innerHTML= ""
    for(let i=0;i<arrayPersonas.length;i++){
        document.querySelector("#tabla").innerHTML += `<!-- Usuario -->
            <tr>
              <td>${i+1}</td>
              <td><img width="30" src="${arrayPersonas[i].urlimg}" alt=""></td>
              <td>${arrayPersonas[i].nombre}</td>
              <td>${arrayPersonas[i].apellidos}</td>
              <td>${arrayPersonas[i].dni}</td>
            </tr>`
      }
    
});