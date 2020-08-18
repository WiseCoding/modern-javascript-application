export async function errors(error) {
  await error;
  console.errors(error);
}

export async function getWeather(city, country) {
  // Fetch current weather data for a specific city
  const apiKey = '16b8985dd4d01e5dda0af6d392345499';
  const countryCode = country;
  const weatherFetch = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`;
  const response = await fetch(weatherFetch);
  return response.json();
}

export async function getForecast(city, country) {
  // Fetch weather 5 day (3h interval) forecast data for a specific city (40 data points)
  const apiKey = '16b8985dd4d01e5dda0af6d392345499';
  const countryCode = country;
  const forecastFetch = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}`;
  const response = await fetch(forecastFetch);
  return response.json();
}

export async function getPhotos(cityName) {
  const apiKey = 'fT0XySJ5M9TWNQrMTeoMCTT4evMzdUy7Pb3fDGVj3gk';
  const city = cityName.replace(/\s+/g, '%20'); // Change spaces in city name with %20
  const photoFetch = `https://api.unsplash.com/photos/random?client_id=${apiKey}&query=${city}&orientation=squarish&count=9`;
  const response = await fetch(photoFetch);
  return response.json();
}
