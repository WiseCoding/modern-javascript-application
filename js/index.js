import userPushEnter from './enter.js';
import unsetControls from './controls.js';
import setPreviousCity from './city.js';
import animInputBox from './animate.js';
import { toggleForecast, toggleCompare, togglePhotos } from './toggle.js';
import { errors, getWeather, getForecast, getPhotos } from './fetch.js';
import printWeather from './weather.js';
import printForecast from './forecast.js';
import printPhotos from './photos.js';
import toggleAlert from './alert.js';

(() => {
  // ON LOAD
  userPushEnter();
  unsetControls();
  setPreviousCity();

  // SUBMIT CLICK
  const submit = document.querySelectorAll(`.SUBMIT`);
  submit.forEach(
    (button) =>
      (button.onclick = () => {
        const side = button.value;
        animInputBox(side);
        const input = document.querySelector(`#input${side}`).value;
        const country = input.split(',').pop();
        const cityName = input.split(',').shift();
        const city = document.querySelector(`#input${side}`).value;
        const weather = getWeather(city, country).catch(errors);
        const forecast = getForecast(city, country).catch(errors);
        printWeather(weather, forecast, side);
        printForecast(forecast, cityName, side);

        if (side === 'Left') {
          const photos = getPhotos(cityName).catch(errors);
          printPhotos(photos, cityName);
        }
      })
  );

  // Forecast ON/OFF
  document.querySelector('#forecastControl').onclick = () => {
    toggleForecast();
  };
  // Compare ON/OFF
  document.querySelector('#compareControl').onclick = () => {
    toggleCompare();
  };
  // Photos ON/OFF
  document.querySelector('#photosControl').onclick = () => {
    togglePhotos();
  };
  // AlertBox Click
  document.querySelector('#alertDiv').onclick = () => {
    toggleAlert('off');
  };
})();
