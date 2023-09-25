// class declaration

class Car {
  constructor(color, fuelMode, brand, price, availability) {
    this.color = color
    this.fuelMode = fuelMode
    this.brand = brand
    this.price = price
    this.availability = availability
  }
}

let Tesla = new Car('Red', 'EV', 'Tesla', 45000, 'Available') //class object creation
console.log(Tesla.color)

let Toyoto = new Car('Blue', 'E10', 'Toyoto', 55000, 'Not available')
console.log(Toyoto.price)
