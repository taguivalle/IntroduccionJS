// In this lesson one hundred thirty nine (139) We will discuss the issue of promises in JavaScript
let promises, promises1, promises2, promises3, promises4, promises5, promises6, promises7, promises8, promises9,
    promises10, promises11, promises12, promises13, promises14, promises15, promises16;
promises = "como nota adicional y muy importante a tener en cuenta, es que todas las APIs modernas que fueron adicionadas \
o agregadas a JavaScript; por ejemplo, la geolocalización entre otras más, todas utilizan promises son una promesa y toda \
promesa refleja un valor que podrá estar disponible ahora, en un futuro o nunca; Es similar en la vida real. Sí invitamos \
a una persona a salir puede ser ahora, mañana o nunca; por decirlo de manera jovial.";
console.log(promises);
promises1 = "Lo primero que vamos a hacer es definir un promise; entonces, escribimos const usuarioAutenticado y le \
asignamos o le instanciamos un new Promise() y a su vez este new promise va a ser una función. Entonces, debemos escribir \
(function() {} o también puede ser como un arrow function; ene ste ejemplo como hay un this, no debe ocasionar ningún \
problema con el new promise. Esta sintaxis nos dice que al instanciar la función nos va a ejecutar usuarioAutenticado.";
console.log(promises1);
promises2 = "Seguidamente en la segunda línea de nuestra estructura de la función vamos a volver a colocar otra variable \
const auth = true para verificar sí el usuario está autenticado o no. Y vamos a colocar un if() para evaluar si auth o el \
usuario está autenticado, y/o caso contrario con else pués le decimos que ejecute este otro. Cuando se ejecuta un promise \
se pasan dos valores automáticamente unos se conoce como resolve y el otro como reject; estos dos vienen a ser nuestros \
parámetros en el promise; es decir estos dos se pasan automáticamente, los toma el promise; ahora, básicamente, estos dos \
son funciones tanto resolve como reject.";
console.log(promises2);
promises3 = "Resolve se va a ejecutar cuando el promise se cumple. Por lo tanto vamos a escribir abajo de la línea del if \
dentro de las llaves resolve(); en caso de que el usuario está autenticado como true; entonces, nuestro promise cumplió \
por lo tanto se va a ejecutar el resolve; siendo esta la función que se va a ejecutar cuando promise cumpla. Esto pasa en \
todos los promises automáticamente. En caso de que ";
console.log(promises3);
promises4 = "En caso de que no se cumpla, es decir, que el auth sea falso; entonces, se ejecuta automáticamente también; \
y abajo de la línea del else vamos a escribir reject() por loq ue resuelve el promise y se cumple; Ahora en las dos \
funciones resolve y reject les vamos a pasar un valor; es decir, el valor que le vamos a pasar sí el usuario está \
autenticado con un mensaje apropiado para este ejemplo, Usuario autenticado y en caso de que no se pudo autenticar; por \
algún motivo un mensaje que diga por ejemplo, No se pudo autenticar; Esto es lo básico del promise.";
console.log(promises4);
promises5 = "Hasta el momento sabemos que hasta el momento no va a pasar nada; pués nos faltaría el console.log y dentro \
de los paréntesis escribimos usuarioAutenticado. Guardamos cambios y observamos en consola que nos aparece algo así como \
fulfilled y entre comillas sencillas el mensaje de Usuario autenticado y desplegamos en la flecha del Promise nos deja \
ver entre corchetes cuadrados Prototype Promise, PromiseState fulfilled y PromiseResult como Usuario Autenticado. O sea \
que nuestro ejemplo salió excelente.";
console.log(promises5);
const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;
    if (auth) {
        resolve('Usuario Autenticado'); // El promise se cumple
    } else {
        reject('No se pudo iniciar sesión'); // el promise no se cumple.
    }
})
console.log(usuarioAutenticado);
promises6 = "Estos terminos significan que son tres valores posible; el primero es Pending y este quiere decir que, el \
Promises no se ha cumplido; pero, tampoco se ha rechazado; es decir, está es espera; el segundo termino, fulfilled es \
ya se cumplió el Promise; eso lo pudimos ver en consola; debido a que la función resolve se ejecuta cuando se cumpla el \
programa; y el tercer termino es el reject que viene  a ser lo opuesto a cumplir; o sea fue rechazado o el promise no se \
pudo cumplir. Ahora sí en lugar de true tuvieramos un false pasaríamos a la función reject porqué no está autenticado.";
console.log(promises6);
const usuarioAutenticado1 = new Promise((resolve, reject) => {
    const auth = true;
    if (auth) {
        resolve('Usuario Autenticado uno'); // El promise se cumple
    } else {
        reject('No se pudo iniciar sesión uno'); // el promise no se cumple.
    }
})
console.log(usuarioAutenticado1);
promises6 = "Ahora, sí eliminamos el if podemos observar en consola que nos aparece el mensaje de pending; aunque no se \
ha rechazado, está esperando algo más.";
console.log(promises6);
const usuarioAutenticado2 = new Promise((resolve, reject) => {
    const auth = false;

})
console.log(usuarioAutenticado2);
promises7 = "Esto resultados Pending, fulfilled y reject, son muy comunes cuando realizamos una consulta a una API, es \
decir, podemos tener un lenguaje de programación que consulta una base de datos (DB) y por lo tanto vamos a tener estos \
resultados. Tal vez aún no se conecta; pero, tampoco ha fallado la conexión. O sí la conexión fue correcta y se trajo \
todos los resultados entonces es fulfilled y en caso de que no se haya podido conectar porque tal vez el servidor está \
colapsado o algo similar lo más seguro es que pasemos a un reject.";
console.log(promises7);
promises8 = "Vamos a regresar al ejemplo de la autenticación true y lo vamos a copiar aquí en la parte de abajo para \
poder explicar otro dato interensante de abordar. como sabemos, nos arroja usuario autenticado; pero, también nos \
aparece fulfilled y además nos sigue saliendo como promise; pero, tal vez queramos extraer el valor de Usuario \
autenticado así sea aquí en la consola. como lo haríamos?";
console.log(promises8);
promises9 = "Casi siempre que tengamos la forma que nos aparece en consola junto con los valores de promise, unas \
llaves o el fulfilled y otros que hemos venido detallando a lo largo de esta lección; significa que nos hace falta un \
más por dar en el promise, en la respectiva lectura del promise; y que sería en el usuarioAutenticado y le debemos de \
eliminar el console.log porque este solamente nos sirve para ver el estado del promise; sí es pending, fulfilled o \
reject. Por lo tanto solamente vamos a dejar la variable así nada más sin el console.log.";
console.log(promises9);
promises10 = "Usualmente, vamos a acceder a los valores del promise con punto then y sus respectivo paréntesis. Esto \
quiere decir que, como vamos a utilizar el promise entonces este punto then va a ejecutar una función (function) o sea \
que necesitamos nuestras llaves {} en seguida sí escribimos nuestro console.log con un mensaje desde el promise; y sí \
guardamos cambios nos debe de aparecer tal y como lo planeamos.";
console.log(promises10);
const usuarioAutenticado3 = new Promise((resolve, reject) => {
    const auth = true;
    if (auth) {
        resolve('Usuario Autenticado tres'); // El promise se cumple
    } else {
        reject('No se pudo iniciar sesión tres'); // el promise no se cumple.
    }
})
usuarioAutenticado3
    .then(function (params) {
        console.log('Desde el Promise.')
    })
