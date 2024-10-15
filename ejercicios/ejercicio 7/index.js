// funcion para saber la posicion donde hace click el raton en la ventana del html
// document.addEventListener("click",function(event){
//     console.log(event.clientX)
//     console.log(event.clientY)
// })

//array con todas las posiciones
let posicion = [
    {X: 218, Y: 686},
    {X: 232, Y: 615},
    {X: 248, Y: 487},
    {X: 251, Y: 405},
    {X: 269, Y: 321},
    {X: 285, Y: 217},
    {X: 361, Y: 204},
    {X: 475, Y: 208},
    {X: 589, Y: 205},
    {X: 673, Y: 209},
    {X: 884, Y: 223},
    {X: 911, Y: 303},
    {X: 905, Y: 421},
    {X: 930, Y: 530},
    {X: 932, Y: 665},
    {X: 818, Y: 684},
    {X: 667, Y: 679},
    {X: 541, Y: 682},
    {X: 403, Y: 663},
    {X: 363, Y: 579},
    {X: 362, Y: 462},
    {X: 371, Y: 356},
    {X: 486, Y: 299},
    {X: 578, Y: 294},
    {X: 663, Y: 310},
    {X: 755, Y: 298},
    {X: 805, Y: 385},
    {X: 804, Y: 456},
    {X: 805, Y: 530},
    {X: 689, Y: 548},
    {X: 565, Y: 548},
    {X: 473, Y: 532},
    {X: 482, Y: 423},
    {X: 568, Y: 422},
    {X: 675, Y: 425}
];

function rand(){
    //Math.floor(Math.random() * (max - min + 1) + min)
    let numRand = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    return numRand
}

let posicion1 = 0
let posicion2 = 0

document.querySelector("#player1").setAttribute('style', `top: ${posicion[posicion1].Y}px; left: ${posicion[posicion1].X}px;`)
document.querySelector("#player2").setAttribute('style', `top: ${posicion[posicion2].Y}px; left: ${posicion[posicion2].X-25}px;`)

document.querySelector("#dado2").disabled = true

document.querySelector("#dado1").addEventListener("click", function(){
    let numRand = rand();
    document.querySelector("#numDado1").innerHTML = `Dado: ${numRand}`
    document.querySelector("#dado1").disabled = true
    document.querySelector("#dado2").disabled = false

    posicion1 = posicion1 + numRand

    if(posicion1==1){
        posicion1 = 22;
    }

    document.querySelector("#player1").setAttribute('style', `top: ${posicion[posicion1].Y}px; left: ${posicion[posicion1].X}px;`)
})

document.querySelector("#dado2").addEventListener("click", function(){
    let numRand = rand();
    document.querySelector("#numDado2").innerHTML = `Dado: ${numRand}`
    document.querySelector("#dado2").disabled = true
    document.querySelector("#dado1").disabled = false

    posicion2 = posicion2 + numRand

    document.querySelector("#player2").setAttribute('style', `top: ${posicion[posicion2].Y}px; left: ${posicion[posicion2].X-25}px;`)
})