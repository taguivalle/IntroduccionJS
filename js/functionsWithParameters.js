/* funciones con parámetros y argumentos. */
let parameters, parameters1, parameters2, parameters3, parameters4, parameters5, parameters6, parameters7, parameters8;
parameters = "FUNCTIONS WITH PARAMETERS AND ARGUMENTS";
console.log(parameters);
parameters1 = "Para este ejemplo vamos a utilizar el ejercicio que hemos venido analizando desde tutoriales anteriores; \
por lo tanto, tenemos que pasarle parámetros y/o argumentos a nuestra función. Inicialmente, las funciones que hemos \
trabajado no tienen ningún de estos por lo tanto se escriben o se pasar dentro de los paréntesis dónde se esté definiendo \
la función. Supongamos que vamos a sumar diez (10) más diez (10) entonces, tendríamos que decirle que tome dos parámetros; \
por ejemplo, número1 seguido de una coma y el otro podría ser el numero2; entonces, esos valores se reemplazan por los \
números que traemos de la función original. De igual manera que en la lección anterior al momento de llamar la función \
en la parte final se deben de escribir esos argumentos; por ejemplo (10, 10).";
console.log(parameters1);
/* Dentro de los paréntesis van los parámetros. */
function sumar(numero1, numero2) {/* Esto parámetros actúan como variable dentro de la función. */
    console.log(numero1 + numero2);
}
/* Dentro de los paréntesis van argumentos o valores reales. */
sumar(10, 10);/* Este 10 cuando se manda a llamar a la función sumar numero1 */

parameters2 = "Como se argumentaba anteriormente en la lección anterior, una de las ventajas de las funciones es que \
las puedes reutilizar y ahora que tenemos parámetros y argumentos, nuestra función es más dinámica, más inteligente y \
más reutilizable. por lo tanto podemos duplicar o triplicar el llamado de la función con valores o argumentos diferentes; \
por ejemplo, (3, 3) (3, 6) (1, 2) (56, 170), etc.";
console.log(parameters2)
/* Dentro de los paréntesis se encuentran los argumentos o valores reales. */
sumar(15, 13);
sumar(28, 20);
sumar(48, 21);
sumar(58, 70);

parameters3 = "Ahora los parámetros para la segunda función, bién podrían ser también numero1 y número2. En realidad, \
se pueden nombrar como se desee, siempre y cuando sigan las reglas de las variables o también se pueden llamar n1 u n2 \
por decir algo; es como se quieran nombrar. Seguidamente vamos a realizar el mismo ejercicio en triplicar el llamado de \
la función y observamos que no sucede nada con el resultado.";
console.log(parameters3);
const sumar1 = function (n1, n2) {
    console.log(n1 + n2);
}
/* Dentro de los paréntesis se encuentran los argumentos o valores reales. */
sumar1(5, 8);
sumar1(15, 18);
sumar1(25, 28);
sumar1(35, 38);

parameters4 = "Observése que, a pesar de que tienen diferente sintaxis ambos van a pasar los parámetros dentro del \
paréntesis. Precisamente, para eso son los paréntesis que tenemos en las funciones; ahora, qué pasa sí en uno de sus \
valores dentro del llamado de la función se le coloca solamente un número; hagamos el ejercicio; aunque sabemos de nos \
marca un null; ahora sí no escribimos el otro número pero se tiene una coma nos arroja el mensaje de NaN o sea not at \
number. Algunas veces, vamos a tener funciones que no le vamos a pasar los dos valores; para ello es muy útil algo \
llamado parámetro por default";
console.log(parameters4);
sumar1(35, 0);

parameters5 = "Algunas veces, vamos a tener funciones que no le vamos a pasar los dos valores que se requieren; para \
eso es muy útil algo llamado parámetros por default; de nueva cuenta, algunas veces vamos a llamar una función que no \
va a tener los argumentos que se requieren o se exigen. Por ejemplo, cuando llenamos el perfil de facebook tal vez no \
llenamos todos los campos. En esos casos es muy conveniente utilizar lo que se conoce como parámetros por default.";
console.log(parameters5);

parameters6 = "Básicamente, es que dentro de los paréntesis de los parámetros vamos a igualarlos a cero (0) tanto el \
num1 como el num2; que es lo que hace estos parámetros por default que en caso de que no esté presente alguno de \
estos valores en el llamado de la función, entonces, toma el valor que le estamos dando por default; que en este caso \
sería cero (0). probemos a ver.";
console.log(parameters6);
/* Dentro de los paréntesis van los parámetros. */
function sumar(num1 = 0, num2 = 0) {
    console.log(num1 + num2);
}
/* Dentro de los paréntesis se encuentran los argumentos o valores reales. */
sumar(10, 10);
sumar(15, 13);
sumar(18, 20);
sumar(310, 21);
sumar(46);
const sumar2 = function (num1 = 0, num2 = 0) {
    console.log(num1 + num2);
}
/* Dentro de los paréntesis se encuentran los argumentos o valores reales. */
sumar2(5, 8);
sumar2(15, 18);
sumar2(25, 28);
sumar2(35);

parameters7 = "Qué es lo que hacen estos parámetros igualados a cero (0) o como lo venimos llamando por default? que \
en caso de que no esté presente algunos de los valores reales, entonces toma el valor que le estamos dando por default\
y que para este caso es cero. O sea que se tiene presente el valor que se le asignó por default; Entonces, los \
parámetros por default se van a ejecutar o van a ser llamados cuando no estén presentes los argumentos.";
console.log(parameters7);
