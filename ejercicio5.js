 //1. Crea un array que contenga el nombre de cinco colores escritos como strings.
const colores = ["negro","azul","verde","rojo","blanco"]

//2. Guarda en una variable el tercer elemento del array del ejercicio anterior.
const tercerElemento = coleres[2]

//3. Accede desde un console.log() a la posición 0 del string de la posición 0 del array del ejercicio 1.
console.log(colores[0].charAt(0))

//4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la función Math.random().
const numero = Math.floor(Math.random() * 100);
console.log(numero)

//5. Rellena un array con los números del 1 al 10. Muéstralo por la consola.
const arrayNumeros = []
for (let i = 0 ; i <= 10; i++) {
  arrayNumeros.push(i)  
}

// 6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.
const arrayNumerosAleatorios = []
while(arrayNumerosAleatorios.length < 10) {
  const numeroAleatorio = Math.floor(Math.random() * 100);
  arrayNumerosAleatorios.push(numeroAleatorio)
}
console.log(arrayNumerosAleatorios)

// 7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la consola.
const copiaArrayarrayNumerosAleatorios = [...arrayNumerosAleatorios]


// 8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
// medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
// luego recorriendolo para mostrar el resultado deseado del ejercicio.
const arrayDePalabras = []
const palabraIngresada = prompt("Ingresa una palabra")
arrayDePalabras.push(palabraIngresada)
if (palabraIngresada === "cancelar"){
  console.log(arrayDePalabras.join(" - "))
}

// 9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón convierte de dólares a pesos. 
// Supondremos que un dólar son trescientos pesos. Mostrar el resultado elemento de html.

// 10. Generar la inversa del ejercicio anterior (de pesos a dólares).

// 11. Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para
// ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados
// son 86 grados fahrenheit.

