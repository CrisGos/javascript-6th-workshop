// 5.1
function manejarAsincronia(promesa, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (promesa) {
                resolve(callback('¡Promesa cumplida y callback ejecutado!'));
            } else {
                reject('No se pudo ejecutar');
            }
        }, 2000);
    });
}

manejarAsincronia(true, (mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
});


// ¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?
// // No sucede nada especial, unicamente los tiempos de respuesta, debido a que la Promise esta diseñada para ejecutarse dentro de los tiempo establecidos

// ¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
// // Se comporta arrojando un predeterminado como 'No se pudo ejecutar'

// ¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa?
// //  Si, se puede modificar

