// Lesson One hundred twenty eight (128) Control Structures
let controlStructures, controlStructures1, controlStructures2, controlStructures3, controlStructures4,
    controlStructures5, controlStructures6, controlStructures7, controlStructures8, controlStructures9,
    controlStructures10, controlStructures11, controlStructures12, controlStructures13, controlStructures14,
    controlStructures15;
controlStructures = "Como nota adicional y de momento nuestro código se ejecuta de arriba hacia abajo; pero, habrá \
algunas ocasiones en la que se quiera revisar por ejemplo, sí se cumple una condición, ejecutar un código basado en \
esa condición; Por ejemplo, puede ser cuando vas a un cajero, lo primero que se hace es insertar una tarjeta, \
segundo los cuatro (4) números sí el número está bien pués podemos continuar con la transacción o de lo contrario \
el cajero nos indicará con un mensaje de texto lo contrario, tercero elegimos la operación que deseamos realizar; sí \
es el caso que vamos a retirar dinero, internamente el cajero va revisar que tengamos el dinero suficiente porque no \
podamos retirar una cantidad superior a la que tengamos en nuestra cuenta.";
console.log(controlStructures);
controlStructures1 = "Lo mismo pasa en programación; por ejemplo, sí no eres amigo de alguien en facebook no se le \
puede contactar por decir algo; dependiendo de la configuración o simplemente no puedes ver lo que esa persona ha \
escrito. Por lo tanto para escribir código que revise, que una condición se cumpla o no, se utiliza una estructura de \
control (Control Structures) con una palabra reservada que se llama if; vamos a crea una variable que se llame puntaje \
igualada a mil (1000) y después utilizamos unas llaves (El editor de código nos permite hacer esto automáticamente); \
vamos a ello.";
console.log(controlStructures1);
const puntaje = 1000; // con un solo signo igual
if (puntaje == 1000) { // con dos signos iguales
    console.log(`Si el puntaje es 1000`);
}
controlStructures2 = "La estructura anterior del if nos indica que sí la condición o la que estamos revisando ya sea \
que se cumpla o no, pués se pueden revisar ambos casos. Sí se cumple lo que estamos colocando en ese paréntesis, \
entonces se ejecuta ese código, como vimos en la condition sí el puntaje es igual a mil (1000). y lo ejecutamos y \
observamos por consola que nos arroja el mensaje Sí el puntaje es igual a mil.";
console.log(controlStructures2);
controlStructures3 = "Ahora, si colocamos igual a mil uno (1001), podemos observar que no se muestra el mensaje. debido \
a que el código revisa que la condition se cumpla y sí no sse cumple pués no envía ningún mensaje o sea no ejecuta el \
código. Ahora, notemos que cuando se asigna un valor a una variable se utiliza un solo signo de igual; Este signo \
quiere decir asignar a una variable; y cuando se tienen dos signos igual igual (==) estos quieren decir comparación.";
console.log(controlStructures3);
const puntaje1 = 1000; // con un solo signo igual
if (puntaje1 == 1001) {
    console.log(`Si es cierto, el puntaje es 1000 con dos signos iguales`);
}
controlStructures4 = "JavaScript también tiene un operador triple de comparación y esto básicamente son tres veces \
el signo igual (===) para este ejemplo nos va a comparar que el puntaje sea igual a mil (1000). y si guardamos \
observamos que el mensaje es el mismo.";
console.log(controlStructures4);
const puntaje2 = 1000; // con un solo signo igual
if (puntaje2 === 1000) { // con tres signos iguales
    console.log(`Si es cierto, el puntaje es 1000 con tres signos iguales`);
}
controlStructures5 = "Ahora, sí colocamos este mil (1000) como string podemos observar que no se ejecuta. Esto pasa \
porque este operador triple igual (===) es más estricto, va a revisar que sea el valor y que se el tipo de datos; \
recordemos que mil con comillas eso es un string. Es cierto que son mil en ambos casos; pero, uno es un string y el \
otro es número.";
console.log(controlStructures5);
const puntaje3 = '1000'; // con un solo signo igual; pero no arroja mensaje alguno porque es un string
if (puntaje3 === 1000) { // con tres signos iguales
    console.log(`Si es cierto, el puntaje es 1000 con tres signos iguales`);
}
controlStructures6 = "Regresando a la nota inicial de esta lección, cuando vamos a l cajero y colocamos mal los números \
de la contraseña, nos aparece un mensaje que dice contraseña incorrecta; Entonces el código se va a ejecutar sí la \
condición se cumple. Pero, como es lógico se le da al usuario alguna otra opción de corregir ese intento fallido de \
haber colocado los números erroneamente; Para este caso se utiliza un else; básicamente sí se cumple la condición se \
ejecutará el código, pero en el caso de que no se cumpla siempre se va a ejecutar el else. Y para este ejemplo que \
que tenemos escribiremos con console.log con un mensaje el que guste colocar.";
console.log(controlStructures6);
const puntaje4 = 1000; // con un solo signo igual
if (puntaje4 === 1000) { // con tres signos iguales
    console.log(`El puntaje es igual con tres signos iguales`);
} else {
    console.log(`El puntaje no es igual a mil (1000)`)
}
controlStructures7 = "Como observamos en consola anteriormente el mensaje es perfecto, pero cuando es diferente el \
valor de la variable nos arrojará el mensaje del else. Entonces, siempre y cuando no se cumpla la condición siempre se \
va a ejecutar el else.";
console.log(controlStructures7);
const puntaje5 = 10002; // con un solo signo igual
if (puntaje5 === 1000) { // con tres signos iguales
    console.log(`El puntaje no es igual con tres signos iguales`);
}
else {
    console.log(`El puntaje no es igual a mil (1000)`)
}
controlStructures8 = "Entonces, esto siempre son estructuras de control o código condicional, porque sí se cumple una \
condición, se ejecuta el código y de lo contrario se cumple el código siguiente que es el else. Ahora esta sintaxis \
revisa que puntaje sea exactamente igual a mil (1000) pero, también existe otra que se diferente a mil (1000) y va a \
tener este signo de exclamación junto a dos signos iguales (!==); podemos ver en consola que el puntaje NO ES IGUAL \
vamos a ello";
console.log(controlStructures8);
const puntaje6 = 10002; // con un solo signo igual
if (puntaje6 !== 1000) { // con tres signos iguales
    console.log(`El puntaje es diferente a mil (1000) con dos signos iguales antecedido de un signo de exclamación`);
}
else {
    console.log(`El puntaje es igual a mil (1000)`);
}
controlStructures9 = "De lo anterior se obtiene que, se ejecuta el código de la primera parte del if; o sea que lo que \
se encuentre dentro del paréntesis se está revisando sí el puntaje es diferente a mil (1000) por lo tanto es la primera \
parte del código (antes del else) es la que se va a cumplir; entonces, que sucede sí el puntaje7 es mil? vamos a ello.";
console.log(controlStructures9);
const puntaje7 = 1000; // con un solo signo igual
if (puntaje7 !== 1000) { // con tres signos iguales
    console.log(`El puntaje es diferente a mil (1000) con dos signos iguales antecedido de un signo de exclamación`);
}
else {
    console.log(`El puntaje es igual a mil (1000)`);
}
controlStructures10 = "Ahora, veamos otros ejemplos de más comparadores porqué varios; también hay mayor que (>) y menor \
que (<); supongamos que tenemos en efectivo y vamos a escribir una const de nombre efectivo y le asignamos un valor de \
mil (1000) y en nuestro carrito de compras para pagar tenemos digamos ochocientos (800). Entonces, vamos escribir un \
if con su respectivo else (El editor de código nos permite hacer esto automáticamente) y la condición que vamos a \
revisar es sí el efectivo que este usuario tiene es mayor a lo que hay que pagar en el carrito eso significa que el\
usuario sí puede pagar; entonces, hagámoslo ";
console.log(controlStructures10);
const efectivo = 1000;
const carrito = 800;
if (efectivo > carrito) {
    console.log(`El usuario puede pagar`);
} else {
    console.log(`El usuario no tiene fondos suficientes para pagar`);
}
controlStructures10 = "Pero que sucede sí el valor a pagar del carrito es superior? O sea utilizaríamos el signo menor \
que (<) en la primera parte del if y muy seguramente se ejecutará la segunda parte del código o sea el else. Porque \
estamos revisando por la primera condición que tenemos sea menor que a la cantidad a pagar; pués la condición queda \
inversa.";
console.log(controlStructures10);
const efectivo1 = 1000;
const carrito1 = 800;
if (efectivo < carrito) {
    console.log(`El usuario puede pagar`);
} else {
    console.log(`El usuario no tiene fondos suficientes para pagar`);
}
controlStructures11 = "Ahora, vamos a crear otro ejemplo con la estructura de control else if y procedemos de la \
siguiente manera: creamos una variable llamada rol y le asignamos el valor de administrador con su respectivo if else\
if; con un primer mensaje que diga tiene acceso a todo el sistema. Y con un else que diga lo contrario; si guardamos \
cambios podemos ver que estamos verificando sí el rol es igual a administrador; veámoslo en consola.";
console.log(controlStructures11);
const rol = 'ADMINISTRADOR';
if (rol === 'ADMINISTRADOR') {
    console.log('Tiene acceso a todo el sistemas');
} else {
    console.log('No tiene acceso al sistema');
}
controlStructures12 = "Del anterior ejemplo, nos da a entender que el código permite verificar sí el rol es igual al \
valor ADMINISTRADOR, entonces nos permitirá ingresar a todo el sistema, como se observó en consola durante la impresión; \
pero, supongamos que la persona es un editor por decir cualquier rol; observemos en consola que sucede. Aunque, a estas \
alturas de la lección nos debe de salir el segundo mensaje o sea el del else.";
console.log(controlStructures12);
const rol1 = 'GERENTE';
if (rol1 === 'ADMINISTRADOR') {
    console.log('Tiene acceso a todo el sistemas');
} else {
    console.log('No tiene acceso al sistema');
}
controlStructures13 = "Es de entender que para este caso ser gerente sí debería de tener acceso a todo el sistema, pero a\
manera de ejemplo; y para esta situación especial podríamos utilizar un else if después del if, con la respectiva \
sintaxis que nos da nuestro editor de texto. Entonces en el else if podríamos hacer otra condición para el gerente.";
console.log(controlStructures13);
const rol2 = 'GERENTE';
if (rol2 === 'ADMINISTRADOR') {
    console.log('Tiene acceso a todo el sistemas');
} else if (rol2 === 'GERENTE') {
    console.log('Eres Gerente, puedes entrar al sistema; pero, no puedes tener acceso a todo e1 este.');
}
else {
    console.log('No tiene acceso al sistema');
}
controlStructures14 = "Lo visto hasta aquí, nos deja ver que las estructuras de control nos permiten revisar una condición\
sí no se cumple el código revisa una segunda condición y sí esta condición no se cumple pués entonces por último sí \
se queda en el else en donde la valida y nos deja ver el mensaje correspondiente. Es como una especie de saltos en la \
cascada. Ahora, realicemos por último el ejemplo con el valor de un visitante por decir algo y observaremos en consola \
el resultado debe de ser como lo dijimos anteriormente que no tiene acceso al SVGFEDisplacementMapElement.";
console.log(controlStructures14);
const rol3 = 'VISITANTE';
if (rol3 === 'ADMINISTRADOR') {
    console.log('Tiene acceso a todo el sistemas');
} else if (rol3 === 'GERENTE') {
    console.log('Eres Gerente, puedes entrar al sistema; pero, no puedes tener acceso a todo e1 este.');
}
else {
    console.log('No tiene acceso al sistema');
}
controlStructures15 = "Como Otra nota aparte, podemos agregar varios if, pero no se vería muy limpio el código, claro \
que JavaScript como muchos lenguajes de programación tienen otras estructuras de control llamadas SWITCH y que veremos \
en la siguiente lección one hundred twenty nine (129).";
console.log(controlStructures15);