let max = parseInt(prompt("Enter the maximum number!"));

while (!max) {
  max = parseInt(prompt("Enter the maximum number!"));
}

const ans = Math.floor(Math.random() * max) + 1;

let guess = parseInt(prompt("Guess the number."));

while (parseInt(guess) !== ans) {
  if (guess === "q") break;
  if (guess > ans) guess = prompt("Too big. Guess the number.");
  else guess = prompt("Too small. Guess the number.");
}

console.log("CONGRATULATIONS!");
