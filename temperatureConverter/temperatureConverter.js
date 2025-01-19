var prompt = require("prompt-sync")();
function convert() {
    var val = prompt("Enter Temperature Value: ");
    var type = prompt("Choose conversion: 'C' for Celsius to Farhenheit, 'F' for Fahrenheit to Celsius: ");
    switch (type) {
        case ("C"):
            console.log("Converted temperature: ".concat((9 * val + 160) / 5));
            break;
        case ("F"):
            console.log("Converted temperature: ".concat((5 * val - 160) / 9));
            break;
        default:
            console.log("Please enter either 'C' or 'F'");
            convert();
    }
}
convert();
