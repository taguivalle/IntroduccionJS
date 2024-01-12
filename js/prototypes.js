// This is lesson one hundred thirty five (135) and it will called prototypes
let prototypes, prototypes1, prototypes2, prototypes3, prototypes4, prototypes5, prototypes6, prototypes7, prototypes8;
prototypes = "En la anterior lección ciento treinta y cinco (135) creamos un par de objetos llamado Monitor de 49'' \
pulgadas y otro llamado Laptop; los valores son diferentes; pero las propiedades son las mismas, pudimos observar que \
ambos tienen nombre como un precio; vamos a suponer que queremos crear una función que le dé formato al producto y \
también le agregue el precio. Para esto, vamos atraer el ejemplo mencionado en la anterior lección.";
console.log(prototypes);
// Object Literal
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const producto = new Producto('Monitor curvo de 49"', 800);
const producto1 = new Producto('Laptop de 18"', 5000);
console.log(producto);
console.log(producto1);
prototypes1 = "Bueno, vamos a agregarle como función (function) llamado formatearProducto con sus respectivas llaves \
con un return y vamos a colocar un mensaje en un template string. Y para poder formatear este producto tendríamos que \
pasarle o el producto completo o el producto y precio por separado; para iniciar vamos a pasarle el producto completo. \
No olvidemos que le vamos a agregar un return dentro de las llaves de la función formatearProducto con un mensaje dentro \
del mismo template; Vamos a ello. recordemos que nuestro editor de texto nos ayuda en gran parte con este código.";
console.log(prototypes1);
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const producto2 = new Producto('Monitor curvo de 49"', 800);
const producto3 = new Producto('Laptop de 18"', 5000);
function formatearProducto(producto) {
    return `el producto ${producto} tiene un precio de $${precio}`;
}
console.log(producto2);
console.log(producto3);
prototypes2 = "Bién hasta el momento no ha pasado nada raro; Se creó una función que solamente toma el objeto producto y \
lo formatea un vez; digamos, el nombre y el precio con un string o con un poco más de texto (para eso es el template \
string) y cómo lo vamos a utilizar? en la parte de abajo le colocamos o escribimos un console.log porque,esto solamente \
nos va a retornar junto con el formatearProducto y dentro del paréntesis producto; para poder guardar cambios y ver que \
sucede en consola.";
console.log(prototypes2);
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const producto4 = new Producto('Monitor curvo de 49"', 800);
const producto5 = new Producto('Laptop de 18"', 5000);
function formatearProducto(producto) {
    return `el producto ${producto.nombre} tiene un precio de $ ${producto.precio}`;
}
console.log(producto4);
console.log(producto5);
console.log(formatearProducto(producto4));
console.log(formatearProducto(producto5));
prototypes3 = "Y funcionó como lo esperabamos; pero, esto en realidad tiene un pequeño inconveniente, y es que nos va a \
llevar a crear muchas funciones; es decir, porqué? pués porque al momento de crear un segundo objeto que se llame por \
ejemplo cliente y que tenga un nombre y apellido; y vamos a instanciar ese cliente con un nuevo cliente en donde toma \
ese nombre y apellido; al colocarle el console.log normal y lo vemos en consola y no hay inconveniente, es problema es \
para formatear el el objeto tipo cliente pués debemos de crear otra función como la que hicimos anteriormente. Vamos a \
probar que sucede.";
console.log(prototypes3);
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
function Cliente(nombres, apellidos, cedula) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.cedula = cedula;
}
const producto6 = new Producto('Monitor curvo de 49"', 800);
const producto7 = new Producto('Laptop de 18"', 5000);
const cliente = new Cliente('Gustavo', 'Vallejo', 110157849);
function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de $ ${producto.precio}`;
}
function formatearCliente(cliente) {
    return `El usuario ${cliente.nombres} con los apellidos ${cliente.apellidos} tiene una cédula ${cliente.cedula}`;
}
console.log(producto6);
console.log(producto7);
console.log(cliente);
console.log(formatearProducto(producto6));
console.log(formatearProducto(producto7));
console.log(formatearCliente(cliente));
prototypes4 = "Como observamos tuvimos que crear otra función para que nos mostrara las información del cliente; pero, \
cuando se termina de crear una función y otra función y así sucesivamente; después resulta que otra persona u otro \
programador que no estuvo al inicio del proyecto no sabe ni entiende que esas funciones existían y puede este crear \
algunas otras más funciones y dice bueno, es que yo no sabía ques esas funciones existían; Sabemos que ha pasado \
muchas veces.";
console.log(prototypes4);
prototypes5 = "Entonces, esto se va a solucionar con algo llamado prototype; esta función va a estar asociada a un tipo \
de objeto, es decir, este objeto producto que tenemos en nuestro ejemplo, pueden tener funciones que solamente pueden \
ser utilizados en ese tipo de objeto cliente. cliente también puede tener sus propias funciones y de esa forma vamos a \
tener un código más organizado. Y esta era la POO en versiones anteriores de JavaScript; objetos de este tipo, funciones \
de este tipo y el prototype que son funciones y sigue siendo así; solamente que agregaron clases y es más sencillo \
crearlos.";
console.log(prototypes5);
prototypes6 = "Parece complicado; pero, no lo es, porque tenemos la función de formatearProducto y no queremos que sea \
utilizada en cliente; porque podemos tener algo como esto, no ponerle aquí, formatearProducto y pasarle el objeto \
cliente en el console.log; Porqué es importante? porque nos va a permitir crear funciones que sólo se utilizan en un \
objeto en específico. con esto vamos a tratar un código más organizado. vamos a copiar la función de formatearProducto \
y la pegamos aquí abajo. este formatearProducto se va a utilizar en los tipos de objeto producto; por lo tanto, vamos a \
poner Producto (Ojo con las letras mayúsculas y minúsculas) punto prototype punto formatearProducto y esto los igualamos \
a function y sigue la función. Pero, vamos a cambiar el nombre de la variable producto por this; recordemos que el this \
hace referencia a los valores del objeto. hagámoslo.";
console.log(prototypes6);
function Cliente(nombres, apellidos, cedula) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.cedula = cedula;
}
function Producto(nombre, precio, color) {
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;

}
// se crean funciones que solo se utilizan en un objeto en específico
Producto.prototype.formatearProducto = function (params) {
    return 'El producto ${this.nombre} tiene un precio de $ ${this.precio} y su color  es: ${this.color}';
}
const producto8 = new Producto('Monitor curvo de 49"', 800, 'Amarillo');
const producto9 = new Producto('Laptop de 18"', 5000, 'Azul');
const cliente1 = new Cliente('Argemiro', 'Pantoja', 933362957);
function formatearCliente(cliente) {
    return `El usuario ${cliente.nombres} con los apellidos ${cliente.apellidos} tiene una cédula ${cliente.cedula}`;
}
console.log(cliente1);

// console.log(formatearCliente(cliente1));

function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de $ ${producto.precio} y su color es ${producto.color}`;
}

