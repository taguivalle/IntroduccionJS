// In this lesson one hundred forty three (143); we will discuss the issue the of Fetch Api
let fetchApi, fetchApi1, fetchApi2, fetchApi3, fetchApi4, fetchApi5, fetchApi6, fetchApi7, fetchApi8, fetchApi9,
    fetchApi10, fetchApi11, fetchApi12, fetchApi13, fetchApi14, fetchApi15, fetchApi16, fetchApi17, fetchApi18,
    fetchApi19, fetchApi20, fetchApi21, fetchApi22, fetchApi23, fetchApi24;
fetchApi = "en esta lección one hundred forty three (143) estaremos viendo lo es fetch API siendo este el reemplazo de \
de lo que era antes el objeto (XMLHttpRequest) También referida como XMLHTTP; es una interfaz empleada para hacer \
peticiones HTTP y HTTPS a servidores web; Actualmente es un estándar de la W3C; que proporciona una forma fácil de \
obtener información de URL sin tener que recargar la página completa. La verdad existe mucha literatura al respecto en la \
web; que no es preciso ahondar en este punto.";
console.log(fetchApi);
fetchApi1 = "Como se mencionó en el anterior párrafo, Fetch API es un estándar que nos permite obtener información de un \
servidor web, como también actualizar el sitio web o la aplicación sin necesidad de recargar la respectiva página; así \
mismo se pueden enviar los datos y los va a procesar detrás de la escena pudiendo actualizar en tiempo real nuestro \
sitio web; además nos ayuda a obtener información de un archivo local. análogamente, lo que hemos visto hasta aquí de \
JavaScript par web; es que, no se puede consultar una DB por sí solo.";
console.log(fetchApi1);
fetchApi2 = "Con respecto, al párrafo anterior queremos decir que JavaScript requiere un lenguaje de Backend que se pueda \
conectar a un servidor y que este a su vez se conecte con la DB y que realice la respectiva consulta. Esa consulta para \
poderlo consumir en JavScript debe de estar en un formato que se llama JSon; pero también puede estar en formato de \
texto. Sin embargo JSon poco a poco se va convirtiendo en el estándar.";
console.log(fetchApi2);
fetchApi3 = "Otro aspecto muy importante a tener en cuenta es que, al igual que todas las APIs modernas en JavaScript \
fetch API utiliza Promise; pero, también se puede utilizar con Async await. Regresando al tema de JSon,  por sus siglas \
significa JavaScript Object Notation; Es muy similar a un objeto de JavaScript; es por esto que, la gran mayoría de \
lenguajes de backend pueden crear una respuesta de tipo JSon es que podemos consumir en JavaScript; entendiendo por \
esto de es un lenguaje de transporte de datos.";
console.log(fetchApi3);
fetchApi4 = "Agregando a lo anterior, podemos decir que JSon puede ser creado en cualquier lenguaje de programación y \
por lo tanto se puede consumir en JavaScript, por medio de fetch API y mostrarlo en nuestro sitio web. Además, podemos \
sumarle que, no importa si nuestro backend se encuentra hecho en Python, C#, PHP, node,js, o en Java; todos estos tienen \
la habilidad de exportar una respuesta como JSon y que la podemos consumir en JavaScript; permitiendo como se manifestó \
anteriormente de mostrarlo en nuestro sitio web.";
console.log(fetchApi4);
fetchApi5 = "Con este pequeño repaso de fetch API vamos a traer un ejemplo y poder aprender algo más de lo básico de \
JavaScript. Entonces, vamos a crear un archivo que se llame empleados.json; con este archivo vamos a simular que es una \
DB; aunque, sabemos que no hemos visto el tema de backend que haga una consulta a esta DB, como tampoco hemos visto SQL; \
pero esta simulación nos sirve para interactuar con una DB por intermedio de este archivo empleados.json; sabemos de que \
siendo un archivo JSon significa que JavaScript Object Notation.";
console.log(fetchApi5);
fetchApi6 = "Al encontrarnos dentro del archivo creado, vamos a insertar un par de llaves {} y dentro de estas vamos \
crear una estructura que inicie dentro de comillas dobles empleados (Es una regla de sintaxis de JSon que debe de ser \
dentro de comillas dobles) Seguido de dos punto (:) y esta palabra empleado va a ser la llave o como el contenedor de \
toda la información, después como es empleado esto va a ser un array por lo tanto colocamos corchetes cuadrados; es lo \
mismo en JavaScript que en JSon.";
console.log(fetchApi6);
fetchApi6 = "De igual manera, cada uno de los elementos del array de empleados se convierte en un objeto; por ende, también \
colocamos una llaves {} para mencionar o referirnos a que es un objeto en JavaScript; podemos ver que, es muy similar a \
a JavaScript a pesar de que estamos en un archivo JSon; entonces estos arrays van a tener diferentes elementos; estos \
son: el primer objeto es un id dos puntos y lo igualamos a uno (1) este en una base de datos nos la genera \
automáticamente. el segundo elemento es nombre dos puntos y le damos el valor de nuestro nombre o el que se prefiera; el \
tercer elemento podría ser el puesto (refiriéndonos al del empleado).";
console.log(fetchApi6);
fetchApi7 = "Es importante agregar que, todos los elementos al final deben de llevar una coma (,) pero la última línea no \
la tiene; solamente se traslada al final del cierre de la llave de los elementos; posteriormente vamos a copiar el objeto \
abajo de este mismo; pero el id es igual a dos (2) con otro valor para los objetos nombre: Andrés y puesto: UX / UI. Por \
lo tanto , tendremos dos objetos con los mismos elementos. O sea que, estos dos arrays pertenecen a la llave \
empleados.json.";
console.log(fetchApi7);
fetchApi8 = "Ahora vamos a crear otro tercer elemento con id: 3, nombre: Mary, puesto: Marketing; (recordemos que los \
elementos se encuentran dentro de comillas dobles y que la coma no la lleva el último elemento) Vamos a crear otro \
elemento con un id: 4, un nombre: Sebastián, el puesto: Programador de servidores; con todos estos arrays vamos a tener \
una respuesta y esta se va a generar con una sola función.";
console.log(fetchApi8);
fetchApi9 = "Sabemos que, en la mayoría de los lenguajes de programación se puede crear esta estructura muy fácilmente \
Sabemos que no lo hemos visto en ningún lado; pero, lo estamos creando en este archivo llamado empleados.json; Entonces, \
este archivo sería la parte que simula una DB. Vamos a crear este archivo.";
console.log(fetchApi9);
fetchApi10 = "Excelente, después de haber creado nuestro archivo empleados.json procedemos aquí en este mismo archivo \
una función (function) que se llame obtenerEmpleados() con sus respectivas llaves o corchetes {} al final de estas llaves \
vamos a llamar esa función obtenerEmpleados() Dentro de nuestras llaves utilizaremos un fetch y esta va a ser nuestra \
función que nos va a permitir realizar el fetch API; debido a que, es una función que ya existe en JavaScript. Esta toma \
el valor de una URL; por lo tanto, si tuvieramos alguna API de Google sería algo así como: https://www.googl.com/api \
etc. (es un ejemplo). Pero, podemos insertar un archivo como el que acabamos de crear.";
console.log(fetchApi10);
fetchApi11 = "Excelente, después de haber creado nuestro archivo empleados.json procedemos aquí en este mismo archivo \
una función (function) que se llame obtenerEmpleados() con sus respectivas llaves o corchetes {} al final de estas llaves \
vamos a llamar esa función obtenerEmpleados() Dentro de nuestras llaves utilizaremos un fetch y esta va a ser nuestra \
función que nos va a permitir realizar el fetch API; debido a que, es una función que ya existe en JavaScript. Esta toma \
el valor de una URL; por lo tanto, si tuvieramos alguna API de Google sería algo así como: https://www.googl.com/api \
etc. (es un ejemplo). Pero, podemos insertar un archivo como el que acabamos de crear.";
console.log(fetchApi11);
fetchApi12 = "Bién, seguimos escribiendo const archivo = 'empleados.json' También en lugar de archivo puede ir una URL \
entonces, la verdad no es relevante. Mientras sigamos con las buenas prácticas de nombres; posterior a esta línea \
escribimos un fetch y dentro de sus paréntesis vamos archivo; o sea que, estamos llamando a nuestra variable archivo que \
tiene a los empleados.json. Recordemos que, tenemos una sintaxis que es un punto then (.then) entonces, vamos a tener un \
resultado y vamos a utilizar dentro de los paréntesis del .then(resultado =>)  con un arrow function, abrimos llaves y \
dentro de estas escribimos un console.log(resultado) con el objetivo de ver que es lo que estamos obteniendo. Vamos a \
hacer toda esta teoría en nuestro código.";
console.log(fetchApi12);
// function obtenerEmpleados(params) {
//     const archivo = 'empleados.json';
//     fetch(archivo)
//         .then(resultado => {
//             console.log(resultado);
//         })
// }
// obtenerEmpleados();
fetchApi13 = "Después de haber guardado cambios nos aparece en consola un response y obtenemos una respuesta siendo la \
que nos genera fetch API y nos manifiesta que todo está Ok. Podemos ver una información relevante para nosotros como el \
status: 200; que usualmente quiere decir que, la conexión a un servidor fue correcta. Sí a nuestro archivo json lo \
llamaramos por ejemplo empleados2.json muy seguramente nos aparece el status: 404 o sea que no lo encontró ese servidor \
sin embargo, sno nos aparecen los datos por ningún lado; algo importante de tener en cuenta es que, el resultado que \
obtuvimos si es el correcto; pero, tenemos que reformar el resultado y decirle esta respuesta es json o texto. Para \
este caso es json y en otros casos puede ser texto.";
console.log(fetchApi13);
fetchApi14 = "Para solucionar esta falta de información debemos escribir ne la línea siguiente del fetch y dentro de las \
llave {return resultado.json} Esto, nos obliga a crear un segundo punto; al final del paréntesis del .them escribimos \
otro fetch(datos => {console.log(datos)}) con este segundo fetch estamos haciendo es utilizar el fetch de archivo y le \
decimos: el resultado va a ser un json y lo va a retornar el .then datos; y entonces, sí accedemos a los datos; es como \
decir qué tipo de respuesta es esa? es un json o es un texto? Pero, nos sirve para verificar que la conexión fue correcta.";
console.log(fetchApi14);
fetchApi15 = "Un aspecto a tener en cuentas es que json es como un lenguaje estándar de todo el open source en su mayoría. \
Claro que hay otro lenguaje que es muy similar llamado XML. Este se utiliza más del lado empresarial y no se puede \
aplicar con el fetch API. Al menos no de forma nativa como una librería extra. Vamos a editar nuestro código.";
console.log(fetchApi15);
// function obtenerEmpleados(params) {
//     const archivo = 'empleados.json';
//     fetch(archivo)
//         .then(resultado => {
//             return resultado.json();
//         })
//         .then(datos => {
//             console.log(datos);
//         })
// }
// obtenerEmpleados();
fetchApi16 = "Posteriormente, al guardar los cambios, nos arroja la información pertinente de nuestra DB (simulada) de \
empleados y este viene como una array; sí en el lugar de json le hubiéramos escrito texto podemos obervar el archivo \
empleados en forma de texto (esto es en la línea del return resultado). Como es json y este es un lenguaje de JavaScript \
este lo comprende y dice bueno esta es una sintaxis igual a mis objetos y les voy a dar el tratamiento correspondiente \
como si fueran objetos.";
console.log(fetchApi16);
fetchApi17 = "Recordemos que, estamos utilizando un arrow function; por lo tanto las llaves la podemos obviar cuando \
solamente es una línea de código y el return se da pro implicito. Así que, podemos ver que el llamado va a ser más corto.\
Hagámoslo en el respectivo código. Al guardar los los cambios no hubo cambio alguno.";
console.log(fetchApi17);
// function obtenerEmpleados(params) {
//     const archivo = 'empleados.json';
//     fetch(archivo)
//         .then(resultado => resultado.json())
//         .then(datos => {
//             console.log(datos);
//         })
// }
// obtenerEmpleados();
fetchApi18 = "hasta el momento el código se ha comportado excelentemente bién; sabemos que, estabamos simulando una DB \
y de esta forma estaríamos extrayendo la información pertinente y es para eso la utilidad de fetch API este se presenta \
más sencillo que XMLHttpRequest siendo esta la versión anterior. A la altura de este punto, podemos también editar en la \
línea del segundo .then y exactamente en el console.log(datos.empleados) y nos estaría permitiendo acceder a los \
elementos del array. Procedamos.";
console.log(fetchApi18);
// function obtenerEmpleados(params) {
//     const archivo = 'empleados.json';
//     fetch(archivo)
//         .then(resultado => resultado.json())
//         .then(datos => {
//             console.log(datos.empleados);
//         })
// }
// obtenerEmpleados();
fetchApi19 = "Otra parte del código que podemos editar es: dentro del segundo (2º) .then(datos) es colocar un const \
dentro de sus llaves escribimos {empleados} y así creamos una sola variable en un solo paso; pero debemos de eliminar o \
comentar el console.log(datos.empleados); en la siguiente línea escribimos console.log(empleados). Vamos a ello.";
console.log(fetchApi19);
// function obtenerEmpleados(params) {
//     const archivo = 'empleados.json';
//     fetch(archivo)
//         .then(resultado => resultado.json())
//         .then(datos => {
//             const { empleados } = datos;
//             console.log(empleados);
//         })
// }
// obtenerEmpleados();
fetchApi20 = "Después de guardar cambios observamos que no hubo cambios; Nuevamente, tenemos un array o sea que, vimos \
en anteriores lecciones las diferentes formas de iterar con este; la más común es un forEach y punto map (.map); con\
estos nos permite iterar sobre un array existente. Comentemos el console.log del segundo .then o eliminémoslo; seguido \
escribimos a empleados que es el nombre del array existente. Nuestro código quedaría de la siguiente manera: empleados.\
forEach(empleado => {console.log(empleado)}) guardamos cambios y veamos que sucede en consola; pero claro editemos \
nuestro código. ";
console.log(fetchApi20);
// function obtenerEmpleados(params) {
//     const archivo = 'empleados.json';
//     fetch(archivo)
//         .then(resultado => resultado.json())
//         .then(datos => {
//             const { empleados } = datos;
//             empleados.forEach(empleado => {
//                 console.log(empleado);
//             });
//         })
// }
// obtenerEmpleados();
fetchApi21 = "Analizando la información que nos aparece en consola el array y se nota que esta llega de forma individual \
los objetos; ya desde este punto o desde la última línea que editaramos console.log(empleado) podemos copiar y pegar para \
que nos muestre por ejemplo el id, el nombre o el puesto; verifiquemos primero en nuestro código esta teoría.";
console.log(fetchApi21);
// function obtenerEmpleados(params) {
//     const archivo = 'empleados.json';
//     fetch(archivo)
//         .then(resultado => resultado.json())
//         .then(datos => {
//             const { empleados } = datos;
//             empleados.forEach(empleado => {
//                 console.log(empleado.nombre);
//                 console.log(empleado.id);
//                 console.log(empleado.puesto);
//             });
//         })
// }
// obtenerEmpleados();
fetchApi22 = "Podemos ver que la información es la misma que tenemos en nuestro archivo empleados.json; nos trae los \
valores correspondientes; ahora, sí quisieramos verlo en el HTML aunque no lo hemos visto podemos hacerlo de la \
siguiente manera: en la línea siguiente al console.log(empleado.puesto) hacemos una sencilla instrucción con el DOM \
entonces nuestra línea sería la siguiente: document.querySelector('.contenido').textContent += empleado.nombre; \
hagámoslo en el código y guardemos cambios.";
console.log(fetchApi22);
// function obtenerEmpleados(params) {
//     const archivo = 'empleados.json';
//     fetch(archivo)
//         .then(resultado => resultado.json())
//         .then(datos => {
//             const { empleados } = datos;
//             empleados.forEach(empleado => {
//                 console.log(empleado.nombre);
//                 console.log(empleado.id);
//                 console.log(empleado.puesto);
//                 document.querySelector('.contenido').textContent += empleado.nombre;
//             });
//         })
// }
// obtenerEmpleados();
fetchApi23 = "Nuevamente, el ejemplo sale perfecto; pero este tema lo estaremos viendo un poco más adelante; vamos a \
comentar o a eliminar todo el fetch para demostrar otro ejemplo; en la primera línea y antes de function colocamos un \
async; creamos otro const llamado resultado lo igualamos a await fetch y dentro de los paréntesis escribimos archivo \
seguido de un console.log(resultado); nuestra línea quedaría de la siguiente manera: const resultado = await \
fetch(archivo); const datos = await resultado.json(); console.log(datos); guardamos cambios y observemos que sucede en \
la consola. ";
console.log(fetchApi23);
async function obtenerEmpleados(params) {
    const archivo = 'empleados.json';
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();
fetchApi23 = "Es excelente hasta el momento el comportamiento de nuestro código; Es de anotar que con await es un poco \
corto que el fetch; reiteremos que hasta el momento no lo es un todo sobre el tema de JavaScript, sino que se trata de \
unas apreciaciones muy respetuosas de mi parte como aprendiz; vimos algo de como crear variable, funciones, estructuras \
control, métodos para arrays como para objetos, los famosos Promises y los async await entre otras muchas estructuras \
básicas de JavaScript: de otra parte un agradecimiento muy honesto y respetuoso al señor instructor JUAN DE LA TORRE; \
por sus acertadas orientaciones durante sus tutoriales.";
console.log(fetchApi23);
fetchApi24 = "De otra parte quiero dar un agradecimiento muy especial a UDEMY por las facilidades en la consecución de \
los vídeos éxitosos del curso de HTML, CSS, JavaScript. La labor que llevan hasta el momento es excelente; por último \
y lo más importante creo es agradecer a DIOS por permitirme seguir avanzando en más conocimientos de programación y \
por ender crecer como persona.";
console.log(fetchApi24);