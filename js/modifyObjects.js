// Modificar objetos
let object, objects, objects1, objects2, objects3, objects4, objects5;
object = "Este tema de hoy sábado 11/18/2023, MODIFICAR OBJETOS, y para este tema en especial vamos a utilizar el \
siguiente código que lo pegamos del archivo objetos.js a manera de explicación. y vamos a tener una sola salida en \
consola para el objeto producto.";
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}
console.log(object);
console.log(producto);

objects = "Podemos observar que al crear este objeto no tiene un nombre de producto, tiene un precio y tiene un valor \
que dice disponible; al expandir en la consola aparecen esos tres valores antes mencionados. Una característica que \
tienen los objetos es que puedes agregar o quitar información de ellos. En ese orden de ideas, escribimos producto punto \
imagen, qué sí recordamos ésta es la forma en la que se accede a un valor; Pero, aquí se puede digamos, ponerle punto \
imagen o una propiedad que no exista y por ende hacerlo igual o asignarle el valor de imagen punto jpg.";
console.log(objects);
producto.imagen = 'imagen.jpg';
console.log(producto);
objects1 = "Podemos ver que, al expandir ese objeto en la consola nos va a crear una propiedad llamada imagen y se le \
asigna una imagen punto jpg del producto; ahora, supongamos que, queremos eliminar el precio, como lo haríamos? \
recordemos que  esta instrucción producto.imagen = 'imagen.jpg' es para agregar nuevas propiedades; y para eliminar \
se utiliza una palabra reservada llamada delete qu enos sirve para eliminar propiedades seguida del nombre del \
objeto y la propiedad que se desea eliminar.";
console.log(objects1);
console.log(producto);
delete producto.imagen;
objects2 = "Observemos en la consola que la propiedad imagen ya se eliminó del objeto producto. Y si se prefiere \
observar todos los ejemplos hechos en esta consola hacia la parte de arriba ya se eliminaron tambien dicha propiedad. \
por lo que este ejemplo se eliminar se puede realizar con cualquier propiedad de un objeto.";
console.log(objects2);
objects3 = "Pero en que caso se utiliza esta sintaxis? Por ejemplo, nodJs es el que te permite crear aplicaciones en el \
servidor con JavaScript, Tal vez haces una consulta a la base de datos, pero, resulta que, no tiene una imagen en ese \
producto; lo que puedes es agregarle una imagen, digamos, fija en caso de que no tenga esa imagen; antes de lanzar y/o \
entregar resultados de la base de datos.";
console.log(objects3);
objects4 = "Ahora en que caso quieres eliminar propiedades? Supongamos que haces una consulta y te traes diez (10) \
tablas diferentes, pero solamente quieres mostrar una o dos en especial, Podrías escribir en la consulta qué tablas \
quieres traerte y/o también podrías eliminarlas antes de que aparezcan en pantalla. Pero, sí no se tiene idea de nada \
de eso, no hay inconvenientes, pués lo estaremos viendo más adelante con más ejemplos reales.";
console.log(objects4);
objects5 = "Lo importante de esta lección es que veas que a un objeto se le puede agregar muchos más valores como \
también quitárselos.";
console.log(objects5);