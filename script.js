const weatherApi = 'https://api.weatherapi.com/v1/current.json?key=';
const token = '896bb2b1c14f43dcabe224832241902&q=';
const aqi = '&aqi=no';
const app = document.querySelector('.app')
const image = document.createElement('img');

async function getWeather(location) {
  const weatherString = weatherApi + token + location + aqi;
  console.log(weatherString);
  const theWeather = await fetch(weatherString, {mode: 'cors'});
  const theWeatherData = await theWeather.json();
  image.src = 'https:' + theWeatherData.current.condition.icon;
  image.style.width = '200px';
  app.appendChild(image);
  console.log(theWeatherData.current.condition);
}

getWeather('London');
