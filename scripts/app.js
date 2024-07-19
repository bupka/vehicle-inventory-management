class Vehicle {
  constructor(make, model, year) {
    (this.make = make), (this.model = model), (this.year = year);
  }

  getDetails() {
    return `${this.make} ${this.model} ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }
}
