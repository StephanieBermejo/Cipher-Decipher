

//Crear funcion cipher
function cipher (){

//Preguntar al usuario el texto que quiere encriptar
  text = prompt("Ingresa el texto.");

//Hallar la letra que ocupa el espacio 33

  var first=String.fromCharCode((0+33)%26);

// Hallar la posicion de ese espacio en el texto

  var position=first.charCodeAt();

// Pedimos las letras que acompañan antes y despues del texto, primero desde la posicion 0, hasta la posicion donde se ubica la letra de donde se movera

  var x = text.slice(0,position);

//Luego pedimos las letras que desde la letra buscada hasta el final

  var y = text.slice(position,text.length);

//Sumamos ambas variables e imprimimos el resultado
    console.log(y+x);

}


//crear funcion

function decipher (){

//Se le pide al usuario el texto que quiere desencriptar

  text = prompt("Ingresa el texto.");

//Hallar la posicion de la letra con la que comenzaremos a desglosar

  var first=String.fromCharCode((0+33)%26);

//Hallar la posicion de la letra en el texto

  var position=first.charCodeAt();

//Como vamos a desencriptar comenzamos a separar desde el final

  var x = text.slice(- position);

//Luego buscamos la posicion de la parte del texto sobrante

  var y = text.slice(0,text.length-position);

//Sumamos ambas variables e imprimimos el resultado

    console.log(x+y);

}

decipher();

//cipher();
