// In this lesson one hundred forty (140) We will discuss the issue of notifications API.
let notificationsApi, notificationsApi1, notificationsApi2, notificationsApi3, notificationsApi4, notificationsApi5,
    notificationsApi6, notificationsApi7, notificationsApi8, notificationsApi9, notificationsApi10, notificationsApi11,
    notificationsApi12, notificationsApi13, notificationsApi14, notificationsApi15;
notificationsApi = "En esta lección one hundred forty (140) estaremos viendo algunos conceptos del tema de las APIs \
modernas de JavaScript que es notificación API. Por decir algo, cuando alguién se inscribe en youtube y le da habilitar \
las notificaciones; de inmediato le llega una notificación al momento de que esa persona sube alguna información de por \
ejemplo un vídeo; esto lo podemos hacer con JavaScript.";
console.log(notificationsApi);
notificationsApi1 = "Pero, primero que debemos de hacer también en nuestro archivo HTML es crear un botón con un type \
igual a button además con id igual a boton; a este lo llamaremos por ejemplo ver notificación. La idea es que al momento \
de presionar ese botón se muestre la respectiva notificación que vamos a crear. Este tema del button no lo hemos visto; \
pero en próximas lecciones lo haremos. Pero, cómo puedo seleccionar este elemento HTML en nuestro código de JavaScript? \
Esta clase de acciones se inicia con un DOM (Document Object Model) y este va a hacer referencia a todo lo que tenemos en \
nuestro archivo HTML.";
console.log(notificationsApi1);
notificationsApi2 = "sí escribimos en la consola directamente document, Observemos como se resalta el HTML. es decir, DOM \
hace referencia a todo el HTML que tenemos en nuestro sitio web. Entonces, siempre que queramos elegir algo del HTML, \
siempre iniciamos con document como  lo mencionabamos anteriormente. Es cierto que existen diferentes formas de \
seleccionar contenido; lo estaremos viendo a un más de detalle en la siguiente lección; pero, la función más común hoy en \
día es una llamada Query Selector.";
console.log(notificationsApi2);
notificationsApi3 = "Query Selector (querySelector) es la forma en al que vamos a seleccionar contenido HTML; este lo \
vamos a seleccionar con un selector parecido a CSS, y le ponemos paréntesis; dentro de estos paréntesis le pasaríamos el \
selector que le vamos a escribir; pueden ser comillas dobles o sencillas; dentro de estas comillas vamos a llamar al botón; \
(recordemos que le escribimos un id igual a boton) De igual manera recordemos que en CSS la forma en la que se hace \
referencia a los id es con el signo gato o numeral (#) seguido del id, en este caso botón.";
console.log(notificationsApi3);
notificationsApi4 = "Con este # lo que hace es seleccionar el botón y de hecho sí esta línea quedaría así: \
document.querySelector('#boton') Ahora, si la copiamos y la pegamos en la consola nos va a salir la información del botón \
que se encuentra en nuestro archivo HTML. Bién, tenemos que asignarlo a una variable para no estar escribiendo este código \
todo el tiempo, solamente la variable que vamos a crear; por lo tanto enseguida de la palabra reservada const escribimos \
boton y lo vamos a igualar a document.querySelector('#boton') Y nuevamente como es el común de las lecciones vamos a hacer \
esta línea en nuestro código.";
console.log(notificationsApi4);
// const boton = document.querySelector('#boton');
notificationsApi5 = "Después de haber guardado los cambios podemos de esta forma hacer referencia a botón en lugar de \
estarle haciendo referencia al selector completo, nos ahorramos algunas líneas de código por lo que se hace más fácil de \
mantener sí creamos selectores de este tipo. De igual forma, en las siguientes lecciones estaremos viendo algunos eventos \
eventos; pero, como adelanto en JavaScript un evento es, por ejemplo, cuando abrimos un sitio web y si me coloco sobre el \
texto cualquiera en nuestro HTML eso ya es un evento; es decir, si damos click sobre cualquier parte del archivo HTML que \
se encuentre en la web eso ya se considera como un evento.";
console.log(notificationsApi5);
notificationsApi6 = "Entonces, existen muchos eventos cuando visitamos un sitio web; Y gracias a JavaScript podemos tener \
un poco más de control sobre qué es realmente lo que están haciendo los usuarios en nuestro sitio con nuestro código. \
Para este caso, el evento que vamos a escuchar o que tenemos que revisar es cuando hacemos click en el botón; Todos los \
eventos en JavaScript inician con una función que se llama (addEvenListener) Pero, tenemos que seleccionar primero el \
elemento sobre el cual le vamos a hacer el evento, en este caso ya tenemos botón; por lo tanto vamos a escribir \
boton.addEvenListener que viene a ser la función que nos va a permitir registrar un evento a nuestra variable botón.";
console.log(notificationsApi6);
notificationsApi7 = "Bién, esta línea boton.addEvenListener que viene a ser la función que nos va a permitir registrar \
un evento a nuestra variable botón que tiene agregado el archivo HTML con el id de botón. seguimos con un paréntesis y \
tenemos que pasarle dos (2) valores; el primero es el evento que vamos a escuchar, hay muchos; pero puede ser específico \
y decir ok, los demás eventos no nos interesan; pero, me interesa que cuando el usuario haga click entonces vamos a \
ejecutar una función (function) con su respectivo console.log y que tenga un mensaje por ejemplo, Diste click. Pero, \
vamos a escuchar y a revisar que esté bién agregado ese evento; hagámoslo en nuestro código; guardamos y observemos que \
nos muestra en consola. No olvidemos dar click en el botón al lado izquierdo de nuestro HTML.";
console.log(notificationsApi7);
// const boton = document.querySelector('#boton');
// boton.addEventListener('click', function (params) {
//     console.log('Diste Click');
// });
notificationsApi8 = "Excelente, con estas notificaciones podemos hacer muchas cosas. Probemos al cambiar Diste click por \
2 + 2 y veamos que resultado nos arroja.";
console.log(notificationsApi8);
// const boton = document.querySelector('#boton');
// boton.addEventListener('click', function (params) {
//     console.log(2 + 2);
// });
notificationsApi9 = "Pudimos observar que al hacer click en el botón nos arrojó el número cuatro (4). Entonces, todo lo \
que hemos visto lo podemos agregar a un elemento HTML y entonces ejecutar una función (function) y todo lo que se \
encuentre dentro de las llaves {} es lo que se va a ejecutar. Ahora, vamos a registrar una notificación utilizando un \
promise; Como se mencionó anteriormente, todas las APIs modernas de JavaScript utilizan promises; Por lo que, esa \
parte del resolve y reject ya lo manejan automáticamente.";
console.log(notificationsApi9);
notificationsApi10 = "Ahora, notificación (notification) es una API que existe en javaScript; si en la consola escribimos \
notification podemos ver que aparece una f y esta letra quiere decir que es una función. Y si escribimos notification, \
permission podemos ver que aparece granted; esto quiere decir que, le hemos dado permiso. Ahora, vamos a decirle al \
código que cuando alguién de click, vamos a preguntarle que le dé permiso de recibir notificaciones. Entonces, en nuestro \
código vamos a reemplazar la línea del console.log(2+2) por notification.requestPermission (nuestro editor de texto nos \
ayuda con el tema del autocompletado) hagámoslo en nuestro código.";
console.log(notificationsApi10);
// const boton = document.querySelector('#boton');
// boton.addEventListener('click', function (params) {
//     Notification.requestPermission();
// });
notificationsApi11 = "Después de guardar cambios y dar click sobre el botón de ver notificaciones; podemos ver que \
aparece un mensaje que nos pregunta si queremos mostrar notificaciones. Esto es con el fin de que, el usuario tiene que \
dar los permisos; no le podemos enviar al usuario como tampoco sabemos en dónde se encuentre este. Porque, tenemos que \
pedirle permiso primero que todo. Obviamente tampoco podemos acceder a su micrófono o a su cámara. Entonces, todas las \
APIs utilizan Promise porque necesitan el permiso del usuario.";
console.log(notificationsApi11);
notificationsApi11 = "Y como vamos a leer ese permiso para poderle enviar una notificación? entonces, con punto then \
si recordamos todas las APIs modernas de JavaScript utilizan promise entonces el valor del punto then es resultado y \
también como se mencionó antes, ya no tenemos que meternos con resolve y el reject debido a que JavaScript lo maneja \
automáticamente; Es una API nativa de JavaScript; por lo tanto ya no tenemos que crearla nosotros. De esta manera, \
nuestra línea quedaría así: (.then(resultado => console.log('El resultado es: ', resultado))) hagámoslo en nuestro \
código.";
console.log(notificationsApi11);
// const boton = document.querySelector('#boton');
// boton.addEventListener('click', function (params) {
//     Notification.requestPermission()
//         .then(resultado => console.log(`El resultado es: ${resultado}`))
// });
notificationsApi12 = "Excelente; sí el usuario al recibir la notificación este el que decide sí recibe o no las \
notificaciones. si el estado es granted esto quiere decir que el usuario aceptó nuestras notificaciones; Pero la parte \
importante el punto then porque podemos ver que lo estamos viendo ya y no tuvimos que meternos en problemas del resolve \
o del reject. ni tuvimos que crear una nueva instancia del promise; ya lo maneja notification API; pero, lo que sí \
podemos hacer es colocar un if como parámetro Notification.permission == 'granted'; esto quiere decir que le usuario \
aceptó las notificaciones y en la siguiente línea dentro de las llaves del if vamos a colocar una nueva notificación y \
vamos a instanciar la clase o el objeto de notificaciones.";
console.log(notificationsApi12);
notificationsApi13 = "Este tomaría dos valores el primero es el título de la notificación; por ejemplo, Esta es una \
notificación y el segundo (ojo con la llaves {}) dentro de las llaves escribimos que es el segundo es un objeto con \
algunas opciones; para este ejemplo vamos a hacer una notificación más avanzada y que encontraríamos en ejemplos como: \
icon: (este icon es un valor que debemos de escribir tal cual porque está registrado en notificación (notification API))\
y es una forma en la que podemos agregar nuestro propio logotipo, como lo tenemos o lo hayamos podido descargar. con \
alguna de nuestras propias imagenes.";
console.log(notificationsApi13);
notificationsApi14 = "Entonces, después de icon; vamos a colocar dentro de comillas simples la ubicación de la imagen que \
para este ejemplo la tenemos en la carpeta icons y en el segundo valor vamos a pasar el body siendo este el texto de la \
notificación por lo tanto podemos colocar Código con Tavo (es de preferencia mía).";
console.log(notificationsApi14);
const boton = document.querySelector('#boton');
boton.addEventListener('click', function (params) {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es: ${resultado}`))
});
if (Notification.permission == 'granted') {
    new Notification('esta es una notificación', {
        icon: 'img/icono.png',
        body: 'Código de Tavo'
    })
}
notificationsApi15 = "Posteriormente, al guardar cambios nos debe salir la notificación correspondiente; Esto pasa porque \
el usuario nos dió permiso. y sí queremos cambiar los permisos de bloquear por ejemplo guardamos y podemos observar que \
se quedan las notificaciones anteriores. en la siguiente lección one hundred forty one (141) estaremos viendo lo que es el \
código asíncrono y el weight específicamente.";
console.log(notificationsApi15);