var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var display = document.getElementById("display");
function Add() {
    var number1 = parseInt(num1.value);
    var number2 = parseInt(num2.value);
    var sumoFnums = number1 + number2;
    display.value = sumoFnums.toString();
}
function Subtract() {
    var number1 = parseInt(num1.value);
    var number2 = parseInt(num2.value);
    var sumoFnums = number1 - number2;
    display.value = sumoFnums.toString();
}
function Multiply() {
    var number1 = parseInt(num1.value);
    var number2 = parseInt(num2.value);
    var sumoFnums = number1 * number2;
    display.value = sumoFnums.toString();
}
function Divide() {
    var number1 = parseInt(num1.value);
    var number2 = parseInt(num2.value);
    var sumoFnums = number1 / number2;
    display.value = sumoFnums.toString();
}
var LENGTH = document.getElementById("length");
var BREADTH = document.getElementById("breadth");
var answer = document.getElementById("answer");
function AREA() {
    var length = parseFloat(LENGTH.value);
    var breadth = parseFloat(BREADTH.value);
    var area = length * breadth;
    answer.value = area.toString();
}
//# sourceMappingURL=ASSIGNMENT_8.js.map