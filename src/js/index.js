import '../css/index.css';
import './search';

import userPushEnter from './enter';
import unsetControls from './controls';
import { setPreviousCity } from './city';
import animInputBox from './animate';
import { toggleForecast, toggleCompare, togglePhotos } from './toggle';
import { errors, getWeather, getForecast, getPhotos } from './fetch';
import printWeather from './weather';
import printForecast from './forecast';
import printPhotos from './photos';
import toggleAlert from './alert';

(() => {
  // ON LOAD
  userPushEnter();
  unsetControls();
  setPreviousCity();

  // SUBMIT CLICK
  const submit = document.querySelectorAll('.SUBMIT');
  submit.forEach(
    // eslint-disable-next-line no-return-assign
    (button) =>
      // eslint-disable-next-line implicit-arrow-linebreak
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
      }),
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
