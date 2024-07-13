// 3.1 Creación de la Función con Closure
function crearSumador(numero) {
  let contador = numero;
  return function incrementar(numero) {
    contador += numero;
    return contador;
  };
};


// 3.2 Uso de la Función y Observación de Closures
let sumarCinco = crearSumador(5)
let verificar = sumarCinco(3)


// 3.3 Ejecución y Análisis
console.log(verificar)

// Experimentación Adicional
console.log(sumarCinco(4));
console.log(sumarCinco(5));
console.log(sumarCinco(8));
