function check() {

    var n: number = parseInt((<HTMLInputElement>document.getElementById("n")).value);
    var display: HTMLInputElement = <HTMLInputElement>document.getElementById("display")

    display.value = ""

    // USE OF FOR LOOP
    for (let i = 0; i <= n; i++) {


        let num = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                num = 1;
                break;
            }
        }

        // USE OF IF ELSE 
        if (i > 1 && num == 0) {
            display.value += `${i}` + " "

        }
    }
}