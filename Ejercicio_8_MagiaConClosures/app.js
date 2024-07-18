function incrementador() {
  let contador = 0
  return function incremento() {
    contador = contador + 1   
    return contador
  }
}

function menu() {
  let incremento = incrementador()
  while (true) {
    incrementador()
    let respuesta = confirm(`El contador se encuentra en ${incremento()}, desea aumentar?`)
    if (respuesta) {
      continue
    } else {
      break
    }
  }
}

let inicio = confirm('Desea iniciar el contador?')

if (inicio) {
  menu()
}