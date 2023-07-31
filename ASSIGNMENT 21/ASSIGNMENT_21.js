function check() {
    var n = parseInt(document.getElementById("n").value);
    var display = document.getElementById("display");
    display.value = "";
    for (let i = 0; i <= n; i++) {
        let num = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                num = 1;
                break;
            }
        }
        if (i > 1 && num == 0) {
            display.value += `${i}` + " ";
        }
    }
}
//# sourceMappingURL=ASSIGNMENT_21.js.map