/* funciones que retornan valores. */
let returnValues, returnValues1, returnValues2, returnValues3, returnValues4, returnValues5, returnValues6, returnValues7,
    returnValues8, returnValues9, returnValues10;
returnValues = "FUNCTIONS THAT RETURN VALUES";
console.log(returnValues);
returnValues1 = "Hasta el momento, hemos estado definiendo algunas funciones que dentro de su cuerpo realizan lo que \
queremos que hagan. Es decir, son muy sencillas, en esta lección estaremos agregando más complejidad conform vayamos \
avanzando; pero, a veces se quiere tener funciones que nos retornen un valor para después procesarlo o hacer algo más \
con estos valores. Entonces vamos a crear una función muy similar a la que vimos anteriormente. y en lugar de colocar \
console.log vamos a utilizar el return.";
console.log(returnValues1);
/* Dentro de los paréntesis van los parámetros. */
function sumar(n1, n2) {/* Esto parámetros actúan como variable dentro de la función. */
    return n1 + n2;
}
returnValues2 = "Entonces, lo que va a hacer esta función es que en lugar de mostrar el resultado aquí lo va es a \
retornar. Pero, cómo se va a utilizar esta función? bueno, primero vamos a mandarla a llamar de esta forma: con sumar \
dos más tres (2 + 3); Pero como le estamos dando retornar podemos ver en consola no va a imprimir nada; entonces, \
tenemos que crear otra variable y que el resultado sea igual a sumar.";
console.log(returnValues2)
/* Dentro de los paréntesis van argumentos o valores reales. */
const resultado = sumar(2, 3);
returnValues3 = "Con base en lo anterior, lo que hace la función es retornar un valor que al momento de llamarla se \
ejecuta la función, retorna el valor y este valor se asigna así a esta otra variable const resultado. Esto se puede \
analizar que quién contiene el valor y con ella se puede hacer más operaciones o simplemente podemos mostrar mediante \
un console.log resultado y podemos observar que tenemos cinco como resultado de la suma";
console.log(returnValues3);
console.log(resultado);

returnValues4 = "Entonces, esta función ya no realiza la operación dentro del return sino que se asigna a otra variable. \
Veamos un ejemplo un poco más avanzado; Supongamos que tenemos un total a pagar, vamos a colocar un let total e \
igualarlo a cero (0) y por lo tanto vamos a tener una función que la nombraremos carrito; es decir, vamos agregando \
artículos, precios al carrito y este va a tomar un precio y obviamente con el return, después, vamos agregando con la \
expresión más igual (+=) recordemos que esta es la forma de hacer incrementos; por lo tanto, vamos a ir incrementando \
según el precio en el total que tenemos inicialmente. veamos el ejemplo. ";
console.log(returnValues4);
let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}
total = agregarCarrito(200);
console.log(total);
returnValues5 = "Entonces, en nuestra consola nos imprime el total de doscientos (200) y con esto ya estamos agregando \
elementos; supongamos que, lo volvemos a llamar pero el artículo cuesta cuatrocientos (400) y por lógica tenemos \
seiscientos (600)";
console.log(returnValues5);
total = agregarCarrito(400);
console.log(total);

returnValues6 = "Vamos a agregar otro artículo de seiscientos (600) y obtendríamos mildocientos (1200) en total.";
console.log(returnValues6);
total = agregarCarrito(600);
console.log(total);
returnValues7 = "Entonces, simulando un carrito de compras; Total sería conforme vamos agregando elementos al carrito \
podemos obtener una segundo función aquí mismo; para que calcule el impuesto y por lo tanto nuestra función se llamará \
calcular impuesto y los paramétros vamos a llamarlo total o sea el total a pagar sobre ese total vamos a calcular el \
el impuesto. Entonces, nuestro return podría ser de uno punto quince (1.15) multiplicado por el total; veamoslo en \
consola. Y aquí mismo podemos crear una segundo variable const totalAPagar y este va a ser igual a calcularImpuesto; \
por lo tanto, el total es el contenedor de la cantidad a pagar.";
console.log(returnValues7);
function calcularImpuesto(total) {
    return 1.15 * total;
}
total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);
console.log(total);
returnValues8 = "Con base en lo anterior, estamos retornando el valor total y que la estaremos utilizando a futuro, \
esa variable, con ese valor que este caso sería calcular un impuesto que requiere un total a pagar. Entonces podríamos \
colocar un total y por ende on console.log para imprimir en pantalla.";
console.log(returnValues8);
// const totalAPagar = calcularImpuesto(total);
// console.log(totalAPagar);
returnValues9 = "Recordemos que, en lecciones anteriores vimos una forma de agregar texto con variables para qe se vea \
más elegante y para este caso vamos y podríamos agregar total a pagar; veamoslo en consola.";
console.log(returnValues9);
const totalAPagar = calcularImpuesto(total);
console.log(`El total a pagar con impuestos es de : $${totalAPagar}`);
returnValues10 = "En próximas lecciones, estaremos viendo como escribir funciones de este tipo; por ejemplo, cuando se \
válida un formulario y en donde se puede pasar todos los datos de un campo y retornar sí la validación pasó o no pasó. \
con esto se podría hacer algo más; sí pasó entonces envielo al servidor; ahora, sí no pasó entonces imprimir una alerta \
que diga que no se pudo pasar la validación.";
console.log(returnValues10);