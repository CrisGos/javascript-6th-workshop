function pregunta() {
    let resultados = [];
    let correctas = 0;
    let contador = 0;
    const respuestas = [1, 5, 4, 2, 3];
    const texto = ['Inicio del script', 'Primer setTimeout', 'Segundo setTimeout', 'Promesa resuelta', 'Fin del script'];
    console.log('Teniendo en cuenta el siguiente codigo:');
    console.log(`console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");`);

    texto.forEach(salida => {
      console.log(`Del 1 al 5 en que orden se imprimirá "${salida}"?`)
      const respuesta = prompt(`Del 1 al 5 en que orden se imprimirá ${salida}?`)
      resultados.push(respuesta)
      if (resultados[contador] == respuestas[contador]) {
        correctas++
      }
      contador ++
    });

  if (correctas == 5) {
    console.log('Felicidades! Dominas el tema!')
    alert('Felicidades! Dominas el tema!')
  } else {
    for (let index = 0; index < respuestas.length; index++) {
      if (resultados[index] != respuestas[index]) {
        if (index == 0 || index == 1) {
          console.log(`Recuerda que "${texto[index]}" esta dentro de un cosole.log en la capa superior del codigo, no hace parte de una promise, setTimeout, etc. por lo tanto se convierte en una tarea principal, la cual se ejecuta inicialmente y en este caso se mostrará en la posicion ${index}`);
          alert(`Recuerda que "${texto[index]}" esta dentro de un cosole.log en la capa superior del codigo, no hace parte de una promise, setTimeout, etc. por lo tanto se convierte en una tarea principal, la cual se ejecuta inicialmente y en este caso se mostrará en la posicion ${index}`);
        } else if (index == 2 || index == 3) {
          console.log(`Recuerda que "${texto[index]}" esta dentro de una Promise, por lo tanto se convierte en una microtarea, la cual se ejecuta despues de ejecutar las tareas principales y en este caso se mostrará en la posicion ${index}`);
          alert(`Recuerda que "${texto[index]}" esta dentro de una Promise, por lo tanto se convierte en una microtarea, la cual se ejecuta despues de ejecutar las tareas principales y en este caso se mostrará en la posicion ${index}`);
        } else {
          console.log(`Recuerda que "${texto[index]}" esta dentro de un setTimeout, por lo tanto se convierte en una macrotarea, la cual se ejecuta despues de ejecutar las tareas principales y las microtareas, en este caso se mostrará en la posicion ${index}`);
          alert(`Recuerda que "${texto[index]}" esta dentro de un setTimeout, por lo tanto se convierte en una macrotarea, la cual se ejecuta despues de ejecutar las tareas principales y las microtareas, en este caso se mostrará en la posicion ${index}`);
        }
      }
      
    }
  }
}

pregunta()

console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");

