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



document.getElementById("about").addEventListener("click", function(){
    console.log("this is a about!");
});
document.getElementById("delete").addEventListener("click", function() {
    console.log("this is a delete!");
});
document.getElementById("clear").addEventListener("click", function() {
    console.log("this is a clear!");
    buttonClear()

});
document.getElementById("division").addEventListener("click", function() {
    console.log("this is a division!");
});
document.getElementById("seven").addEventListener("click", function() {
    console.log("this is a seven!");
    buttonValue("7")
});
document.getElementById("eight").addEventListener("click", function() {
    console.log("this is a eight!");
    buttonValue("8")
});
document.getElementById("nine").addEventListener("click", function() {
    console.log("this is a nine!");
    buttonValue("9")
});
document.getElementById("multiplication").addEventListener("click", function() {
    console.log("this is a multiplication!");
});
document.getElementById("four").addEventListener("click", function() {
    console.log("this is a four!");
    buttonValue("4")
});
document.getElementById("five").addEventListener("click", function() {
    console.log("this is a five!");
    buttonValue("5")
});
document.getElementById("six").addEventListener("click", function() {
    console.log("this is a six!");
    buttonValue("6")
});
document.getElementById("substraction").addEventListener("click", function() {
    console.log("this is a substraction!");
});
document.getElementById("one").addEventListener("click", function() {
    console.log("this is a one!");
    buttonValue("1")
});
document.getElementById("two").addEventListener("click", function() {
    console.log("this is a two!");
    buttonValue("2")
});
document.getElementById("three").addEventListener("click", function() {
    console.log("this is a three!");
    buttonValue("3")
});
document.getElementById("addition").addEventListener("click", function() {
    console.log("this is a addition!");
});
document.getElementById("change-sign").addEventListener("click", function() {
    console.log("this is a change-sign!");
});
document.getElementById("zero").addEventListener("click", function() {
    console.log("this is a zero!");
    buttonValue("0")
});
document.getElementById("comma").addEventListener("click", function() {
    console.log("this is a comma!");
    buttonComma()
});
document.getElementById("equal").addEventListener("click", function() {
    console.log("this is a equal!");
});
