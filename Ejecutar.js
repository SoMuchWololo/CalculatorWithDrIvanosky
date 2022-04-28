// function ejecutar(display) {
//   return Function(`'use strict'; return (${display})`)()
// }

// ejecutar("1+2+3"); 

/* el display deberia estar limitado a 9 caracteres para
evitar el overflow de los caracteres. habria que armar una
funcion que analize el largo del string y se ejecute si el 
string es mas largo que 9 y genere un numero por ejemplo 8,3432*10^4
Dicho string tampoco puede superar los 9 caracteres*/

function buttonValue(){
    pantalla.innerHTML = buttonPress
}
pantalla = document.getElementById("display")
console.log(pantalla)
pantalla.innerHTML = "1234,56789" 

