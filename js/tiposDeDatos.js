// TIPOS DE DATOS

/* En programación cuando se habla de tipos de datos es cuando se hace referencia al tipo de valor que va a tener esa 
variable; es decir, que cada tipo de datos a la hora de crearse, permite realizar diferentes operaciones; por ejemplo, 
sí se crea un número este puede sumar, restar, multiplicar, dividir y/o hacerle algún otro tipo de operación matemática;
ahora sí es un texto se podrá saber, por ejemplo, la extensión de ese texto. Es por esto y otras cosas más que es 
muy importante conocer el tipo de datos. */

/* Vamos a ver el más común de ellos que este lenguajes se le conoce como string o una cadena de texto; estos representan
un texto que se puede asignar a la variable y existen tres (3) formas de crearlos, de estas algunas son más utilizadas
que otras. Ejemplo: */
const producto = "Monitor de veinte (20) pulgadas";
/* En la anterior línea, estamos diciendo que el producto va a ser un string o una cadena de texto. */
console.log(producto);
console.log(typeof producto);// Este va a ser de tipo string.

/* Existe una segunda forma de crear un string y es utilizando lo que se conoce como un constructor;  es una forma un
poco menos común. */
const producto1 = String('Monitor de treinta (30) Pulgadas');
console.log(producto1);
console.log(typeof producto1);// Este va a ser de tipo string.

/* Existe una tercera forma que es muy similar a la anterior;  que sería con new string. */
const producto2 = new String('Monitor de cuarenta (40) Pulgadas');
console.log(producto2);
console.log(typeof producto2);// Este va a ser de tipo objeto.

/* Ahora cuando en verdad se quiera utilizar las comillas para expresar pulgadas; entonces se escribe uba diagonal
invertida y/o se escribe dentro de comillas sencillas. */
const producto3 = new String("Monitor de cuarenta 40\"");
console.log(producto3);
console.log(typeof producto3);// Este va a ser de tipo objeto.