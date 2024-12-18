const prompt = require('prompt-sync')();
const threshold = 100
let length = prompt("Length: ")
let breadth = prompt("breadth: ")
let area = length * breadth
if (area <= threshold){
    console.log(area)
}
else{
    console.log("Area exceeds threshold")
}