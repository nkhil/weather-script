const { get } = require('./src');

(async function getWeatherForecast() {
  await get();
})();
