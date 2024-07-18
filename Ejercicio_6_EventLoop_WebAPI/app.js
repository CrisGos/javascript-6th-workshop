// function prueba(num) {
//     console.log(num);
// }

// console.log('1')

// setTimeout(() => {
//     console.log('2');
// }, 5);

// Promise.resolve().then(() => 
//     console.log('M3'))

// console.log('4');

// Promise.resolve().then(() => 
//     console.log('M5'))

// prueba(6)


console.log('Mensaje 1: Inmediatamente');

setTimeout(() => {
    console.log('Mensaje 2: Con timeout de 0 segundos');
}, 0);


setTimeout(() => {
    console.log('Mensaje 3: Con timeout de 1 segundo');
}, 1000);

// ¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos? 
// // Debido a que JS es oientado a eventos y además un setTimeOut genera una tarea o evento WebAPI (macrotarea), mientras que Mensaje 1 genera una tarea, dando prioridad a esta ultima.

// ¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?
// // El event loop es como JS ejecuta las tareas, microtareas y macrotareas y posteriormente en ese orden se ejecutan segun su prioridad, esto hace a JS asincrono.