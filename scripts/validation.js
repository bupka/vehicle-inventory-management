export function validationForm(make, model, year, doors) {
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
