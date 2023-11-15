// VARIABLES CON CONST.
/* Básicamente, Aquí sí vamos a tener errores. Inicialmente cambiamos la palabra reservada const por const y sí se observa
se tienen errores. */

/* En JavaScript existen tres formas de crear variables en la nueva versión a partir de Script6 existen solamente dos
pero, la mayor parte del código de JavaScript tiene las que ya no se utiliza inicia con la palabra reservada const. */
const producto = 'Audífonos Gamer'; // Iniciar la variable, darle un nombre y asignarle un valor.
// const disponible; En const no se puede iniciar la variable sin valor.
//producto = true; Aquí no puede reasignar la variable
/* Este siguiente bloque lo que va a hacer es crear las tres variables con const en una sola para no estar repitiendo la
palabra reservada const. */
const producto1 = 'computadores',
    disponible1 = true;
categorías = 'computadoras';

/* REGLAS: En este orden de ideas todos los lenguajes de programación tienen reglas y JavaScript no es la excepción, NO
podemos en realidad hacer lo que nosotros querramos hacer. Lo que viene siendo las reglas de las variables con const es 
que las variables pueden tener letras, números incluso pueden tener ciertos caracteres especiales; pero no pueden iniciar 
con estos. Por ejemplo: const = 1producto, y/o const = -disponible; estos dos ejemplo si van producir un error. Por que estas 
variables no deben de iniciar con un número ni con un caracter especial como el guión bajo. */
// Pero el guión bajo al inicio o al final sí está permitido.
//const _disponible;
//const disponible_;

// Estilos para las variables con const: Se conocen con Case Sensitive. 
const nombre_producto = 'Monitor HD'// Underscore
// El más común en JavaScript es por ejemplo: la primera palabra inicia con minúscula y la segunda con mayúscula.
const nombreProducto = 'Monitor HD' // Se le conoce como camelCase.
const NombreProducto = 'Monitor HD' // Se le conoce como PascalCase.
const nombreproducto = 'Monitor HD' // Se le conoce como lowerCase.

/* Entonces dos diferencias entre LET y CONST es que no se pueden inicializar las variables sin el valor ni tampoco
se pueden reasignar en CONST */
