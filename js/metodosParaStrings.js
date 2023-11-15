/* Métodos para strings. */
const producto = "Monitor de cincuenta 50\" pulgadas";
const producto1 = "Monitor de cincuenta 50\" pulgadas HD";

/* Enviamos la solicitud a la consola. */
console.log(producto);
console.log(producto1);

/* Ahora cuando estamos en twitter existe un límite de caracteres de 270 aproximadamente; por lo tanto cada vez se va
escribiendo este le va diciendo cuántos faltan para llegar al límite. esto se hace con un método llamado length. */
const producto2 = "Monitor de cincuenta 50\" pulgadas ultra HD";
console.log(producto2.length);// Método (length) para conocer la extensión de una cadena de caracteres.

/* Bien, el método length es uno de los pocos métodos en JavaScript que no tienen paréntesis, usualmente siempre se
admiten estos, esto pasa porque no es un método como tal, tiene la sintaxis seguida después de escribir el punto; pero,
como no tiene paréntesis, es más bien porque es una propiedad. */

/* De otra parte, necesitamos saber sí la cadena tiene una posición. Esto se hace con el método indexof, este nos
va a permitir ver en que posición se encuentra el texto que se esté usando o que se esté solicitando. */
const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web";
const producto3 = 'Monitor HD';
const email = 'correo@correo.com';

/* Enviamos la solicitud a la consola. */
console.log(tweet.length);
console.log(tweet.indexOf('JavaScript'));// Nos retorna la posición.
console.log(producto3.indexOf('Monitor'));// Nos retorna la posición.
console.log(producto3.indexOf('Tablet'));// Sino encuentra la posición devuelve un -1.
console.log(email.indexOf('@'));// Sí encuentra el caracter especial devuelve una posición.


/* Seguidamente, tenemos el método includes, es como un poco más moderno que el anterior. */
console.log(tweet.includes('A'));
console.log(tweet.includes('JavaScript'));// Nos retorna la posición.
console.log(producto3.includes('Monitor'));// Nos retorna la posición.
console.log(producto3.includes('Tablet'));// Sino encuentra la posición devuelve un -1.
console.log(email.includes('@'));// Sí encuentra el caracter especial devuelve una posición.

