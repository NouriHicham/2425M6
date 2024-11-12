console.log("hola")

import {header} from "./componentes/header.js"
import {about} from "./vistas/about.js"
import {home} from "./vistas/home.js"
import {partidas, ventanaGuardarPartida} from "./vistas/partidas.js";
import { arrayPartidas } from "../componentes/arrayPartidas.js";

document.querySelector("#app").innerHTML = home();
document.querySelector("#header").innerHTML = header();

document.querySelector("#btnHome").addEventListener("click", function(){
   document.querySelector("#app").innerHTML = home();
})

document.querySelector("#btnAbout").addEventListener("click", function () {
  document.querySelector("#app").innerHTML = about();
});

document.querySelector("#btnPartidas").addEventListener("click", function () {
  document.querySelector("#app").innerHTML = partidas();

  document.querySelector("#btnForm").addEventListener("click", function () {
    arrayPartidas.push({
      avatar: document.querySelector("#formAvatar").value,
      nick: document.querySelector("#formNick").value,
      puntos: parseInt(document.querySelector("#formPuntos").value),
      fecha: document.querySelector("#formFecha").value,
    });

    console.log(arrayPartidas);
    document.querySelector("#app").innerHTML = partidas();
  });

  document.querySelector("#btnNueva").addEventListener("click", function(){
      ventanaGuardarPartida();
      document.querySelector("#app").innerHTML = partidas();
   })

});