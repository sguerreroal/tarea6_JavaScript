/* Ejercicio 1 */ 
var nombre = prompt("Ingrese Su Nombre");
console.log ("Ahora estas en la Matriz "+nombre);



/* Ejercicio 2 */
var numero1=+prompt("ingrese el valor1");
var numero2=+prompt("ingrese el valor2");
var resultado=numero1+numero2;
alert(resultado)

/* Ejercicio 3 */
var numero1=+prompt("ingrese el valor1");
var numero2=+prompt("ingrese el valor2");
var resultado=numero1+numero2;
alert(resultado)
var numero3=prompt("ingrese el valor3");
var resultado2=resultado*numero3;
alert(resultado2)

/* Ejercicio 4 */
var kilometros=prompt("ingrese los kilometros");
var combustible=+prompt("listros de combustible");
var kilometros1=kilometros/combustible;
alert("su consumo por kilometros es"+kilometros1)

/* Ejercicio 5 */
var fahrenheit=prompt("ingrese los grados fahrenheit");
var celsius=(5/9)
var resultado=(5/9)*(fahrenheit-32);
alert(resultado)


/* Ejercicio 6 */
var numero1=+prompt("ingrese el valor1");
var numero2=+prompt("ingrese el valor2");
var numero3=+prompt("ingrese el valor3");
var promedio=numero1+numero2+numero3;
var resultado=promedio/3;
alert(resultado)

// Ejercicio 7 */
var numero = (parseInt(prompt("Ingrese Numero "))*0.85);
console.log ("descontando el 15% queda: "+numero );


/* Ejercicio 8 */
var word1 = prompt("Ingrese una palabra");
var word2 = prompt("Ingrese otra palabra");
console.log (word1 +" " +word2);

/* Ejercicio 9 */
var texto = prompt("Ingreso Texto")
console.log(texto.charAt(0))
var num = parseInt(prompt("Ingrese Numero "));
console.log(texto.charAt(num))

/* Ejercicio 10 */
var shows = parseInt(prompt("Ingrese cantidad de Shows "));
if(shows > 3)
    {
        console.log(true)
    }
else
{
    console.log(false)
}

/* Ejercicio 11 */
var numbers = parseInt(prompt("Ingrese numeros"));
var texto = numbers.toString()
var date = texto.substr(0,2) + "/" + texto.substr(2,2) + "/" + texto.substr(4,4)
console.log (date); 


/* Ejercicio 12 */
var par = parseInt(prompt("Ingrese un numero"));
if(par %2 == 0)
{
    console.log(true)        
}
else
{
    console.log(false)
}


/* Ejercicio 13 */
var age = parseInt(prompt("Ingrese su Edad"));
var compra = parseInt(prompt("Ingrese cantidad de Compras"));
if(age>18 && compra > 1)
{
    console.log(true)
}
else
{
    console.log(false)
}


/* Ejercicio 14 */
var text = prompt("Ingrese un texto");
if(text.length %2 == 1) 
{
    console.log(true)
}
else
{
    console.log(false)
}

/* Ejercicio 15 */

var word1 = prompt("Ingrese Primera Palabra");
var word2 = prompt("Ingrese segunda Palabra");
if(word1.length < word2.length)
{
    console.log(true)
}
else
{
    console.log(false)
}

/* Ejercicio 16 */
var name1 = prompt("Ingrese Primer Nombre");
var name2 = prompt("Ingrese segundo Nombre");
if(name1.charAt(0).toLowerCase() == name2.charAt(0).toLowerCase())
{
    console.log(true);
}
else if(name1.charAt((name1.length -1)).toLowerCase() == name2.charAt((name2.length -1)).toLowerCase())
{
    console.log(true);
}
else
{
    console.log(false);
}

/* Ejercicio 17 */
var num1 = parseInt(prompt("Ingrese un Numero"));
if(num1<0)
{
    num1 = num1 * (-1);
    console.log("valor Absoluto "+num1)
}
else
{
    console.log("valor Absoluto "+num1)
}

/* Ejercicio 18 */
var num1 = parseInt(prompt("Ingrese Primer Numero"));
var num2 = parseInt(prompt("Ingrese Segundo Numero"));
if(num1 > num2) {
    console.log("El numero mayor es: " + num1)
} 
else
 {
     console.log("El numero mayor es: " + num2)
 } 

/* Ejercicio 19 */
var letra=prompt("Ingrese una Letra").toLowerCase()
if(letra.length ==1){
    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u")
    {
        console.log("Ingresaste la Vocal "+letra);
    }
}
 else 
 {
    console.log("No se puede procesar el Dato")
 }

/* Ejercicio 20 */
var num1 = parseInt(prompt("Ingrese Primer Numero"));
var num2 = parseInt(prompt("Ingrese Segundo Numero"));
var num3 = parseInt(prompt("Ingrese Tercer Numero"));
if(num1 < num2 && num1 < num3) {
    console.log("El numero menor es: " + num1)
}
if (num2 < num1 && num2 < num3) {
    console.log("El numero menor es: " + num2)
}
if(num3 < num1 && num3 < num2) {
    console.log("El numero menor es: " + num3)
}