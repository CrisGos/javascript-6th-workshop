// vars call
const respuesta1 = confirm('Funcionara el llamado de la variable var a = 1 antes de ser declarada?')
console.log("Valor de a:", a);
if (respuesta1) {
  const respuestaDos1 = prompt('Cual sera su valor?: ')
  if (respuestaDos1.toLocaleLowerCase() === 'undefined') {
    console.log('Tu respuesta es correcta! Sigue asi!')
  } else {
    console.log('Respuesta incorrecta o mal escrita, recuerda que el valor sera "undefined" debido que cuando se declara con var la puedo llamar antes, pero no su valor asignado, unicamente la asignacion')
  }
}

const respuesta2 = confirm('Funcionara el llamado de la variable let b = 2 antes de ser declarada?')
try {
  console.log("Valor de b:", b);
} catch {
  if (!respuesta2) {
    console.log('Tu respuesta es correcta! Sigue asi!')
  } else {
    console.log('Respuesta incorrecta, recuerda que cuando una funcion se define por medio de let, esta no tiene la propiedad de Hoisting')
  }
}


const respuesta3 = confirm('Funcionara el llamado de la variable const c = 3 antes de ser declarada?')
try {
  console.log("Valor de c:", c);
} catch {
  if (!respuesta3) {
    console.log('Tu respuesta es correcta! Sigue asi!')
  } else {
    console.log('Respuesta incorrecta, recuerda que cuando una funcion se define por medio de const, esta no tiene la propiedad de Hoisting')
  }
}


// functions call
const respuesta4 = confirm('Funcionara el llamado de la funcion declarada "funcionDeclarada" antes de ser declarada?')
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
if (respuesta4) {
  console.log('Tu respuesta es correcta! Sigue asi!')
} else {
  console.log('Respuesta incorrecta, recuerda que cuando una variable se define de manera declarada, esta tiene la propiedad de Hoisting y todo el contenido de la funcion sera llamado')
}

const respuesta5 = confirm('Funcionara el llamado de la funcion Expresada "funcionExpresada" "const funcionExpresada = function ()...." antes de ser declarada?')
try {
  console.log("Resultado de funcionExpresada:", funcionExpresada());
} catch {
  if (!respuesta5) {
    console.log('Tu respuesta es correcta! Sigue asi!, recuerda que si esta se hubiese definido por medio de un let, se hubiese podido llamar y su valor seria "undefined"')
  } else {
    console.log('Respuesta incorrecta, recuerda que cuando una funcion se define por medio de const, esta no tiene la propiedad de Hoisting')
  }
}


// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
};

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};