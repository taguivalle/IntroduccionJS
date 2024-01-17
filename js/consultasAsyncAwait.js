// IN this lesson one hundred forty two (142) we will discuss the issue of Consultas Async Await
let consultasAsyncAwait, consultasAsyncAwait1, consultasAsyncAwait2, consultasAsyncAwait3, consultasAsyncAwait4,
    consultasAsyncAwait5, consultasAsyncAwait6, consultasAsyncAwait7, consultasAsyncAwait8, consultasAsyncAwait9;
consultasAsyncAwait = "Par la realización de esta lección one hundred forty two (142) vamos a utlizar el mismo ejemplo \
de la lección anterior one hundred forty one (141) call Async await; par continuar con la segunda parte de como hacer \
dos consultas con Async await.";
console.log(consultasAsyncAwait);
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
//         console.log('Ok; tu transacción fue tramitada correctamente; y tu orden estará muy pronto en tus manos. Además te estaremos enviando las notificaciones respectivas.');
//         console.log(resultado);

//     } catch (error) {
//         console.log(error);
//     }
// }
// app();
consultasAsyncAwait1 = "Inicialmente, podemos observar que, tenemos la función (function) descargarNuevosClientes. Vamos \
a suponer que este es un proyecto complejo CRM (Customer Relationship Management) por sus siglas en inglés y que viene a \
ser la Gestión de Relaciones con los Clientes; se trata en terminos ambiguos de una gestión integrada de ventas, \
marketing, atención al cliente y todos los punto de contacto; Apoyándonos en la anterior definición extraída de la web;  \
por lo que existe todo tipo de entidades, todo tipo de consultas a la DB; entonces vamos a copiar la función (function) \
pero, antes de la función async await y la vamos a llamar descargarUltimosPedidos (La palabra último lleva acento en la \
letra U; pero en la realización de una función (function) no se lleva este; ni por lo general en el código).";
console.log(consultasAsyncAwait1);
consultasAsyncAwait2 = "Ahora, dentro del resolve vamos a colocar un mensaje que diga por ejemplo, Descargando Pedidos... \
espere un momento por favor y el setTimeOut otro mensaje que diga por ejemplo, Los pedidos fueron descargados. Supongamos \
que clientes toma cinco segundos (5') y que pedido toma tres segundos (3') Serían ocho segundos (8) en total. Esto no es \
un inconveniente, porque hay muchas aplicaciones web que utilizan el async await y eso ya nos da una ganancia en \
performance porque inmediatamente que está listo el llamado puedes realizar otra acción diferente. Sin embargo, también \
existen muchas personas que lo implementan mal.";
console.log(consultasAsyncAwait2);
consultasAsyncAwait3 = "Seguidamente, vamos a escribir en nuestra función async dentro de las llaves \
{const pedidos = await descargarNuevosClientes() vamos llamarla clientes, con el mismo nombre en el \
console.log(clientes)} Y vamos a suponer que tenemos dos conexiones al tiempo y una vez que se descargan los clientes y \
otra vez descargar pedidos y al mismo tiempo muchos usuarios dicen Ok; y por eso es colocamos un await \
descargarNuevosClientes y otro descargarUltimosPedidos; vamos a hacerlo en nuestro código.";
console.log(consultasAsyncAwait3);
// function descargarNuevosClientes() {
//     return new Promise(resolve => {
//         console.log('Descargando el Listado de los Clientes... espere un momento...');
//         setTimeout(() => {
//             resolve('El listado de los clientes ya fueron descargados')
//         }, 5000);
//     });
// }
// function descargarUltimosPedidos() {
//     return new Promise(resolve => {
//         console.log('Descargando los pedidos... espere un momento... por favor');
//         setTimeout(() => {
//             resolve('Los pedidos fueron descargados.')
//         }, 5000);
//     });
// }
// async function app(params) {
//     try {
//         const clientes = await descargarNuevosClientes();
//         const pedidos = await descargarUltimosPedidos();
//         console.log(clientes);
//         console.log(pedidos);

