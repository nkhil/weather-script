
function convertKelvinToCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(1);
}

module.exports = {
  convertKelvinToCelsius,
}
