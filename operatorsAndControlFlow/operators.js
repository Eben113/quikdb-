const { isNumber } = require("node:util")

//Area Calculator
prompt = require("prompt-sync")()
function Area(){
    console.log("Area calculator")
    const length = prompt("Length of Rectangle: ")
    const width = prompt("Width of Rectangle: ")

    let area = length * width
    if(area){
        if(area < 100){
            console.log("Area is less than 100")
        }
        else if(area == 100){
                console.log("Area is equal to 100")
        }
        else{
            console.log("Area is greater than 100")
        }
    }
    
    else{
        console.log("Please input valid numbers\n")
        Area()
    }
}


//number check function
function checkno(){
    console.log("\n\nNumber check function")
    numb = Number(prompt("Please input number: "))
    if(numb){
        if(numb >= 10 && numb <= 20){
            console.log("valid")
        }
        else{
            console.log("invalid")
        }
    }
    else{
        console.log("Please input a valid number")
        checkno()
    }
}
Area()
checkno()