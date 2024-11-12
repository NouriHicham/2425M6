import { arrayPartidas, nuevaPartida } from "../componentes/arrayPartidas.js";

function pintaTablas() {
  let tablaPartidas = ``;
  for (let i = 0; i < arrayPartidas.length; i++) {
    tablaPartidas += `
         <tr>
            <td>${arrayPartidas[i]["avatar"]}</td>
            <td>${arrayPartidas[i]["nick"]}</td>
            <td>${arrayPartidas[i]["puntos"]}</td>
            <td>${arrayPartidas[i]["fecha"]}</td>
         </tr>`;
  }
  return tablaPartidas;
}

function form(){
   return `
      <div class="mb-3">
         <label for="avatar" class="form-label">Avatar</label>
         <input type="avatar" class="form-control" id="formAvatar" value="❤️">
      </div>
      <div class="mb-3">
         <label for="nick" class="form-label">Nick</label>
         <input type="nick" class="form-control" id="formNick" value="Juan">
      </div>
      <div class="mb-3">
         <label for="puntos" class="form-label">Puntos</label>
         <input type="puntos" class="form-control" id="formPuntos" value="1234">
      </div>
      <div class="mb-3">
         <label for="fecha" class="form-label">Fecha</label>
         <input type="fecha" class="form-control" id="formFecha" value="2024-11-14">
      </div>
      <button type="button" class="btn btn-success" id="btnForm">Insertar nueva partida</button>
   `;
}

function pintaDatosPartida(){
   return `
   <button type="button" class="btn btn-success mt-3 mb-5" id="btnNueva">Insertar partida completamente nueva</button>
   `;
}

function guardarPartida(){
   arrayPartidas.push({
     avatar: nuevaPartida["avatar"],
     nick: nuevaPartida["nick"],
     puntos: nuevaPartida["puntos"],
     fecha: nuevaPartida["fecha"],
   });
}

export function ventanaGuardarPartida(){
   let resultado = window.confirm('Guardar partida?');
   if (resultado == true) {
      guardarPartida();
   } else { 
      window.alert('no');
   }
}

export function partidas() {
  return `
   <h1>Partidas</h1>
   <table class="table">
      <thead>
         <tr>
            <th scope="col">Avatar</th>
            <th scope="col">Nick</th>
            <th scope="col">Puntos</th>
            <th scope="col">Fecha</th>
         </tr>
      </thead>
      <tbody id="tablaPartidas">
         ${pintaTablas()}
      </tbody>
   </table>
   <form class="mt-5" action="">
      <h2>Insertar nueva partida</h2>
      ${form()}
   </form>
   ${pintaDatosPartida()}
   `;
}