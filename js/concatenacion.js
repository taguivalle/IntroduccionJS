// CONCATENACIÓN
/* Es basicamente unir dos variables en una sola;  */
let nombre, nombre1, email, nombre2, email1, nombre3, nombre4, nombre5, nombre6, template, template1, template2;
nombre = "Como se aprecia en la siguiente línea las dos variables juan y correo@hotmail.com se ven en dos líneas";
nombre1 = "juan";
email = "correo@hotmail.com";
// Estas dos anteriores variables las vamos a enviar a la consola
console.log(nombre);
console.log(nombre1);
console.log(email);
nombre2 = "Ahora como hacemos para ver las dos variables en una sola línea? para eso es importante la concatenación; para \
esto vamos a utilizar el signo más (+) dos veces; recordemos que en números sirve para sumar; pero, en strings sirve para \
concatenar; entonces:";
nombre3 = (nombre1 + " " + email)
console.log(nombre1);
console.log(nombre2);
console.log(nombre3);
nombre4 = "Por esto es la importancia de concatenar, sí se está trabajando con una base de datos; estos vienen separados \
uno de otros y la concatenación es donde cobra importancia.";
console.log(nombre4);
console.log(nombre3);
nombre5 = "Pero, lo curioso es cuando se escribe algo antes de la variable en la instrucción console.log;luego se \
concatena y luego un espacio; aunque ésta era la forma antigua de hacerlo.";
console.log(nombre5);
console.log("Nombre del cliente: " + nombre1 + " y su E-mail es: " + email);
nombre6 = "hoy en día en lugar de los signos más (+) se utiliza una coma y podemos ver que el resultado es el mismo.";
console.log(nombre6);
console.log("Nombre del cliente: ", nombre1, " y su E-mail es: ", email);
template = "Después en JavaScript salieron lo que se conoce como TEMPLATE STRINGS, pareciera algo así como templado, que \
es así como algo que puedo reutilizar múltiples veces, es como una plantilla; talvez este sea lo malo de ese nombre \
porque no se le puede quitar de la cabeza que tiene que ser como una plantilla; pero, básicamente, un Template String es \
aunque también se les conoce  como String literal y viene a ser el sustituto más claro  que la anterior sintaxis del \
signo más (+) y/o de la coma (,)";
console.log(template);
template1 = "Entonces, se utiliza las comillas sencillas (Inclinadas hacia atrás) para reemplazarlos; Ojo que, no es un \
acento, En algunos teclados se encuentra en la posición del signo de interrogación; para este ejemplo o mejor dicho, para \
utlizar el template string se deben de utilizar obligatoriamente esta clase de comillas. Ahora procedemos a realizar el \
ejemplo con la anterior estructura que traemos hasta aquí.";
console.log(template1);
console.log(`Nombre del cliente: ${nombre1}, E-mail: ${email}`);
template2 = "Observemos, que le estamos diciendo a la consola que tome la primera parte como un string, posteriormente \
con el signo pesos $ le decimos que esto es una variable y esta se encuentra encerrada en corchertes; y así sucecivamente \
pero teniendo en cuenta que debe de estar encerradas en las comillas sencillas inclinadas. para más comprensión: \
`Nombre del cliente: ${nombre1}, E-mail: ${email}`";
console.log(template2);
console.log(`Nombre del cliente: ${nombre1}, E-mail: ${email}`);



