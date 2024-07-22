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
          console.log("Reservas:", data.reservations);
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 3000);
  });
}


let reservations = [
  {
    "uniqueNumber": 1,
    "roomNumber": 101,
    "startsDate": "2024-07-01",
    "endsDate": "2024-07-05",
    "name": "john doe",
    "numberOfGuests": 1
  },
  {
    "uniqueNumber": 2,
    "roomNumber": 102,
    "startsDate": "2024-07-02",
    "endsDate": "2024-07-06",
    "name": "jane smith",
    "numberOfGuests": 1
  },
  {
    "uniqueNumber": 3,
    "roomNumber": 103,
    "startsDate": "2024-07-03",
    "endsDate": "2024-07-07",
    "name": "alice johnson",
    "numberOfGuests": 1
  },
  {
    "uniqueNumber": 4,
    "roomNumber": 201,
    "startsDate": "2024-07-04",
    "endsDate": "2024-07-08",
    "name": "bob brown",
    "numberOfGuests": 2
  },
  {
    "uniqueNumber": 5,
    "roomNumber": 202,
    "startsDate": "2024-07-05",
    "endsDate": "2024-07-09",
    "name": "charlie davis",
    "numberOfGuests": 2
  },
  {
    "uniqueNumber": 6,
    "roomNumber": 203,
    "startsDate": "2024-07-06",
    "endsDate": "2024-07-10",
    "name": "diana evans",
    "numberOfGuests": 2
  },
  {
    "uniqueNumber": 7,
    "roomNumber": 204,
    "startsDate": "2024-07-07",
    "endsDate": "2024-07-11",
    "name": "evan foster",
    "numberOfGuests": 2
  },
  {
    "uniqueNumber": 8,
    "roomNumber": 301,
    "startsDate": "2024-07-08",
    "endsDate": "2024-07-12",
    "name": "fiona green",
    "numberOfGuests": 4
  },
  {
    "uniqueNumber": 9,
    "roomNumber": 405,
    "startsDate": "2024-07-10",
    "endsDate": "2024-07-14",
    "name": "grace lee",
    "numberOfGuests": 5
  }
]

const chooseRoom = function(rooms, roomTypes, roomsAvailable) {
  const userRoom = prompt(
    "Ingrese el numero de habitacion a reservar: " +
    roomsAvailable
      .map((room) => {
        return `\nRoom Number: ${room.number} (${roomTypes.find((type) => type.id === room.roomTypeId).name})`;
      })
      .join(", ")
  );
  return rooms.find((room) => room.number == userRoom);
}

const filterRooms = function(rooms, roomTypes, numberOfGuests) {
  const typesAvailable = roomTypes
    .filter(type => type.capacity >= numberOfGuests)
    .map(type => type.id);
  console.log(typesAvailable);
  const roomsAvailable = rooms.filter(room => room.availability === true && typesAvailable.includes(room.roomTypeId));
  console.log(roomsAvailable);
  return chooseRoom(rooms, roomTypes, roomsAvailable);
}

const dataInlet = function(chosenRoom, rooms, numberOfGuests) {
  const startsDate = prompt('Ingresa la fecha de inicio de la reserva (AAAA-MM-DD):');
  const endsDate = prompt('Ingresa la fecha final de la reserva (AAAA-MM-DD):');
  const name = prompt('Ingrese el nombre de la persona a cargo de la reserva:');
  addReservation(rooms, chosenRoom, startsDate, endsDate, name, numberOfGuests);
}

const roomsAvailability = function(rooms, roomTypes) {
  let numberOfGuests;
  while (true) {
    numberOfGuests = parseInt(prompt('Ingrese el numero de personas para la reserva:'));
    if (numberOfGuests > 6) {
      alert('Recuerda que el hotel unicamente tiene capacidad para maximo 6 personas, vuelve a ingresar o debes hacer dos reservas');
    } else {
      break;
    }
  }
  const chosenRoom = filterRooms(rooms, roomTypes, numberOfGuests);
  dataInlet(chosenRoom, rooms, numberOfGuests);
}

// const idGenerator = () => {
//   if (reservations.length === 0) return 1;
//   return reservations[reservations.length - 1].uniqueNumber + 1;
// }


function idGenerator() {
  let id = 9; // Variable id se inicializa fuera de la función interna

  return function () {
    return id++; // Cada vez que se llama a la función, se incrementa id y se devuelve
  };
}

const generateId = idGenerator()


