// Booleanos:
let Booleanos, BooleanosTrue, BooleanosFalse, BooleanosString, BooleanosType, sutíl, sutil1, sutil2;
Booleanos = "Algo a tener muy en cuenta; es que estos son solamente falso o verdadero, TRUE or FALSE. O sea tiene dos \
estados. Por ejemplo la bombilla de nuestro cuarto solamente puede estar encendida o apagada; o la computadora nuestra \
solamente está prendida o apagada (power on or power off). Entonces, vamos a digitar BooleanosTrue = true; \
BooleanosFalse = false; y en console debe de aparecer true y false respectivamente.";
console.log(Booleanos);
BooleanosTrue = true;
BooleanosFalse = false;
BooleanosString = "true";
BooleanosType = "Tipo de datos con el typeof"
console.log(BooleanosTrue);
console.log(BooleanosFalse);
console.log(BooleanosString);
console.log(BooleanosTrue, BooleanosFalse, BooleanosString, BooleanosType);
console.log(typeof BooleanosTrue);
console.log(typeof BooleanosFalse);
console.log(typeof BooleanosString);

sutíl = "Ahora, en que es sutil un boolean, porqué, un true o un false no tiene mucho sentido, n0?; Bueno, cuándo un \
usuario está autenticándose puedes ponerle autenticado true o verdadero y eso le daría digamos acceso a diferentes \
partes que un usuario que no está autenticado no debe de ver; en facebook por ejemplo; sí quieres comentar una foto de \
cualqier otro usuario que no sea tu amigo; talvez por reglas de facebook sí se exige que el usuario deba de autenticarse \
por lo que lo retorna a FALSE para que no puedas escribir e incomodar a alguien que no es tu amigo.";
console.log(sutíl);
sutil1 = "Entonces, de esto se trata los booleanos, sí el usuario no está autenticado, el producto no existe, son amigos \
en las redes sociales, etc, etc. Ahora, existe una segunda regla o una segunda forma de crear booleans que es por medio de \
un constructor. Podemos escribir const boolean3 = new Boolean(true) y por consiguiente lo podemos enviar a la consola \
como Boolean3.";
console.log(sutil1);
const boolean3 = new Boolean(true);
console.log(boolean3);
sutil2 = "Siempre que veamos a un NEW es porque tiene un constructor y puedes ver que para el ejemplo anterior nos dice \
que es un booleano true. Pero,este es un objeto en realidad. seguidamente podemos averiguar que tipo de datos es con la \
palabra reservada typeof";
console.log(sutil2);
console.log(typeof boolean3);




