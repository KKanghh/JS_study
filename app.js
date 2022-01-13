const calculator = {
    add : function(a, b) {
        console.log(a + b);
    },
    minus : function(a, b) {
        console.log(a - b);
    },
    multiply : function(a, b) {
        console.log(a * b);
    },
    divide : function(a, b) {
        console.log(a / b);
    },
    powerof : function(a, b) {
        console.log(a ** b);
    }
}

calculator.add(3, 5);
calculator.minus(3, 5);
calculator.multiply(3, 5);
calculator.divide(3, 5);
calculator.powerof(3, 5);