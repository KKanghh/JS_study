function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function divide(firstNumber, secondNumber) {
    console.log(firstNumber / secondNumber);
}

plus(1, 2);
divide(3, 5);

const player = {
    name: "Kang",
    sayHello: function(other) {
        console.log("Hello! " + other);
    }
}

player.sayHello("Kim");