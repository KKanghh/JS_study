function add(num1, num2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + num1 + num2);
    }
    else {
        return num1 + num2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
