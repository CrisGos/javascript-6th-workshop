// Global Scope
var globalVariable = "Soy una variable global.";
let respuestas = [];
const respuesta1 = confirm(`Desde este punto es posible acceder a blockVariable?`) // la respuesta es false, blockVariable es una variable con scope de bloque y no se puede acceder desde este punto
console.log(`La respuesta es falso blockVariable es tiene un scope local de bloque y no se puede acceder desde este punto`)
respuestas.push(!respuesta1)

function testScope() {
  // Function Scope
  const respuesta2 = confirm(`Es posible acceder desde este punto a functionVariable?`) // la respuesta es true, dado que es una variable local de funcion y el llamado se encuentra dentro de la funcion, sin embargo su valor sera undefined debido a que se llama antes de darle un valor
  console.log(`la respuesta es verdad, dado que es una variable local de funcion y el llamado se encuentra dentro de la funcion, sin embargo su valor sera undefined debido a que se llama antes de darle un valor`)

  respuestas.push(respuesta2)
  var functionVariable = "Soy una variable local.";
  const respuesta3 = confirm(`Desde este punto se puede acceder a la funcion globalVariable?`) // la respuesta es true, debido a que globalVariable es una variable global y se puede acceder a esta desde aca
  console.log(`La respuesta es verdad globalVariable tiene un scope global y se puede acceder desde este punto`)

  respuestas.push(respuesta3)
  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
    const respuesta4 = confirm(`Es posible acceder en este punto a functionVariable?`) // La respuesta es true, debido a que es una variable de funcion y se esta llamando desde un bloque hijo de la funcion
    console.log(`La respuesta es verdad, debido a que es una variable de funcion y se esta llamando desde un bloque hijo de la funcion`)
  
    respuestas.push(respuesta4)
  }
  const respuesta5 = confirm(`Se puede acceder desde este punto a la variable blockVariable?`) // la respuesta es false, debido a que esta es una variable local de bloque y el llamado se enceuntra fuera del bloque if que la alberga
  console.log(`la respuesta es falso, debido a que esta es una variable local de bloque y el llamado se enceuntra fuera del bloque if que la alberga`)

  respuestas.push(!respuesta5)
  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();

const respuestasCorrectas = respuestas.filter((confirmarRespuesta) => confirmarRespuesta == true);
const cantidadCorrectas =  respuestasCorrectas.length;
console.log(cantidadCorrectas)
switch (true) {
  case (cantidadCorrectas == 0):
    console.log("Tienes 0 respuestas correctas, debes repasar");
    alert("Tienes 0 respuestas correctas, debes repasar");
    break;
  case (cantidadCorrectas <= 4):
    console.log(`Tienes ${cantidadCorrectas} respuestas correctas, tienes conceptos pero debes repasar`);
    alert(`Tienes ${cantidadCorrectas} respuestas correctas, tienes conceptos pero debes repasar`);
    break;
  default:
    console.log("Tienes todas las respuestas correctas, BIEN HECHO!");
    alert("Tienes todas las respuestas correctas, BIEN HECHO!");
    break;
}


