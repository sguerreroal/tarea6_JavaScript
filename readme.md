# Tarea6 de Programacion 4

_En el documento se encuentra los ejercicios realizados_

## Estudiantes 🚀

Sebastian Guerrero
Ricardo Marin

## Ejercicio1

```javascript
var nombre = prompt("Ingrese Su Nombre");
console.log ("Ahora estas en la Matriz "+nombre);
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/1.jpg)

## Ejercicio2

```javascript
var numero1=+prompt("ingrese el valor1");
var numero2=+prompt("ingrese el valor2");
var resultado=numero1+numero2;
alert(resultado)
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/2.jpg)

## Ejercicio3

```javascript
var numero1=+prompt("ingrese el valor1");
var numero2=+prompt("ingrese el valor2");
var resultado=numero1+numero2;
alert(resultado)
var numero3=prompt("ingrese el valor3");
var resultado2=resultado*numero3;
alert(resultado2)

```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/3.jpg)

## Ejercicio4

```javascript
var kilometros=prompt("ingrese los kilometros");
var combustible=+prompt("listros de combustible");
var kilometros1=kilometros/combustible;
alert("su consumo por kilometros es"+kilometros1)
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/4.jpg)

## Ejercicio5

```javascript
var fahrenheit=prompt("ingrese los grados fahrenheit");
var celsius=(5/9)
var resultado=(5/9)*(fahrenheit-32);
alert(resultado)
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/5.jpg)

## Ejercicio6

```javascript
var numero1=+prompt("ingrese el valor1");
var numero2=+prompt("ingrese el valor2");
var numero3=+prompt("ingrese el valor3");
var promedio=numero1+numero2+numero3;
var resultado=promedio/3;
alert(resultado)
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/6.jpg)

## Ejercicio7

```javascript
var numero = (parseInt(prompt("Ingrese Numero "))*0.85);
console.log ("descontando el 15% queda: "+numero );
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/7.jpg)

## Ejercicio8

```javascript
var word1 = prompt("Ingrese una palabra");
var word2 = prompt("Ingrese otra palabra");
console.log (word1 +" " +word2);
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/8.jpg)

## Ejercicio9

```javascript
var texto = prompt("Ingreso Texto")
console.log(texto.charAt(0))
var num = parseInt(prompt("Ingrese Numero "));
console.log(texto.charAt(num))
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/9.jpg)

## Ejercicio10

```javascript
var shows = parseInt(prompt("Ingrese cantidad de Shows "));
if(shows > 3)
    {
        console.log(true)
    }
else
{
    console.log(false)
}
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/10.jpg)

## Ejercicio11

```javascript
var numbers = parseInt(prompt("Ingrese numeros"));
var texto = numbers.toString()
var date = texto.substr(0,2) + "/" + texto.substr(2,2) + "/" + texto.substr(4,4)
console.log (date);
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/11.jpg)

## Ejercicio12

```javascript
var par = parseInt(prompt("Ingrese un numero"));
if(par %2 == 0)
{
    console.log(true)        
}
else
{
    console.log(false)
}
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/12.jpg)

## Ejercicio13

```javascript
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
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/13.jpg)

## Ejercicio14

```javascript
var text = prompt("Ingrese un texto");
if(text.length %2 == 1) 
{
    console.log(true)
}
else
{
    console.log(false)
}
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/14.jpg)
## Ejercicio15

```javascript
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
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/15.jpg)

## Ejercicio16

```javascript
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
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/16.jpg)

## Ejercicio17

```javascript
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
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/17.jpg)

## Ejercicio18

```javascript
var num1 = parseInt(prompt("Ingrese Primer Numero"));
var num2 = parseInt(prompt("Ingrese Segundo Numero"));
if(num1 > num2) {
    console.log("El numero mayor es: " + num1)
} 
else
 {
     console.log("El numero mayor es: " + num2)
 }
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/18.jpg)

## Ejercicio19

```javascript
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
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/19.jpg)

## Ejercicio20

```javascript
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
```
![I1](https://github.com/sguerreroal/tarea6_JavaScript/blob/master/20.jpg)