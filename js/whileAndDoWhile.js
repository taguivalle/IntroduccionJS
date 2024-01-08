// In this lesson one hundred thirty one (131) we talk over while And DoWhile
let whileAndDoWhile, whileAndDoWhile1, whileAndDoWhile2, whileAndDoWhile3, whileAndDoWhile4, whileAndDoWhile5,
    whileAndDoWhile6, whileAndDoWhile7, whileAndDoWhile8;
whileAndDoWhile = "El iterador que sigue en esta lección es muy común y se trata de while loop; es muy similar al for \
loops; aunque la sintaxis es un poco diferente; digamos que las partes son iguales, sin embargo, la ubicación es \
diferente; Este while loop se ejecuta mientras una condición sea evaluada como verdadera. Vamos a colocar un ejemplo \
aqui mismo; recordemos que el while es una palabra reservada.";
console.log(whileAndDoWhile);
whileAndDoWhile1 = "Vamos a realizar antes de escribir el código una pequeña exposición de nuestro while para que \
resulte un poco más sencillo entender este ejemplo como los demás; entonces inicializamos nuestra variable llamada \
i y esta le asignamos el valor de cero (0) posteriormente también iniciamos el while con su respectiva estructura \
cabe recordar que nuestro editor de código nos facilita este trabajo.";
console.log(whileAndDoWhile1);
whileAndDoWhile2 = "Primero observamos que, dentro de los paréntesis encontramos la condición del while loop, y \
después de las llaves se va a ejecutar el código, mientras nuestra condición sea evaluada como verdadera. Entonces \
que condición vamos a revisar? mientras el index sea menor a diez (10) notemos la diferencia de sintaxis, mientras \
que el for loop iba dentro del mismo for loop, el index va por fuera del while y el incremento va por dentro del \
while; pero al final de este. vamos a escribir esta teoría en nuestro código.";
console.log(whileAndDoWhile2);
let i = 0; // Este es el index
while (i <= 10) {
    console.log(i) // Esta es la condición
    i++;
}
whileAndDoWhile3 = "Entonces, la diferencia de sintaxis es muy notoria, pero al final continuán ejecutando código, \
mientras que nuestra condición sea evaluada como verdadera. Ahora haciendo el ejemplo del número unos (1) al cien \
(100) con los pares e impares, éste tendrá que iniciar en cero (0) para este ejemplo. Y debería de llevar un if \
dentro del while que viene a ser el cuerpo de nuestro iterador. Recordemos, nuestro anterior ejemplo en la lección \
one hundred thirty (130) en dónde utilizamos a i con el módulo (%) igualado a o para que nos muestre nuestro \
requerimiento de los pares e impares; posteriormente escribimos nuestro console.log para observar sí es o no \
el objetivo de nuestro while. Vamos a ello.";
console.log(whileAndDoWhile3);
let i1 = 0; // Este es el index
while (i1 <= 100) {
    if (i1 % 2 === 0) {
        console.log(`El número ${i1} es PAR`); // Esta es la con    console.log(`El nú`)
    } else {
        console.log(`El número ${i1} es IMPAR`);
    }
    i1++;
}
whileAndDoWhile4 = "Entonces, podemos ver que tenemos el mismo resultado, la cantidad de código puede ser diferente, \
sobre todo en líneas; pere, digamos que se parecen mucho al for loop; pero, se puede lograr prácticamente los mismo con \
ambos; sí tenemos alguna duda, podemos iterar con un carrito de compras de uno de las lecciones anteriores; vamos a \
copiarlo y traerlo hasta aquí.";
console.log(whileAndDoWhile4);
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
console.log(carrito); // Esta es nuestra condición
let i2 = 0;
while (i2 < carrito.length) {
    console.log(carrito[i2].nombre);
    i2++; // Este es nuestro incremento de uno en uno
}
whileAndDoWhile5 = "Ahora, algo muy importante es que el while va a evaluar la condición y sí es verdadera va a \
ejecutar nuestro código. Sí por ejemplo, nuestra variable la iniciamos en veinte (20) y nuestra condición le damos \
el valor de diez (10) y en nuestro mensaje le escribimos por ejemplo, Un mensaje desde el while loop; guardamos y \
observamos que consola que no va a suceder nada.";
console.log(whileAndDoWhile5);
let i3 = 20;
while (i3 < 10) { // Nuestra condición
    console.log('Un mensaje desde el while loop');
    i2++; // Este es nuestro incremento de uno en uno
}
whileAndDoWhile6 = "Entonces, porqué no hace nada? inicialmente evalua nuestra condición y dice bueno, el veinte \
(20) no es menor que diez (10) entonces no se ejecuta nada. Esa es un diferencia principal entre el while loop y \
el do while loop. Pero, vamos a ver el do while loop con un ejemplo para mayor facilidad de comprensión. Vamos a \
inicializarlo en cero (0) y escribimos un do while; no olvidemos que nuestro editor de código nos ayuda con este \
tema. De primera mano es un poco diferente la sintaxis pues la condición se coloca dentro del paréntesis del while \
por lo tanto mientras el index sea menor a diez (10) esperamos que ese código que se encuentre dentro de los \
paréntesis se ejecute";
console.log(whileAndDoWhile6);
let i4 = 0;
do {
    console.log(i4);
    i4++; // Este es nuestro incremento
} while (i4 < 10); // Esta es nuestra condición
whileAndDoWhile7 = "De nueva cuenta, sí recordamos el white loop, evalua la condición y sí no es verdadera, no \
ejecuta el código; Pero, en el do while sí le escribimos en lugar del cero (0) un cien (100), podemos ver que si \
nos imprime en consola el cien (100); veámoslo.";
console.log(whileAndDoWhile7);
let i5 = 100;
do {
    console.log(i5);
    i5++; // Este es nuestro incremento
} while (i5 < 10); // esta es nuestra condición
whileAndDoWhile8 = "Esto pasa porque, el do while ejecuta el código al menos una vez y después se evalúa; Entonces, \
nuevamente recordemos que en el d while el código se va a ejecutar al menos una vez y después va a revisar si esa que \
nuestra condición se cumple. En el while primero, va a revisar sí esa condición se cumple y después va a ejecutar el \
código en caso de  que se cumpla. En la siguiente lección one hundred thirty three (131) veremos dos iteradores que \
son muy importante en JavaScript. Uno llamado for each y el otro llamado map.";
console.log(whileAndDoWhile8);