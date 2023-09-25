//Create a class to define properties of a Person

export class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
  }

  fullName() {
    {
      let fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
  }

  location() {
    return 'Australia'
  }
}

//console.log(shiva.fullName())

//console.log(shiva.location())

//These are extra file information needed for github
