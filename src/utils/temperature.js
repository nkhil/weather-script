
function convertFtoC(tempInF) {
  return (tempInF - 32) * 5/9
}

function convertKelvinToCelsius(kelvin) {
  // Kelvin = Celsius + 273.15
  return (kelvin - 273.15).toFixed(1);
}

module.exports = {
  convertFtoC,
  convertKelvinToCelsius,
}