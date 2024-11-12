import {logo} from "./logo.js";
import {menu} from "./menu.js";

export function header(){
   return `
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
   <div class="container-fluid">
      ${logo()}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      ${menu()}
      </div>
   </div>
   </nav>
   `;
}