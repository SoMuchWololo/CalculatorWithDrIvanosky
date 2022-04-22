function ejecutar(display) {
  return Function(`'use strict'; return (${display})`)()
}

ejecutar("1+2+3"); 
