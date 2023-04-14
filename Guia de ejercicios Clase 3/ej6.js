//Ejercicio 6
function calcularFactorial(num) {
    if (num < 10) {
        let total = 1;
        for (let i = 1; i <= num; i++) {
            total = total * i
        }
        console.log(total)
    } else {
        console.log("el número no puede ser mayor de 10")
    }
}
calcularFactorial(8)