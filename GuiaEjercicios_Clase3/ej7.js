// Dado una cadena de caracteres ingresada por el usuario, realizar un script que indique si ese texto es un palíndromo.

function isPolindromo(text) {
    const textReversed = text.split("").reverse().join("");

    if (text === textReversed) {
      console.log("La cadena es un palíndromo");
  } else {
      console.log("La cadena NO es un palíndromo");
  }
  }
  console.log(isPolindromo("somos o no somos"));
  