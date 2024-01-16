// In this lesson one hundred forty one (141) we will discuss the issue of Async Await
let asyncAwait, asyncAwait1, asyncAwait2, asyncAwait3, asyncAwait4, asyncAwait5, asyncAwait6, asyncAwait7, asyncAwait8,
    asyncAwait9, asyncAwait10;
asyncAwait = "Bién el tema en realidad es muy interesante; debido a que es la base de todo desarrollo moderno hoy en día \
de React, Angular, TypeScript, etc. Un ejemplo sencillo que podemos traer a colación es: si entran dos (2) personas a un \
restaurante, uno pide digamos una ensalada de frutas y la otra pide un lomo de cerdo ahumado; Tal vez la orden de la \
persona que pide el lomo de cerdo ahumado va a tomar un tiempo mucho más considerable en tomar ese pedido que la otra \
que la otra persona que solamente pidió una ensalada de frutas. No vamos a esperar a que esté listo el pedido del lomo \
de cerdo para servirle a la otra persona que pidió la ensalada de frutas; cierto? muy similar pasa con el código asíncrono: \
podemos escribir código y decirle a JavaScript Ok, vamos a descargar un listado de los últimos diez mil (100000) clientes \
y muy probablemente se tarde más o menos unos dos (2) o tre minutos (3) Pero vamos mostrando el resto del sitio web porque \
esta tarea va a tomar un poco más de tiempo.";
console.log(asyncAwait);
asyncAwait1 = "No vamos a esperar a que esté listo el pedido del lomo de cerdo para servirle a la otra persona que pidió \
la ensalada de frutas; cierto? muy similar pasa con el código asíncrono: podemos escribir código y decirle a JavaScript \
Ok, vamos a descargar un listado de los últimos diez mil (100000) clientes y muy probablemente se tarde más o menos unos \
dos (2) o tre minutos (3) Pero vamos mostrando el resto del sitio web porque esta tarea va a tomar un poco más de tiempo \
que las demás que se hayan hecho.";
console.log(asyncAwait1);
asyncAwait2 = "De esto trata sync await y vamos a verlo con un ejemplo en nuestro código; Vamos a crear una función \
(function) que se llame descargarNuevosClientes() {} dentro de las llaves vamos a decir que esta función (function) va a \
// retornar un nuevo promise y solamente va retornar un resolve con un arrow function (=>) seguido de las llaves {} \
seguidamente, vamos a instanciar el promise y entonces ejecutará una función que solamente va a tener el resolve; es decir \
que, se cumpla; vamos a forzarlo a que se cumpla, no va a ver un escenario en que no se pudo cumplir; aunque en la vida \
real cuando se descargan nuevos clientes, sí puede suceder que el servidor se haya caído y/o haya tomado más tiempo del \
necesario.";
console.log(asyncAwait2);
asyncAwait3 = "Siguiendo con nuestro ejemplo; dentro de las llaves {} del return vamos a escribir un console.log() y \
dentro de los paréntesis vamos a escribir un mensaje que diga por ejemplo Descargando Clientes y puntos suspensivos \
espere un momento y puntos suspensivos; (por decir algo) Es sabido que un sitio web, probablemente haya solamente un \
espere; pero, nadie va a estar revisando la consola; Ahora, vamos a hacer una especie de simulación que estamos \
descargando todo de una base de datos; porque nuestro mensaje va a ser instantáneo.  pero vamos a hacerlo en nuestro código, guardamos y revisamos la consola.";
console.log(asyncAwait3);
asyncAwait3 = "Pero, cómo vamos a hacer para que nuestro código se tarde un poco? Ok, la forma en que lo vamos a hacer \
es un setTimeOut; este tema aún no lo hemos visto; pero en próximas lecciones lo haremos; Entonces el setTimeOut con sus\
paréntesis y sus llaves {} y dentro de las llaves vamos a escribir un console.log('Set timeout...') y esta va a ser una \
función (function) y antes del paréntesis al final de la función le colocamos cuanto tiempo queremos que tarde en \
ejecutarse esta función, es esperar un poco a que se ejecute nuestra función; No olvidemos que el tiempo es en \
milisegundos por lo tanto sí le ponemos mil (1000) esto va a ser un segundo; y así sucesivamente. NOTA: a esta altura \
comentamos la función inicial para poder observar el tiempo que tarda en consola (5000) o sea 5 segundos. pero, vamos \
a hacerlo en nuestro código, guardamos y revisamos la consola.";
console.log(asyncAwait3);
// function descargarNuevosClientes() {
//     return new Promise(resolve => {
//         console.log('Descargando Clientes... espere un momento...')
//     })
// }
// setTimeout(function () {
//     console.log('Set timeout...')
// }, 5000);
asyncAwait4 = "Excelente, como pudimos observar se tardó cinco segundos (5') en aparecer el mensaje de Timeout... La otra \
opción es la que se conoce como setInterval y este va a estar esperando el intervalo sí le escribimos por ejemplo tres \
segundo (3') y en consola nos aparecerá cada tres segundos (3') el mensaje en consola; probemos a ver que sucede.";
console.log(asyncAwait4);
// function descargarNuevosClientes() {
//     return new Promise(resolve => {
//         console.log('Descargando Clientes... espere un momento...')
//     })
// }
// setInterval(function () {
//     console.log('Set timeout...')
// }, 3000);
asyncAwait5 = "Nuevamente excelente, cada tres segundos (3') aparece nuestro mensaje Set timeout... con un intervalo de \
tres segundos (3') o se a que cada tres segundos (3') va a ejecutar nuestra función (function) mientras que el setTimeOut \
lo va a hacer una sola vez; entonces, eso es lo que queremos; queremos es simular que estamos conectados a una BD o a un \
servidor e ir descargando el listado de los clientes; ahora, si vamos a des comentar la estructura inicial para poder \
continuar con la dinámica de la lección Async await; Entonces, dentro de las llaves de nuestro return y en la línea \
siguiente al console.log vamos a escribir un setTimeOut o si se prefiere copiar y pegar el anterior que hicieramos; \
seguidamente, dentro de las llaves {} del setTimeOut vamos traer el resolve de nuestro promise y dentro de unos paréntesis \
vamos a escribir un mensaje que diga por ejemplo, el listado de los clientes ya fueron descargados.";
console.log(asyncAwait5);
asyncAwait5 = "Claro que, si nos fijamos no estamos evaluando nada, solamente tenemos un setTimeout junto con un resolve; \
hasta aquí nada nuevo, porque esto es promise; pero, estamos viendo un Async await y para poder utilizar este tenemos \
primero, crear una función (function) al final de las llaves {} de la función descargarNuevosClientes y la llamaremos por \
ejemplo app; con sus respectivos paréntesis y llaves y dentro de estas llaves le escribimos un console.log que diga app \
lista y al final de las llaves de nuestra app llamamos a esa función (app) y si guardamos cambios podemos ver en consola \
app lista.";
console.log(asyncAwait5);
// function descargarNuevosClientes() {
//     return new Promise(resolve => {
//         console.log('Descargando Listado Clientes... espere un momento...');
//         setTimeout(() => {
//             resolve('El listado de los clientes ya fue descargado')
//         }, 5000);
//     });
// }
// function app(params) {
//     console.log('App lista');
// }
// app();
asyncAwait6 = "Entonces estamos llamando a la función app inmediatamente cuando carga el script. Pero, como debemos es \
de cargar el Async await la función (function app()) debe ser asíncrona,; por lo tanto, vamos a definir ese asíncrono \
agregando al inicio de la función (async function app()) async y de esta manera le estámos diciendo Ok, esta es una \
función; pero, es asíncrona, muy importante en la vida real. Puede ser que el listado de los clientes se descarguen no \
se descarguen.";
console.log(asyncAwait6);
asyncAwait7 = "Recordemos que, cuando existe un error en JavaScript, todo el Código deja de ejecutarse; esto es un \
punto crítico porque puede ser que no se descargue el listado de los clientes; pero, si queremos que la aplicación \
siga funcionando. Y para esto tenemos try catch; entonces, después de las llaves {} de nuestra async function app() \
escribimos el try catch y vamos a intentar descargar el listado de lso clientes y en ese caso que no se pueda, vamos a \
ver en la consola el error. Y dentro de las llaves {} del try vamos a colocar una variable que la llamaremos como \
resultado (es un ejemplo) y esto va a ser igualado a nuestro promise de descargarNuevosClientes y la siguiente línea \
vamos a colocar nuestro respectivo console.log(resultado) ";
console.log(asyncAwait7);
// function descargarNuevosClientes() {
//     return new Promise(resolve => {
//         console.log('Descargando Listado Clientes... espere un momento...');
//         setTimeout(() => {
//             resolve('El listado de los clientes ya fue descargado')
//         }, 5000);
//     });
// }
// async function app(params) {
//     try {
//         const resultado = descargarNuevosClientes();
//         console.log(resultado);

