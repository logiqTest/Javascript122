import { Person } from './classperson.js'

class Student extends Person {
  constructor(firstName, lastName, age, gender, marks) {
    super(firstName, lastName, age, gender)
    this.marks = marks
  }

  location() {
    return 'QUT'
  }
}

let student1 = new Student('John', 'Park', 18, 'M', 999)
console.log(student1)

console.log(student1.location())

console.log(student1.fullName())
