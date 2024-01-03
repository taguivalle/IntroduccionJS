/* Arrow functions o funciones de flechas. */
let ArrowFunctions, ArrowFunctions1, ArrowFunctions2, ArrowFunctions3, ArrowFunctions4, ArrowFunctions5, ArrowFunctions6,
    ArrowFunctions7, ArrowFunctions8, ArrowFunctions9, resultado, ArrowFunctions10, ArrowFunctions11, ArrowFunctions12,
    ArrowFunctions13;
ArrowFunctions = "Como una pequeña introducción se puede decir que al momento de la revolución de JavaScript y que se\
menciona en uno de estas anteriores lecciones; las funciones tuvieron algo llamado arrow functions (Funciones de flecha)\
siendo esta una gran mejora en la sintaxis, así que veamos como crear ARROW FUNCTIONS y las ventaja que nos ofrece. \
Básicamente estas funciones son otra forma de declarar funciones su sintaxis es un poco más cortes y debemos decir que \
la sintaxis es un poco más corta.";
console.log(ArrowFunctions);
ArrowFunctions1 = "Para que sea un poco más fácil de leer, vamos a hacerla un poco más inteligente, le colocamos \
parámetros y argumentos; entonces, como parámetros va a tomar el numero uno (n1) y el numero 2 (n2) vamos a ello.";
console.log(ArrowFunctions1);
/* Dentro de los paréntesis van los parámetros. */
const sumar = function (n1, n2) {
    console.log(n1 + n2);
}
sumar(5, 10);
ArrowFunctions2 = "Observamos en consola que todo está saliendo bien pues el resultado en quince (15); Pero cómo \
es la sintaxis del ARROW FUNCTIONS? recordemos que solamente funciona con nuestro objeto principal pero igualado a los \
parámetros, para este caso n1 y n2 y posteriormente se le coloca el signo igual con el mayor que antes de las llaves \
(=>) y eso ya es un ARROW FUNCTIONS. y sí guardamos cambios podemos ver que el resultado es el mismo.";
console.log(ArrowFunctions2);
/* Dentro de los paréntesis van los parámetros. */
const sumar1 = (n1, n2) => {
    console.log(n1 + n2);
}
sumar1(5, 10);
ArrowFunctions3 = "Otra ventaja de los ARROW FUNCTION es que solamente cuando tenemos una sola línea estas llaves {} son \
opcionales por los que se pueden obviar para este ejemplo, y sí observamos en consola se nota que funciona bastante \
bien.";
console.log(ArrowFunctions3);
const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);
ArrowFunctions4 = "Vamos a crear un segundo ARROW FUNCTION, vamos a colocarle algo así como counts aprendiendo y le \
colocamos la sintaxis normal del arrow function. Es de anotar que, esta sintaxis se ve un poco extraña pero con la nos \
vamos perfeccionando haciendo proyectos. Para este caso no olvidemos en pasar los parámetros dentro de los paréntesis.";
console.log(ArrowFunctions4)
/* Dentro de los paréntesis van los parámetros. */
const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo tecnología`)
}
aprendiendo('JavaScript');
ArrowFunctions5 = "Podemos observar que se imprime en consola es Aprendiendo tecnología. Una de las tantas características\
de los ARROWS FUNCTIONS es que cuándo solamente tenemos una sóla línea es que las llaves {} son opcionales por lo tanto \
para este otro ejemplo vamos a quitarlas y el resultado debe ser el mismo.";
console.log(ArrowFunctions5);
/* Dentro de los paréntesis van los parámetros. */
const aprendiendo1 = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`)
aprendiendo1('JavaScript');
ArrowFunctions6 = "Se puede analizar que es un poco más corta la sintaxis del ARROW FUNCTION; otra característica muy \
importante es que cuándo se le pasa un parámetro dentro de los paréntesis pués estos son opcional3es tambien. Pero en \
este caso anterior no porque tenemos dos parámetros en el n1 y el n2; Pero, en el ejemplo del parámetro tecnología \
sí podemos obviar el paréntesis; vamos a verlo.";
console.log(ArrowFunctions6);
/* Dentro de los paréntesis van los parámetros. */
const aprendiendo2 = tecnologia => console.log(`Aprendiendo ${tecnologia}`)
aprendiendo2('JavaScript');
ArrowFunctions7 = "Entonces, podemos observar que la sintaxis al final no es tan mala nada más es obviar las laves \
sustituyendo del function con el que iniciamos esta lección. Pero, sí se tiene una sola línea las llaves {} son \
opcionales. De igual manera esta sintaxis de los ARROW FUNCTION nos da algo de ventajasÑ; ahora vamos a realizar un \
ejemplo que ya habíamos visto en el carrito de compras y lo vamos a pegar aquí para poder observar algo de magia.";
console.log(ArrowFunctions7);
ArrowFunctions8 = "Vamos a comenzar con el de meses for each y la convertimos a una función.";
console.log(ArrowFunctions8);
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
    'Noviembre', 'Diciembre'];
console.log(meses);
// for each
meses.forEach(mes => {
    if (mes == `Marzo`) {
        console.log('El mes de Marzo sí existe');
    }
});
ArrowFunctions9 = "Podemos observar en la consola que el mensaje es exactamente como lo mandamos a imprimir. Entonces \
tenemos una sintaxis un poco más clara gracias al ARROW FUNCTION. Ahora vamos avanzando con el carrito para poder \
analizar una de las bondades del ARROW FUNCTION.";
console.log(ArrowFunctions9);
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
console.log(carrito);
resultado = carrito.some(producto => producto.nombre === 'Plancha a vapor')
console.log(resultado);
ArrowFunctions10 = "Ahora vamos a convertir este reduce en un ARROW FUNCTION. Observemos que el ejemplo que trajimos era \
más extenso que el ARROW FUNCTION. Solamente suprimimos el function, las llaves y el return.";
console.log(ArrowFunctions10);
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);
ArrowFunctions11 = "Ahora vamos a convertir este filter en un ARROW FUNCTION. Y se procede exactamente lo mismo que el \
anterior ejemplo que era más extenso; pero, con el ARROW FUNCTION. Solamente suprimimos el function, las llaves y el \
return. Y al guardar cambios podemos obervar en consola los artículos que cuestan mayor que cuatrocientos (400).";
console.log(ArrowFunctions11);
resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);
ArrowFunctions12 = "Finalmente, este otro filter también vamos a convertirlo e un ARROW FUNCTION. Por lo tanto vamos \
a ver qué el resultado en consola van a ser todos los artículos que sean diferentes de Celular.";
console.log(ArrowFunctions12);
resultado = carrito.filter(producto => producto.nombre !== 'Celular');
console.log(resultado);
ArrowFunctions13 = "Para concluir, analizamos que nuestro código con el ARROW FUNCTION es un poco más sencillo de \
utilizar, que la sintaxis es más proactiva cuando se trata de pocas líneas. Podemos escribir menos código y tambien \
este queda más limpio. Esta sintaxis es más corta y que se utiliza bastante hoy en día.";
console.log(ArrowFunctions13);