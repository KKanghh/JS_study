const max = prompt("Enter the maximum number!");

const ans = Math.floor(Math.random() * max) + 1;

let guess = parseInt(prompt("Guess the number."));

while (guess !== ans) {
    if (guess > ans) guess = parseInt(prompt("Too big. Guess the number."));
    else guess = parseInt(prompt("Too small. Guess the number."));
}

console.log("CONGRATULATIONS!");