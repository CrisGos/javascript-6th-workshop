// Ruta del archivo data.json
let reservations = [
  {
    "uniqueNumber": 1,
    "roomNumber": 101,
    "startsDate": "2024-07-01",
    "endsDate": "2024-07-05",
    "name": "John Doe",
    "numberOfGuests": 1
  },
  {
    "uniqueNumber": 2,
    "roomNumber": 102,
    "startsDate": "2024-07-02",
    "endsDate": "2024-07-06",
    "name": "Jane Smith",
    "numberOfGuests": 1
  },
  {
    "uniqueNumber": 3,
    "roomNumber": 103,
    "startsDate": "2024-07-03",
    "endsDate": "2024-07-07",
    "name": "Alice Johnson",
    "numberOfGuests": 1
  },
  {
    "uniqueNumber": 4,
    "roomNumber": 201,
    "startsDate": "2024-07-04",
    "endsDate": "2024-07-08",
    "name": "Bob Brown",
    "numberOfGuests": 2
  },
  {
    "uniqueNumber": 5,
    "roomNumber": 202,
    "startsDate": "2024-07-05",
    "endsDate": "2024-07-09",
    "name": "Charlie Davis",
    "numberOfGuests": 2
  },
  {
    "uniqueNumber": 6,
    "roomNumber": 203,
    "startsDate": "2024-07-06",
    "endsDate": "2024-07-10",
    "name": "Diana Evans",
    "numberOfGuests": 2
  },
  {
    "uniqueNumber": 7,
    "roomNumber": 204,
    "startsDate": "2024-07-07",
    "endsDate": "2024-07-11",
    "name": "Evan Foster",
    "numberOfGuests": 2
  },
  {
    "uniqueNumber": 8,
    "roomNumber": 301,
    "startsDate": "2024-07-08",
    "endsDate": "2024-07-12",
    "name": "Fiona Green",
    "numberOfGuests": 4
  },
  {
    "uniqueNumber": 9,
    "roomNumber": 405,
    "startsDate": "2024-07-10",
    "endsDate": "2024-07-14",
    "name": "Grace Lee",
    "numberOfGuests": 5
  }
]

// Función para cargar y mostrar el contenido de data.json
export function cargarYMostrarData() {
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

export const roomsAvailability = function(rooms, roomTypes) {
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

const idGenerator = () => {
  if (reservations.length === 0) return 1;
  return reservations[reservations.length - 1].uniqueNumber + 1;
}

const addReservation = function(rooms, chosenRoom, startsDate, endsDate, name, numberOfGuests) {
  console.log(rooms.indexOf(chosenRoom));
  const reservation = {
    uniqueNumber: idGenerator(reservations),
    roomNumber: chosenRoom.number,
    startsDate: startsDate,
    endsDate: endsDate,
    name: name,
    numberOfGuests: numberOfGuests
  }
  reservations.push(reservation);
  console.log(reservations);
  return reservation;
}



