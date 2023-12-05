// Join two objects
let joinTwoObjects, joinTwoObjects1, joinTwoObjects2, joinTwoObjects3, joinTwoObjects4;
joinTwoObjects = "Algo muy importante a tener en cuenta es que cuando se unen dos objetos, lo ideal es no modificar \
ninguno de los dos. Supongamos que tenemos un objetos para la variable producto, por ejemplo, con las medidas, que \
ponemos peso va a ser igual a un kilogramo y le ponemos medida igual a un metro.";
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}
const medidas = {
    peso: '1 Kg.',
    medidas: '1 m.'
}
console.log(joinTwoObjects);
console.log(producto);
console.log(medidas);
joinTwoObjects1 = "Entonces, cómo podríamos unir esos dos objetos? la buena práctica o la recomendación que existe hoy \
en día es no modificar los datos originales. Para ello en JavaScript se agregó o se tiene lo que se conoce como un rest \
operator; por lo tanto vamos a crear una variable que la llamaremos nuevoProducto y escribimos la sintaxis de un nuevo \
objeto. Después, utilizamos el rest operator que consta de tres puntos suspensivos seguido del objeto. Y sí queremos \
llamar el otro producto le colocamos una coma y escribimos la variable medidas; para este caso. Veamoslo en consola.";
console.log(joinTwoObjects1);
const nuevoProducto = { ...producto, ...medidas };
console.log(producto);
console.log(nuevoProducto);
joinTwoObjects2 = "Observemos que producto tiene las propiedades normales que tiene desde un principio, mientras que, \
la variable nuevoProducto va a adquirir todas las propiedades de las dos variables. Entonces estamos uniendo dos objetos \
pero no estamos modificando ninguno de los dos originales. y el resto va a ser muy útil para objetos como para arreglos, \
ya que de nuevo hoy en día la práctica nso dice; que no debemos modificar ni mutar los datos originales.";
console.log(joinTwoObjects2);

joinTwoObjects3 = "Entonces, freeze no te va a permitir agregarle más propiedades y tampoco permite que el objeto sea \
modificado. O sea que, sí guardamos cambios podemos observar que ya no aparece la propiedad imagen.";
console.log(joinTwoObjects3);
Object.freeze(producto);
