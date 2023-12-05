/* Funciones en JavaScript. */
let functions, functions1, functions2, functions3, functions4, functions5, functions6, functions7, functions8, functions9,
    functions10, functions11, functions12, functions13, functions14, functions15, resultado3, resultado4;
functions = "Las funciones como en cualquier lenguaje de programación son una serie de procedimientos e instrucciones que \
realizan una acción; una de las ventajas de las funciones es que nos permiten tener un código más ordenado y más fácil de \
mantener y otra ventaja que tiene las funciones es que son reutilizables. Por ejemplo, podemos tener una función que \
valide un formulario y utilizarla en todos nuestros formularios.";

functions1 = "También podemos tener por ejemplo, una función que envía datos a un servidor y utilizarla múltiples veces; \
normalmente existen tres (3) formas de crear funciones; Estaremos viendo primero lo que es la DECLARACIÓN de la función. \
después estaremos viendo EXPRESIÓN de la función y finalmente estaremos viendo lo que se conoce como IIFE. Entonces, \
veamos primero lo que es la DECLARACIÓN de la función y este utiliza la palabra reservada function; como ya sabemos todos \
los lenguajes de programación manejan sus propias palabras reservadas y en JavaScript es una de esas.";
console.log(functions1);

functions2 = "Esta, sigue las mismas reglas que las variables en JavaScript, es decir no puede iniciar con números, sí \
puede finalizar con números como con un guión bajo; para este ejemplo vamos a llamarla sumar, dentro de unos paréntesis \
de colocan los argumentos de la función; y agregamos llaves o corchetes; ahora todo lo que se coloque dentro de las llaves \
es lo que pertenece a esta función. y a esa parte se le conoce como el cuerpo de una función. Vamos a crear algo muy \
sencillo vamos mostrar una suma de diez por diez (10+10) Algo muy importante a tener en cuenta es que sí creamos \
una función también se debe de llamar. Entonces esto se hace fuera de las llaves.";
console.log(functions2);
/* Aquí se crea la función y se le conoce como DECLARACIÓN DE LA FUNCIÓN. */
function sumar(params) {
    console.log(10 + 10);
}
/* Aquí se llama la función. */
sumar();

functions3 = "Ahora, tenemos el tema de EXPRESIÓN de la función; ésta sintaxis sí es un poco diferente. vamos a utilizar \
la misma sintaxis como si fuera una variable; entonces, const sumar2 y lo igualamos a la function seguido de los \
paréntesis y las llaves o corchetes; Prácticamente es lo mismo que la DECLARACIÓN sino que function se encuentra del lado \
derecho de la igualdad pero tenemos un nombre diferentes (sumar2) para que no se repita el nombre pués antes teníamos \
sumar. Observemos que también tenemos el cuerpo de la función delimitado por las llaves o corchetes. por lo tanto el \
cuerpo es igual que el del anterior ejemplo; pero, con diferentes valores. No olvidemos que tenemos que mandarla a llamar.";
console.log(functions3);
/* Aquí se crea la EXPRESIÓN de la función. */
const sumar2 = function () {
    console.log(20 + 15);
}
/* Aquí se llama la expresión de la función. */
sumar2();
functions4 = "Ahora veamos la tercer forma, a esta se le conoce como IIFE, básicamente son funciones que no necesitan llamarse \
porque se mandan a llamar ellas mismas; la sintaxis es un poco diferente, porque se debe de colocar dentro de paréntesis, \
después la función, seguida de otros paréntesis, posteriormente dentro de las llaves se crea el cuerpo de la función; \
normalmente se manda a llamar con unos paréntesis al final del corchete; probablemente has visto esta sintaxis en Jquery \
como en muchos plugins; vamos a verlo:";
console.log(functions4);
(function name(params) {
    console.log('Esto es una función IIFE');
})();
functions5 = "Esta funciones IIFE como se decía anteriormente ellas mismas se llaman, aunque no es muy recomendable \
reutilizarlas porque más que nada sirven para proteger a las variables que no se mezclen con otro archivo. Por ejemplo, sí \
tenemos otro archivoCualquiera.js y le creamos una variable cualquiera por decir algo; const cliente = 'Juan' esta variable \
también se puede llamar aquí en este archivo o sea console.log(cliente) guardamos cambios y lo ejecutamos por la consola \
y nos debe de salir Juan, sabiendo que es de otro archivo.";
console.log(functions5);
functions6 = "Es decir, estamos leyendo una variable de otro archivo y esto es precisamente que las funciones IIFE hacen; \
previenen que no se puedan acceder en otros archivos porque  a veces descargamos algunas librerías, tiene variables, tiene \
funciones que pueden chocar con lo que ya tienes y aún así te va a permitir; digamos va a protegerlo, porqué por ejemplo, \
podemos pegar la variable de este archivo en el archivoCualquiera.js y observaremos que el resultado Juan ya no va a \
en consola. Es más aparecerá un error.";
console.log(functions6);
functions7 = "Entonces, las funciones IIFE sí son útiles pera eso; porque son útiles para proteger que no se mezclen las \
variables y las funciones con las de otros archivos. Ahora, cual es la diferencia entre las dos sintaxis de DECLARACIÓN y \
la de EXPRESIÓN; que tiene algo llamado el HOISTING Y que estaremos viendo este término más adelante.";
console.log(functions7);
functions8 = "Pero  cuál es la diferencia entre estas dos funciones que tenemos en este archivo? primero obviemos la muy \
clara diferencia de sintaxis; pero en sí la diferencia entre estas dos formas de crear funciones; es que sí por ejemplo, \
utilizando la declaración de la función mandas llamar la función y después la defines. Y en la expresión de la función, \
la mandas a llamar y después la defines, uno te va a marcar el error (undefined); pero el otro no. Veámoslo en consola.";
console.log(functions8);
/* otro ejemplo de llamar la función. */
sumar1();
/* Aquí se crea la función y se le conoce como DECLARACIÓN DE LA FUNCIÓN. */
function sumar1(params) {
    console.log(15 + 15);
}

