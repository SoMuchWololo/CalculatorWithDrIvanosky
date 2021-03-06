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
let operator;

let operatorSimbol = document.getElementById("operatorSimbol");
display = document.getElementById("display");

function checkOperation() {
    numant = parseInt(display.innerHTML);
    xi = true;
    comma = true;
    operator = operatorSimbol.innerHTML;
    operatorSimbol.innerHTML = "";
}
// funcion para poder escribir los numeros en display
function buttonValue(number){
    if (xi){
        display.innerHTML = number;
        xi = false;
    }
    else if (operatorSimbol.innerHTML != ""){
        checkOperation();
        buttonValue(number);
    }
    else{
        display.innerHTML += number;
    }

}

// Boton Cero
function buttonZero(){
    
    if (operatorSimbol.innerHTML != ""){
        checkOperation();
        buttonZero();
    }
    else if(xi){
        display.innerHTML ="0";
    }
    else {
        display.innerHTML +="0";
    }
}

//funcion para limpiar el display
function buttonClear(){
    display.innerHTML = "0";
    xi = true;
    comma = true;
    operatorSimbol.innerHTML = ""
}

//funcion para colocar la coma una unica vez por numero
function buttonComma(){
    if (comma && xi){
        display.innerHTML = "0,";
        comma = false;
        xi = false;
    }
    else if (operatorSimbol.innerHTML != ""){
        checkOperation();
        buttonComma();
    }
    else if(comma){
        display.innerHTML +=",";
        comma = false;
    }
}

function operation(op){
    operatorSimbol.innerHTML = op;
}

function buttonEqual(){
    switch(operator){
        case "+" :
            display.innerHTML = suma(numant , parseInt(display.innerHTML));
            break;
    }
    switch(operator){
        case "-" :
            display.innerHTML = resta(numant , parseInt(display.innerHTML));
            break;
    }
    switch(operator){
        case "*" :
            display.innerHTML = multiplicacion(numant , parseInt(display.innerHTML));
            break;
    }
    switch(operator){
        case "/" :
            display.innerHTML = division(numant , parseInt(display.innerHTML));
            break;
    }
}