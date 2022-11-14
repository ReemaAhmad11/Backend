import { question } from 'readline-sync';

//Question1
type Operator = '+' | '-' | '*' | '/';

function main(): void {
  const firstStr: string = question('Enter first number: \n');
  const operator: string = question('Enter operator: \n');
  const secondStr: string = question('Enter second number: \n');

  const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

  if (validInput) {
    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    const result = calculate(firstNum, operator as Operator, secondNum);
    console.log(result);
  }
  else {
    console.log('\n invalid input \n');
    main();
  }

}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
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




function isOperator(operator: string): boolean {
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


function isNumber(str: string): boolean {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);
  return isNum
}

main();


// const username = 'Reema';
// console.log(username);


//Question2
interface IUser {
  name: string;
  age: number;
  specialization: string;
}

const user1: IUser = {
  name: 'Reema',
  age: 27,
  specialization: 'Information Technology ',
}

const user2: IUser = {
  name: 'Sarah',
  age: 26,
  specialization: 'Information System',
}

const user3: IUser = {
  name: 'Haya',
  age: 24,
  specialization: 'Kindergarten',
}

console.log(user1.name);
console.log(user2.specialization);
console.log(user3.age);


