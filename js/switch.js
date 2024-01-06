// Lesson one hundred twenty (129) nine switch
let switch1, switch2, switch3, switch4, switch5, switch6, switch7;
switch1 = "Como una nota introductoria, de que al momento de tener múltiples condiciones por revisar, una forma más \
fácil de hacerlo, más facil de leer es con un switch; porque sí se llena de de muchos else if, el código ya no queda \
muy sencillo de mantener; hoy en día se utiliza mucho; entonces, vamos a tener una variable y vamos a llamarla por \
decir algo metodo pago y le vamos a asignar tarjeta, suponiendo que estamos creando una tienda virtual, debido a que \
existen varios métodos de pago y por lo tanto se puede pagar con una tarjeta o una transferencia electrónica, un cheque\
o un bitcoin sí por decir algo el usuario así lo quiere; es a manera de ejemplo.";
console.log(switch1);
switch2 = "Entonces, al tener un método de pago y basado en ése método le podemos decirle al usuario que es lo que \
tiene que hacer; mandarlo tal vez a una página o darle algunas instrucciones y por lo tanto vamos a utilizar la palabra \
reservada switch y dentro del paréntesis escribimos lo que vamos a evaluar o sea el método de pago, podemos observar \
que, tenemos la asignación de una tarjeta; los switch a diferencia de los else if funcionan con algo llamado keys, y \
como estamos evaluando a la tarjeta pués la agregamos a un case (No olvidemos que nuestro editor de texto nos hace la \
estructura del switch vamos a ello."
console.log(switch2);
const metodoPago = 'tarjeta';
switch (metodoPago) {
    case "tarjeta":
        console.log('Pagaste con tarjeta');
        break;
    default:
        console.log('Aún no has pagado');
        break;
}
switch3 = "De lo anterior se observa que, se evalúa el método de pago, es decir la variable metodoPago y en caso de que \
sea igual a tarjeta, ejecuta el mensaje del case, como se mencionaba anteriormente nuestro editor de texto nos facilita \
por lo que nos aparece la estructura tal cual de un switch con un solo case; Continuando con el hilo de la discución, \
aparece un break y este ejecuta lo que hay después de los dós puntos del primer case y  así sucesivamente sí tuvieramos \
muchos más case; básicamente, el código termina hasta cuando encuentre un break.";
console.log(switch3);
switch4 = "En la lección one hundred twenty eight (128) vimos lo que era un if; pero, sí recordamos un else no era \
obligatorio, o sea lo colocabamos como una acción para que evaluara de que pasaría sí una acción no se cumpliera; pero, \
en el caso del switch sí es obligatorio tener una acción por default (como se observa en la estructura del switch que \
nos arroja el editor de texto); de nueva cuenta lo que se encuentre dentro de los dos puntos y el break es lo que se va \
a ejecutar; ahora, el default se va a ejecutar cuando ninguno de los keys se cumpla, es decir una condición porque como \
estamos agregando la variable tarjeta obtienes un string que va a evaluar el case y por lo tanto al imprimir en consola \
nos arroja el mensaje de Pagaste con tarjeta.";
console.log(switch4);
switch5 = "Con base en lo anterior, sí le cambiamos el valor a la variable y le escribimos por ejemplo bitcoin; nuevamente, \
este switch evalua el método de pago y como ve que no hay ninguno que sea bitcoin entonces automáticamente llega hasta \
el default y nos debe de arrojar el mensaje Aún no has pagado; veámoslo en consola.";
console.log(switch5);
const metodoPago1 = 'bitcoin';
switch (metodoPago1) {
    case "tarjeta":
        console.log('Pagaste con tarjeta');
        break;
    default:
        console.log('Aún no has pagado');
        break;
}
switch6 = "Entonces, podemos agregar múltiples case siendo esta una ventaja del switch; sí solamente se tiene un case es \
mejor utilizar un if; pero, sí se tienen varias condiciones por evaluar es mejor utilizar un case, en donde ahí sí es \
más fácil de leer, vamos a realizar uns segundo case que diga cheque; y que nos arroje un mensaje por ejemplo, que diga, \
El usuario va a pagar con cheque, revisaremos primero. vamos a ello.";
console.log(switch6);
const metodoPago2 = 'cheque';
switch (metodoPago2) {
    case "tarjeta":
        console.log('Pagaste con tarjeta');
        break;
    case "cheque":
        console.log('El usuario va a pagar con cheque, revisaremos primero sí tiene fondos suficientes');
        break;
    default:
        console.log('Aún no has pagado');
        break;
}
switch7 = "Ahora, vamos a agregar otro case y cuyo nombre de la variable sea efectivo y que nos arroje un mensaje \
pagaste con efectivo. hagámoslo.";
console.log(switch7);
const metodoPago3 = 'efectivo';
switch (metodoPago3) {
    case "tarjeta":
        console.log('Pagaste con tarjeta');
        break;
    case "cheque":
        console.log('El usuario va a pagar con cheque, revisaremos primero sí tiene fondos suficientes');
        break;
    case "efectivo":
        console.log('Pagaste con efectivo');
        break;
    default:
        console.log('Aún no has pagado');
        break;
}
switch7 = "Analizando todo lo anterior, podemos analizar que el método de control switch nos permite agregar más \
condiciones permitiendo también tener una sintaxis muy clara que sí tuvieramos un if con muchos else; en gran medida \
se haría un poco más complicado de leer. Claro que lo dicho aquí no lo es un todo, pues existe mucho más que aprender \
sobre el método de control switch; en la siguiente lección one hundred thirty (130) veremos lo que es un iterator";
console.log(switch7);