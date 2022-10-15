const availableSeats = ["1", "2", "3"];
const takenSeats = [];

const seats = document.querySelectorAll(".seats");

seats.forEach((seat) => {
  seat.addEventListener("click", function handleClick() {
    console.log("seat clicked");

    seat.setAttribute("style", "background-color: red;");
  });
});
