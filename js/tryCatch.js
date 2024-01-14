// In this lesson one hundred thirty eight (138)We will discuss the issue of Try catch
let tryCatch, tryCatch1, tryCatch2, tryCatch3, tryCatch4, tryCatch5;
tryCatch = "En esta lección Trataremos sobre el tema de Try catch; con esto en mente, podemos iniciar de la siguiente \
manera; En JavaScript notamos que si tenemos un error en el código, ya nada funciona; podemos crear mil (1000) líneas de \
código; pero, sí existe un error el más mínimo error y ano funciona. sí por ejemplo, escribimos dos variables de est \
forma: const numero1m = 20, en la siguiente línea const numero3 = 30 y si las queremos ver en consola pués escribimos \
console.log(numero1), en la siguiente línea console.log(numero2) y la siguiente línea escribimos otro console.log(numero3)\
muy seguramente después de guardar cambios en la consola nos aparece el error de que console.lo(numero2) no se encuentra.\
Y por lo tanto el numero3 nunca se va a ejecutar.";
console.log(tryCatch);
tryCatch1 = "El anterior error se puede solucionar con el Tray Catch; El código sigue funcionando; pero, también va a \
tener un mensaje de error que te va a decir en dónde exactamente se encuentra este. La sintaxis es la siguiente: vamos a \
colocar el trycatch (Nuestro editor de texto nos ayuda con el autocompletado) y este trycatch lo que hace o lo que quiere \
decir es, intenta hacer lo siguiente: en caso de que haya un error dime cuál es el error y en dónde se encuentra. \
usualmente se coloca un console.log(error) para poder verlo en consola.";
console.log(tryCatch1);
tryCatch2 = "Pero, que es lo que vamos a intentar encontrar? para este caso vamos a intentar encotrar solo numero2. Y \
podemos ver que esto va a imprimir en consola el cifra 20, la referencia del error es numero2 que no está definido y \
en la siguiente línea nos arroja la cifra 30; es decir, el código se ejecuta completamente; existe un error, pués hay \
un error en catch; pero se continúa ejecutando. Ahora, algo muy importante tray catch, va a ser una prueba de errores \
pero no por eso significa que todo nuestro código debe de estar dentro de try catch. Solamente se utiliza en situaciones \
muy específicas y que sean de importancia para nuestro código. Por ejemplo, si un usuario pudo o no iniciar sesión sí una \
conexión a una base de datos (DB) se pudo realizar.";
console.log(tryCatch2);
tryCatch3 = "Pero, que es lo que vamos a intentar encontrar? para este caso vamos a intentar encotrar solo numero2. Y \
podemos ver que esto va a imprimir en consola el cifra 20, la referencia del error es numero2 que no está definido y \
en la siguiente línea nos arroja la cifra 30; es decir, el código se ejecuta completamente; existe un error, pués hay \
un error en catch; pero se continúa ejecutando. Ahora, algo muy importante tray catch, va a ser una prueba de errores \
pero no por eso significa que todo nuestro código debe de estar dentro de try catch.";
console.log(tryCatch3);
tryCatch4 = "Entonces, solamente se utiliza en situaciones muy específicas y que sean de importancia para nuestro código. \
Por ejemplo, si un usuario pudo o no iniciar sesión sí una conexión a una base de datos (DB) se pudo realizar; o si un \
pago se pudo completar o no. no debemos de utilizar en todo momento un try catch, solamente dónde se crítico o no deje \
de funcionar el código; pero, que también tengamos la información. Vamos a escribir toda esta teoría en aquí mismo; como \
es el común de las lecciones.";
console.log(tryCatch4);
const numero1 = 20;
const numero3 = 30;
console.log(numero1);
try {
    console.log(numero2);
} catch (error) {
    console.log(error);
}
console.log(numero3);
tryCatch5 = "Bién, recordemos entonces que, tray nos va a traer esa parte que va a intentar hacer algo y sino puede va a \
llegar al catch para poder leer el error; por lo que va a realizar una prueba de errores. en la siguiente lección ones \
hundred thirty nine (139) Llamada Promises en JavaScript; así que vamos.";
console.log(tryCatch5);