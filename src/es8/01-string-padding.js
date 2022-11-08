/* 
! String Padding
*/

let string = "Hola";
console.log(string.padStart(5, "*"));
/* 
> Si el numero pasado como argumento en padStart es menor o igual a la longitud de el string,
> no mostrara el caracter que le concatenemos al inicio. Pero si el nuermo es mayor, ese 
> espacio sera rellenado con el caracter que nosotros le pasemos como argumento.
!Ejemplo:

* let saludar = "hola";
* saludar.length // 4

* saludar.padStart(4, "*") // ouput hola

* Como el numero es igual ala longitud del string, este no mostrara nada.

* saludar.padStart(5, "*") // ouput *hola

* Como vemos ahora si lo 'concatena', debido a que el numero pasado como argumento es mayor al length del string.
*/

console.log(string.padEnd(5, "*"));
/* 
> Del mismo modo ocurres con el metodo padEnd.
*/
