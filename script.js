function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height)) {
      document.getElementById("result").innerHTML = "Please enter valid numbers";
      return;
    }

    if (weight <= 0 || height <= 0) {
      document.getElementById("result").innerHTML = "Please enter positive numbers";
      return;
    }

    let bmi = weight / Math.pow(height, 2);
    bmi = bmi.toFixed(3);
    document.getElementById("result").innerHTML = "Your BMI is " + bmi;
  }