//     } catch (error) {
//         console.log(error);
//     }
// }
// app();
consultasAsyncAwait4 = "el inconveniente de este código es que al momento de guardar cambios, podemos observar que, \
aparece primero nuestro primer mensaje Descargando el Listado de los Clientes... espere un momento... el segundo \
mensaje Descargando los pedidos... espere un momento... por favor el tercer mensaje El listado de los clientes ya \
fueron descargados y el cuarto mensaje Los pedidos fueron descargados respectivamente; O sea no comienza a descargar \
nuestros dos iniciales mensajes del código al mismo tiempo y esto pasa porque (recordemos) que la línea \
const pedidos = await descargarUltimosPedidos() se bloquea; hasta que la línea const clientes = await descargarNuevosClientes() \
no se haya completado o ejecutado.";
console.log(consultasAsyncAwait4);
consultasAsyncAwait5 = "Para este caso no es conveniente que se muestren de esta manera los mensajes por que son \
entidades diferentes; nuevos clientes y últimos pedidos no dependen una de otra; cuando depende una de otra; entonces, \
sí se bloquea la ejecución; pero, cuando tenemos dos llamados que son independientes, tenemos que, ver la forma de \
hacerlo con el mejor performance posible y para eso existe una sintaxis diferente.";
console.log(consultasAsyncAwait5);
consultasAsyncAwait6 = "Entonces, vamos a reemplazar el código de nuestro try con un array con las diferentes consultas \
que tenemos que revisar; por lo tanto vamos a colocar aquí const resultado = await Promise.all([descargarNuevosClientes(), \
descargarUltimosPedidos()]) este punto all lo trae automáticamente nuestro editor de texto. Así, con el Promise vamos a \
ganar en performance porque se van a ejecutar las dos funciones al mismo tiempo. no olvidemos en la siguiente línea \
colocar un console.log(resultado) guardamos cambios y observamos que sucede en consola; pero primero vamos a insertar \
esta teoría en nuestro código.";
console.log(consultasAsyncAwait6);
// function descargarNuevosClientes() {
//     return new Promise(resolve => {
//         console.log('Descargando el Listado de los Clientes... espere un momento...');
//         setTimeout(() => {
//             resolve('El listado de los clientes ya fueron descargados');
//         }, 5000);
//     });
// }
// function descargarUltimosPedidos() {
//     return new Promise(resolve => {
//         console.log('Descargando los pedidos... espere un momento... por favor');
//         setTimeout(() => {
//             resolve('Los pedidos fueron descargados.')
//         }, 3000);
//     });
// }
// async function app(params) {
//     try {
//         const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
//         console.log(resultado);
//     } catch (error) {
//         console.log(error);
//     }
// }
// app();
consultasAsyncAwait7 = "Listo, como guardamos cambios pudimos observar que, nos aparecen ambos mensajes; pero el \
resultado apareció en un array con los mensajes faltantes; Ahora, si queremos verlos de manera diferente tenemos que \
iniciar en la posición cero (0) en el console.log (resultado[0]) y el otro console.log (resultado[1]) porque es un array \
que tenemos en el Promise que es puntual y entonces nos va retornar lso resultados del array en consola. vamos a \
insertar esas dos líneas en nuestro código, guardamos y veremos que sucede en consola.";
console.log(consultasAsyncAwait7);
function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando el Listado de los Clientes... espere un momento... Por favor');
        setTimeout(() => {
            resolve('El listado de los clientes se descargaron satisfactoriamente.');
        }, 5000);
    });
}
function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando los pedidos... espere un momento... por favor');
        setTimeout(() => {
            resolve('Sus pedidos fueron descargados.')
        }, 3000);
    });
}
async function app(params) {
    try {
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
app();
consultasAsyncAwait8 = "Bién, este fue una demostración como se planeó en nuestro código; debido a que las dos funciones \
se ejecutaron al mismo tiempo; lo que teníamos con el anterior código; en donde primero se empezaba a ejecutarse una y \
después se ejecutaba la otra; de igual manera en este código primero empieza una y hasta que no finalice la otra va a \
terminar después por el setTimeOut. Una termina a los tres (3') segundos y la otra a los cinco segundos (5') mientras \
que, anteriormente nos tomaba ocho segundos (8') Ahora solamente son cinco segundos (5') porque la otra toma de tres \
segundos (3') que entran en el mismo rango de tiempo de los cinco segundos (5').";
console.log(consultasAsyncAwait8);
consultasAsyncAwait9 = "Recordemos que, los paréntesis del Promise.all nos dan a entender que es una función con unos \
corchetes cuadrados [] para indicar que es un array con dos funciones; para irlas ejecutando una tras otra. finalmente, \
en la siguiente lección one hundred forty three (143) vamos a ver el tema de fetch y API y con este daremos por culminado \
con el entrenamiento básico de JavScript; aunque, se trató de abarcar los más básico de este excelente lenguaje de \
programación; no sin antes advertir que lo expresado en estas lecciones no lo es un todo; Pero es deber de cada uno de \
nosotros como aprendices en ir aumentando los conocimiento en el tema.";
console.log(consultasAsyncAwait9);