//     } catch (error) {

//     }
// }
// app();
asyncAwait7 = "Nota; si guardamos cambios y lo vemos en consola nos va a aparecer pending y si recordamos en la lección \
anterior one hundred forty (140) llamada notificaciones API; esta palabra hacía referencia de que No se ha cumplido; pero \
tampoco se ha rechazado el promise; entonces, el listado no se está descargando pero tal vez nos hace falta algo más. \
Entonces, lo que nos faltaría sería decirle a dónde va a estar el promise y colocarle un await después del signo igual \
(=) y antes de descargarNuevosClientes() y sí guardamos cambios podemos ver que después de cinco segundos (5') el \
mensaje Descargando Listado Clientes... espere un momento... y después de cinco segundos (5') va a entrar al setTimeout \
y va a aplicar el resolve; hagámoslo en nuestro código esta teoría.";
console.log(asyncAwait7);
// function descargarNuevosClientes() {
//     return new Promise(resolve => {
//         console.log('Descargando Listado Clientes... espere un momento...');
//         setTimeout(() => {
//             resolve('El listado de los clientes ya fue descargado')
//         }, 5000);
//     });
// }
// async function app(params) {
//     try {
//         const resultado = await descargarNuevosClientes();
//         console.log(resultado);

//     } catch (error) {
//         console.log(error);
//     }
// }
// app();
asyncAwait8 = "Excelente, después de cinco segundo (5') nos salió el mensaje en consola de que El listado de los clientes \
ya fue descargado; entonces, el valor de: El listado de los clientes ya fue descargado se encuentra asignado a nuestra \
variable const resultado = await descargarNuevosClientes() y posteriormente se envía a la consola. Otro aspecto que, \
debemos de tener en cuenta es que el llamado de la app() al final de nuestro código le podemos escribir otra función o \
simplemente un console.log que diga un mensaje por ejemplo, console.log('Este código no se bloquea') y así estaríamos \
viendo los beneficios del Async await. Porque va a entrar en la aplicación, no se va a ejecutar y va a comenzar a \
descargar el listado de los clientes; pero, el resto del código si continúa ejecutándose sin ningún inconveniente. ";
console.log(asyncAwait8);
// function descargarNuevosClientes() {
//     return new Promise(resolve => {
//         console.log('Descargando el Listado de los Clientes... espere un momento...');
//         setTimeout(() => {
//             resolve('El listado de los clientes ya fue descargado')
//         }, 5000);
//     });
// }
// async function app(params) {
//     try {
//         const resultado = await descargarNuevosClientes();
//         console.log(resultado);

