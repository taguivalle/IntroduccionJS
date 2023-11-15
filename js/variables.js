/* VARIABLES: Con esto en mente las variables son una característica de cualquier lenguaje de
programación. En algunos artículos de la web manifiestan que cuando hay variables y funciones; CSS tiene variables;
pero, no tiene funciones o no se puede definir sus funciones, digamos, como un lenguaje de programación. Existe algo 
llamado CSS Houdini que más o menos lo hace, no te permite crear tu propio código CSS. Pero, es una de las características
de un lenguaje de programación. */

/* En JavaScript existen tres formas de crear variables en la nueva versión a partir de Script6 existen solamente dos
pero, la mayor parte del código de JavaScript tiene las que ya no se utiliza inicia con la palabra reservada var. */
var producto = 'Audífonos Gamer'; // Iniciar la variable, darle un nombre y asignarle un valor.
var disponible;//iniciamos la variable pero sin valor.
producto = true;// Aquí reasignamos la variable
/* Este siguiente bloque lo que va a hacer es crear las tres variables en una sola para no estar repitiendo la palabra
reservada var. */
var producto1 = 'computadores',
    disponible1 = true;
categorías = 'computadoras';

/* REGLAS: En este orden de ideas todos los lenguajes de programación tienen reglas y JavaScript no es la excepción, NO
podemos en realidad hacer lo que nosotros querramos hacer. Lo que viene siendo las reglas de las variables es que las 
variables pueden tener letras, números incluso pueden tener ciertos caracteres especiales; pero no pueden iniciar con 
estos. Por ejemplo: var = 1producto, y/o var = -disponible; estos dos ejemplo si van producir un error. Por que estas 
variables no debe de iniciar con un número ni con un caracter especial como el guión bajo. */
// Pero el guión bajo al inicio o al final sí está permitido.
var _disponible;
var disponible_;

// Estilos para las variables: Se conocen con Case Sensitive. 
var nombre_producto = 'Monitor HD'// Underscore
// El más común en JavaScript es por ejemplo: la primera palabra inicia con minúscula y la segunda con mayúscula.
var nombreProducto = 'Monitor HD' // Se le conoce como camelCase.
var NombreProducto = 'Monitor HD' // Se le conoce como PascalCase.
var nombreproducto = 'Monitor HD' // Se le conoce como lowerCase.

console.log(producto)

