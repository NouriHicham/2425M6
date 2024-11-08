
export function header(){
   return `
   
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
         <div class="navbar-nav">
         <button class="nav-link" id="btnHome" type="button">Home</button>
         <button class="nav-link" id="btnAbout" type="button">About</button>
         </div>
      </div>
      </div>
   </nav>
   `;
}