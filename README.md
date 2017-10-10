# Cifrado de Cesar

## Presentacion:
>Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

## Diagrama de flujo - cipher:
![Diagrama de Flujo](C:\Users\StephanieBT\Desktop\EjercicioCifradoCesar\assets\diagrama-cipher.jpg)

## Pseudocodigo - cipher:
![Pseudocodigo](C:\Users\StephanieBT\Desktop\EjercicioCifradoCesar\assets\pseudocodigo-cipher.jpg)

## Desarrollo Function Cipher:

1. Inicio
2. Crear funcion cipher
3. text= usuario "ingresa texto"
4. Encuentra la posicion de esa letra en el texto ingresado.
  4.1. Usa "String.fromCharCode".
5. Encuentra la posicion de esa letra en el texto ingresado.
  5.1. Usa "charCodeAt".
6. Crea una variable X
  6.1. x= extraer desde la posicion 0 hasta la posicion 33
7. Crea una variable y
  7.1 y= extraer desde la posicion 33 hasta el final.
8. Imprimir la suma de y+x en consola.
9. Fin.

## Diagrama de flujo - decipher:
![Diagrama de Flujo](C:\Users\StephanieBT\Desktop\EjercicioCifradoCesar\assets\diagrama-decipher.jpg)

## Pseudocodigo - decipher:
![Pseudocodigo](C:\Users\StephanieBT\Desktop\EjercicioCifradoCesar\assets\pseudocodigo-decipher.jpg)

## Desarrollo Function Decipher:

1. Inicio
2. Crear funcion decipher
3. text= usuario "ingresa texto"
4. Encuentra la posicion de esa letra en el texto ingresado.
  4.1. Usa "String.fromCharCode".
5. Encuentra la posicion de esa letra en el texto ingresado.
  5.1. Usa "charCodeAt".
6. Crea una variable X
  6.1. x= extraer desde la posicion de la letra dada, pero empezando desde el final del texto
7. Crea una variable y
  7.1 y= extraer desde la posicion 0, hasta la posicion de la longitud del texto - la posicion de la letra brindada.
8. Imprimir la suma de x+y en consola.
9. Fin.

# THANK YOU
