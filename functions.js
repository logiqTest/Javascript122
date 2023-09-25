//Functions
//addition of 2 numbers
function addTwoNumbers(a, b, c) {
  return a + b + c //30
} //function declaration -> function name

let sum = addTwoNumbers(10, 20, 10) // function call -> It calls addTwoNumbers
console.log(sum)

let sum1 = addTwoNumbers(90, 100, 10)
console.log(sum1)

// Function without a name
let sumOfNumbers = function (c, d) {
  return c + d
}

console.log(sumOfNumbers(10, 4))

//Arrow function
let sumOf2Numbers = (a, b) => a + b
console.log(sumOf2Numbers(5, 3))

function fullName1(firstName, lastName) {
  return firstName + ' ' + lastName
}

let myName = fullName1('Shiva', 'Ch')
console.log(myName)

let fullName = (firstName, lastName) => firstName + ' ' + lastName
console.log(fullName('John', 'Park'))
