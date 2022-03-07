
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value


    document.getElementById("addition").addEventListener("click", function () {
     let firstNumber = parseFloat(document.getElementById("op-one").value)
let secondNumber = parseFloat(document.getElementById("op-two").value)
let addition = firstNumber+secondNumber
alert(addition);
    });

    document.getElementById("substraction").addEventListener("click", function() {
          let firstNumber = parseFloat(document.getElementById("op-one").value)
let secondNumber = parseFloat(document.getElementById("op-two").value)
let substraction = firstNumber-secondNumber
alert(substraction);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
          let firstNumber = parseFloat(document.getElementById("op-one").value)
let secondNumber = parseFloat(document.getElementById("op-two").value)
let multiplication = firstNumber*secondNumber
alert(multiplication);
    });

    document.getElementById("division").addEventListener("click", function() {
        let firstNumber = parseFloat(document.getElementById("op-one").value)
let secondNumber = parseFloat(document.getElementById("op-two").value)
let division = firstNumber/secondNumber
alert(division);
    });
})();
