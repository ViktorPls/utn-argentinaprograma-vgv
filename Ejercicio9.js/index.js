var pesos = document.getElementById("pesos")
var dolares = document.getElementById("dolares")
var resultado = document.getElementById("resultado")
var boton = document.getElementById("boton")

boton.onclick = function() {
  var pesos = parseFloat(pesos.value);
  var dolares = parseFloat(dolares.value);
  var resultado = pesos * dolares;
  resultado.innerHTML = resultado;
}