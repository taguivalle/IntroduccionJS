// "use strict";
// Objects Methods
let objectMethod, objectMethod1, objectMethod2, objectMethod3, objectMethod4;
objectMethod = "Este tema de hoy sábado 11/18/2023, OBJECTS METHODS, y para este tema en especial vamos a utilizar el \
siguiente código que lo pegamos del archivo modifyObjetos.js a manera de explicación. y vamos a tener una sola salida en \
consola para el objeto producto.";
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}
console.log(objectMethod);
console.log(producto);
objectMethod1 = "Recordemos que, previamente vimos como agregarle propiedades nuevas al objeto. con la siguiente línea: \
producto.imagen = 'imagen.jpg' y vamos a imprimirlo por consola. y podemos ver que nos estaría agregando una propiedad \
nueva llamada imagen con su respectivo valor imagen.jpg.";
console.log(objectMethod1);
producto.imagen = 'imagen.jpg';
console.log(producto);
objectMethod2 = "Nuevamente, recordemos que, cuando creamos una variable, como const, no la puedes modificar; ¿Por qué un \
objeto sí se puede modificar? Porque un objeto, a pesar de estar como const let, se puede modificar sus valores y agregar \
nuevas propiedades; Bueno, digamos que esa es como una limitante o una característica de los objetos; sí quieres prevenir \
que eso suceda; tienes que utilizar una función que inicia con Object y se llama freeze; entonces a Object.freeze le \
pasamos el objeto que freeze sería como congelar, es decir lo vamos a congelar para que no podamos agregar más valores. \
vamos al código.";
console.log(objectMethod2);
producto.imagen = 'imagen.jpg';
console.log(producto);
objectMethod3 = "Entonces, freeze no te va a permitir agregarle más propiedades y tampoco permite que el objeto sea \
modificado. O sea que, sí guardamos cambios podemos observar que ya no aparece la propiedad imagen.";
console.log(objectMethod3);
Object.freeze(producto);
producto.imagen = 'imagen.jpg';
console.log(Object.isFrozen(producto));
console.log(producto);
objectMethod4 = "Existe otra propiedad llamada seal.";
console.log(objectMethod4);
Object.seal(producto);
producto.imagen = 'imagen.jpg';
console.log(Object.isSealed(producto));
console.log(producto);