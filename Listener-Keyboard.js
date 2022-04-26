/* aca faltarian el +, el ? y habria que ver
que tecla definimos para solo cambiar el signo de - a + y viceversa*/

/* se armo la funcion que introduce en el display la tecla apretada */

document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        
        case 8:
            alert('delete')
            break;
        case 46:
            alert('clear')
            break;
        case 48:
            alert('0');
            buttonPress =  "0";
    buttonValue()
            break;
        case 49:
            alert('1');
            buttonPress =  "1";
    buttonValue()
            break;
        case 50:
            alert('2');
            buttonPress =  "2";
    buttonValue()
            break; 
        case 51:
            alert('3');
            buttonPress =  "3";
    buttonValue()
            break; 
        case 52:
            alert('4');
            buttonPress =  "4";
    buttonValue()
            break; 
        case 53:
            alert('5');
            buttonPress =  "5";
    buttonValue()
            break; 
        case 54:
            alert('6');
            buttonPress =  "6";
    buttonValue()
            break; 
        case 55:
            alert('7');
            buttonPress =  "7";
    buttonValue()
            break; 
        case 56:
            alert('8');
            buttonPress =  "8";
    buttonValue()
            break;
        case 57:
            alert('9');
            buttonPress =  "9";
    buttonValue()
            break;
        case 61:
            alert('=');
            break; 
        case 173:
            alert('-');
            break; 
        case 188:
            alert(',');
            buttonPress =  ",";
    buttonValue()
            break; 
        case 191:
            alert('/');     
            break;  
        default:
            break;
    }
});
