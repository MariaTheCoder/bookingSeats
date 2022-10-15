const allSeats = [
  { id: "1", isBooked: false },
  { id: "2", isBooked: false },
  { id: "3", isBooked: false },
];

const seats = document.querySelectorAll(".seats");

seats.forEach((seat) => {
  seat.addEventListener("click", function handleClick() {
    const currentIndex = allSeats.findIndex(
      (availableSeat) => availableSeat.id === seat.id
    );

    allSeats[currentIndex].isBooked = !allSeats[currentIndex].isBooked;

    if (allSeats[currentIndex].isBooked) {
      seat.classList.add("isBooked");
    } else {
      seat.classList.remove("isBooked");
    }

    console.log("allSeats: ", allSeats);
  });
});