const addReservation = function(rooms, chosenRoom, startsDate, endsDate, name, numberOfGuests) {
  rooms[rooms.indexOf(chosenRoom)].availability = false;
  const reservation = {
    uniqueNumber: generateId(),
    roomNumber: chosenRoom.number,
    startsDate: startsDate,
    endsDate: endsDate,
    name: name.toLowerCase(),
    numberOfGuests: numberOfGuests
  }
  reservations.push(reservation);
  console.log(reservations);
  alert('Reservado con exito!')
}

const showReservation = function(rooms, roomTypes) {
  const nameUser = prompt('Ingrese su nombre').toLowerCase()
  const validation = reservations.find(reservation => reservation.name === nameUser)
  if (validation) {
    const roomInd = rooms.find(room => validation.roomNumber === room.number)
    const typeRooms = roomTypes.find(roomType => roomInd.roomTypeId === roomType.id)
    alert(`
      fecha de inicio: ${validation.startsDate}
      fecha final: ${validation.endsDate}
      numero de habitacion: ${validation.roomNumber}
      tipo de habitacion: ${typeRooms.name}
      `);
  } else {
    alert('Aun no tienes reservas');
  }
}

const deleteReservation = function(rooms, roomTypes) {
  const nameUser = prompt('Ingrese su nombre').toLowerCase()
  const validation = reservations.find(reservation => reservation.name === nameUser)
  if (validation) {
    const roomInd = rooms.find(room => validation.roomNumber === room.number)
    const typeRooms = roomTypes.find(roomType => roomInd.roomTypeId === roomType.id)

    const confirmDelete = confirm(`
      Estas a punto de borrar:
      fecha de inicio: ${validation.startsDate}
      fecha final: ${validation.endsDate}
      numero de habitacion: ${validation.roomNumber}
      tipo de habitacion: ${typeRooms.name}
      Estas seguro de que deseas borrar la reserva?
      `);
    if (confirmDelete) {
      const index = reservations.indexOf(validation)
      alert(index)
      reservations.splice(index, 1)
      alert('Borrado con exito')
    } else {
      alert('Accion cancelada')
    }
  } else {
    alert('No hay reservas a tu nombre')
  }
}


const editReservation = function (rooms, roomTypes) {
  const idReservation = parseInt(prompt('Ingrese el ID de la reserva'))
  const validation = reservations.find(reservation => reservation.uniqueNumber === idReservation)
  if (validation) {
    const roomInd = rooms.find(room => validation.roomNumber === room.number)
    const typeRooms = roomTypes.find(roomType => roomInd.roomTypeId === roomType.id)
    const confirmEdit = confirm(`
      Deseas modificar la siguiente reserva?
      fecha de inicio: ${validation.startsDate}
      fecha final: ${validation.endsDate}
      numero de habitacion: ${validation.roomNumber}
      tipo de habitacion: ${typeRooms.name}
      `);
    
    if (confirmEdit) {
      const startsDate = prompt('Ingrese una nueva fecha de inicio de la reserva')
      const endsDate = prompt('Ingrese una nueva fecha final de la reserva')
      reservations[reservations.indexOf(validation)].startsDate = startsDate
      reservations[reservations.indexOf(validation)].endsDate = endsDate
      alert(`
        Reserva realizada con exito, estos son los datos de la nueva reserva:
        Deseas modificar la siguiente reserva?
        fecha de inicio: ${ reservations[reservations.indexOf(validation)].startsDate}
        fecha final: ${ reservations[reservations.indexOf(validation)].endsDate}
        numero de habitacion: ${ reservations[reservations.indexOf(validation)].roomNumber}
        tipo de habitacion: ${typeRooms.name}
        `);
    } else {
      alert('Accion cancelada')
    }
  } else {
    alert('Aun no tienes reservas');
  }
}


// Llamar a la función para cargar y mostrar el contenido de data.json
cargarYMostrarData()
  .then(({ rooms, roomTypes}) => {
    // Mostrar el contenido de las habitaciones después de cargar los datos

    // ... Continuar con la lógica de la app
    while (true) {
      const userInput = prompt(
        "Ingresa la opcion que deseas 1. Reservar 2. Ver Reservas 3. Cancelar Reserva 4. Editar Reserva 5. Salir"
      );
      switch (userInput) {
        case "1":
          roomsAvailability(rooms, roomTypes)
          
          break;
        case "2":
          // Lógica para ver reservas actuales
          showReservation(rooms, roomTypes)

          break;
        case "3":
          // Lógica para cancelar reservas
          deleteReservation(rooms, roomTypes)

          break;

        case "4":
          editReservation(rooms, roomTypes)

          break;
        case "5":
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

