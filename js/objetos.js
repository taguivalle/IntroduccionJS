// OBJETOS:
let objects, objects1, objects2, objects3;
objects = "Los objetos son sin duda alguna una de las partes más importantes de JavaScript, es lo que más se utiliza. \
este tema se debe de dominar muy bién para lograr comprender lo que es JavaScript. por ejemplo, tenemos tres constantes \
una con nombreProducto = Monitor 20 pulgadas, otra con precio = 300 y otra con disponible = true";
console.log(objects);
const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = "true";
console.log(nombreProducto);
console.log(precio);
console.log(disponible);
objects1 = "Gracias a un objeto se puede pasar de crear tres variables a crear una sola que contenga estos tres valores \
entonces, es como crear una sola variable que contenga los tres al mismo tiempo. digitamos, const = producto = {nombre\
Producto //Esta parte se le conoce como propiedad o llave del objeto, y continuamos con los datos que trae las constantes \
anteriormente escritas. }";
console.log(objects1);
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}
console.log(producto);

objects2 = "Ahora, como podemos acceder al precio del producto; bueno, en JavaScript y en los objetos existe algo \
llamado la sintaxis de punto y por ejemplo, sí lo escribimos console.log(producto. nos sugestiona que propiedades) \
tiene ese objeto y simplemente seleccionamos el precio.";
console.log(objects2);
console.log(producto.precio);
console.log(producto.disponible);
console.log(producto.nombreProducto);

objects3 = "Existe otra forma de que no es utilizando la sintaxis de punto aunque no es tan común, pero es importante \
tenerla en cuenta. Entonces, escribimos console.log(aquí utilizamos el nombre de la variable; pero en lugar de un punto \
se utiliza corchetes [] ) Después, para acceder a la propiedad que quieras acceder tiene que colocar esas comillas \
sencillas o comillas dobles y el nombre de la propiedad por ejemplo precio o la que necesites llamar. Y en la consola \
debe de aparecer para este caso 300.";
console.log(objects3);
console.log(producto['precio']);
