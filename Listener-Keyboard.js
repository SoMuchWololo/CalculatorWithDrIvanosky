/* aca voy a armar un sensor para que tome los botones del teclado en vez
tener que hacer click */

document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 37:
            /* 37 es el numero de la tecla a la izquierda,
            habria que averiguar los numeros para las teclas que necesitamos*/
            alert('Left was pressed');
        default:
            break;
    }
});
