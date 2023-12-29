/* Métodos de propiedad. */
let propertyMethods, propertyMethods1, propertyMethods2, propertyMethods3, propertyMethods4, propertyMethods5, propertyMethods6, propertyMethods7,
    propertyMethods8;
propertyMethods = "FUNCTIONS THAT RETURN VALUES";
console.log(propertyMethods);
propertyMethods1 = "Veamos cómo crear los métodos de propiedad y para tener una sintaxis más de método pero siguen \
siendo funciones, llegan a ser muy comunes porque mantienen, digamos, toda la información en un solo objeto; por \
ejemplo, cuando creamos un proyecto grande, tienden a ser una buen opción de estructurar ese proyecto. Para este caso, \
vamos a crear un reproductor musical aquí mismo de igual manera vamos a colocar como reproductor y siempre tiene que \
ser un objeto; y cuando se tiene un reproductor musical, pués vamos a reproducir música obviamente; entonces, vamos a \
colocar reproducir. Esta vendría siendo una propiedad en este objeto, pero aquí le colocamos dos puntos en lugar de \
ponerle por ejemplo, 20 o un string, le vamos a poner que va a ser igual a una función. Posteriormente vamos a imprimir \
por consola.";
console.log(propertyMethods1);
/* Dentro de los paréntesis van los parámetros. */
const reproductor = { /* Este reproductor va a ser un objeto cuya función es reproducir. */
    reproducir: function (params) {
        console.log('Reproduciendo Canción')
    }
}
console.log(reproductor);
propertyMethods2 = "Al igual que como vimos, la forma en la que se accede a los valores de los objetos lo vas a hacer \
también, con estos métodos de propiedades, que son funciones en realidad; pero, tienen la sintaxis de método. Es decir, \
con estos métodos de propiedad por ejemplo el objeto de llama reproductor punto reproducir abrimos y cerramos paréntesis \
y podemos ver que nos va a seguir diciendo reproduciendo canción en la consola.";
console.log(propertyMethods2)
/* Dentro de los paréntesis van los parámetros. */
const reproductor1 = { /* Este reproductor va a ser un objeto cuya función es reproducir. */
    reproducir: function (id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`)
    }
}
/* Dentro de los paréntesis van argumentos o valores reales. */
reproductor1.reproducir(3840);
propertyMethods3 = "Con base en lo anterior, se nota que la sintaxis en la línea 34 es llamar al método con el punto \
y coma y después la función se le pasa al 3840, sería lógico que imprimiera en consola Reproduciendo Canción con el \
ID: ${id}; sabemos que es un reproductor muy limitado enr realidad el que estamos creando, pero es a manera de ejemplo.\
Pero podemos observar que se pueden crear los propios métodos. ";
console.log(propertyMethods3);

propertyMethods4 = "Ahora, supongamos que creamos una segunda función porque cuando ponemos play a una canción pués \
también la puedes pausar; tal vez llegue alguién a molestar cuando estás disfrutando la canción y no quieres perdértela\
entonces vamos a ponder un segundo método de propiedad llamado pausar y aquí vamos a escribir function; abrimos \
paréntesis y abrimos llaves con su respectivo console.log que diga pausando. La forma en que lo vamos a mandar a llamar \
es con reproductor de nueva cuenta, que es nuestro objeto principal seguido de punto pausar y los paréntesis.";
console.log(propertyMethods4);
/* Dentro de los paréntesis van los parámetros. */
const reproductor2 = { /* Este reproductor va a ser un objeto cuya función es reproducir. */
    reproducir: function () {
        console.log(`Reproduciendo Canción con el ID: ${id}`)
    },
    pausar: function (params) {
        console.log('Pausando...')
    }
}
reproductor1.reproducir(3840);
reproductor2.pausar();
propertyMethods5 = "Ahora, podemos observar que, estamos agregando las funciones dentro de nuestro objeto principal \
pero, también podemos colocarlas por fuera, al go igual que en la parte de objetos que vimos anteriormente, es decir, \
podemos tener un reproductor.borrarCancion y esto va a tener un igual (=) diferente que dentro de nuestro objeto \
principal se colocan dos puntos (:) porqué es un objeto; pero, en este caso estamos agregando propiedades por fuera de \
un objeto; por lo tanto agregamos nuestra console.log que diga eliminando la canción; por decir un ejemplo.";
console.log(propertyMethods5);
reproductor.borrarCancion = function (id) {
    console.log(`Eliminando la canción: ${id}`)
}
reproductor1.reproducir(3840);
reproductor2.pausar();
reproductor.borrarCancion(20);
propertyMethods6 = "Podemos observar en al consola que aparece lo respectivo; Después de que eliminando la canción \
número veinte (20); entonces también la podemos colocar dentro dentro de nuestro objeto principal o por fuera porque \
al final termina siendo un objeto. Entonces, hemos hecho reproducir, pausar y borrar canciones; vamos a agregar un par \
más, uno para crear un playlist y uno para reproducir este. Como para que, quede más claro lo que venimos aprendiendo. \
Entonces, dentro de nuestro objeto principal vamos a crear esa playlist.";
console.log(propertyMethods6);
const reproductor3 = { /* Este reproductor va a ser un objeto cuya función es reproducir. */
    reproducir: function (id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`)
    },
    pausar: function (params) {
        console.log('Pausando...')
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    }
}
reproductor.borrarCancion = function (id) {
    console.log(`Eliminando la canción: ${id}`)
}
reproductor1.reproducir(3840);
reproductor2.pausar();
reproductor.borrarCancion(20);
reproductor3.crearPlaylist('Heavy metal');
propertyMethods7 = "Ahora vamos a reproducir toda esa playlist por lo tanto vamos a copiar y a pegarla dentro de \
nuestro objeto principal y le cambiamos el nombre por reproducir playlist; por ejemplo. vamos a ello.";
console.log(propertyMethods7);

const reproductor4 = { /* Este reproductor va a ser un objeto cuya función es reproducir. */
    reproducir: function (id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`)
    },
    pausar: function (params) {
        console.log('Pausando...')
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    }
}
reproductor.borrarCancion = function (id) {
    console.log(`Eliminando la canción: ${id}`)
}
reproductor1.reproducir(3840);
reproductor2.pausar();
reproductor.borrarCancion(20);
reproductor3.crearPlaylist('Heavy metal');
reproductor4.reproducirPlaylist('Heavy metal');
propertyMethods8 = "En ese orden de ideas, creamos: reproducir, pausar, borrar, crear una playlist y reproduciéndola.";
console.log(propertyMethods8);