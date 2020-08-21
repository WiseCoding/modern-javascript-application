import windDir from './wind';
import toggleAlert from './alert';

export default async function printForecast(forecast, city, id) {
  // Wait for Data from API
  const forecastData = await forecast;
  const cityName = city;

  // Make individual alert Messages possible
  let alertMessage = [];

  const forecastDiv = document.querySelector(`#forecast${id}`);
  let forecastPrint = '';
  forecastData.list.forEach((interval, i) => {
    // Get Date/Time
    const time = interval.dt_txt;
    const adaptTime = time.replace(' ', 'T');
    const date = new Date(adaptTime);
    let day = date.getDay();
    let fullDay;
    let hours = date.getHours();
    hours < 10 ? (hours = `0${hours}`) : '';
    hours = `${hours}:00`;
    switch (day) {
      case 0:
        day = 'Sun';
        break;
      case 1:
        day = 'Mon';
        break;
      case 2:
        day = 'Tue';
        break;
      case 3:
        day = 'Wed';
        break;
      case 4:
        day = 'Thu';
        break;
      case 5:
        day = 'Fri';
        break;
      case 6:
        day = 'Sat';
        break;
    }
    switch (day) {
      case 'Sun':
        fullDay = 'Sunday';
        break;
      case 'Mon':
        fullDay = 'Monday';
        break;
      case 'Tue':
        fullDay = 'Tuesday';
        break;
      case 'Wed':
        fullDay = 'Wednesday';
        break;
      case 'Thu':
        fullDay = 'Thursday';
        break;
      case 'Fri':
        fullDay = 'Friday';
        break;
      case 'Sat':
        fullDay = 'Saturday';
        break;
    }
    // Get Temp
    const getTemp = `${(interval.main.temp - 273).toFixed(0)}°`;
    // Get Prob Rain
    const probRain = (interval.pop * 100).toFixed(0);
    // Get Wind Speed & Direction
    const windSpeed = interval.wind.speed;
    const windDegree = interval.wind.deg;
    const windPos = windDir(windDegree);
    // Get Weather Icon
    const description = interval.weather[0].description;
    const icon = interval.weather[0].icon;
    const source = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    // Print Segments Per Time Interval
    const segment = `
        <!-- 3H SEGMENT #${i + 1} -->
        <div
          class="segment${id} grid items-center grid-cols-1 grid-rows-2 p-3 m-1 border border-gray-700 hover:bg-gray-900 hover:border-gray-600 rounded-lg shadow cursor-pointer"
        >
          <div class="text-gray-500">
            <p>${day}</p>
            <p>${hours}</p>
          </div>
          <img src="${source}" class="w-8 mx-auto" alt="${description} icon" title="${description} on ${day} at ${hours}" />
          <p class="text-lg" title="${getTemp} Celsius at ${fullDay} ${hours} in ${cityName}">${getTemp}</p>
        </div>
        `;
    forecastPrint += segment;

    // Create Descriptive text for each segment
    const describeSegment = `
      <div class="flex flex-wrap">
        <p class="mx-2"><i>${fullDay} ${hours} at ${cityName}:</i></p><p class="mx-2">Temperature ${getTemp} and ${description}.</p><p class="mx-2">${windPos}er wind, ${windSpeed}m/s.</p><p>There is a ${probRain}% chance of rain.</p>
      </div>`;
    alertMessage.push(describeSegment);
  });
  // Add all Segments to html
  forecastDiv.innerHTML = forecastPrint;

  // Click Info Box Per Segment
  const allSegments = document.querySelectorAll(`.segment${id}`);
  const alertMsg = document.querySelector('#alertMessage');
  allSegments.forEach(
    (segment, i) =>
      (segment.onclick = () => {
        alertMsg.innerHTML = alertMessage[i];
        toggleAlert('on');
      }),
  );
}