console.log(producto8);
console.log(producto9);
// console.log(formatearProducto(producto8));
// console.log(formatearProducto(producto9));
prototypes7 = "Una vez observado el anterior código en consola nos damos de cuenta que todo resultó excelente; gracias \
a Dios; Entonces, esta es una de las ventajas del prototype; Ahora, sí quisieramos formatear cliente tendríamos que \
lo mismo que hicimos con el producto y el prototype pero para cliente. veámoslo.";
console.log(prototypes7);
function Cliente(nombres, apellidos, cedula, edad) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.cedula = cedula;
    this.edad = edad;
}
// se crean funciones que solo se utilizan en un objeto en específico
Cliente.prototype.formatearCliente = function (params) {
    return `El cliente ${this.nombres} tiene los apellidos ${this.apellidos} y su cédula  es: ${this.cedula} con una edad de ${this.edad}`;
}
function Producto(nombre, precio, color) {
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;

}
// se crean funciones que solo se utilizan en un objeto en específico
Producto.prototype.formatearProducto = function (params) {
    return `El producto ${this.nombre} tiene un precio de $ ${this.precio} y su color  es: ${this.color}`;
}
const producto10 = new Producto('Jorobado de notre damn', 800, 'Amarillo');
const producto11 = new Producto('Garcilazo de la vega', 5000, 'Azul');
const cliente2 = new Cliente('Rosa y sela', 'Pantoja', 14197865, '68');
function formatearCliente(cliente) {
    return `El usuario ${this.nombres} con los apellidos ${this.apellidos} tiene una cédula ${this.cedula} y su edad es ${this.edad}`;
}
function formatearProducto(cliente) {
    return `El usuario ${this.nombres} con los apellidos ${this.apellidos} tiene una cédula ${this.cedula} y su edad es ${this.edad}`;
}
console.log(cliente2.formatearCliente());
console.log(producto10.formatearProducto());
console.log(producto11.formatearProducto());
prototypes8 = "Una vez observado el anterior código en consola nos damos de cuenta que todo resultó excelente; gracias \
a Dios; Entonces, esta es una de las ventajas del prototype; Ahora, vimos que también le dimos formato al tipo cliente \
y lo único que hicimos fue copiar el prototype de  producto y cambiamos todos los datos para cliente. Entonces, se vió \
bastante bién en realidad. Aunque, no es tan sencillo esa parte de crear las funciones específicas para un tipo de objeto \
Pero, sí se tiene un poco de experiencia con Programación Orientada a Objetos (POO) esto no se ve como POO; se ve más \
como clases; Así que la siguiente lección one hundred thirty six (136) vamos a ver las clases en JavaScript.";
console.log(prototypes8);
