const prompt = require("prompt-sync")();
function checkVote(){
    console.log("\n\n1. Voting eligibility check")
    const age:number = Number(prompt("What is your age: "))
    if(age){
        if(age >= 18){
            console.log("Eligible to vote")
        }
        else{
            console.log("Not eligible to vote")
        }
    }
    else{
        console.log("Please input a valid number")
        checkVote()
    }
}

function checkDay(){
    console.log("\n\n2. switch-case for day of the week")
    const numb: number = Number(prompt("Input a number from 1 to 7(Inclusive)"))
    if(numb){
        switch(numb){
            case(1):
                console.log("Sunday")
                break
            case(2):
                console.log("Monday")
                break
            case(3):
                console.log("Tuesday")
                break
            case(4):
                console.log("Wednesday")
                break
            case(5):
                console.log("Thursday")
                break
            case(6):
                console.log("Friday")
                break
            case(7):
                console.log("Saturday")
                break
            default:
                console.log("Numbers between 1 and 7(Inclusive) only")
        }
    }
    else{
        console.log("Please input a valid number")
    }
}


function checkScore(){
    console.log("\n\n3. pass-fail  check")
    const score: number = Number(prompt("Input your score(between 0 and 100): "))
    if(score){
        if(score >= 0 && score <= 100){
            console.log(score >= 50? "Pass": "Fail")
        }
        else{
            console.log("Numbers beytween 0 and 100 only")
        }
    }
    else{
        console.log("Please input a valid number")
        checkScore()
    }
}

function greeter(){
    console.log("\n\n4. Greeter Function")
    const name:string = prompt("What is your name: ").toString()
    if(name){
        console.log(`Hello, ${name}`)
    }
    else{
        console.log("No name provided")
    }
}

function circleArea(){
    console.log("\n\n5. Area of Circle")
    let radius: number = Number(prompt("Radius: "))

    let area = Math.PI*(radius**2)
    if (area){
        console.log(`The circle's area is ${area}`)
    }
    else{
        console.log("Input a valid number as radius")
    }
}

function discountCheck(){
    console.log("6. final price after discount")
    const original: number = Number(prompt("Original Price: "))
    const discount: number = Number(prompt("Discount: "))
    if(!discount){
        discount == 10
    }

    let final = (discount/100)*(original)
    if (final){
        console.log(`The final price is ${final}`)
    }
    else{
        console.log("Input a valid number as Price")
    }
}
checkVote()
checkDay()
checkScore()
greeter()
circleArea()
discountCheck()