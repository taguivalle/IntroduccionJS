// This lesson one hundred thirty four (134) Object Constructor And Object Literal
let objectConstructorAndObjectLiterall, objectConstructorAndObjectLiterall1, objectConstructorAndObjectLiterall2,
    objectConstructorAndObjectLiterall3, objectConstructorAndObjectLiterall4, objectConstructorAndObjectLiterall5,
    objectConstructorAndObjectLiterall6, objectConstructorAndObjectLiterall7, objectConstructorAndObjectLiterall8,
    objectConstructorAndObjectLiterall9, objectConstructorAndObjectLiteral20, objectConstructorAndObjectLiteral21,
    objectConstructorAndObjectLiteral22, objectConstructorAndObjectLiteral23, objectConstructorAndObjectLiteral24;
objectConstructorAndObjectLiterall = "En esta lección one hundred thirty four (134) llamada Object Constructor And Object \
Literal y en esta lección estaremos trabajando con lo referente a la Programación Orientada a Objetos (POO) por sus \
siglas; este tema suena bastante complejo ya que ve como algo muy raro; cabe anotar que, no nos vamos a meter tanto en \
los diferentes conceptos y/o terminos que se manejan a menudo en al POO; Sì bién es un lenguaje orientado a objetos \
como Java, C++; entre otros; devido a que estos trabajan con la POO como debe de ser; y JavaScript utiliza algo llamado \
prototipos que previamente hemos estudiado.";
console.log(objectConstructorAndObjectLiterall);
objectConstructorAndObjectLiterall1 = "Recordemos que, previamente hemos estado creando objetos de la siguiente forma: \
const producto = {} y esto ya nos indica que es un objeto; este siguiente código se conoce como object literal; \
básicamente, es cuando colocamos los valores; como nombre, precio, marca, etc. Este ejemplo es muy utilizado; pero, no \
es muy dinámico que digamos. Es un poco estático, pués le estamos pasando los valores y sus propiedades, escritas a mano \
o con código duro; así es como a veces se le dice.";
console.log(objectConstructorAndObjectLiterall1);
// Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 5000,
}
console.log(producto.nombre);
console.log(producto.precio);
objectConstructorAndObjectLiterall2 = "La otra forma es, o se le conoce como Object constructor que lo estaremos viendo en \
en las siguientes lecciones. Este es más dinámico, sin embargo, no es tan común en todos los proyectos, no porque sea más \
dinámico significa que lo vamos a utilizar todo el tiempo o solamente lo vas utilizar donde se requiera; a veces es \
suficiente con un objeto como el ejemplo que acabamos de hacer aquí anteriormente.";
console.log(objectConstructorAndObjectLiterall2);
objectConstructorAndObjectLiterall3 = "El constructor tiene una sintaxis muy similar a una función de hecho inicia con \
function; entonces, tendremos que en cualquier lenguaje de programación orientada a objetos (POO), tendríamos algo como \
class o el nombre de la clase que se desee crear; para este caso se inicia como function. Después se le da un nombre y \
entre las reglas de la programación orientada a objetos (POO) está que el nombre estar escrito en mayúsculas. Ahora \
vamos a crear una clase producto; pero porqué clase sí lo conocemos como algo diferente? Clase es una forma en la vamos \
a poder almacenar la forma; decimos forma como los datos que va a tener un objeto en específico; de por sí clases y \
objetos suena confuso y es el problema de muchos cursos de programación.";
console.log(objectConstructorAndObjectLiterall3);
objectConstructorAndObjectLiterall4 = "Ahora vamos a crear una clase producto; pero porqué clase sí lo conocemos como \
algo diferente? Clase es una forma en la vamos a poder almacenar la forma; decimos forma como los datos que va a tener \
un objeto en específico; de por sí clases y objetos suena confuso y es el problema de muchos cursos de programación. \
un objeto tiene la forma del ejemplo que hemos venido tratando al inicio de esta lección y un objeto tiene diferentes \
variables en una sola; de la misma forma la tendría una clase.";
console.log(objectConstructorAndObjectLiterall4);
objectConstructorAndObjectLiterall5 = "Una clase va a ser el contenedor de toda la forma, de todos los datos, de todos \
los métodos y funciones que va a tener un objeto dentro de este. Anteriormente, habíamos creado un producto en la parte \
de arriba; la forma o los datos que va a tener esta clase sería el nombre y el precio; obviamente, podríamos tener más. \
por ejemplo, sí estuvieramos creando una tienda virtual de lo más seguro es que tengamos imágenes, precio, sí etá \
disponible o no; tamaños, colores, alguna descripción del producto, etc.";
console.log(objectConstructorAndObjectLiterall5);
objectConstructorAndObjectLiterall6 = "Este object constructor debe de tener todos los diferentes valores que van a formar \
parte del objeto. Ahora vamos a utilizar este object constructor y lo vamos a hacer de la siguiente manera: escribimos \
const producto y a este le vamos asignar lo que se conoce como una instancia de clase, que no es una clase en realidad \
es una función; pero, ya en JavaScript de nueva cuenta, esto era la POO; antes le queríamos decir new, es decir, nos crea \
un nuevo producto con su respectivo paréntesis (nuestro editor nos ayuda en gran parte con la estructura) no olvidemos \
eso sí el console.log y vamos a poder ver que tenemos un objeto vacío. hagamos esta teoría con el código.";
console.log(objectConstructorAndObjectLiterall6);
function Producto(params) {

}
const producto1 = new Producto();
console.log(producto1);
objectConstructorAndObjectLiterall7 = "Podemos ver en consola que, es de tipo producto; pero está vacío, esas llaves \
significan que es un objeto; pero, está vacío o sea que no tiene nada; Siguiendo la comparación con en el object literal \
aquí le estamos dando el nombre y le estamos dando un precio; igual que como vimos en las funciones que cuando le pasamos \
el o los argumentos; recordemos que los argumentos son los valores reales. Y también lo podemos hacer en el object \
constructor y lo vamos a hacer dentro de los paréntesis en donde irían los argumentos.";
console.log(objectConstructorAndObjectLiterall7);
objectConstructorAndObjectLiterall8 = "Vamos a hacer un ejemplo con el nombre de producto y va a ser un monitor curvo de \
cuarenta y nueve (49'') pulgadas y luego ponerle un coma y vamos ; No sabemos si existe algo así; pero , le vamos a \
pasar este valor y una vez que se instancíe este valor se pasa hacia adentro de nuestro objeto. de igual manera le vamos \
a pasar en los parametros un nombre de producto y un precio; vamos a hacer esta teoría en nuestro código. Pero, como vamos\
a hacer para guardar esto valores porque si guardamos nos va a arrojar un objeto vacío. Para eso es que vimos this, \
porque este va a hacer referencia a los valores del objeto.";
console.log(objectConstructorAndObjectLiterall8);
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const producto2 = new Producto('Monitor curvo de 49"', 800);
console.log(producto2);
objectConstructorAndObjectLiterall9 = "Esa línea del this.nombre nos hace entender que estamos creando una nueva instancia \
y le estamos dando un nombre Monitor curvo de (49'') a este objeto llamado Producto; ahora esos parámetros que van dentro \
de un objeto y se le asigna dentro del objeto con this.nombre que le estamos pasando; es decir, estamos creando una nueva \
instancia, le estamos dando un nombre al producto (Monitor curvo de 49'', 800) dentro del paréntesis que nos recibe los \
parámetros; ese parámetro se va hacia dentro del objeto (nombre) y se le asigna dentro del mismo con this.nombre. Ahora, \
pudimos ver que nuestro código salió excelente; pués el mensaje en consola salió con el respectivo mensaje.";
console.log(objectConstructorAndObjectLiterall9);
objectConstructorAndObjectLiteral20 = "Una de las ventajas de esta programación orientada a objetos (POO) es que el \
function (actúa como una clase; podemos instanciarlo múltiples veces con diferentes valores) algo que no podemos hacer con \
el object literal (const product ={nombre: 'Tablet', precio: 5000,}) Entonces vamos a crear otro producto como por ejemplo, \
una Laptop de 18'' con un precio de 5000; podemos ver que estamos utilizando el mismo producto y le estamos pasando diferente \
información; pero, este va a almacenar todo como this.nombre dentro del objeto. Hagamos esta teoría aquí mismo, guardamos \
y vemos que sucede en consola.";
console.log(objectConstructorAndObjectLiteral20);
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const producto3 = new Producto('Monitor curvo de 49"', 800);
const producto4 = new Producto('Laptop de 18"', 5000);
console.log(producto3);
console.log(producto4);
objectConstructorAndObjectLiteral21 = "Nuevamente, nuestro ejemplo salió como lo habíamos escrito en el código. Pero algo \
que nos falta es el precio; este se puede mostrar de la siguiente manera: Simplemente vamos a colocar otro this.precio y \
lo vamos a igualar al mismo precio; veámoslo.";
console.log(objectConstructorAndObjectLiteral21);
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const producto5 = new Producto('Monitor curvo de 49"', 800);
const producto6 = new Producto('Laptop de 18"', 5000);
console.log(producto5);
console.log(producto6);
objectConstructorAndObjectLiteral22 = "Efectivamente, en la consola nos arroja el mensaje de los dos productos pero con \
diferente información. Repitamos que, una de la ventajas es que podemos crear muchos objetos, variables y estas van a \
seguir o van a rquerir un nombre y un precio; pués deben de tener las mismas propiedades pero su información va a ser \
diferente. Vamos a hacerlo.";
console.log(objectConstructorAndObjectLiteral22);
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const producto7 = new Producto('Monitor curvo de 49"', 800);
const producto8 = new Producto('Laptop de 18"', 5000);
const producto9 = new Producto('Olla a vapor de 500 wp"', 3000);
const producto10 = new Producto('Pila para iphone 19 pro max', 5000);
console.log(producto7);
console.log(producto8);
console.log(producto9);
console.log(producto10);
objectConstructorAndObjectLiteral23 = "Un ejemplo de la vida real es que, ya en programación; sí vemos facebook, cuando \
alguién crea una cuenta nueva viene un diagrama como un plano, este trae un campo para colocar una imagen, el o los \
nombres completos, sus apellidos, un correo electrónico, etc. y otra serie de información relevante para la creación de \
esta nueva cuenta. Entonces, todo es plano lo deben de tener en una clase llamada perfil o algo similar. por último \
vamos a hacer otro ejemplo con otros datos diferentes como otros parámetros a ver que sucede.";
console.log(objectConstructorAndObjectLiteral23);
function Producto(nombre, precio, disponible, color, hechoEn) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
    this.color = color;
    this.hechoEn = hechoEn;
}
const producto11 = new Producto('Monitor curvo de 49"', 800, true, 'amarillo', 'Medellin');
const producto12 = new Producto('Laptop de 18"', 5000, false, 'Azul', 'Bogotá');
const producto13 = new Producto('Olla a vapor de 500 wp"', 3000, true, 'Rojo', 'Barranquilla');
const producto14 = new Producto('Lamborghini 19 pro max', 5000, true, 'Verde', 'Ibagué city');
const producto15 = new Producto('Trapero pro máximo', 5000, true, 'Black and white', 'El espinal');
const producto16 = new Producto('Barredora aspiradora solar', 5000, false, 'yellow', 'El libertador');
const producto17 = new Producto('Quita pulgas canino', 5000, true, 'Vinotinto', 'Tolima');

console.log(producto11);
console.log(producto12);
console.log(producto13);
console.log(producto14);
console.log(producto15);
console.log(producto16);
console.log(producto17);
objectConstructorAndObjectLiteral24 = "In the next lesson one hundred thirty five (135) we will see what prototypes are.";
console.log(objectConstructorAndObjectLiteral24);