//     } catch (error) {
//         console.log(error);
//     }
// }
// app();
// console.log('Este código no se bloquea');
asyncAwait9 = "Nuevamente, excelente, nos aparece el mensaje en consola Descargando el listado de los clientes... espere \
un momento... seguido del mensaje Este código no se bloquea y finalmente le mensaje de El listado de los clientes ya fue \
descargado; como se planeó en nuestro código; Entonces, se puede analizar que, el último mensaje posterior a la app() \
no tiene nada que ver o no necesita el resultado de la descarga de nuevos clientes (descargaNuevosClientes); Pero, que \
pasaría si moviéramos ese console.log('Este código no se bloquea') en al línea siguiente de nuestra variable resultado?\
vamos a verlo.";
console.log(asyncAwait9);
function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando el Listado de los Clientes... espere un momento...');
        setTimeout(() => {
            resolve('El listado de los clientes ya fue descargado')
        }, 5000);
    });
}
async function app(params) {
    try {
        const resultado = await descargarNuevosClientes();
        console.log('Ok; tu transacción fue tramitada correctamente; y tu orden estará muy pronto en tus manos. Además te estaremos enviando las notificaciones respectivas.');
        console.log(resultado);

    } catch (error) {
        console.log(error);
    }
}
app();
asyncAwait9 = "Igualmente, el código funcionó correctamente; y esa es la ventaja de Async await; Este código \
console.log('Este código SÍ se bloquea') se puede decir que depende de se descarguen nuevos clientes const resultado = \
new (descargarNuevosClientes) Esta es una gran ventaja porque vamos a tener código de no requiera o qu eno le interesen \
los llamados a las APIs; Pero, vamos a tener otro código que va esperar a que ese llamado se complete, que se hayan \
descargado todos los elementos de una DB para entonces poder ejecutarse.";
console.log(asyncAwait9);
asyncAwait10 = "Otro ejemplo que podríamos traer a colación es cuando un usuario realiza una transacción bancaria por \
lo tanto, podemos bloquearla hasta que el banco nos confirme si esta transacción es correcta o no; Y sí se efectuó \
correctamente el cargo entonces necesitaríamos una función que le diga al usuario OK, tu transacción se efectuó \
correctamente y tu orden está lista; te estaremos enviando más detalles de la orden.";
console.log(asyncAwait10);
asyncAwait10 = "Finalmente, esta es una de las ventajas del Async await de poder bloquear el código y esperar a que se \
cumpla algo para así entonces poder realizar otra acción; Es un tema complejo es de entenderse; pero, lo estaremos viendo \
a lo largo de las demás lecciones que faltan por ver; así que vamos para adelante; Recordemos, cualquier código que \
esté después de un await como el de console.log('Algo aquí') no se va a ejecutar hasta tanto nuestro código \
const resultado = await descargarNuevosClientes() no se haya ejecutado. En la siguiente lección one hundred forty two \
(142) llamada como trabajar con dos consultas Async await.";
console.log(asyncAwait10);
