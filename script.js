// dsa 


const display = document.querySelector("#display");
const buttons = document.querySelectorAll("#calculator > div");
let bag = "";

display.addEventListener("click", () => {
  bag = display.value;
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;

    if (buttonText === "C") {
      bag = "";
    } else if (buttonText === "=") {
      try {
        bag = eval(bag).toString();
      } catch (error) {
        bag = "Error";
      }
    } else {
      bag += buttonText;
    }

    display.value = bag;
  });
});

// Keyboard input handling
document.addEventListener("keydown", (event) => {
  const key = event.key;
  const numberKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operatorKeys = ["+", "-", "*", "/", "="];
  const clearKey = "C";
  const backspaceKey = "Backspace";

  if (numberKeys.includes(key)) {
    bag += key;
  } else if (operatorKeys.includes(key)) {
    bag += key;
  } else if (key === clearKey) {
    bag = "";
  } else if (key === backspaceKey) {
    bag = bag.slice(0, -1);
  } else if (key === "Enter") {
    try {
      bag = eval(bag).toString();
    } catch (error) {
      bag = "Error";
    }
  }

  display.value = bag;
});
