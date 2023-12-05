/* More Methods for arrays. */
let moreMethodsForArray, moreMethodsForArray1, moreMethodsForArray2, moreMethodsForArray3, moreMethodsForArray4,
    moreMethodsForArray5, moreMethodsForArray6, moreMethodsForArray7, moreMethodsForArray8, moreMethodsForArray9,
    moreMethodsForArray10, moreMethodsForArray11, moreMethodsForArray12, moreMethodsForArray13, moreMethodsForArray14,
    moreMethodsForArray15, resultado3, resultado4;
moreMethodsForArray = "Vamos a tener un arreglo, que va a tener una sola dimensión y se le conoce como tal array \
unidimensional; por ejemplo,  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', \
'Agosto', 'Septiembre', 'Octubre', 'Noviembre?, 'Diciembre']; y también multidimensional. No existen los array \
asociativos en JavaScript, pero, sí se puede tener un array de objetos ";
console.log(moreMethodsForArray);
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
    'Noviembre', 'Diciembre'];
console.log(meses);
moreMethodsForArray1 = "Entonces, supongamos que tenemos un carrito de compras y este va a ser igual a un array y cada \
producto por lo tanto va a ser igual a un objeto; entonces, vamos a tener multiples productos.";
console.log(moreMethodsForArray1);
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
console.table(carrito);
moreMethodsForArray2 = "Con los datos anteriores vamos a utilizar un FOREACH y este se va a ejecutar al menos una vez por \
cada ocasión o cada elemento que hay en el array carrito. Entonces, se ejecuta la variable meses al menos un vez por cada \
elemento y va ir iterando en cada uno de ellos y sí guardamos vemos nos muestra todos los meses que se encuentran en el \
array, ";
console.log(moreMethodsForArray2);
meses.forEach(function (meses) {
    console.table(meses);
});
moreMethodsForArray3 = "Ahora, sí yo quisiera ver sí el mes de marzo se encuentra en el array, podemos ver algo llamado \
una estructura de control que se llama if y le escribimos mes sí es igual a marzo; ahora, dentro de unas llaves escribimos \
El mes que queríamos buscar que era marzo.";
console.log(moreMethodsForArray3);
meses.forEach(function (mes) {
    if (mes == 'Marzo') {
        console.log('Marzo Sí existe');
    }
});
moreMethodsForArray4 = "Pero, así como está el forEach que nos ayuda a simplificar mucho el acceder a cada uno de los \
elementos, existen diferentes array methods, Por qué en lugar de escribir todo lo anterior podemos utilizar un método \
llamado includes, este es equivalente al forEach; por lo tanto podemos casi que reescribir el anterior código de la \
siguiente manera:";
console.log(moreMethodsForArray4);
const resultado = meses.includes('Marzo');
console.log(resultado);
moreMethodsForArray5 = "Este anterior código no arroja un mensaje de true; o sea que sí existe el mes que requeríamos; \
entonces, podemos ver que este método simplifica mucho el comprobar sí un elemento existe o no. Ahora, sí quiero \
comprobar el mes de saturday, obviamente no devuelve un false. Pués porqué sencillamente no existe en ese array un mes \
con ese nombre";
console.log(moreMethodsForArray5);
const resultado1 = meses.includes('Saturday');
console.log(resultado1);
moreMethodsForArray6 = "Bién, ese includes funciona perfectamente en este archivo plano y sencillo como es el del array \
meses y cuando se tiene objetos diferentes no va a ser la mejor opción utilizarlo; por ejemplo, sí duplicamos el console \
el console.log pero claro con otro nombre por ejemplo resultado2; y utilizamos el carrito y queremos buscar plancha a \
vapor; nosotros sabemos que sí existe; pero, lo curioso es que nos arroja un mensaje de false";
console.log(moreMethodsForArray6);
const resultado2 = meses.includes('Plancha a vapor');
console.log(resultado2);
moreMethodsForArray7 = "La idea es que cuando se utiliza un arreglo como el del carrito no se debe de utilizar el \
método includes; se debe de utilizar uno que se llama SOME que es ideal para un array de objetos y vamos a utilizar \
function con el producto y accedemos a la propiedad del objeto y al guardar nos debe de arrojar un true o sea que sí \
existe la plancha a vapor.";
console.log(moreMethodsForArray7);
resultado3 = carrito.some(function (producto) {
    return producto.nombre === 'Plancha a vapor'
});
console.log(resultado3);
moreMethodsForArray8 = "Entonces, recordemos que para cuando es un array plano del tipo de meses para este ejemplo, \
utilizamos INCLUDES y sí es para un array de objetos la mejor opción es utilizar SOME. se debe de acceder a cada \
propiedad o lo que quieras comprobar para que funciones bien.";
console.log(moreMethodsForArray8);
moreMethodsForArray9 = "Ahora, esta sintaxis se más corta gracias a algo llamado los ARROW FUNCTION que aún no hemos \
visto. Pero en lecciones posteriores estaremos tocando este tema. Aunque un pequeño repaso de esto puede ser lo \
siguiente: resultado3 = carrito.some(producto => producto.nombre === 'Plancha a vapor') y se vería en la consola un \
true. Pero este tema se verá un poco más extenso más adelante en esta pequeña introducción de JavaScript.";
console.log(moreMethodsForArray9);
resultado3 = carrito.some(producto => producto.nombre === 'Plancha a vapor')
console.log(resultado3);
moreMethodsForArray10 = "Otro tema importante a tener en cuenta, es como haríamos para calcular el valor total a pagar \
sí se tiene estos objetos; aunque sabemos que a simple vista es sencillo; pero, cuando se tienen una gran cantidad de \
objetos por contar sus precios por decir algo. Entonces, tenemos a la mano un método que se llama REDUCE; y que \
básicamente va a tomar todos los números y va a entregarnos un resultado.";
console.log(moreMethodsForArray10);
moreMethodsForArray11 = "Al tener nuestro REDUCE debemos poner nuestra function; y a esta tenemos que pasarle dos valores \
uno es el total que estamos pidiendo y el otro es producto actual y colocamos return de total + el producto y luego el \
precio; entonces, producto.precio y posteriormente se inicializa en cero al finalizar el corchete de la function. \
NO olvidemos en guardar los cambios. Esto muy probablemente nos arroja el resultado total que deseamos averiguar desde \
un principio; que era el total del valor de los productos.";
console.log(moreMethodsForArray11);
resultado3 = carrito.reduce(function (total, producto) {
    return total + producto.precio
}, 0);
console.log(resultado3);
moreMethodsForArray12 = "Ahora utilicemos el mismo ejercicio sin el function; pro ejemplo utilicemos el ARROW FUNCTION \
resultado3 = carrito.reduce((total, producto) => total + producto.precio, 0) y seguidamente el console.log del resultado3.\
posteriormente guardamos cambios y nos debe de arrojar el mismo resultado del anterior código.";
console.log(moreMethodsForArray12);
resultado3 = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado3);
moreMethodsForArray13 = "En esta parte del tutorial, vamos a ver el método FILTER siendo este también muy útil; este nos \
va a servir mucho por ejemplo, para obtener, un elemento menos otro es como una especie de resta matemática; o por decir \
algo, todos los que sean mayores a 500 etc. Entonces, vamos a intentarlo con un resultado4 para este caso y lo igualamos \
al carrito.filter con la function que hemos venido trabajando normalmente. Vamos a filtrar todos los precios superiores \
a 400 por ejemplo; guardamos y nos debe de traer diez (10) productos cuyo precio supera el solicitado que era 400.";
console.log(moreMethodsForArray13);
resultado4 = carrito.filter(function (producto) {
    return producto.precio > 400
});
console.log(resultado4);
moreMethodsForArray14 = "Si se quiere, puedes utilizar el menor que 400 y obviamente traerá aquellos valores que se \
encuentren por debajo. De otra parte, vamos a traer por ejemplo neveras; y nuevamente trae la información pertinente a \
este elemento.";
console.log(moreMethodsForArray14);
resultado4 = carrito.filter(function (producto) {
    return producto.nombre === 'Celular'
});
console.log(resultado4);
moreMethodsForArray15 = "Pero si queremos ver todos los que no sean neveras? podemos negar la anterior condición y \
observemos los resultados; que, nos trae a todos menos a Celular";
console.log(moreMethodsForArray15);
resultado4 = carrito.filter(function (producto) {
    return producto.nombre !== 'Celular'
});
console.log(resultado4);