// lesson one hundred thirty (130)
let forLoops, forLoops1, forLoops2, forLoops3, forLoops4, forLoops5, forLoops6, forLoops7, forLoops8, forLoops9, forLoops10,
    forLoops11, forLoops12, forLoops13, forLoops14, forLoops15;
forLoops = "Como nota adicional en esta lección one hundred thirty (130) se puede decir que, en los diferentes lenguajes \
de programación existen iteradores y que se conocen como for loops, white loops y el do while loops y como no tenemos \
mucho vagaje vamos a ejecutar un código hasta que la condición se cumpla o se deje de cumplir. Y los diferentes loops \
tienen esa característica; que van a ejecutar el código hasta que se deje de cumplir o se cumpla una condición.";
console.log(forLoops);
forLoops1 = "Vamos a iniciar con un ejemplo muy simple, supongamos que tenemos una console.lo con repetida hasta cuatro \
(4) veces; y si guardamos cambios en la consola nos aparecen esos cuatro números; el uno (1), el dos (2), el tres (3) y \
el cuatro (4).";
console.log(forLoops1);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
forLoops2 = "Un for loops nos va ejecutando un código mientras una condición sea evaluada como verdadera y por lo tanto \
deja de ejecutarse cuando esa condición se deja de cumplir; entonces, sí quisieramos que aparezca en consola del uno \
(1) al diez (10) pués tendríamos diez (10) líneas de código. Entonces, con un for loops se puede tener menos código. \
por lo tanto vamos a empezar con un for loop es de recordar que la palabra for es una palabra reservada, es decir que, \
no pueden existir variables o funciones que se llamen for y un for loop cuenta con algo que se le conoce como el index \
o el índice. También se le llama como incremento hay diferentes formas en las que se hace referencia a esa parte.";
console.log(forLoops2);
forLoops3 = "Y ese index o índice se utilizan en las tres partes del for en que número va a iniciar ese index o cuál \
va a ser su valor inicial. Aunque, usualmente vamos a iniciar en cero (0) porque son muy útiles los for loops, los \
whit loops y los do while loops, los do while sirven para iterar sobre un array; por ejemplo, recordemos que los \
array se inician desde el índice cero (0), desde la posición cero (0). Entonces, vamos escribir dentro de nuestro for \
(no olvidemos que nuestro editor de texto nos ayuda con la estructura de un for; vamos a ello) Entonces dentro de los \
paréntesis vamos a escribir un let que inicie en i y lo igualamos a cero (0). Después, viene la segunda parte de esa \
condición que se debe de cumplir; es decir, que nuestro for se va a ir ejecutando mientras esta condición sea verdadera, \
Entonces, vamos a colocar i que se menor a diez (10); pero, qué hace este menor a diez? básicamente va comenzar a \
ejecutar el código que iniciamos en cero (0) y dice bueno, es el cero (0) menor a diez (10) entonces, es verdadero y se \
ejecuta el código.";
console.log(forLoops3);
forLoops4 = "Ahora, el código siempre se va a mantener, digamos el índice o index no hay nada que lo haga cambiar de \
opinión o de valor, Ahora, sigue la tercera parte de nuestro for; sería el incremento y vamos incrementándolo de uno (1) \
en uno (1). Entonces, podemos analizar que, tenemos la parte de inicializar el for el valor con el que se inicia el index \
después este código se va a ejecutar mientras el index se menor a diez (10) y lo vamos incrementando de uno (1) en uno \
(1) entonces, como funciona este código? El index tiene valor de cero (0) es decir, hasta ahí es igual a cero (0) y este \
es menor que diez (10) Entonces, es verdadero y se comienza a ejecutar del código después se va incrementando en uno; \
es decir, uno (1) es menor a diez (10)? si; entonces, se ejecuta la siguiente parte del código del for o sea lo va \
incrementando de a uno (1)";
console.log(forLoops4);
forLoops5 = "Y si es dos (2) menor que diez (10)? si; entonces vuelve y se ejecuta la siguiente parte del código \
incrementándolo en uno; así sucesivamente se va preguntando si cada número en es menor que diez (10) al momento de llegar \
al número diez (10) se hace la misma pregunta, pero ya no es menor por lo tanto, finaliza la condición y deja de \
ejecutarse nuestro for; entonces, por medio de nuestro console.log le escribimos un mensaje para este ejemplo, es la \
letra i; guardamos y lo vemos en consola; vamos escribir esta teoría en en un for para que sea más entendible.";
console.log(forLoops5);
for (let i = 0; i < 10; i++) {
    console.log(i)
}
forLoops6 = "Como podemos ver al imprimir en consola nos aparecen los números desde el cero (0) hasta el nueve (9) \
y sí queremos imprimir más numeros pués escribimos esa cantidad deseada en la segunda parte de la primer línea del for. \
Entonces, en lugar de estar escribiendo o repitiendo un console.log tantas veces para llegar a la cantidad deseada, pués \
podemos utilizar un for loop y este va a ejecutar el código mientras mientras la condición sea evaluada como verdadera. \
Ahora, vamos a realizar otro ejemplo un poco más complejo por decir algo; Esta es una de las preguntas que le hacen \
mucho a los desarrolladores junior es identifica; por ejemplo, del número uno (1) al cien (100) sí el número actual es \
impar o par; Ahí ya tendríamos que utilizar un for loops o cualquiera de los otros que mencionamos al inicio de esta \
lección; junto a un if y alguno de los operadores que vimos previamente. vamos a hacerlo en nuestro código.";
console.log(forLoops6);
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    }
}
forLoops7 = "Pero, la función del if? sencillamente que mientras se va ejecutando la primero línea del for o sea que \
mientras esta condición sea verdadera pero, en el if vamos a evaluar ese momento del código, es decir, si por ejemplo \
vamos en la iteración número seis (6) vamos a evaluar ese seis (3) y depués evaluamos el site (7) y después el ocho \
(8) y así sucesivamente vamos a ir evaluando en ese if conforme se vaya ejecutando el código. Sí recordamos este if \
va a tener el valor del indice, o sea cero (0), uno (1), dos (2), tres (3) y dentro del if podemos colocarle una \
condición, revisar con la letra í; y la forma en se va a realizar sí un número es par nos vamos a tener que ayudar de \
lo que vimos en anteriores lecciones y que se conocía como el modulo (%); recordemos que este signo porcentaje es el \
módulo, que básicamente sí le pones diez (10) entre cinco (5) el resultado es dos (2) pero evalua el residuo. Entonces, \
sí el residuo es igual a cero (0) pués este es un número par; cierto?";
console.log(forLoops7);
forLoops8 = "Como se observa en el código de la línea del console.log le colocamos un template con un mensaje que diga \
que el número con su indice actual ${i} es par; Obviamente al guardar los cambios nos aparecen los números pares desde \
el cero (0) hasta el diez (100). En lugar de estar escribiendo uno por uno y digamos que evaluar hasta el número 100 \
resultaría un poco tedioso; pero solamente con escribir el numero 100 en la primera línea de la estructura de nuestro \
código ya estaríamos solucionando ese pequeño impace. probemos a ver que sucede.";
console.log(forLoops8);
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es PAR`);
    }
}
forLoops9 = "Pero, como le hacemos para los impares? bién la otra condición sería un else, porque estamos diviendo entre \
dos; Entonces, digamos que el otro módulo nos retornaría un uno y sí el módulo recibe ese uno pués es impar. Entonces, \
copiemos la línea del console.log en un else y el mensaje debe decir IMPAR. Si guardamos cambios podemos ver que nos \
aparece la lista de los pares como de los impares en la consola.";
console.log(forLoops9);
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es PAR`);
    } else {
        console.log(`El número ${i} es IMPAR`);
    }
}
forLoops10 = "De lo anterior analizamos que solamente con cinco (5) líneas de código estamos ahorrando y generando todo \
los números pares e impares siendo esta una de las grandes ventajas de la utilización del else. Y a su vez es el poder \
de los for loops porque al ir ejecutando el código mientras la condición sea evaluada como verdadera; una vez que ya \
llegamos al número cien (100), entonces, ciento uno (101) ya deja de ser tenido en cuenta por lo tanto se cumple la \
condición; esto está bien para alguien que digamos está teniendo una entrevista de trabajo como junior.";
console.log(forLoops10);
forLoops11 = "Pero, en qué se puede utilizar un for loops que no sea en este tipo de ejercicios; Recordemos que en\
lecciones anteriores teniamos un carrito de compras vamos a traer ese ejemplo y lo pegamos aquí. Vamos a analizar que \
los for loops son una excelente forma de iterar sobre un array; también, previamente vimos un for each y lo volveremos \
a ver en las siguientes lecciones porque es la forma de que JavaScript; pero, si venimos de otros lenguajes de \
programación, el for existe en todos estos lenguajes de programación. Una nota muy importante de agregar del for es que \
la sintaxis es exactamente igual en casi todo los lenguajes de programación; En PHP es igual, en C es igual, en Java es \
igual sí acaso en Python es diferente. Entonces, esa es la ventaja que cuando una vez aprendemos un lenguaje es más \
fácil ir agregando otros.";
console.log(forLoops11);
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
forLoops12 = "Bién, continuando con nuestra lección de los for loops vamos a crear un for que recorra todo este carrito \
de compras; por lo tanto vamos a escribirlo. Y vamos a inicializarlo desde la posición cero (0) porque ya dijimos que \
íbamos a iterar sobre el carrito de compras y recordemos que un array inicia en la posición cero (0); recordemos que \
podemos saber cual es la longitud de los elementos que se encuentra dentro del carrito con la sintaxis de carrito.length \
y esto nos va a ejecutar el código para que nos diga sí hay un o varios elementos en el carrito. Vamos a ello.";
console.log(forLoops12);
for (let i = 0; i < carrito.length; i++) {
    console.log(i)
}
forLoops13 = "Recordemos nuevamente que sí le colocamos la letra i esta nos va a mostrar el indice y aquí en este ejemplo. \
imprime hasta el diez (10) que es lo que tiene este carrito de compras y sí queremos ir iterando sobre este carrito \
pués debemos en console.log reemplazar la letra i por la variable carrito; y sí recordamos antes accedíamos al carrito \
de compras poniéndoles la posición i y eso no tiene enviando a la consola el elemento actual del carrito. vamos a ello.";
console.log(forLoops13);
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i])
}
forLoops14 = "Y si queremos saber el nombre pués al final de la sintaxis carrito[i] le agregamos un punto y escribimos \
nombre (nuestro editor de texto nos ayuda con este tema.) y así estaríamos iterando con nuestro carrito; vamos a ello.";
console.log(forLoops14);
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre)
}
forLoops15 = "Entonces, la utilización de un for loops nos permite reducir muchas líneas de código; pués en la vida real \
estaremos iterando sobre arrays de diferentes elementos; En la siguiente lección one hundred thirty one (131) vamos a \
ver el whit loop y el do while y va a ser aún más fácil asimilarlos una vez que sabemos que es un iterador y bajo qué \
condiciones se ejecuta el código.";
console.log(forLoops15);