import { validationForm } from "./validation.js";

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

  getCarDetails() {
    return `${this.getDetails()} with ${this.doors} doors`;
  }
}

const vehicleForm = document.getElementById("vehicleForm");
const vehicleList = document.getElementById("vehicleList");
const filterMake = document.getElementById("filterMake");
const filterYear = document.getElementById("filterYear");

let vehicles = [];

vehicleForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const make = document.getElementById("make").value.trim();
  const model = document.getElementById("model").value.trim();
  const year = document.getElementById("year").value.trim();
  const doors = document.getElementById("doors").value.trim();

  console.log("test:", make, model, year, doors);

  const validation = validationForm(make, model, year, doors);

  if (validation.isValid) {
    const car = new Car(make, model, year, doors);
    vehicles.push(car);
    displayVehicles(vehicles);
    vehicleForm.reset();
  } else {
    alert(validation.errorMessage);
  }
});

filterMake.addEventListener("input", function () {
  filterVehicles();
});

filterYear.addEventListener("input", function () {
  filterVehicles();
});

function displayVehicles(vehicles) {
  vehicleList.innerHTML = "";
  vehicles.forEach((vehicle) => {
    const li = document.createElement("li");
    li.textContent = vehicle.getCarDetails();
    vehicleList.appendChild(li);
  });
}

function filterVehicles() {
  const makeFilter = filterMake.value.toLowerCase();
  const yearFilter = filterYear.value;

  const filterVehicles = vehicles.filter((vehicle) => {
    return (
      (!makeFilter || vehicle.make.toLowerCase().includes(makeFilter)) &&
      (!yearFilter || vehicle.year == yearFilter)
    );
  });

  displayVehicles(filterVehicles);
}
