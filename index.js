let jugadores = document.querySelector("#ingresar");
let generar = document.querySelector("#enviar");;

let playersArray = new Array(10);

jugadores.addEventListener("click", ()=>{

    for(i = 0; i < 10; i++){
        playersArray[i] = prompt("Ingrese jugador", `jugador ${i+1}`);
    }

    document.getElementById("jugador1").value = playersArray[0];
    document.getElementById("jugador2").value = playersArray[1];
    document.getElementById("jugador3").value = playersArray[2];
    document.getElementById("jugador4").value = playersArray[3];
    document.getElementById("jugador5").value = playersArray[4];
    document.getElementById("jugador6").value = playersArray[5];
    document.getElementById("jugador7").value = playersArray[6];
    document.getElementById("jugador8").value = playersArray[7];
    document.getElementById("jugador9").value = playersArray[8];
    document.getElementById("jugador10").value = playersArray[9];

});

generar.addEventListener("click", () =>{

    let i = playersArray.length;
    let numRandom;
    let temp;

    if(document.getElementById("jugador1").value == ""){
        alert("Faltan jugadores!!");
        return;
    }

    while(--i > 0){
        numRandom = Math.floor(Math.random() * (i+1));
        temp = playersArray[numRandom];
        playersArray[numRandom] = playersArray[i];
        playersArray[i] = temp;
    };

    document.getElementById("jugador1").value = playersArray[0];
    document.getElementById("jugador2").value = playersArray[1];
    document.getElementById("jugador3").value = playersArray[2];
    document.getElementById("jugador4").value = playersArray[3];
    document.getElementById("jugador5").value = playersArray[4];
    document.getElementById("jugador6").value = playersArray[5];
    document.getElementById("jugador7").value = playersArray[6];
    document.getElementById("jugador8").value = playersArray[7];
    document.getElementById("jugador9").value = playersArray[8];
    document.getElementById("jugador10").value = playersArray[9];
});

