var n: HTMLInputElement = <HTMLInputElement>document.getElementById("n");
var display: HTMLInputElement = <HTMLInputElement>document.getElementById("display");
function factorial() {

    if (!isNaN(+n.value)) {
        var num: number = parseInt(n.value);
        var factorial = 1;
        do {
            factorial = factorial * num;
            num = num - 1;

        }
        while (num > 0);
        display.value = `The factorial of ${n.value} is ${factorial}`
    }
    else {
        alert("Invalid input")
    }
}