//Ejercicio 12
function bultosEnCajas(bultos, cajas){ 
    let bultosEnCaja = bultos / cajas;
    let bultosSueltos = bultos % cajas;
    console.log("Se pueden llenar " + bultosEnCaja + " cajas completas y quedarían " + bultosSueltos + " bultos sueltos");
}
bultosEnCajas(10, 3);


