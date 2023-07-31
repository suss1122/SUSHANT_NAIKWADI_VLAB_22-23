var num1: HTMLInputElement = <HTMLInputElement>document.getElementById("num1");
var num2: HTMLInputElement = <HTMLInputElement>document.getElementById("num2");
var display: HTMLInputElement = <HTMLInputElement>document.getElementById("display");

function Add() {
    var number1: number = parseInt(num1.value);
    var number2: number = parseInt(num2.value);
    

    var sumoFnums: number = number1 + number2;

    display.value = sumoFnums.toString();
}
function Subtract() {
    var number1: number = parseInt(num1.value);
    var number2: number = parseInt(num2.value);
    

    var sumoFnums: number = number1 - number2;

    display.value = sumoFnums.toString();
}
function Multiply() {
    var number1: number = parseInt(num1.value);
    var number2: number = parseInt(num2.value);
    

    var sumoFnums: number = number1 * number2;

    display.value = sumoFnums.toString();
}
function Divide() {
    var number1: number = parseInt(num1.value);
    var number2: number = parseInt(num2.value);
    

    var sumoFnums: number = number1 / number2;

    display.value = sumoFnums.toString();
}

var LENGTH: HTMLInputElement = <HTMLInputElement>document.getElementById("length");
var  BREADTH: HTMLInputElement = <HTMLInputElement>document.getElementById("breadth");
var answer: HTMLInputElement = <HTMLInputElement>document.getElementById("answer");

function AREA(){
    var length: number = parseFloat(LENGTH.value);
    var breadth: number = parseFloat(BREADTH.value);

    var area: number = length * breadth;

    answer.value = area.toString();
}