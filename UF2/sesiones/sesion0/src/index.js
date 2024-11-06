//importamos componentes
import {header} from "./componentes/header.js"
import { home } from "./vistas/home.js";
import { about } from "./vistas/about.js";

console.log('Cargando index.js');

function app(){
   return `
   ${header()}
   <h1>Mi componente APP</h1>
   <div id="vistas">Aqui van las vistas</div>
   `;
}


document.querySelector('#root').innerHTML = app();


function navegar(pagina){
   if(pagina == 'home'){
      document.querySelector("#vistas").innerHTML = home(); 
   }else if(pagina == 'about'){
      document.querySelector("#vistas").innerHTML = about(); 
   }
}

document.querySelector('#btnHome').addEventListener('click', function(){
   navegar('home');
})

document.querySelector("#btnAbout").addEventListener("click", function () {
  navegar("about");
});