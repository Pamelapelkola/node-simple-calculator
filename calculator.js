var inputString = process.argv;

// Parses the command line argument to capture the "operand" (add, subtract, multiply, etc) and the numbers
var operand = inputString[2];
var numOne = inputString[3];
var numTwo = inputString[4];

var outputNum;

if(operand === 'add'){
outputNum = parseFloat(numOne) + parseFloat(numTwo);
} else if (operand === 'subtract') {
outputNum = parseFloat(numOne) - parseFloat(numTwo);
}else if(operand === 'multiply'){
    outputNum = parseFloat(numOne) * parseFloat(numTwo);

}else if(operand === 'divide'){
    outputNum = parseFloat(numOne) / parseFloat(numTwo);
}else if(operand === 'remainder'){
    outputNum = parseFloat(numOne) % parseFloat(numTwo);
}else if(operand === 'exp'){
    outputNum = Math.pow(numOne, numTwo);
}else{
    outputNum = "Not a recognized command"
}

console.log(outputNum);