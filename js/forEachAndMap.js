// This is lesson one hundred thirty two (132) for each and map
let forEachAndMap, forEachAndMap1, forEachAndMap2, forEachAndMap3, forEachAndMap4, forEachAndMap5, forEachAndMap6,
    forEachAndMap7, forEachAndMap8, forEachAndMap9, forEachAndMap10, forEachAndMap11, forEachAndMap12, forEachAndMap13,
    forEachAndMap14;
forEachAndMap = "Para iniciar vamos a pegar nuestro carrito de compras; con este ejemplo podemos estar viendo lo que es \
un for each y un map; Si recordamos lo que vimos en lecciones anteriores, eso for tenían una condición que nosotros \
definíamos; for each y map solamente pueden ejecutarse en arrays, es decir, en algo como lo es carrito de compras; pero\
estos for each y map son métodos exclusivos de arrays.";
console.log(forEachAndMap);
forEachAndMap1 = "Bueno, al menos en realidad se van a ejecutar una vez por cada vez que recorra un elemento (una por \
cada línea que recorra) de nuestro array; es decir, sí en nuestro array existen una o más líneas; por lo tanto no no es \
necesario escribir una condición que evalúe cada iteración. el for each dice, bueno existen once (11) elementos para este \
ejemplo no voy a ejecutar el código once (11) veces; esto es exclusivo no decimos que sea exclusivo de JavaScript, porqué \
puede ser que en otros lenguajes de programación los hayamos visto; pero, a diferencia del for loops, while y do while; \
estos existen en JavaScript.";
console.log(forEachAndMap1);
forEachAndMap2 = "Entonces, como es un método, un array, tenemos que inicializar para este ejemplo con nuestro carrito de \
compras y el carrito con un for each; recordemos que teníamos algo así como function seguido de un paréntesis y las llaves \
también seguido de su respectivo console.log; vamos a escribirlo depués del array carrito. Posteriormente, guardamos y \
observamos en consola.";
console.log(forEachAndMap2);
const carrito = [
    { nombre: "Monitor de 20 pulgadas", precio: 500 },
    { nombre: "Televisor de 15 pulgadas", precio: 800 },
    { nombre: "Celular", precio: 1500 },
    { nombre: "Plancha a vapor", precio: 500 },
    { nombre: "Cepillo Eléctrico para cabello", precio: 500 },
    { nombre: "Cepillo Eléctrico dental", precio: 200 },
    { nombre: "Olla arrocera de 500 wats", precio: 5000 },
    { nombre: "Computador portatil lenovo de 18 pulgadas", precio: 1500 },
    { nombre: "Parlante automático alexa", precio: 1600 },
    { nombre: "Play Station cinco de 1tb DD", precio: 6500 },
    { nombre: "Exbox slim de 1 tb DD", precio: 5000 },
]
carrito.forEach(function (params) {
    console.log('Una vez por cada elemento');
})
forEachAndMap3 = "Entonces, podemos observar en la consola que eso nos va a imprimir una vez por cada elemento y aparece \
resaltado de color grisáceo el número once para nuestro ejemplo. Sí este array tuviera nada más sino dos (2) elementos \
pués nos aprecería solamente dos (2) impresiones del mensaje. Entonces, no se tiene que escribir una condición para este \
for each; ahora, vamos ir iterando con el for each, es decir, va a colocar o a leer, digamos, va leyendo la primera línea \
o sea el primer elemento, sigue con la segunda línea o el segundo elemento y así sucesivamente hasta llegar al último de \
nuestros elementos.";
console.log(forEachAndMap3);
forEachAndMap4 = "Ahora, el function que aparece con los paréntesis, podemos pasarle un parámetro; por ejemplo, producto y \
este sería el objeto actual sobre el cual vamos iterando o la posición del array actual, Pero, puede ser un array, digamos \
más plano, como los que vimos anteriormente del ejemplo de meses. Y cambiamos el mensaje del console.log que diga producto. \
guardamos cambios y vemos que sucede en consola.";
console.log(forEachAndMap4);
carrito.forEach(function (producto) {
    console.log(producto);
})
forEachAndMap5 = "Podemos observar en consola que de esta forma vamos a acceder a los elementos del array carrito. o sea \
cada objeto se va a ir listando del tal manera que el for each se va ir ejecutando al menos una vez por cada elemento que \
existe en el array. sì queremos acceder al nombre o al precio, solamente en la condición producto le agregamos un punto y \
nuestro editor de texto nos facilita con el autocompletado; veámoslo.";
console.log(forEachAndMap5);
carrito.forEach(function (producto) {
    console.log(producto.nombre);
})
forEachAndMap6 = "Veamos el ejemplo con precio.";
console.log(forEachAndMap6);
carrito.forEach(function (producto) {
    console.log(producto.precio);
})
forEachAndMap7 = "Entonces, con el for each se nota que es más sencillo en realidad, un for each porque que for loop o un \
while loop debido a que no ve la sintaxis más corta, Ahora, estamos utilizando un function, pero sì lo utilizamos con arrow \
function, se torna más corto el código. Procedamos eliminar el function y a utilizar la flecha enseguida de los paréntesis \
del producto; recordemos que sí tenemos un solo parámetro el paréntesis es opcional; por lo tanto lo podemos eliminar. \
cuándo solamente tenemos una línea, esta llaves también son opcionales, por lo tanto también podemos eliminarlas. y si \
guardamos cambios podemos ver en consola que el resultado es el mismo.";
console.log(forEachAndMap7);
carrito.forEach(producto => console.log(producto.nombre));
forEachAndMap8 = "Bién, este es el for each, Cómo es el map? Bueno para una mejor comprensión vamos a pegar el anterior \
ejemplo para una mayor facilidad de análisis; pero en en lugar de foreach  colocamos map; veamos que sucede.";
console.log(forEachAndMap8);
carrito.map(producto => console.log(producto.nombre));
forEachAndMap9 = "Pero, porqué for each y map son lo mismo y/o hacen exactamente lo mismo? La explicación es sencilla \
y exactamente la misma; pero, en que caso vamos a utilizar foreach y/o map? cuando se quiera iterar sobre un listado, \
digamos un array y mostrar los elementos en pantalla o simplemente enviarlos a la consola o utilizar el foreach. Si \
queremos crear un nuevo array; entonces, utilizamos un MAP; vamos a hacer una variante por decirlo de esta manera; vamos \
a quitar el return o sea el console.log, y observemos que puede suceder.";
console.log(forEachAndMap9);
carrito.map(producto => producto.nombre);
forEachAndMap10 = "Al analizar observamos en consola que no sucede nada. Entonces, lo va a asignar a una variable que va \
poner con array uno igual al carrito for each y/o map a ver que sucede. sì enviamos estos dos a la consola seguramente \
uno va a tener algún resultado.";
console.log(forEachAndMap10);
const array = carrito.forEach(producto => producto.nombre);
const array1 = carrito.map(producto => producto.nombre);
console.log(array);
console.log(array1);
forEachAndMap11 = "Al observar la consola, vemos que existe uno que está como undefined y el otro sì tiene información. \
Cuando se quiera mostrar algo en consola o cuando queramos imprimir en el HTML, se utiliza el foreach. este se encuentra \
especialmente diseñado para iterar y mostrar lso resultados; pero, sí queremos crear un nuevo array, porque aquí en este \
ejemplo estamos creando un array con los productos, observemos que, estamos dejando por fuera los precios; porqué estamos \
dejando por implícito qué queremos crear un nuevo array llamado array1 como producto punto nombre.";
console.log(forEachAndMap11);
forEachAndMap12 = "Para esto es, muy útil el MAP. Entonces el MAP nos crea un nuevo array con lo que le pongas a retornar; \
podemos ver que en el foreach no aparece nada (undefined); Entonces, la sintaxis para imprimirlo en el HTML que es algo \
estaríamos viendo en la siguiente lección one hundred thirty three (133)";
console.log(forEachAndMap12);
forEachAndMap13 = "Ahora, podemos ver que en nuestro array carrito tenemos objetos con el nombre y el precio; pero podemos \
utilizar un template string y colocar algo así como producto punto nombre un guión con producto punto precio y esto nos va \
a crear un nuevo array que va a tener este formato nuevo con su console punto log pero array2; veámoslo en consola.";
console.log(forEachAndMap13);
const array2 = carrito.map(producto => `${producto.nombre}- ${producto.precio}`);
console.log(array2);
forEachAndMap14 = "Podemos ver en consola que tenemos un nuevo format; Entonces, es muy ideal, digamos, de esta forma, para \
iterar sobre arrays y crear otro nuevo. Para, poder iterar sobre otro proceso que necesitemos construir; por decir algo; \
ahora, pasemos a la lección que se mencionó en el anterior párrafo.";
console.log(forEachAndMap14);
