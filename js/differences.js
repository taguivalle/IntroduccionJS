/* Diferencias entre métodos y funciones. */
let differences, differences1, differences2, differences3, differences4, differences5, differences6, differences7, differences8, differences9,
    differences10, differences11, differences12, differences13, differences14, differences15, resultado3, resultado4;
differences = "DIFERENCIAS ENTRE MÉTODOS Y FUNCIONES";
console.log(differences);
differences1 = "En realidad terminan practicamente siendo lo mismo; la forma en que se utilizan tiene que ver más que \
nada en el contexto en que son utilizadas; veamos un ejemplo, vamos a tener una variable que la llamaremos número uno, \
y la igualaremos a veinte (20). vamos a duplicar esa variable pero la llamaremos número dos pero al igualarla le vamos a \
poner un string que sea veinte (20); ahora si deseamos convertir ese string (20) a número podemos utilizar una función que \
se llama parseInt; esta lo que va a hacer es tomar, digamos, un string que un número y sí es válido, lo convertirá a un \
tipo de dato entero ó numérico. Vamos a por ello.";
console.log(differences1);
const numero1 = 20;
const numero2 = "20";
console.log(numero1);
console.log(parseInt(numero2));
differences2 = "Podemos ver en consola que aparece en color azul ambos resultados y esto quiere decir que sí lo pudo \
convertir número. Ahora, sí el 20 estuviera escrito en texto (veinte) no es posible que lo convierta; porque efectivamente \
la regla principal es convertir números que sean string para poderlos convertir a enteros. Ahora, podemos observar que \
después de la función parseInt siguen unos parámetros dentro de los paréntesis por lo que esto es un buen indicativo de que \
parseInt es una función.";
console.log(differences2)
differences3 = "Esto es una función: console.log(parseInt(numero2)); tengamos en cuenta el color (azul) del número.";
console.log(differences3);
console.log(parseInt(numero2));

differences4 = "Esto es un método: console.log(numero1.toString()); tengamos en cuenta el color (negro) del número. Es \
decir lo estamos convirtiendo de número hacia un string.";
console.log(differences4);
console.log(numero1.toString());

differences5 = "En muchas ocaciones se preguntan ¿métodos? si esto suena como a programación orientada a objetos. Es \
porque así se llaman los que tienen un punto seguido del nombre de la función se llaman métodos los que tienen el nombre \
de la función seguida del paréntesis se llaman funciones";
console.log(differences5);
differences6 = "Es decir, estamos leyendo una variable de otro archivo y esto es precisamente que las funciones IIFE hacen; \
previenen que no se puedan acceder en otros archivos porque  a veces descargamos algunas librerías, tiene variables, tiene \
funciones que pueden chocar con lo que ya tienes y aún así te va a permitir; digamos va a protegerlo, porqué por ejemplo, \
podemos pegar la variable de este archivo en el archivoCualquiera.js y observaremos que el resultado Juan ya no va a \
en consola. Es más aparecerá un error.";
console.log(differences6);
differences7 = "Entonces, las funciones IIFE sí son útiles pera eso; porque son útiles para proteger que no se mezclen las \
variables y las funciones con las de otros archivos. Ahora, cual es la diferencia entre las dos sintaxis de DECLARACIÓN y \
la de EXPRESIÓN; que tiene algo llamado el HOISTING Y que estaremos viendo este término más adelante.";
console.log(differences7);
differences8 = "Pero  cuál es la diferencia entre estas dos funciones que tenemos en este archivo? primero obviemos la muy \
clara diferencia de sintaxis; pero en sí la diferencia entre estas dos formas de crear funciones; es que sí por ejemplo, \
utilizando la declaración de la función mandas llamar la función y después la defines. Y en la expresión de la función, \
la mandas a llamar y después la defines, uno te va a marcar el error (undefined); pero el otro no. Veámoslo en consola.";
console.log(differences8);
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

differences9 = "Con base en lo anterior; primero debemos de comentar el segundo bloque para que no siga apareciendo el \
error en consola y poder avanzar con la explicación del tema; segundo cuando aparece el error en consola es lo que se \
conoce como HOISTING en JavaScript y eso pasa porque JavaScript se ejecuta en dos vueltas; es decir, en la primera \
función se registran todas la funciones y funciona a pesar de que se están mandando a llamar; o sea primero se registran \
las funciones, todas las que tenemos en JavaScript y después se registran lo que son los llamados a las funciones.";
console.log(differences9);
differences10 = "La primera etapa se le conoce como etapa de creación y se registran las funciones y la variables, y la \
segunda en el ejecución es donde se manda a llamar. Por lo tanto no importa mucho en realidad, si se manda a llamar \
primero y la declaraste depués; porque en el primer llamado JavaScript escanea el archivo detecta la función; pero en la \
segunda entonces ya manda a llamar la función.";
console.log(differences10);
differences11 = "El segundo bloque o la segunda función muestra un error porque sí bien es función, esta no es declarada como \
como tal con la sintaxis de function, entonces, ésto se considera, digamos en JavaScript más como variable que como una \
función; la primera etapa, recordemos, registra las funciones; pero, esta función la detecta como una variable.";
console.log(differences11);
differences12 = "Entonces, recordemos que, en JavaScript se ejecuta en dos etapas; la primera, es el registro o la creación \
de la función; es decir, en ella se registran las funciones y la segunda etapa es el llamado o la de ejecución; o sea en \
esta se ejecuta el código de esta; como, en el segundo bloque o función no es una función como tal, entonces lo toma como \
una variable y es por esto que nos marca error. NOTA: Pregunta para obtener un trabajo te van a poner algo como lo que \
acabamos de ver y te van a decir cuál es el resultado?";
console.log(differences12);
differences13 = "Muchos de nosotros en algunos casos responderemos que ambos casos nos mostrará error pero como acabamos de \
observar; esto es falso; porque solamente una sola función cumple con las condiciones de true y es el primer bloque; porque \
el segundo bloque se toma como una variable.";
console.log(differences13);