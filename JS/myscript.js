function calculateAge() {
  var day = parseInt(document.getElementById('dayInput').value, 10);
  var month = parseInt(document.getElementById('monthInput').value, 10);
  var year = parseInt(document.getElementById('yearInput').value, 10);

  // Validate input
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    alert("Please enter valid numbers for day, month, and year.");
    resetResult(); // Reset result if input is invalid
    return;
  }

  // Validate the number of days based on the selected month
  var maxDaysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > maxDaysInMonth || month < 1 || month > 12) {
    alert("Please enter a valid number for day (1-" + maxDaysInMonth + ") and month (1-12).");
    resetResult(); // Reset result if day or month is not valid
    return;
  }

  var birthdate = new Date(year, month - 1, day);
  var currentDate = new Date();
  var ageInMilliseconds = currentDate - birthdate;

  var years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
  var months = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
  var days = Math.floor((ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

  // Display the result
  document.getElementById('resultYear').innerText = years;
  document.getElementById('resultMonth').innerText = months;
  document.getElementById('resultDay').innerText = days;
}


