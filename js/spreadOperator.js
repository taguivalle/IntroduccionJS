let spread, spread1, spread2;
spread = "Inicialmente, para este ejercicio vamos a utilizar la misma variable producto que traemos a manera de \
práctica.";
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    Disponible: true
}
console.log(spread);
console.log(producto);
spread1 = "Ahora, vamos a crear otra variable de nombre medidas, le ponemos una propiedad peso con 1 kg, y le ponemos \
también una propiedad medida de 1 metro; Seguidamente queremos unir ambos objetos tanto producto como medidas.";
const medidas = {
    peso: "1 kg",
    medida: "1m",
}
console.log(spread1)
console.log(medidas);
spread2 = "La buena práctica y/o la recomendación que existe hoy en día es no modificar los datos originales; Para ello, \
en JavaScript se agregó o se tiene lo que se conoce como rest operator; vamos a crear una nueva variable y lo vamos a \
llamar nuevoProducto que va a ser igual {Aquí va la nueva sintaxis del objeto y utilizamos el rest operator} que consta \
de tres puntos suspensivos junto con la variable producto, posteriormente tres puntos suspensivos y la variable que \
deseamos unir para este caso medidas.";
console.log(spread2)
const nuevoProducto = { ...producto, ...medidas };
console.log(producto);
console.log(nuevoProducto);
spread2 = "Podemos observar que la variable producto tiene solamente las propiedades originales mientras que la variable \
nuevoProducto tiene todas las propiedades de la variable producto y la variable medidas; Entonces, estamos uniendo dos \
objetos pero no estamos modificando ninguna de las propiedades originales.";
console.log(spread2)


