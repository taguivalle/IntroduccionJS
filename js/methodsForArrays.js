/* Methods for arrays. */
let methodsForArray, methodsForArray1, methodsForArray2, methodsForArray3, methodsForArray4, methodsForArray5,
    methodsForArray6, methodsForArray7, methodsForArray8, methodsForArray9, methodsForArray10, methodsForArray11,
    methodsForArray12, methodsForArray13, methodsForArray14;
methodsForArray = "Continuando con el tema de los arrays, en esta lección estaremos viendo como modificar su valores.\
Lo vimos anteriormente con los objetos que es posible modificar también modificar un arreglo; por ejemplo, sí creas \
un carrito de compras, agregas algunos elementos a ese carrito y también lo puede ir quitando sino es de tu gusto. \
Ahora, también cuando creas una playlist en Spotify puedes agregar o quitar canciones, Entonces, vamos a iniciar.";
console.log(methodsForArray);
methodsForArray1 = "De igual manera, en esta lección estaremos viendo como modificar su valores.\
Lo vimos anteriormente con los objetos que es posible modificar también modificar un arreglo; por ejemplo, sí creas \
un carrito de compras, agregas algunos elementos a ese carrito y también lo puede ir quitando sino es de tu gusto. \
Ahora, también cuando creas una playlist en Spotify puedes agregar o quitar canciones, Entonces, vamos a iniciar.";
console.log(methodsForArray1);
const numeros = [10, 20, 30, 40, 50];
console.log(numeros);
console.table(numeros);
methodsForArray2 = "Es normal que tengamos un array de números como de meses; con sus respectivos índices y valores; \
y sí queremos agregarle un elemento al final, una forma de hacerlo no muy común en realidad, es colocarle al objeto \
numeros en el índice a cinco; y sí observamos como no existe ese en el array original, lo va a agregar; (numeros[5] \
= 60).";
console.log(methodsForArray2);
numeros[5] = 60;
methodsForArray3 = "Y sí guardamos los respectivos cambios, observamos que lo agrega normalmente en la consola; también \
se puede observar que nos reimprime el valor sesenta (60) y nuestro arreglo ya tiene seis (6) elementos. Pero, esta \
forma no es muy común; porque tienes que conocer cuál es la extensión del arreglo y entonces agregarlo al final; esto,\
lo hace un poco más complicado.";
console.log(methodsForArray3);
console.log(numeros);
console.table(numeros);
methodsForArray4 = "Algo importante a tener en cuenta esta forma es que por ejemplo, sí le pones a la posición dos (2) \
un valor, es decir, una opción que sí existe, eso va a modificar ese elemento; por esto no es tan común esta forma; pero, \
puedes ver que si agregas una posición que no existe, el array entonces va a agregarlo hacia el final.";
console.log(methodsForArray4);
numeros[2] = 60;
console.log(numeros);
console.table(numeros);
methodsForArray5 = "El otro método que sí es más común es utilizar se llama push. Vamos a seguir utilizando el array \
numeros punto push y eso es lo que hace es agregar un nuevo elemento hacia el final de este array, independientemente de \
cuanto mida no tenemos que saber la posición como en el ejemplo anterior, va a agregarlo hacia el final. Entonces sí se \
quiere, ponemos un 80, guardamos cambios y observamos que lo agregó inmediatamente al final del array.";
console.log(methodsForArray5);
numeros.push(80);
console.log(numeros);
console.table(numeros);
methodsForArray6 = "La ventaja de este console.push es que va agregando los valores al final de del array sin tener en \
cuenta la extensión de este. Otra cualidad de este numeros.push es que puedes agregar los valores separados por comas \
dentro del mismo push";
console.log(methodsForArray6);
numeros.push(90, 91, 92, 98, 102);
console.log(numeros);
console.table(numeros);
methodsForArray7 = "Pero, cuál es la desventaja de este método console.push; pués que hoy en día NO se recomienda \
modificar los arrays originales, no modificar los datos originales; Entonces, esta forma tampoco se está utilizando. \
aunque en la mayoría de ejemplos que vamos a encontrar en internet de modificar un array, agregar elementos al final \
del array pues recomiendan numeros.push.";
console.log(methodsForArray7);
methodsForArray8 = "Con esto en mente, vamos mencionar otra forma u otro método que se conoce como numeros.unshift y \
vamos a colocar valores negativos por ejemplo; vamos a por ello en el código.";
console.log(methodsForArray8);
numeros.unshift(-10, -11, -12, -18, -102);
console.log(numeros);
console.table(numeros);
methodsForArray9 = "Sí guardamos cambios, puedes ver que se le va a agregar al inicio del array, entonces push lo agrega \
al final del array. Esto se conoce como las estructuras de datos, donde en una entrevista te preguntan como agregarías \
los valores tanto al final como al inicio del array, entonces, simplemente con push y con unshift.";
console.log(methodsForArray9);
methodsForArray10 = "Ahora, también existen métodos para eliminar elementos de un arreglo; y en este orden de ideas, \
existen dos formas muy comunes de nueva cuenta pasas el nombre del arreglo que deseas modificar, en este caso vamos a \
utilizar el de meses, y vamos a utilizar meses.pop y guardamos cambios, observamos que eso va a eliminar el último \
elemento, es decir, nos hace falta Diciembre.";
console.log(methodsForArray10);
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
    'Noviembre', 'Diciembre');
console.log(meses);
meses.pop();
console.log(meses);
console.table(meses);
methodsForArray11 = "De igual manera, sí existe un método para eliminar el último valor, también existe uno para \
eliminar el primero y este se conoce como shift. y para este ejemplo nos haría falta el mes de Enero.";
console.log(methodsForArray11);
console.log(meses);
meses.shift();
console.log(meses);
console.table(meses);
methodsForArray12 = "Teniendo en cuenta que eliminamos los primero como los últimos valores, pero, que pasaría sí \
quisiera eliminar un valor por ejemplo marzo o abril y quiero mantener febrero o marzo por decir algo. Existe un \
método que se llama splice. Vamos a por ello.";
console.log(methodsForArray12);
// console.log(meses);
// meses.splice(3, 1);
// console.log(meses);
// console.table(meses);
methodsForArray12 = "Ahora, todo esto que estamos haciendo tiene sus desventajas, como siempre se dice, no siempre hay \
ventajas. La desventaja principal de estos métodos es que modifican el array original, es decir, estamos modificando; \
como se ha visto en estos ejemplos hemos agregado o quitado elementos. Y un enfoque que está ganando mucha fuerza es \
mantener, digamos, nuevamente los datos originales y entonces es mejor crear un array nuevo con los nuevos datos.";
console.log(methodsForArray12);
methodsForArray13 = "Para ello se recomienda el rest operator o el spread operator; como lo dijimos en anteriores \
ocaciones su sintaxis es el nombre del objeto y dentro de los corchetes tres punto suspensivos.entonces vamos a agregar \
enero, diciembre o el que se quiera agregar. para este ejemplo es necesario comentar las anteriores líneas de meses.";
console.log(methodsForArray13);
console.log(meses);
const nuevosMeses = [...meses, 'Junio', 'Diciembre', 'Enero'];
console.log(nuevosMeses);
methodsForArray14 = "Observemos que los datos se acomodan a los valores iniciales. Esto es básicamente o equivalente \
a un push; se ve como más código; pero, es la mejor forma de hacerlo de nuevo porque no se modifica el arreglo original. \
hoy en día se recomienda un poco más. Ahora, esta sintaxis de pasar los datos en el orden que le dimos se parece a simular \
el push y el unshift pues porque lo agrega en la posición que es.";
console.log(methodsForArray14);