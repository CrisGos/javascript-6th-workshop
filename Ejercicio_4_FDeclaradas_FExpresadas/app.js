console.log(
  "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
);
try {
  console.log(funcionDeclarada());
} catch (error) {
  console.log("Error:", error.message);
}

console.log(
  "Intentando llamar a 'funcionExpresada' antes de su declaración:"
);
try {
  console.log(funcionExpresada());
} catch (error) {
  console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

// ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
// // la funcion declarada permitio el llamado y el suso de su funcionalidad, mientras que la funcion expresada genero un error, esto se da debido a que la funcion expresada se guarda en una funcion que esta declarada por medio de const

// ¿Cómo difieren los resultados entre la función declarada y la función expresada?
// // Difieren en la funcionalidad de la declarada y el error que genera una expresada, si la expresada se declarada bajo un var, al llamarla su resultado seria undefined.

// ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
// //  Indica que una funcion declarada posee hoisting y una expresada no.