// Arreglos o arrays
let arrays, arrays1, arrays2, arrays3, arrays4, arrays5, arrays6, arrays7, arrays8, arrays9, arrays10, arrays11, arrays12;
arrays = "Al igual que los objetos, los arreglos o arrays forman parte muy importante en cualquier o en casi cualquier \
lenguajes de programación. Un ejemplo de un array es un carrito de compras; sirven para agrupar elementos del mismo \
tipo o relacionados; Por ejemplo, la forma en que Facebook muestra un listado de amigos o personas que le dieron un me \
gusta un un like a tu última foto, seguramente están almacenados en un array. En este orden de ideas, vamos a crear \
nuestro primer array. siempre que se vea un corchete cuadrado significa que es un array. Posteriormente, lo vemos por \
consola";
// const numeros = [10, 20, 30, 40, 50];
// console.log(numeros);
arrays1 = "Podemos ver que tenemos los valores tanto horizontal como vertical de nuestro primer array.";
console.log(arrays1);
arrays2 = "Ahora una buena forma de ver el contenido de nuestro array es con el comando console.table; este comando lo \
que hace específicamente es formatear, digamos, en una tabla qu eva a ser más sencillo de ver la estructura de ese array.\
Como se mencionó esta sintaxis con los corchetes cuadrados es propia de los arrays; pero, también se pueden crear con un \
constructor, es decir, por ejemplo, crear una variable de meses con un new array.";
console.log(arrays2);
// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Dicembre');
// console.table(meses);
arrays3 = "Ahora la forma en que se crean los arreglos depende del programador sí lo quiere de la primera manera que se \
explicó en la parte de arriba o la actual.";
console.log(arrays3);
const numeros = [10, 20, 30, 40, 50];
console.log(numeros);
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
    'Noviembre', 'Dicembre');
console.log(meses);
console.table(meses);
arrays4 = "Otro aspecto a tener en cuenta es o la idea del array es que tengan datos relacionados entre si; por ejemplo \
sí son son números que sean números o sí son letras o varchar que sean así. Aunque en la realidad podemos tener algo así \
como: una variable llamada arreglo = [ y dentro tener un string y también tener un número, o tener un booleano u otro \
string, etc, etc.] e incluso tener otro array: vamos a verlo.";
console.log(arrays4);
const arreglo = ["Hola mundo", "año", 2023, "sí tienes un ", null, "o tienes un object", {
    nombre: "Juan que trabaja como",
    trabajo: "programador"
}, "y que tiene otro arreglo", [1, 2, 3], "no afecta en nada el arreglo original"];
console.log(arreglo);
console.table(arreglo);
arrays5 = "Pero como se va a acceder a los valores de un array? Ya vimos que en los objetos se utiliza un punto y después \
el nombre de la propiedad; gracias a a ese console.table tenemos acceso a algo llamado el indice y gracias a este índice \
vamos a poder acceder a los valores de un arreglo, y vamos a consultar por ejemplo el mes de noviembre que es en este \
mes donde me encuentro realizando este tutorial; pues escribiremos dentro del paréntesis el número que le corresponde al \
índice de ese mes.";
console.log(arrays5);
console.log(meses);
console.table(meses);
console.log(meses[10]);
arrays6 = "Observése que nuestro indice diez (10) nos arroja el mes de noviembre,e sto debido que en la mayoría de los \
lenguajes de programación los índices comienzan en cero (0). Entonces, con es corchete y la posición de ese índice vamos \
a poder acceder a un arreglo en específico. Recordemos que, sería dentro del console.log(El nombre del objeto y dentro de \
unos corchetes el número de la propiedad.";
console.log(arrays6);
arrays7 = "Ahora que sucede sí escribimos un número de un índice que no existe? JavaScript nunca nos va a decir que esto \
es un error, simplemente nos dice que este número de índice no existe. y nos arroja un mensaje de undefined.";
console.log(arrays7);
console.log(meses[15]);
console.log(numeros[4]);
console.log(numeros[4]);
console.log(numeros[200]);
arrays8 = "Como habíamos mencionado en otras ocaciones en este tutorial; los arrays son útiles, por ejemplo, para un \
carrito de compras; Pero, como sabemos cuantos elementos hay en un array? Y de nuevamente tenemos acceso a una propiedad \
llamada length, esta propiedad ya la habíamos visto en anteriores ocaciones en el tutorial de strings; pero, también \
se utiliza en los arreglos.";
console.log(arrays8);
console.log(meses.length);
arrays9 = "Ahora, supongamos que quiero acceder a todos los arreglos. Los arrays tienen algo llamado un iterador y que \
lo estaremos viendo en próximas lecciones. Aunque, es básicamente el código que se ejecuta mientras haya elementos en el \
arreglo.";
console.log(arrays9);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
arrays10 = "Por ejemplo, un iterador muy comun es el forEach que sí lo traducimos literalmente, es como por cada uno de \
ellos o sea de los meses para este ejemplo; que por cada elemento en el array nos deja ver estos mismos elementos en el \
orden original.";
console.log(arrays10);
meses.forEach(function (meses) {
    console.log(meses);
})

arrays11 = "Con un iterador podemos acceder a cada elemento del array; para este caso los números. por lo tanto, \
forEach es más propio de JavaScript. Podemos obervar que, en lugar de estar escribiendo, digamos, cada una de las \
posiciones; para este ejemplo son solamente cinco números pero si fueran un centenar o miles, con el forEach estos se \
van ejecutando una vez por cada vez que hay un elemento ene se array.";
console.log(arrays11);
numeros.forEach(function (numeros) {
    console.log(numeros);
})
arrays12 = "Entonces, cuando entras a Amazon y ya estas revisando ut carrito de compras, seguramente lo almacenaron en \
un array; pero, Este carrito de compras lo integran con al llamado forEach con el objetivo de mostrarnos qué elementos \
se encuentran en el carrito de compras.";
console.log(arrays12);