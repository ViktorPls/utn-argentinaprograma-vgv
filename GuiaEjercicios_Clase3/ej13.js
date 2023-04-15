/* Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford
Fiesta (código "fiesta"), el descuento es de un 5%. Si el coche a la venta es un Ford
Focus (código "focus"), el descuento es del 10%. El usuario introduce el artículo a
través de su código y el script saca el descuento correspondiente por la consola.
 */

//Ejercicio 13
function descuentoCoche(coche){
    switch (coche) {
        case "fiesta":
            console.log("El descuento es del 5%");
            break;
        case "focus":
            console.log("El descuento es del 10%");
            break;
        default:
            console.log("El coche no tiene descuento");
            break;
    }
}
descuentoCoche("fiesta");
