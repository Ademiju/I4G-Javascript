function addition(firstNumber, secondNumber){
    return firstNumber + secondNumber
}
function subtraction(firstNumber, secondNumber){
    return firstNumber - secondNumber
}
function multiplication(firstNumber, secondNumber){
    return firstNumber * secondNumber
}
function division(firstNumber, secondNumber){
    if(secondNumber === 0){
        return "Error: Division by Zero"
    }else{
        return firstNumber / secondNumber
    }
}

console.log(addition(2,3))
console.log(subtraction(2, 3));
console.log(multiplication(2, 3));
console.log(division(0, 4));