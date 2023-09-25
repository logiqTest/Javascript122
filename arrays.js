// 1st way of declaring an array

let marks = Array(9) // 0 - 7

marks = [90, 91, 92, 93, 94, 95, 96, 97, 98]

//        0| 1 | 2 | 3 ................|8| // memory  -> starting from 0 to (array size - 1)

console.log(marks)

console.log(marks[6])

//  2nd way of Array declaration
let marks1 = new Array(90, 89, 88, 87, 86, 85) // Array size 6
console.log('2nd declaration is printing', marks1[0], marks1[5])

// 3rd way of Array declaration
let marks2 = [50, 51, 52, 53, 54, 55, 55, 55]
console.log('3rd declaration is printing', marks2[5], marks2[6], marks2[7])

marks2[0] = 90
console.log(marks2)

marks2[7] = 75
console.log(marks2)

console.log('*****************')
marks2.pop()
console.log(marks2)
console.log(marks2.length)
console.log(marks2.indexOf(53))
console.log('New array length', marks2.push(87))
console.log(marks2)
marks2.unshift(67)
console.log('New element is added', marks2)
marks2.shift()
console.log(marks2)
