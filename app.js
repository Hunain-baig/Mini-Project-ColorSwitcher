// select the button and hold it in a variable
// select the body and hold it in a variable

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", function (event) {
    // console.log(event);
    console.log(event.target);  // event.target --> id access hoti

    if (event.target.id === "grey") {
      body.style.backgroundColor = "grey";
    } else if (event.target.id === "white") {
      body.style.backgroundColor = "white";
    } else if (event.target.id === "blue") {
      body.style.backgroundColor = "blue";
    } else if (event.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    }
  });
});
