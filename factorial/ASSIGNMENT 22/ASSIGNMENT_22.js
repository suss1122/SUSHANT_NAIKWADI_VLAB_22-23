var n = document.getElementById("n");
var display = document.getElementById("display");
function factorial() {
    if (!isNaN(+n.value)) {
        var num = parseInt(n.value);
        var factorial = 1;
        do {
            factorial = factorial * num;
            num = num - 1;
        } while (num > 0);
        display.value = `The factorial of ${n.value} is ${factorial}`;
    }
    else {
        alert("Invalid input");
    }
}
//# sourceMappingURL=ASSIGNMENT_22.js.map