const axios = require('axios');
const config = require('./config');
const { convertFtoC, convertKelvinToCelsius } = require('./utils/temperature');
const chalk = require('chalk');
const { capitalise } = require('./utils/capitalise');

require('dotenv').config();

function drawResult({temp, tempMin, tempMax, feelsLike, humidity, description}) {
  const ICONS = {
    'clear sky': '☀️',
  }
  const icon = ICONS[description] || undefined;
  console.log(
    chalk.white(`Now: ${temp}°C`)
  )
  console.log(
    chalk.white(`${capitalise(description)} ${icon}`)
  )
  console.log(
    chalk.white(`Min: ⬇️  ${tempMin}°C | Max: ⬆️  ${tempMax}°C`)
  )
  console.log(
    chalk.white(`Feels like ${feelsLike}°C`)
  )
  console.log(
    chalk.white(`Humidity: ${humidity}%`)
  )
}

function printResult(weather, temperature) {
  const { humidity } = temperature;
  const { description } = weather[0];
  const tempInCelsius = convertKelvinToCelsius(temperature.temp);
  const feelsLike = convertKelvinToCelsius(temperature.feels_like);
  const tempMax = convertKelvinToCelsius(temperature.temp_max);
  const tempMin = convertKelvinToCelsius(temperature.temp_min);
  return {
    temp: tempInCelsius,
    tempMin,
    tempMax,
    feelsLike,
    humidity,
    description,
  }
}

async function fetchData() {
  try {
    const {data: { weather, main }} = await axios.get(config.openWeather.URI, {
      params: {
        q: config.city,
        appid: process.env.OPENWEATHER_API_KEY,
      }
    })
    const result = printResult(weather, main);
    drawResult(result)
    return result;
  } catch (err) {
    console.log('THERE WAS AN ERROR');
    console.log(err);
  }
}

module.exports = {
  get: fetchData,
}
