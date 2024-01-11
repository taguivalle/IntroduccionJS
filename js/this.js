// this is lesson one hundred thirty three (133) call this.
window.nombre = "Un nombre"; // esto es para una ventana global.
window.total = "Un pago"; // esto es para una ventana global.

let this1, this2, this3, this4, this5, this6, this7, this8, this9, this10, this11, this12, this13;
this1 = "en esta lección ones hundred thirty three (133) llamada this; siendo esta una palabra reservada; esto significa \
que no podemos crear una función o una variable que se llame de esta forma; En lo común hemos estado creando algunos \
objetos de la siguiente forma: const y su respectiva variable para este caso la llamaremos reservación y le asignaremos \
unas llaves ({}) recordemos que estas son signifcativas de que son un objeto; entonces, vamos a escribir nuestro nombre \
con el apellido un valor total y pagado que sea false; nuevamente recordemos que, hemos estado creando algunos objetos de \
esta forma, a esto se le conoce como el lobby literal y vimos anteriormente que sí ponemos por ejemplo, un console.log, \
el nombre del objeto que es reservación y queremos acceder a cualquiera de estas propiedades, utilizaremos la sintaxis \
de punto; es decir punto nombre, si guardamos cambios esto debe de imprimir los nombres en consola.";
console.log(this1);
const reservacion = {
    nombre: 'Hector Gustavo',
    apellidos: 'Vallejo Espinosa',
    total: 5000,
    pagado: false
}
console.log(reservacion.nombre);
this2 = "Excelente, como pudimos observar en consola, nuestro ejemplo salió de maravillas. Los objetos también pueden \
tener funciones, por lo tanto al final de pagado vamos a colocar información que sería la llave de esta propiedad. y \
a esta le vamos asignar function con sus respectivos paréntesis y llaves; Entonces, podemos ver que este objeto va a \
tener un string, va a tener números, pero, también va a tener booleanos y va a tener una función. Ahora, queremos que, \
nos imprima información de esta  reservación, es decir, el nombre, el apellido, el total y la cantidad a pagar; \
entonces, en el console punto log vamos a colocarle un template string con las comillas inclinadas e invertidas, que \
diga por ejemplo, el cliente que diga su nombre y su cantidad a pagar es de precio; vamos a hacerlo en el código.";
console.log(this2);
const reservacion1 = {
    nombre: 'Hector Gustavo',
    apellidos: 'Vallejo Espinosa',
    total: 5000,
    pagado: false,
    informacion: function (params) {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}
console.log(reservacion1.informacion());
this3 = "Nuevamente, en consola nuestro ejemplo salió perfecto. pero nos dice que el nombre es undefined; pero, sì está \
definido porqué se encuentra dentro del objeto, por lo tanto esta función (function) no lo puede encontrar; es como si \
buscaramos fuera del objeto reservacion1 una variable llamada nombre; pero, cómo podemos hacer referencia hacia los \
valores del mismo objeto?";
console.log(this3)
this4 = "Existen dos formas de hacerlo; una vez que le pongamos la sintaxis de punto que vimos previamente en reservación \
punto nombre y reservación punto total; esto ya nos debe de imprimir cierta información que requerimos; hagámoslo en \
nuestro código";
console.log(this4)
const reservacion2 = {
    nombre: 'Hector Gustavo',
    apellidos: 'Vallejo Espinosa',
    total: 5000,
    pagado: false,
    informacion: function (params) {
        console.log(`El cliente ${reservacion1.nombre} reservó y su cantidad a pagar es de ${reservacion1.total}`);
    }
}
reservacion2.informacion();
this5 = "Observamos en consola que efectivamente si imprimió la información requerida; como nota adicional le quitamos \
el console.log con sus respectivos paréntesis y nos arroja el mismo resultado sin el undefined. Esta acción la hace \
porque estamos accediendo al mismo objeto. El problema de esto es que si crearamos un segundo objeto debemos de cambiar \
este; como le hemos venido haciendo en el transcurso de las lecciones; también es de anotar que nuestro editor de \
código no nos deja pasar porqué nos marca el error instantáneamente; pero podemos cambiarlo por la palabra reservada \
this y miremos que cambios nos trae en consola.";
console.log(this5);
const reservacion3 = {
    nombre: 'Hector Gustavo',
    apellidos: 'Vallejo Espinosa',
    total: 5000,
    pagado: false,
    informacion: function (params) {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}
reservacion3.informacion();
this5 = "Es evidente que el resultado es el mismo. Pero, qué significa this? Bueno, este this en contexto va a hacer \
referencia al objeto sobre el cual se está mandando llamar esta función (function) Vamos a cambiar los nombres del \
cliente; pero, también debemos de agregar al final una reservación (return: console.log); veamos que nos trae.";
console.log(this5);
const reservacion4 = {
    nombre: 'Walter Gustavo',
    apellidos: 'Cruz Espinosa',
    total: 5000,
    pagado: false,
    informacion: function (params) {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}
reservacion4.informacion();
reservacion3.informacion();
this6 = "Analizando el anterior ejemplo notamos que solamente trajimos la reservación3 (un return) y cambiamos nuestros \
nombres por uno cualquiera y la información y en consola nos imprime que el cliente Walter gustavo también reservó; \
entonces, this hace referencia al mismo objeto, a los mismos valores del objeto que se está llamando en esta función \
(function) Eso es algo muy importante; para, no estar escribiendo el nombre de la variable podemos hacer uso del this.";
console.log(this6);
this7 = "Otro aspecto muy importante a tener en cuenta es debemos de utilizar el function de esa forma como la venimos \
utilizando en los ejemplos de esta lección. Ahora, como hemos hecho otros ejercicios en otras lecciones podemos utilizar \
el arrow function (=>) pero, no va a marcar un error de undefined; hagámoslo en nuestro código. ";
console.log(this7);
const reservacion5 = {
    nombre: 'Walter Gustavo',
    apellidos: 'Cruz Espinosa',
    total: 5000,
    pagado: false,
    informacion: (params) => {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}
reservacion5.informacion();
reservacion4.informacion();
this8 = "Como se dijo en la anterior parte nos aparece un undefined y esto pasa porqué el arrow function no va a hacer \
referencia a lo que está en el mismo objeto, sino que más bién va a hacer referencia a la ventana global o window; veamos \
un ejemplo sí después de la línea informacion: () {agregamos otro console punto log pero con un this} veamos que sucede. \
por lo general nos arrojaría windows en color rojo como de error.";
console.log(this8);
const reservacion6 = {
    nombre: 'Walter Gustavo',
    apellidos: 'Cruz Espinosa',
    total: 5000,
    pagado: false,
    informacion: (params) => {
        console.log(this);
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}
reservacion6.informacion();
reservacion4.informacion();
this9 = "Nos arroja en consola una descripción de windows muy extensa que no es propia para este caso tenerla en cuenta; \
per, para que esto funcione tendríamos que agregar esa variable a la ventana global con windows punto nombre junto con \
un mensaje por ejemplo, Un nombre con el total a pagar; no olvidemos que global debe de estar en las primeras líneas del \
código. veamoslo.";
console.log(this9);
this10 = "Entonces, el arrow function nos hace referencia hacia la ventana global, mientras que, el function nos va a \
hacer referencia al objeto sobre el cual se está ejecutando, se está mandando llamar esa función. algo muy importante que \
agregar sobre esta lección es que function con la sintaxis que trae con la ayuda de nuestro editor de texto, es que hace \
referencia a las propiedades del objeto sobre el cual se está ejecutando esta función; con lo anterior nos servirá para la \
siguiente lección one hundred thirty four que va a tratar de la Programación Orientada a Objetos (POO) en JavaScript \
siendo este un tema muy excelente de aprender.";
console.log(this10);