console.log(usuarioAutenticado3)
promises11 = "Entonces, el programa salío lo más de bién; al ejecutarlo desde el punto then; una cosa que debemos de tener \
cuenta que cuando nos aparece en consola todos los valores que mencionamos en anteriores párrafos como el pending, el \
fulfilled y el reject esto se hace con el console.log(usuarioAutenticado). Pero como nos aparece el promise significa que \
nos hace falta el punto then.";
console.log(promises11);
promises12 = "Entonces, el resolve del if vendría a ser la función (function) del punto then. Es decir que, sí el promise \
se cumple la función (function) aparece en consola; aunque en el resolve de nuestro if tiene un mensaje de Usuario \
Autenticado; este mensaje va a ser el resultado que se le pasa a la función (function) con valor resultado y para poder \
leerlo debemos de colocar dentro de los paréntesis en le console.log del punto then la palabra resultado. Estaríamos \
leyendo el valor del promise; veámoslo en el código.";
console.log(promises12);
const usuarioAutenticado4 = new Promise((resolve, reject) => {
    const auth = true;
    if (auth) {
        resolve('Usuario Autenticado cuatro'); // El promise se cumple
    } else {
        reject('No se pudo iniciar sesión cuatro'); // el promise no se cumple.
    }
})
usuarioAutenticado4
    .then(function (resultado) {
        console.log(resultado)
    })
