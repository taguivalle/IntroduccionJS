// In this lesson one hundred thirty seven (137) We will discuss the issue of herencia
let Herencia, Herencia1, Herencia2, Herencia3, Herencia4, Herencia5, Herencia6, Herencia7, Herencia8, Herencia9;
Herencia = "En la anterior lección teníamos una clase que se llamaba Producto y que tiene unos valores de nombre, precio \
y un color; a su vez tiene una función llamada formatearProducto que nos permite ver en consola un texto o un mensaje \
mediante un return con su respectivo template; dejándonos ver precisamente el nombre, el precio y el color. Ahora, \
vamos a suponer que vamos a crear una segunda clase llamada libro; como vemos ya estamos creando una segunda clase; y \
vamos a crear un constructor que tenga como parámetros un nombre, un precio y un isbn, que viene a ser el identificador \
único de ese libro. Entonces vamos crear un const con el nombre de la clase (Libro) y lo vamos a instanciar con un \
mensaje por ejemplo, JavaScript la revolución; un precio por ejemplo de 120 pesos y un código por ejemplo, 0001122233 \
vamos a escribir obviamente el console.log(Libro) a ver que sucede; pero, vamos a hacer aquí en esta teoría en esta \
lección.";
console.log(Herencia);
class Producto {
    constructor(nombre, precio, color) {
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio} y su color  es: ${this.color}`;
    }
}
const producto = new Producto('Monitor curvo de 49"', 8000, 'Amarillo');
const producto1 = new Producto('Laptop de 14"', 5000, 'Azul');
class Libro {
    constructor(nombre, precio, isbn) {
        this.nombre = nombre;
        this.precio = precio;
        this.isbn = isbn;
    }
    formatearLibro() {
        return `El libro ${this.nombre} tiene un precio de $ ${this.precio} y su código  es: ${this.isbn}`;
    }
}
const libro = new Libro('JavaScript la revolución', 120, '0001122233')
console.log(producto);
console.log(producto1);
console.log(libro);
Herencia1 = "Cuál es el detalle de esto? Podemos ver que nuestro constructor no es exactamente igual porque tiene nombre, \
precio y un color; en cambio en la clase tipo libro tenemos también un nombre, un precio y el isbn. Esto, nos estaría \
llevando a duplicar un poco el código y en programación no es la excepción que se evite duplicar el código los más que se \
pueda. Y esto se soluciona con algo llamado herencia.";
console.log(Herencia1);
Herencia2 = "Este término suena como a la vida real; sí una persona fallece, este le hereda todos sus bienes a alguién \
más; otro ejemplo sería, sí una persona se queda calva a los veinte (20) años y sí tiene hijos los más probable es que \
algún hijo herede esa clavicie. Entonces, aquí en programación es una forma de pasar valores o atributos de un lado \
hacia otro. Ahora, pasando a nuestro ejemplo del constructor que es bastante similar y si aplicaramos herencia a esta \
clase Libro podríamos heredar de la clase producto el constructor como las funciones que ese momento tenga la clase \
producto.";
console.log(Herencia2);
Herencia3 = "Es muy sencillo y suena más complicado de lo que es; Básicamente para utilizar la clase Producto como la \
clase padre y la clase Libro como al clase hijo; debemos de poner después de la palabra Libro extends Producto y esta \
palabra extends quiere decir que hereda de la clase padre (Producto) entonces, qué es lo que está haciendo el código? \
Está heredando el constructor como la función formatearProducto hacia los objetos de la clase hijo. Y si en nuestro \
console.log(libro) le ponemos punto formatearProducto no existe una clase libro; pero, como lo estamos heredando se le \
va a pasar hacia nuestra clase hijo. Ahora, para que nos funcione este código debemos de eliminar el constructor de \
nuestra clase hijo. Vamos a realizar esta teoría en la práctica.";
console.log(Herencia3);
class Producto2 {
    constructor(nombre, precio, color) {
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio} y su color  es: ${this.color}`;
    }
}
const producto3 = new Producto2('Celular Iphone pro maz', 8000, 'Black');
const producto4 = new Producto2('Nevera de 28 Ltrs"', 18000, 'gris');
// Desde aquí va herencia
class Libro1 extends Producto2 {

}
const libro1 = new Libro1('La web y JavaScript la otra revolución', 620, '000112223344445555');
console.log(producto3);
console.log(producto4);
console.log(libro1.formatearProducto());
Herencia4 = "Notamos que aunque nuestra clase hijo se encuentra vacía aún así funcionó la parte de formatearProducto. \
Y porqué sucedió esto? porque, estamos aplicando herencia y estamos heredando tanto constructor como el método; si \
tuvieramos más métodos en el constructor de la clase padre (Producto) también los heredaríamos; esta es una de las \
ventajas de la herencia nos evita estar duplicando código; y por ende vamos a tener un código más sencillo de mantener. \
Ahora, sí deshacemos algunos cambios y dejaramos el constructor de nuestra clase hijo muy seguramente nos arrojaría un \
error en la consola.";
console.log(Herencia4);
Herencia5 = "Existe una sintaxis para poder solucionar ese error que se mencionó en el anterior párrafo y es colocando \
de nuestro constructor de la clase hijo (Libro) la palabra super() y dentro de estos paréntesis vamos a llamar el nombre \
y el precio de la clase padre (Producto); en el caso de los libros que tiene un isbn y lo que podríamos es copiar el \
método this.isbn con una función formatearLibro y colocarla debajo de nuestro constructor hijo; probémoslo en nuestro \
código";
console.log(Herencia5);
class Producto3 {
    constructor(nombre, precio, color) {
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio} y su color  es: ${this.color}`;
    }
}
const producto5 = new Producto3('Olla a vapor de 50 wts', 2000, 'White');
const producto6 = new Producto3('Sanduchera de cuatro usos"', 700, 'green');
// Desde aquí va herencia
class Libro2 extends Producto3 {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearLibro() {
        return `El Libro ${this.nombre} tiene un precio de $ ${this.precio} y su código ISBN es: ${this.isbn}`;
    }
}
const libro2 = new Libro2('Código límpio con JavaScript', 720, '0001122233444455556666');
console.log(producto5.formatearProducto());
console.log(producto6.formatearProducto());
console.log(libro2.formatearLibro());
Herencia6 = "Ahora estaríamos duplicando algo de código; porque al menos hasta el return de formatearProducto sería igual \
al return de formatearLibro; y debemos al máximo de duplicar código; entonces, podemos eliminar de nuestra clase hijo en \
el return, la parte hasta el precio y en su reemplazo le agregamos un template de: ${super.formatearProducto} y dejamos su \
parte final del mensaje de isbn; y veamos que sucede en nuestra consola después de guardar cambios.";
console.log(Herencia6);
class Producto4 {
    constructor(nombre, precio, color) {
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio} y su color  es: ${this.color}`;
    }
}
const producto7 = new Producto4('Cepillo para cabello marca hand lop', 658, 'Blue');
const producto8 = new Producto4('Horno micro hondas de 1200 wats "', 700, 'white');
// Desde aquí va herencia
class Libro3 extends Producto3 {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearLibro() {
        return `${super.formatearProducto()} y su código ISBN es: ${this.isbn}`;
    }
}
const libro3 = new Libro2('Código límpio con JavaScript', 720, '0001122233444455556666');
console.log(producto7.formatearProducto());
console.log(producto8.formatearProducto());
console.log(libro3.formatearLibro());
Herencia7 = "Es de entender que el tema de POO es mucho más grande de lo que expresamos en estos ejemplos de esta \
lección como de las dos o tres anteriores; pero, se trata de unos inicios en este apasionante mundo de la programación. \
En la siguiente lección one hundred thirty eight (138) estaremos viendo algo del tema try catch y que es muy importante \
conocer.";
console.log(Herencia7);