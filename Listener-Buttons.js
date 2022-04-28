/* aca arme un sensor de los botones, cada uno genera un console.log 
    ya estan testeados, faltaria armar la visualizacion en el display y armar
    las funciones correspondientes.
*/
/*  Se armo la visulaizacion del Display y se cargo funcion que muestra 
    el boton apretado, falta concatenarlo y armar 
    las funciones aritmeticas
*/
/*  elimine 2 lineas de codigos que ejecutaban el signo ? en la calculadora,
ese boton es para poner info de nosotros al terminar la calculadora (About/info)
Tambien puede utilizarse para explicar usos de la calculadora.
*/

let buttonPress = ""

document.getElementById("about").addEventListener("click", function(){
    console.log("this is a about!");
});
document.getElementById("delete").addEventListener("click", function() {
    console.log("this is a delete!");
});
document.getElementById("clear").addEventListener("click", function() {
    console.log("this is a clear!");

});
document.getElementById("division").addEventListener("click", function() {
    console.log("this is a division!");
});
document.getElementById("seven").addEventListener("click", function() {
    console.log("this is a seven!");
    buttonPress =  "7";
    buttonValue()
});
document.getElementById("eight").addEventListener("click", function() {
    console.log("this is a eight!");
    buttonPress =  "8";
    buttonValue()
});
document.getElementById("nine").addEventListener("click", function() {
    console.log("this is a nine!");
    buttonPress =  "9";
    buttonValue()
});
document.getElementById("multiplication").addEventListener("click", function() {
    console.log("this is a multiplication!");
});
document.getElementById("four").addEventListener("click", function() {
    console.log("this is a four!");
    buttonPress =  "4";
    buttonValue()
});
document.getElementById("five").addEventListener("click", function() {
    console.log("this is a five!");
    buttonPress =  "5";
    buttonValue()
});
document.getElementById("six").addEventListener("click", function() {
    console.log("this is a six!");
    buttonPress =  "6";
    buttonValue()
});
document.getElementById("substraction").addEventListener("click", function() {
    console.log("this is a substraction!");
});
document.getElementById("one").addEventListener("click", function() {
    console.log("this is a one!");
    buttonPress =  "1";
    buttonValue()
});
document.getElementById("two").addEventListener("click", function() {
    console.log("this is a two!");
    buttonPress =  "2";
    buttonValue()
});
document.getElementById("three").addEventListener("click", function() {
    console.log("this is a three!");
    buttonPress =  "3";
    buttonValue()
});
document.getElementById("addition").addEventListener("click", function() {
    console.log("this is a addition!");
});
document.getElementById("change-sign").addEventListener("click", function() {
    console.log("this is a change-sign!");
});
document.getElementById("zero").addEventListener("click", function() {
    console.log("this is a zero!");
    buttonPress =  "0";
    buttonValue()
});
document.getElementById("comma").addEventListener("click", function() {
    console.log("this is a comma!");
    buttonPress =  ",";
    buttonValue()
});
document.getElementById("equal").addEventListener("click", function() {
    console.log("this is a equal!");
});
