// In this lesson one hundred thirty six (136) let's discuss the issue of class
let clases, clases1, clases2, clases3, clases4, clases5, clases6, clases7, clases8;
clases = "En anteriores lecciones vimos que se utilizaba para crear objetos se iniciaba la palabra con mayúsculas y por \
lo tanto, ya decíamos que eso ya era una clase y que eso era ya un generador de objetos, etc. Ahora, en la nueva versión \
de JavaScript podemos utilizar la palabra reservada class seguido del nombre y para esta lección vamos a continuar con \
con el mismo nombre de la anterior lección prototype (producto y/o cliente). Sabemos que las convenciones de la \
programación nos dice que debemos de iniciar la palabra con una letra mayúscula aunque no es que sea obligatorio como se \
dijo es una convención aquí en JavaScript no nos va a marcar como error esto; sin embargo las clases deben de llevar \
esta convención.";
console.log(clases);
clases1 = "Continuando con la estructura del ejemplo no se colocan paréntesis, solamente se agregan llaves ({}) muy \
similar a un objeto; y esta estructura es lo que nos va a permitir crear una clase (class) Es lo mínimo que requerimos \
para crear una clase en JavaScript; por lo tanto, al final de las llaves podemos escribir la otra palabra reservada \
const Producto y vamos a instanciar nuestra clase de Producto y le colocamos nuestra clase Producto; puede que esta \
segunda parte sea exactamente igual a la estructura que hicimos en la anterior lección; sin embargo, la forma en al que \
vamos a declarar a las clases va a ser un poco diferente.";
console.log(clases1);
clases2 = "Previamente, estábamos pasando Monitor curvo de 49'' pulgadas, una laptop, etc. Pero, cómo vamos a pasar esos \
valores Producto dentro de nuestra clase (class) en este ejemplo sino hay paréntesis para tomar los parámetros? Porque, \
sí decimos bueno, va a tomar un nombre y va a tomar un precio eso ya nos va a marcar un error de sintaxis: por lo que \
esa sintaxis no es válida; Entonces, los valores se van a pasar por medio de un constructor; en otros lenguajes, como en \
Java, el nombre del constructor es el mismo nombre de la clase.";
console.log(clases2);
clases3 = "Ahora, en JavaScript se utiliza constructor de esta forma seguida del paréntesis y es dentro de estos, donde \
se colocan los parámetros y después colocamos las llaves ({}) Este constructor, vendría a ser igual a una función \
solamente que no requiere tener aquí antes del constructor una función (function constructor (){}) O sea que JavaScript \
ya sabe que tiene que hacer y solamente le damos el nombre de la función constructor; porque esta es una palabra \
reservada, es una función reservada; por lo tanto, no podemos crear una que se llame así dentro de una clase; porqué, \
lo va a tomar como un constructor.";
console.log(clases3);
clases4 = "Para este ejemplo, vamos a copiar los dos productos que teníamos en la lección prototype y los pegamos en \
reemplazo del anterior const; Como se manifestó anteriormente en esta lección tenemos un Monitor curvo de 49'' pulgadas \
y una laptop, etc. con el respectivo precio y un color. Entonces, en nuestro constructor le podemos colocar que así va \
a llevar nuestros parámetros; que lleve un nombre, un precio y un color. La forma en que se van a almacenar dentro del \
objeto es exactamente igual; utilizamos un this.nombre, un this.precio y this.color. (no olvidemos que nuestro editor de \
texto nos ayuda con el autocompletado) Bién, en la última línea de nuestro código le colocamos un console.log con los \
productos. Y como es común, vamos a hacer toda esta teoría en nuestro código; al final no olvidar guardar y verlo en \
consola.";
console.log(clases4);
class Producto {
    constructor(nombre, precio, color) {
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
    }
}
const producto = new Producto('Monitor curvo de 49"', 8000, 'Amarillo');
const producto1 = new Producto('Laptop de 14"', 5000, 'Azul');
console.log(producto);
console.log(producto1);
clases5 = "Excelente, gracias a Dios; como vimos en consola nos aparece la información de los dos productos y analizando \
un poco notamos que la sintaxis es un poco más sencilla; ahora, como vamos a agregar la estructura de formatearProducto? \
Bueno, Debemos de tener en cuenta que lo que se encuentra dentro de las llaves del constructor; es decir que, lo que se \
encuentre dentro de esas llaves va a formar parte del constructor. Y todo lo que se encuentre dentro de las llaves de la \
clase (class Producto) forma parte de esa clase y sí queremos agregar más funciones, colocamos al final de las llaves del \
constructor el nombre de la función.";
console.log(clases5);
clases6 = "Entonces, vamos a colocar fuera del constructor el nombre de la función que este caso es un método llamado \
formatearProducto con sus respectivo paréntesis () y llaves {} Nuevamente todo lo que esté dentro de estas llaves forma \
parte del método formatearProducto. Seguidamente, vamos a escribir un return con el respectivo template del ejemplo de la \
lección prototype; no olvidemos guardar cambios y a su vez, también es conveniente agregar que en este ejemplo el la \
clase se llama Producto1; debido a que nos arrojaría un error en consola. De otra parte, toda esta teoría la vamos a \
continuar aquí mismo. y posteriormente lo vamos a ver en consola a ver que nos arroja.";
console.log(clases6);
class Producto1 {
    constructor(nombre, precio, color) {
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio} y su color  es: ${this.color}`;
    }
}
const producto2 = new Producto1('Monitor curvo de 49"', 8000, 'Amarillo');
const producto3 = new Producto1('Laptop de 14"', 5000, 'Azul');
console.log(producto2);
console.log(producto3);
clases7 = "Nuevamente, excelente; una vez que guardamos cambios podemos ver que tenemos un objeto de tipo producto y si \
lo expandimos el producto nos deja ver que tenemos un prototype con un formatearProducto como método. Entonces, este \
código que es más sencillo; pero, es lo mismo que escribirlo en un prototype; ahora con la versión nueva de JavaScript \
podemos ver que mejoró la sintaxis; sin embargo, su comportamiento es igual. En realidad, no es un lenguaje orientado a \
objetos como tal pero, viene a ser un lenguaje orientado un poco más a prototypes.";
console.log(clases7);
clases8 = "La verdad es que, podemos ver que sí es una mejora en la sintaxis en lugar de tener todo el prototype \
solamente le vamos agregando las funciones que deseemos dentro de la clase. Por último, vamos a continuar con la lección \
siguiente one hundred thirty seven (137) POO herencia.";
console.log(clases8);