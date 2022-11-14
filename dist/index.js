"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    const firstStr = (0, readline_sync_1.question)('Enter first number: \n');
    const operator = (0, readline_sync_1.question)('Enter operator: \n');
    const secondStr = (0, readline_sync_1.question)('Enter second number: \n');
    const validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        const firstNum = parseInt(firstStr);
        const secondNum = parseInt(secondStr);
        const result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\n invalid input \n');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    const maybeNum = parseInt(str);
    const isNum = !isNaN(maybeNum);
    return isNum;
}
main();
const user1 = {
    name: 'Reema',
    age: 27,
    specialization: 'Information Technology ',
};
const user2 = {
    name: 'Sarah',
    age: 26,
    specialization: 'Information System',
};
const user3 = {
    name: 'Haya',
    age: 24,
    specialization: 'Kindergarten',
};
console.log(user1.name);
console.log(user2.specialization);
console.log(user3.age);
