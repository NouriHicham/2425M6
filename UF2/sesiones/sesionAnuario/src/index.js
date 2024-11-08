import {header} from "./componentes/header.js"
import {home} from "./vistas/home.js"
import {about} from "./vistas/about.js"


//inicializar la web
function root(){
   return `
      ${header()}
   `;
}

function app(){
   return `
      ${home()}
   `
}

document.querySelector("#root").innerHTML = root()
document.querySelector("#app").innerHTML = app();

//funcion cambiar entre vistas
function cambiarVista(pagina){
   if(pagina=="home"){
      document.querySelector("#app").innerHTML = app();
   }else if(pagina=="about"){
      document.querySelector("#app").innerHTML = about();
   }
}

document.querySelector("#btnHome").addEventListener("click", function(){
   cambiarVista("home")
});

document.querySelector("#btnAbout").addEventListener("click", function () {
  cambiarVista("about");
});