promises13 = "Como vimos en consola, nos salió excelente el ejemplo con el mensaje respectivo o el resultado respectivo \
de Usuario Autenticado; ya desde aquí podemos sacar o imprimirlo en pantalla; sí son los resultados de una consulta a \
una base de datos (DB) o a una API; podemos divinamente ya sacarlos o imprimirlos en el HTML. Y en caso de que haya un \
false como en el ejemplo anterior pués nos debe de aparecer el siguiente mensaje del else o el de reject; veámoslo.";
console.log(promises13);
const usuarioAutenticado5 = new Promise((resolve, reject) => {
    const auth = true;
    if (auth) {
        resolve('Usuario Autenticado cinco'); // El promise se cumple
    } else {
        reject('No se pudo iniciar sesión cinco'); // el promise no se cumple.
    }
})
usuarioAutenticado5
    .then(function (resultado) {
        console.log(resultado)
    })
promises14 = "Pero, cómo vamos a leer ese reject? debido a que nos dice uncaught no se pudo inciar sesión cinco; y \
siempre va a ser con un catch muy similar a la lección anterior del try cath; pero,e sta vez solo se utiliza catch; por \
que este también va a tener una función (function) o sea lleva sus respectivas llaves {} y el mensaje del reject lo va \
tomar el catch; por lo tanto en el parámetro le podemos escribir error e casi la misma estructura del punto then; pero \
esta vez en con un catch; veamos que sucede.";
console.log(promises14);
const usuarioAutenticado6 = new Promise((resolve, reject) => {
    const auth = true;
    if (auth) {
        resolve('Usuario Autenticado seis'); // El promise se cumple
    } else {
        reject('No se pudo iniciar sesión seis'); // el promise no se cumple.
    }
})
usuarioAutenticado6
    .then(function (resultado) {
        console.log(resultado)
    })
    .catch(function (error) {
        console.log(error)
    })
promises15 = "Es de anotar que siempre nos sale Uncaught con el mensaje correspondiente; pero para la dinámica de \
lección siempre hemos colocado la autenticación en true para seguir con los ejemplos; Entonces, el ejemplo anterior \
nos arroja una especie que no se ejecutó el programa o sea es el mensaje que queríamos que nos arrojara al colocar la \
autenticación en false. Ahora, estas funciones (function) punto then y punto catch como no hacer referencia a un this, \
también pueden llevar un arrow function para ahorrarnos un poco de líneas de código. y como tenemos una sola línea las \
llaves {} como los paréntesis de los parámetros son opcionales también. Hagámoslo.";
console.log(promises15);
const usuarioAutenticado7 = new Promise((resolve, reject) => {
    const auth = true;
    if (auth) {
        resolve('Usuario Autenticado siete'); // El promise se cumple
    } else {
        reject('No se pudo iniciar sesión siete'); // el promise no se cumple.
    }
})
usuarioAutenticado7
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))
promises16 = "Excelente, nos ahorramos unas líneas de código con el arrow function; o sea estamos sacando una buena \
ventaja de JavaScript; Recordemos que para efectos del aprendizaje solamente vamos a colocar true para poder seguir con \
la lección pero se puede obviamente cambiar a false cuando se quiera tener la información del promise. Pero, lo mas \
importante de esto es que cuando se cumpla el promise se va a ejecutar el resolve; y lo contrario se va a ejecutar el \
reject. Vamos a ver en la siguiente lección one hundred forty (140) call API notifications.";
console.log(promises16);
