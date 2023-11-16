// El orden o jerarquía de la operaciones.
let orden, resultado, orden1, resultado1, orden2, resultado2, orden3, resultado3, orden4, resultado4, puntaje, orden5,
    resultado5, incremento, decremento, decremento1, decremento2, incremento1, incremento2;
orden = "El orden o la jerarquía de la operaciones: la forma en que se ejecutan las operaciones en un lenguaje de \
programación va a ser exactamente el mismo al que nos enseñaron en la escuela; para el siguiente ejemplo 20 + 30 * 2 \
la multiplicación tiene más prioridad que la suma. Por lo tanto el resultado es: "
resultado = 20 + 30 * 2;
orden1 = "Ahora, sí se quiere tener el resultado primero de la suma solamente se debe de encerrar en un paréntesis \
el anterior ejemplo (20 + 30) * 2; por lo tanto el resultado cambiará; debido a que lo que se encuentre dentro del \
paréntesis va a tener más alta prioridad: ";
resultado1 = (20 + 30) * 2;
orden2 = "Porqué es útil conocer el orden de la operaciones; supongamos que tenemos (10 + 200 + 300) esto nos daría \
como resultado 600 y para conocer el 20% de esto tendríamos que multiplicarlo por 0.2; y por lo tanto el resultado sería \
120; Entonces, ya podríamos restarlo del total y decirle al cliente incluso mostrarle un mensaje No estás ahorrando \
tanto gracias a que aplicaste a cupon de descuento en nuestra tienda virtual. Por decir algo. ";
resultado2 = (100 + 200 + 300) * .2;
orden3 = "Otro ejemplo útil sería para un impuesto, pués en todas las tiendas virtuales nso cobran impuestos; Por esto, \
muchas de estas tiendas al final nos hacen el cálculo de cuanto tienes que pagar en total; por ejemplo el 16%; Entonces, \
esto nos va a dar la suma de lo que se encuentra dentro del paréntesis más el 16 y en total tendríamos que pagar 696.";
resultado3 = (100 + 200 + 300) * 1.16;
orden4 = "En este otro ejemplo, al comprar boletos para un concierto y cada boleto cuesta 600, pero compras dos y te dicen\
bueno, por el manejo del sistema vamos a cobrarle al usuario el 5% de la venta sería algo así como 1.05. De todo esto, \
es importante conocer que se realiza primero la operación que se encuentra dentro del paréntesis y despues realizar la que \
se encuentra por fuera.";
resultado4 = (600 + 600) * 1.05;
orden5 = "Recordemos qué siempre las divisiones y la multiplicaciones van a tener más prioridad que las sumas y/o las \
restas; Otro tema que se toca en esta introducción es los string con los números y es los incrementos; En ese orden de \
ideas, un ejemplo, cuando se está creando un vídeo juego, y cuando estas jugando cada que vez que vas, digamos, acabando \
con los oponentes, estos te van dando puntos; esto se hace por medio de algo llamado incremento.";
puntaje = 100;
incremento = "Ahora, sí queremos ir incrementando debemos de eliminar a un oponente lo que nos aumentará en un punto el \
anterior puntaje que era de cien.";
console.log(puntaje++);
decremento = "Y sí ahora tenemos una mala racha y el oponente nos quita puntos? Entonces, utilizaríamos los signos menos \
menos."
decremento1 = 100;
decremento1--;
decremento2 = "Ahora sí se coloca los signos antes el resultado es: ";
incremento1 = "En otros juegos se dan puntajes mucho mayores y podemos utlizar la siguiente sintaxis: += y digamos qué \
el rival al que hemos vencido nos dío diez (10) puntos de más.";
incremento2 = 100;
incremento2 += 10;
incremento1 = "En otros juegos se dan puntajes mucho mayores y podemos utlizar la siguiente sintaxis: += y digamos qué \
el rival al que hemos vencido nos dío diez (10) puntos de más.";
incremento2 = 100;
incremento2 += 10;

console.log(orden);
console.log(resultado);
console.log(orden1);
console.log(resultado1);
console.log(orden2);
console.log(resultado2);
console.log(orden3);
console.log(resultado3);
console.log(orden4);
console.log(resultado4);
console.log(orden5);
console.log(resultado5);
console.log(puntaje);
console.log(puntaje++);
console.log(++puntaje);
console.log(incremento);
console.log(decremento);
console.log(decremento1);
console.log(decremento2);
console.log(--decremento1);
console.log(incremento1);
console.log(incremento2);








