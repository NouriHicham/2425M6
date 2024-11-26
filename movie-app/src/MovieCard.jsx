import movies from './movies.json';

export function MovieCard(){
   function card(name){
      //console.log('hola');
      console.log(name);
   }
   return(
      
      <div className="container">

         {movies.map((movie) => (
            <div className="card" style={{width: '18rem'}} key={movie.id} onClick={()=>{
               //enviar title 
               card(movie.title);
            }}>
               <img src={movie.poster} className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title" >{movie.title}</h5>
                  <p className="card-text" >{movie.description}</p>
               </div>
            </div>
         ))}

      </div>
      )
}