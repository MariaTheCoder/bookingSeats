const availableSeats = [
  { id: "1", isBooked: false },
  { id: "2", isBooked: false },
  { id: "3", isBooked: false },
];
const takenSeats = [];

const seats = document.querySelectorAll(".seats");

seats.forEach((seat) => {
  seat.addEventListener("click", function handleClick() {
    seat.isBooked = true;

    const currentIndex = availableSeats.findIndex(
      (availableSeat) => availableSeat.id === seat.id
    );

    const bookedSeat = availableSeats.splice(currentIndex, 1);
    takenSeats.push(bookedSeat[0]);

    seat.setAttribute("style", "background-color: red;");

    console.log("availableSeats: ", availableSeats);
    console.log("takenSeats: ", takenSeats);
  });
});
