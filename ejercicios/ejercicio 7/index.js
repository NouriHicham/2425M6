// funcion para saber la posicion donde hace click el raton en la ventana del html
document.addEventListener("click",function(event){
    console.log(event.clientX)
    console.log(event.clientY)
})

//array con todas las posiciones
let posicion = [
    {X: 218, Y: 770},
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
    {X: 789, Y: 203},
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

// funcion que devuelve numero random entre 1 y 6 para simular un dado
function rand(){
    //Math.floor(Math.random() * (max - min + 1) + min)
    let numRand = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    return numRand
}

//variables con donde se guardara la posicion de la ficha en todo momento
let posicion1 = 0
let posicion2 = 0

//variable para el turno extra
let turnoExtra = false
let turnoExtra2 = false

//colocamos las fichas al inicio (el player2 se le resta -25 a la posicion para moverlo al lado)
document.querySelector("#player1").setAttribute('style', `top: ${posicion[posicion1].Y}px; left: ${posicion[posicion1].X}px;`)
document.querySelector("#player2").setAttribute('style', `top: ${posicion[posicion2].Y}px; left: ${posicion[posicion2].X-55}px;`)

//desactivamos el boton del player2 porque comienza el 1
document.querySelector("#dado2").disabled = true

//event listener del boton 1
document.querySelector("#dado1").addEventListener("click", function(){
    //almaceno el numero random
    let numRand = rand();
    //se muestra por pantalla para saber que numero nos ha salido
    document.querySelector("#numDado1").innerHTML = `Dado: ${numRand}`

    //se suma la posicion más el numero random que hayamos obtenido
    posicion1 += numRand

    //si cae en una casilla puede acabar en otra o activar el turno extra, hacemos un else if un poco sucio para ello
    if(posicion1==2){
        posicion1 = 21
    }else if(posicion1 == 5 || posicion1 == 18 || posicion1 == 31){
        turnoExtra2 = true
    }else if(posicion1==7){
        posicion1 = 11
    }else if(posicion1 == 12){
        posicion1 = 0
    }else if(posicion1 == 14){
        posicion1 = 29
    }else if(posicion1 == 22){
        posicion1 = 24
    }else if(posicion1 == 25){
        posicion1 = 9
    }else if(posicion1 == 30){
        posicion1 = 27
    }else if(posicion1 == 33){
        posicion1 = 20
    }else if(posicion1>=36){
        posicion1 = 36
        document.querySelector("#dado2").disabled = true
        document.querySelector("#dado1").disabled = true
    }

    //movemos la ficha a la posicion que debe estar
    document.querySelector("#player1").setAttribute('style', `top: ${posicion[posicion1].Y}px; left: ${posicion[posicion1].X}px;`)

    // Cambiar turno solo si no hay turno extra
    if (!turnoExtra) {
        document.querySelector("#dado2").disabled = false;
        document.querySelector("#dado1").disabled = true;
    }
    turnoExtra = false
})

//repito lo anterior
document.querySelector("#dado2").addEventListener("click", function(){
    let numRand = rand();
    document.querySelector("#numDado2").innerHTML = `Dado: ${numRand}`

    posicion2 += numRand

    if(posicion2==2){
        posicion2 = 21;
    }else if(posicion2 == 5 || posicion2 == 18 || posicion2 == 31){
        turnoExtra = true;
    }else if(posicion2==7){
        posicion2 = 11;
    }else if(posicion2 == 12){
        posicion2 = 0;
    }else if(posicion2 == 14){
        posicion2 = 29;
    }else if(posicion2 == 22){
        posicion2 = 24;
    }else if(posicion2 == 25){
        posicion2 = 9;
    }else if(posicion2 == 30){
        posicion2 = 27;
    }else if(posicion2 == 33){
        posicion2 = 20;
    }else if(posicion2>=36){
        posicion2 = 36;
        document.querySelector("#dado2").disabled = true;
        document.querySelector("#dado1").disabled = true;
    }

    document.querySelector("#player2").setAttribute('style', `top: ${posicion[posicion2].Y}px; left: ${posicion[posicion2].X-25}px;`)

    if (!turnoExtra2) {
        document.querySelector("#dado1").disabled = false;
        document.querySelector("#dado2").disabled = true;
    }
    turnoExtra2 = false
    
})

//set timeout para mas tarde