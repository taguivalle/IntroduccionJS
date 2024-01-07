// In this lesson one hundred thirty one (131) we talk over while And DoWhile
let whileAndDoWhile, whileAndDoWhile1, whileAndDoWhile2, whileAndDoWhile3, whileAndDoWhile4;
whileAndDoWhile = "El iterador que sigue en esta lección es muy común y se trata de while loop; es muy similar al for \
loops; aunque la sintaxis es un poco diferente; digamos que las partes son iguales, sin embargo, la ubicación es \
diferente; Este while loop se ejecuta mientras una condición sea evaluada como verdadera. Vamos a colocar un ejemplo \
aqui mismo; recordemos que el while es una palabra reservada.";
console.log(whileAndDoWhile);
whileAndDoWhile1 = "Vamos a realizar antes de escribir el código una pequeña exposición de nuestro while para que \
resulte un poco más sencillo entender este ejemplo como los demás; entonces inicializamos nuestra variable llamada \
i y esta le asignamos el valor de cero (0) posteriormente también iniciamos el while con su respectiva estructura \
cabe recordar que nuestro editor de código nos facilita este trabajo.";
console.log(whileAndDoWhile1);
whileAndDoWhile2 = "Primero observamos que, dentro de los paréntesis encontramos la condición del while loop, y \
después de las llaves se va a ejecutar el código, mientras nuestra condición sea evaluada como verdadera. Entonces \
que condición vamos a revisar? mientras el index sea menor a diez (10) notemos la diferencia de sintaxis, mientras \
que el for loop iba dentro del mismo for loop, el index va por fuera del while y el incremento va por dentro del \
while; pero al final de este. vamos a escribir esta teoría en nuestro código.";
console.log(whileAndDoWhile2);
let i = 0; // Este es el index
while (i < 10) {
    console.log(i) // Esta es la condición
    i++;
}
whileAndDoWhile3 = "Entonces, la diferencia de sintaxis es muy notoria, pero al final continuán ejecutando código, \
mientras que nuestra condición sea evaluada como verdadera. Ahora haciendo el ejemplo del número unos (1) al cien \
(100) con los pares e impares, éste tendrá que iniciar en cero (0) para este ejemplo. Y debería de llevar un if \
dentro del while que viene a ser el cuerpo de nuestro iterador. Recordemos, nuestro anterior ejemplo en la lección \
one hundred thirty (130) en dónde utilizamos a i con el módulo (%) igualado a o para que nos muestre nuestro \
requerimiento de los pares e impares; posteriormente escribimos nuestro console.log para observar sí es o no \
el objetivo de nuestro while. Vamos a ello.";
console.log(whileAndDoWhile3);
let i1 = 0; // Este es el index
while (i1 < 100) {
    if (i1 % 2 === 0) {
        console.log(`El número ${i1} es PAR`); // Esta es la con    console.log(`El nú`)
    } else {
        console.log(`El número ${i1} es IMPAR`);
    }
    i1++;
}
whileAndDoWhile4 = "bandera. Quedamos en el minuto 2.26";
console.log(whileAndDoWhile4);