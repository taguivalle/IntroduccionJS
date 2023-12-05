// Destructuring objects
let destructuring, destructuring1, destructuring2, destructuring3, destructuring4, destructuring5, destructuring6,
    destructuring7, destructuring8;
destructuring = "Este tema de hoy sábado 11/18/2023, DESTRUCTURING OBJECTS, y para este tema en especial vamos a utilizar el \
siguiente código que lo pegamos del archivo modifyObjetos.js a manera de explicación. y vamos a tener una sola salida en \
consola para el objeto producto.";
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}
console.log(destructuring);
console.log(producto);
destructuring1 = "Como es lo normal, tenemos un objeto y después tenemos sus propiedades con unos valores dentro de ese \
mismo objeto. Entonces, como puedo seleccionar el precio y crear una nueva variable? Bueno podemos hacerlo de la siguiente \
forma: sí creamos una variable por ejemplo: const precioProducto igual a producto punto precio y lo mostramos en \
consola podemos ver que aparece 300.";
console.log(destructuring1);
console.log(producto);
const precioProducto = producto.precio;
console.log(precioProducto);
destructuring2 = "Entonces, estamos accediendo al objeto producto y extreamos ese 300, se le asigna la variable \
precioProducto y después lo imprimimos por consola. Ahora supongamos que queremos traernos el nombre del producto, lo \
más fácil es duplicar la variable precioProducto, le cambiamos el nombre de la variable y solamente cambiamos precio por \
nombreProducto que es la propiedad que queremos traer. Y nos debe de salir por consola Monitor de 20 pulgadas.";
console.log(destructuring2);
// const nombreProducto = producto.nombreProducto;
// console.log(nombreProducto);
destructuring3 = "Bueno, podemos ver que el nombre de la variable es el mismo nombre de la propiedad; pero, no hay \
inconvenientes porque, en realidad la variable producto, nombreProducto es una propiedad del objeto producto no es una \
variable como tal, porqué en un lenguaje de programación no se deben de tener dos variables que se llamen de igual \
manera. Por lo tanto, se puede observar la forma en la que se trae, digamos, lso valores dentro de un objeto. Pero esta \
era la forma anterior de hacerlo.";
console.log(destructuring3);
destructuring4 = "Aunque es un poco extraño la nueva forma de hacerlo, pero después le comienza a ver sus beneficios \
por lo que resulta más sencillo de utilizarla a medida que se va practicando con esta forma. A esta forma, se le \
conoce como DESTRUCTURING OBJECTS, que significa más o menos sacar de una estructura, es decir, tenemos el objeto \
producto eso es una estructura; y lo que estamos haciendo es sacarlo de ahí. Ahora veámoslo con un ejemplo.";
console.log(destructuring4);
destructuring5 = "Vamos a escribir const como adevertencia se debe de colocar llaves o corchetes, siempre que se \
utiliza un destructuring tenemos que agregar llaves, es como una asignación de variables y después se tiene que escoger \
las propiedades del objeto, ya sea para este caso su nombre, producto, precio disponible, etc. Supongamos que quiero \
extraer el precio aquí dentro de las llaves ya se está aplicando el destructuring al precio de la variable del \
producto y le asignamos el nombre del objeto producto punto y coma. quedaría así: const { precio } = producto";
console.log(destructuring5);
destructuring6 = "Pero, qué es lo que hace en realidad destructuring? Extrae el valor y crea la variable; No olvidemos \
que ya creamos la variable precioProducto y extraemos el valor el código const { precio } = producto lo hace todo en \
un solo paso por lo tanto lo vamos a mirar en la consola. y así sucecivamente podemos extraer las propiedades que tenga \
el producto";
console.log(destructuring6);
// const { precio } = producto;
// const { nombreProducto } = producto;
// console.log(precio);
// console.log(nombreProducto);
destructuring7 = "Ahora para evitar tantas líneas de código podemos dentro de las llaves llamar a las variables; pero, \
las separamos con una coma (,)";
console.log(destructuring7);
const { precio, nombreProducto } = producto;
console.log(precio, nombreProducto);
destructuring8 = "Lo más importante es que para destructuring funcione es que tiene que tener el mismo nombre de la \
propiedad del objeto, No porque, dentro de las llaves se le coloque el mismo nombre precioProducto, digamos, pués va a \
tomar como el más cercano a él; algo así te va a marcar undefined porque no existe una propiedad llamada precioProducto \
tiene que ser el mismo nombre; ";
console.log(destructuring8);
console.log(precioProducto);
console.log(nombreProducto);


