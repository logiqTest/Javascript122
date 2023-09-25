//If Statement

let a = 30
let b = 20

if (a > b) {
  //30 > 20 ? 1, 0
  //if(condition)
  console.log('a is big') //On True executes this section
} else {
  console.log('b is big') //On false executes this section
}

console.log('********************')

const onFlag = true //1
const offFlag = false //0
if (onFlag) {
  console.log('System is UP')
} else {
  console.log('System is Down')
}

console.log('********************')

//If statement with operators
//|| -> OR operator && -> AND operator

let num1 = 200
let num2 = 500

if (num1 > 150 || num2 < 100) {
  //False
  console.log('True block is executing')
} else {
  console.log('False block is executing')
}

if (num1 > 150 && num2 < 100) {
  console.log('True block is executing in AND world')
} else {
  console.log('False block is executing in AND world')
}

console.log('********************')

//while loop
let i = 10
while (i > 1) {
  console.log(i)
  i--
}

console.log('********************')
let j = 1
while (j < 10) {
  console.log(j)
  j++
}

console.log('********************')

//Do While loop
let k = 10
do {
  console.log(k)
  k--
} while (k > 1)

console.log('&&&&&********************&&&&&&')

//For loop
for (let l = 0; l < 10; l++) {
  console.log(l)
}
console.log('&&&&&********************&&&&&&')
for (let m = 10; m > 1; m--) {
  console.log(m)
}
