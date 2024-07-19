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

  getDetails() {
    return `${this.getDetails()} with ${this.doors} doors`;
  }
}

const vehicleForm = document.getElementById("vehicleForm");
const vehicleList = document.getElementById("vehicleList");
const filterMake = document.getElementById("filterMake");
const filterYear = document.getElementById("filterYear");

let vehicle = [];

vehicleForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const make = document.getElementById("make").value;
  const model = document.getElementById("model").value;
  const year = document.getElementById("year").value;
  const doors = document.getElementById("doors").value;

  console.log("test:", make, model, year, doors);
});
