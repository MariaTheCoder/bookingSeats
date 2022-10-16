const allSeats = [
  { id: "1", isBooked: false },
  { id: "2", isBooked: false },
  { id: "3", isBooked: false },
];

const seats = document.querySelectorAll(".seats");

seats.forEach((seatElement) => {
  seatElement.addEventListener("click", () => bookSeat(seatElement));
});

function bookSeat(seatElement) {
  const currentIndex = allSeats.findIndex((seat) => seat.id === seatElement.id);

  allSeats[currentIndex].isBooked = !allSeats[currentIndex].isBooked;

  if (allSeats[currentIndex].isBooked) {
    seatElement.classList.add("isBooked");
  } else {
    seatElement.classList.remove("isBooked");
  }

  console.log("allSeats: ", allSeats);
}
