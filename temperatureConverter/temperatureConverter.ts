const prompt = require("prompt-sync")();
function convert(){
    const val =  prompt("Enter Temperature Value: ")
    const type = prompt("Choose conversion: 'C' for Celsius to Farhenheit, 'F' for Fahrenheit to Celsius: ")
        switch(type){
        case("C"):
            console.log(`Converted temperature: ${(9*val + 160)/5}`)
            break
        case("F"):
            console.log(`Converted temperature: ${(5*val - 160)/9}`)
            break
        default:
            console.log("Please enter either 'C' or 'F'")
            convert()
        }
}
convert()