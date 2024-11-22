import { useState } from "react";
let asc= true;

export default function app() {
  //let numRegistros = 0;

  //estados: son como variables pero la pantalla se refresca con los nuevos datos cuando haga falta
  const [arrayPartidas, setArrayPartidas] = useState(
    [
      {
        id: 1,
        puntos: 120
      },
      {
        id: 2,
        puntos: 19
      },
    ]
  )

  const [numRegistros, setNumRegistros] = useState(arrayPartidas.length);

  function ctrlRegistros() {
    const nuevoRegistro = {
      id: 3,
      puntos: 100
    }
    arrayPartidas.push(nuevoRegistro);
    console.log(arrayPartidas)
    setNumRegistros(arrayPartidas.length)
  }
  function ordenarPuntos(){
    asc ? arrayPartidas.sort((puntosA, puntosB) => puntosA.puntos - puntosB.puntos) : arrayPartidas.sort((puntosA, puntosB) => puntosB.puntos - puntosA.puntos)
    asc ? asc=false : asc=true;

    setArrayPartidas([...arrayPartidas])
    //console.log(asc)
  }

  return (
    <div>
      <h1>Sesión 4 plus</h1>
      <div>
        Numero registros: <span>{numRegistros}</span>
      </div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {
            arrayPartidas.map((item, index)=> (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.puntos}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <button onClick={ctrlRegistros}>Sumar registro</button>
      <button onClick={ordenarPuntos}>ordenar array puntos</button>
    </div>
  );
}
