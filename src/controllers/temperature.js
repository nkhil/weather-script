const axios = require('axios');
const config = require('../config');
const { convertKelvinToCelsius } = require('../utils/temperature');
const { capitalise } = require('../utils/capitalise');

require('dotenv').config();

function prepareResult(weather, temperature) {
  const { humidity } = temperature;
  const { description } = weather[0];
  const tempInCelsius = convertKelvinToCelsius(temperature.temp);
  const feelsLike = convertKelvinToCelsius(temperature.feels_like);
  const tempMax = convertKelvinToCelsius(temperature.temp_max);
  const tempMin = convertKelvinToCelsius(temperature.temp_min);
  const formattedDescription = capitalise(description);
  const result = `Temperature: ${tempInCelsius}°C (${formattedDescription})\nMin: ${tempMin}°C\nMax: ${tempMax}°C\nFeels Like: ${feelsLike}°C\nHumidity: ${humidity}%\n`;
  return result;
}

async function fetchData() {
  try {
    const {data: { weather, main: temperature }} = await axios.get(config.openWeather.URI, {
      params: {
        q: config.city,
        appid: process.env.OPENWEATHER_API_KEY,
      }
    })
    return prepareResult(weather, temperature);
  } catch (err) {
    console.log('THERE WAS AN ERROR');
    console.log(err);
  }
}

module.exports = {
  get: fetchData,
}
