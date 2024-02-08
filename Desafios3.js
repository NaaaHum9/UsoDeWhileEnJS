/**
 * 1 - Contador que comience en 1 - 10 con while, mostrar cada numero
*/

//Alerta para difereciar de los demas ejercicios
alert('Contador con While');
//Declaramos variable y la inicializamos en 1 para que no comienze en 0
let contador = 1;
//El while e el bucle que hace un conteo ascendente, inicia en 1 y termina en 10 por el <=
while (contador <= 10) {
    console.log("Numero: ", contador);//Para mostrar el numero 
    contador++;//Incremento el contador
}


/**
 * 2 - Contador que comience en 10 - 0 con while y que muestre cada numero
 */

alert('Contador con While descendente');
//Declaramos la variable contador que ahora inicia en 10 y se va a decrementar
let conta = 10;
//Mientras conta sea mayor o igual a 0, se decrementa la variable conta
while (conta >= 0) {
    console.log("Numero:", conta);
    conta--;//Decrementa el contador
}

/**
 * 3 - Cuenta progresiva, pedir el numero y 
 * contar desde 0 hasta el numero, con while y en la consola del navegador
 */

alert('Cuenta progresiva');
//Pide el numero al usuario y lo convierte a un entero para hacer la ceunta progresiva
let numCuenta = parseInt(prompt("Ingrese un numero para la cuenta regresiva"));

while (numCuenta >= 0) {
    alert(`Numero : ${numCuenta}!!`);
    numCuenta--;
}

/**
 * 4 - Cuenta progresiva, pedir el numero y 
 * contar desde 0 hasta el numero, con while y en la consola del navegador
 */

alert('Cuenta regresiva v2');
//Utilizamos dos variables, una para el contador y otra para el numero que ingrese el usuario
let conta2 = 0;
let numCuenta2 = parseInt(prompt("Ingrese un numero para la cuenta progresiva"));
//Lo que hace el while es miestra que contador2 no sea mayor o igual a numCuenta2, 
//contador se va a ingrementar hasta llegar a ser igual al numero del usuario y ahi se termina el ciclo
while (conta2 <= numCuenta2) {
    alert(`Numero: ${conta2}`);//Muestra en una alerta el conteo
    conta2++;
}