// VARIABLES CON LET.
/* Básicamente, lo que se debe de hacer para este caso es cambiar la palabra reservada let por let y será el mismo efecto. */

/* En JavaScript existen tres formas de crear variables en la nueva versión a partir de Script6 existen solamente dos
pero, la mayor parte del código de JavaScript tiene las que ya no se utiliza inicia con la palabra reservada let. */
let producto = 'Audífonos Gamer'; // Iniciar la variable, darle un nombre y asignarle un valor.
let disponible;//iniciamos la variable pero sin valor.
producto = true;// Aquí reasignamos la variable
/* Este siguiente bloque lo que va a hacer es crear las tres variables con LET en una sola para no estar repitiendo la
palabra reservada let. */
let producto1 = 'computadores',
    disponible1 = true;
categorías = 'computadoras';

/* REGLAS: En este orden de ideas todos los lenguajes de programación tienen reglas y JavaScript no es la excepción, NO
podemos en realidad hacer lo que nosotros querramos hacer. Lo que viene siendo las reglas de las variables con LET es 
que las variables pueden tener letras, números incluso pueden tener ciertos caracteres especiales; pero no pueden iniciar 
con estos. Por ejemplo: let = 1producto, y/o let = -disponible; estos dos ejemplo si van producir un error. Por que estas 
variables no deben de iniciar con un número ni con un caracter especial como el guión bajo. */
// Pero el guión bajo al inicio o al final sí está permitido.
let _disponible;
let disponible_;

// Estilos para las variables con LET: Se conocen con Case Sensitive. 
let nombre_producto = 'Monitor HD'// Underscore
// El más común en JavaScript es por ejemplo: la primera palabra inicia con minúscula y la segunda con mayúscula.
let nombreProducto = 'Monitor HD' // Se le conoce como camelCase.
let NombreProducto = 'Monitor HD' // Se le conoce como PascalCase.
let nombreproducto = 'Monitor HD' // Se le conoce como lowerCase.


