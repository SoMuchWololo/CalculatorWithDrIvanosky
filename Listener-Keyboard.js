/* aca faltarian el +, el ? y habria que ver
que tecla definimos para solo cambiar el signo de - a + y viceversa*/

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
            break;
        case 49:
            alert('1');
            break;
        case 50:
            alert('2');
            break; 
        case 51:
            alert('3');
            break; 
        case 52:
            alert('4');
            break; 
        case 53:
            alert('5');
            break; 
        case 54:
            alert('6');
            break; 
        case 55:
            alert('7');
            break; 
        case 56:
            alert('8');
            break;
        case 57:
            alert('9');
            break;
        case 61:
            alert('=');
            break; 
        case 173:
            alert('-');
            break; 
        case 188:
            alert(',');
            break; 
        case 191:
            alert('/');     
            break;  
        default:
            break;
    }
});
