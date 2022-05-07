// function ejecutar(display) {
//   return Function(`'use strict'; return (${display})`)()
// }

// ejecutar("1+2+3"); 

/* el display deberia estar limitado a 9 caracteres para
evitar el overflow de los caracteres. habria que armar una
funcion que analize el largo del string y se ejecute si el 
string es mas largo que 9 y genere un numero por ejemplo 8,3432*10^4
Dicho string tampoco puede superar los 9 caracteres*/

let xi = true;
let comma = true;
let numant;

let operator = document.getElementById("operator");
display = document.getElementById("display");


// funcion para poder escribir los numeros en display
function buttonValue(number){
    if (xi){
        display.innerHTML = number;
        xi = false;
    }
    else {
        display.innerHTML += number;
    }
}

//funcion para limpiar el display
function buttonClear(){
    display.innerHTML = "0";
    xi = true;
    comma = true;
    operator.innerHTML = ""
}

//funcion para colocar la coma una unica vez por numero
function buttonComma(){
    if (comma && xi){
        display.innerHTML +=",";
        comma = false;
        xi = false;
    }
    else if(comma){
        display.innerHTML +=",";
        comma = false;
    }
}

function operation(op){
    operator.innerHTML = op;
}