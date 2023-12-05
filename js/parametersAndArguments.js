/* Parameters and Arguments. */
let parameters, parameters1, parameters2, parameters3, parameters4, parameters5, parameters6, parameters7, parameters8,
    parameters9, parameters10, parameters11, parameters12, parameters13, parameters14, parameters15, resultado3, resultado4;
parameters = "PARAMETERS AND ARGUMENTS";
console.log(parameters);
parameters1 = "Para este ejemplo vamos a utilizar el ejercicio que hemos venido analizando desde tutoriales anteriores; \
pero, veamos como hacer funciones un poco más inteligentes por llamarlas así. Para esto tenemos que pasarle parámetros \
y/o argumentos a nuestra función. Inicialmente, las funciones que hemos trabajado no tienen ningún de estos por lo tanto \
se escriben o se pasar dentro de los paréntesis dónde se esté definiendo la función. Supongamos que vamos a sumar dos \
números por lo tanto, tendríamos que decirle que tome dos parámetros; por ejemplo, número1 seguido de una coma y el otro \
podría ser el numero2; entonces, esos valores se reemplazan por los números que traemos de la función original. NOTA: \
al momento de llamar la función en la parte final se deben de escribir esos argumentos; por ejemplo (10, 10).";
console.log(parameters1);
/* Dentro de los paréntesis van los parámetros. */
function sumar(numero1, numero2) {
    console.log(numero1 + numero2);
}
/* Dentro de los paréntesis argumentos o valores reales. */
sumar(10, 10);

parameters2 = "Análogamente, una de las ventajas de las funciones es que las puedes reutilizar y ahora que tenemos \
parámetros y argumentos, nuestra función es más dinámica, más inteligente y más reutilizable. por lo tanto podemos \
duplicar o triplicar el llamado de la función con valores o argumentos diferentes; por ejemplo, (15, 13) (18, 20) \
(310, 21) (46, 70), etc.";
console.log(parameters2)
/* Dentro de los paréntesis argumentos o valores reales. */
sumar(15, 13);
sumar(18, 20);
sumar(310, 21);
sumar(46, 70);

parameters3 = "Ahora los parámetros para la segunda función, bién podrían ser también numero1 y número2. En realidad, \
se pueden nombrar como se desee, siempre y cuando sigan las reglas de las variables o también se pueden llamar n1 u n2 \
por decir algo; es como se quieran nombrar. Seguidamente vamos a realizar el mismo ejercicio en triplicar el llamado de \
la función y observamos que no sucede nada con el resultado.";
console.log(parameters3);
const sumar1 = function (numero1, numero2) {
    console.log(numero1 + numero2);
}
sumar1(5, 8);
sumar1(15, 18);
sumar1(25, 28);
sumar1(35, 38);

parameters4 = "Observése que, a pesar de que tienen diferente sintaxis ambos van a pasar los parámetros dentro del \
paréntesis. Precisamente, para eso son los paréntesis que tenemos en las funciones; ahora, qué pasa sí en uno de sus \
valores dentro del llamado de la función de le coloca solamente un número; hagamos el ejercicio; aunque sabemos de nos \
marca un null; ahora sí no escribimos el otro número pero se tiene una coma nos arroja el mensaje de NaN o sea not at \
number. Algunas veces, vamos a tener funciones que no le vamos a pasar los dos valores; para ello es muy útil algo llamado \
parámetro por default";
console.log(parameters4);
sumar1(35, 0);

parameters5 = "Entonces, los parámetros por default; básicamente, es quw dentro de los paréntesis de los parámetros vamos a \
igualarlos a cero (0) tanto el numero1 como el numero2; que es lo que hace estos parámetros por default que en caso de que \
no esté presente alguno de estos valores en el llamado de la función, entonces, toma el valor que le estamos dando por \
default; que en este caso sería cero (0). probemos a ver.";
console.log(parameters5);
/* Dentro de los paréntesis van los parámetros. */
function sumar(numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2);
}
/* Dentro de los paréntesis argumentos o valores reales. */
sumar();
sumar(15, 13);
sumar(18, 20);
sumar(310, 21);
sumar(46);
const sumar2 = function (numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2);
}
sumar2(5, 8);
sumar2(15, 18);
sumar2();
sumar2(35);
