// Ruta del archivo data.json
const url = "data.json"; // Cambiar por la ruta correcta

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Habitaciones:", data.rooms);
          console.log("Tipos de Habitaciones:", data.roomTypes);
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 3000);
  });
}

// Llamar a la función para cargar y mostrar el contenido de data.json
cargarYMostrarData()
  .then(({ rooms, roomTypes }) => {
    // Mostrar el contenido de las habitaciones después de cargar los datos

    // ... Continuar con la lógica de la app
    while (true) {
      const userInput = prompt(
        "Ingresa la opcion que deseas 1. Reservar 2. Ver Reservas 3. Cancelar Reserva 4. Salir"
      );
      switch (userInput) {
        case "1":
          const userInput2 = prompt(
            "Ingrese el numero de habitacion a reservar: " +
              rooms
                .map((room) => {
                  return `\nRoom Number: ${room.number} (${
                    roomTypes.find((type) => type.id === room.roomTypeId).name
                  })`;
                })
                .join(", ")
          );
          break;
        case "2":
          // Lógica para ver reservas actuales
          break;
        case "3":
          // Lógica para cancelar reservas
          break;
        case "4":
          // Salir del programa
          return;
        default:
          console.log("Opción inválida. Inténtalo de nuevo.");
      }
    }
  })
  .catch((error) => {
    console.error("Error al manejar la promesa:", error);
  });



  function crearReserva(numeroHabitacion, fechaInicio, fechaFin, huesped) {
    function generarGeneradorId() {
      let id = 1; // Variable id se inicializa fuera de la función interna
  
      return function () {
        return id++; // Cada vez que se llama a la función, se incrementa id y se devuelve
      };
    }
  
    const generarId = generarGeneradorId(); // Se obtiene la función interna generarId()
  
    // Pruebas
    console.log(generarId()); // 1
    console.log(generarId()); // 2
    console.log(generarId()); // 3
    console.log(generarId()); // 4
    console.log(generarId()); // 5
  }



  function constructora(name) {
    this.name = name;
  
    this.myMethod = function () {
      console.log(this.name);
    };
  }