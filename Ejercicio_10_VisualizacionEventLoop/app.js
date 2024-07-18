console.log("Inicio del script");

// Macrotarea: setTimeout
setTimeout(() => {
  console.log("Macrotarea 1 second (setTimeout)");
}, 1000);

setTimeout(() => {
  console.log("Macrotarea 0 seconds (setTimeout)");
}, 0);

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    setTimeout(() => {
      console.log("Macrotarea (setTimeout) inside Microtarea 1");
      return "from micro 1";
    }, 0);
  })
  .then((message) => {
    console.log("Microtarea 2 (Promesa)");
  });

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    console.log("Microtarea 3 (Promesa)");
  })
  .then(() => {
    console.log("Microtarea 4 (Promesa)");
  });

console.log("Fin del script");


// ¿Qué tareas se consideran macrotareas y cuáles son microtareas?
// // macrotareas se considenran Macrotarea 1 second (setTimeout), Macrotarea 0 seconds (setTimeout) y Macrotarea (setTimeout) inside Microtarea 1, en este caso se consideran macrotareas las que estan incluidas dentro de un setTimeout.

// ¿Cómo se relacionan las macrotareas y microtareas con el event loop?
// // Se relacional de modo que JS primero mostrara las microtareas y posteriormente las macrotareas, independiente de su orden en el codigo.

// ¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
// // Esta se convierte en macrotarea y pasa al stack de estas

// ¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
// // las promesas se convierten en microtareas en el event loop, mientras que los setTimeout se convierten en macrotareas, siendo visualizadas de ultimas
