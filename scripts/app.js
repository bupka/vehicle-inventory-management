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

let vehicle = [];

vehicleForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const make = document.getElementById("make").value;
  const model = document.getElementById("model").value;
  const year = document.getElementById("year").value;
  const doors = document.getElementById("doors").value;

  console.log("test:", make, model, year, doors);
});

function validationForm(make, model, year, doors) {
  let isValid = true;
  let errorMessage = "";

  if (!make) {
    isValid = false;
    errorMessage += "Make should not be empty.\n";
  }

  if (!model) {
    isValid = false;
    errorMessage += "Model should not be empty.\n";
  }

  if (!year) {
    isValid = false;
    errorMessage += "Year should not be empty.\n";
  } else {
    const yearValue = parseInt(year, 10);
    const currentYear = new Date().getFullYear();
    const firstCarYear = 1886;

    if (yearValue < firstCarYear || yearValue > currentYear) {
      isValid = false;
      errorMessage += `Year should be between ${firstCarYear} and ${currentYear}.\n`;
    }
  }

  if (!doors) {
    isValid = false;
    errorMessage += "Doors should not be empty.\n";
  } else {
    const doorsValue = parseInt(doors, 10);
    const minDoors = 1;
    const maxDoors = 6;

    if (doorsValue < minDoors || doorsValue > maxDoors) {
      isValid = false;
      errorMessage += `Doors should be between ${minDoors} and ${maxDoors}.\n`;
    }
  }

  return { isValid, errorMessage };
}