/* Otro ejemplo de llamar la expresión de la función; pero esta forma va a generar error.
sumar3();
/* Aquí se crea la EXPRESIÓN de la función. 
const sumar3 = function () {
    console.log(20 + 25);
} */

functions9 = "Con base en lo anterior; primero debemos de comentar el segundo bloque para que no siga apareciendo el \
error en consola y poder avanzar con la explicación del tema; segundo cuando aparece el error en consola es lo que se \
conoce como HOISTING en JavaScript y eso pasa porque JavaScript se ejecuta en dos vueltas; es decir, en la primera \
función se registran todas la funciones y funciona a pesar de que se están mandando a llamar; o sea primero se registran \
las funciones, todas las que tenemos en JavaScript y después se registran lo que son los llamados a las funciones.";
console.log(functions9);
functions10 = "La primera etapa se le conoce como etapa de creación y se registran las funciones y la variables, y la \
segunda en el ejecución es donde se manda a llamar. Por lo tanto no importa mucho en realidad, si se manda a llamar \
primero y la declaraste depués; porque en el primer llamado JavaScript escanea el archivo detecta la función; pero en la \
segunda entonces ya manda a llamar la función.";
console.log(functions10);
functions11 = "El segundo bloque o la segunda función muestra un error porque sí bien es función, esta no es declarada como \
como tal con la sintaxis de function, entonces, ésto se considera, digamos en JavaScript más como variable que como una \
función; la primera etapa, recordemos, registra las funciones; pero, esta función la detecta como una variable.";
console.log(functions11);
functions12 = "Entonces, recordemos que, en JavaScript se ejecuta en dos etapas; la primera, es el registro o la creación \
de la función; es decir, en ella se registran las funciones y la segunda etapa es el llamado o la de ejecución; o sea en \
esta se ejecuta el código de esta; como, en el segundo bloque o función no es una función como tal, entonces lo toma como \
una variable y es por esto que nos marca error. NOTA: Pregunta para obtener un trabajo te van a poner algo como lo que \
acabamos de ver y te van a decir cuál es el resultado?";
console.log(functions12);
functions13 = "Muchos de nosotros en algunos casos responderemos que ambos casos nos mostrará error pero como acabamos de \
observar; esto es falso; porque solamente una sola función cumple con las condiciones de true y es el primer bloque; porque \
el segundo bloque se toma como una variable.";
console.log(functions13);