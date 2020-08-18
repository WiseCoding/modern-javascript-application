// Forecast Section
export function toggleForecast() {
  // audio
  const audioWhoop = new Audio('audio/whoop.mp3');
  audioWhoop.play();

  const forecastControl = document.querySelector('#forecastControl');
  const forecastCheck = document.querySelector('#forecastCheck');
  const forecastBoxLeft = document.querySelector('#forecastLeft');
  const forecastBoxRight = document.querySelector('#forecastRight');

  // Toggle checkbox on click
  forecastCheck.checked
    ? (forecastCheck.checked = false)
    : (forecastCheck.checked = true);

  if (forecastCheck.checked) {
    //on
    forecastControl.classList.remove('bg-blue-500', 'border-white');
    forecastControl.classList.add('bg-green-500', 'border-black');
    forecastBoxLeft.classList.remove('hidden');
    forecastBoxLeft.classList.add('flex');
    forecastBoxRight.classList.remove('hidden');
    forecastBoxRight.classList.add('flex');
  } else {
    //off
    forecastControl.classList.remove('bg-green-500', 'border-black');
    forecastControl.classList.add('bg-blue-500', 'border-white');
    forecastBoxLeft.classList.remove('flex');
    forecastBoxLeft.classList.add('hidden');
    forecastBoxRight.classList.remove('flex');
    forecastBoxRight.classList.add('hidden');
  }
}
// Compare Section
export function toggleCompare() {
  // audio
  const audioWhoop = new Audio('audio/whoop.mp3');
  audioWhoop.play();

  // Open/Close compareDiv on click
  const main = document.querySelector('main');
  const compareControl = document.querySelector('#compareControl');
  const compareRight = document.querySelector('#compareRight');
  const compareCheck = document.querySelector('#compareCheck');
  const iconLeft = document.querySelector('#weatherIconLeft');
  const iconRight = document.querySelector('#weatherIconRight');
  const inputDivLeft = document.querySelector('#inputDivLeft');
  const inputDivRight = document.querySelector('#inputDivRight');
  const photosControl = document.querySelector('#photosControl');

  // Toggle checkbox on click
  compareCheck.checked ? (compareCheck.checked = false) : (compareCheck.checked = true);

  if (compareCheck.checked) {
    //on
    compareControl.classList.remove('bg-blue-500', 'border-white');
    compareControl.classList.add('bg-green-500', 'border-black');
    main.classList.add('md:grid', 'md:grid-cols-2', 'md:gap-4');
    compareRight.classList.add('md:inline');
    iconLeft.classList.remove('sm:-translate-y-24', 'sm:w-40');
    iconLeft.classList.add('lg:-translate-y-24', 'lg:w-40');
    iconRight.classList.remove('sm:-translate-y-24', 'sm:w-40');
    iconRight.classList.add('lg:-translate-y-24', 'lg:w-40');
    inputDivLeft.classList.remove('sm:mb-32');
    inputDivRight.classList.remove('sm:mb-32');
    photosControl.classList.remove('md:inline');
  } else {
    //off
    compareControl.classList.remove('bg-green-500', 'border-black');
    compareControl.classList.add('bg-blue-500', 'border-white');
    main.classList.remove('md:grid', 'md:grid-cols-2', 'md:gap-4');
    compareRight.classList.remove('md:inline');
    iconLeft.classList.remove('lg:-translate-y-24', 'lg:w-40');
    iconLeft.classList.add('sm:-translate-y-24', 'sm:w-40');
    iconRight.classList.remove('lg:-translate-y-24', 'lg:w-40');
    iconRight.classList.add('sm:-translate-y-24', 'sm:w-40');
    inputDivLeft.classList.add('sm:mb-32');
    inputDivRight.classList.add('sm:mb-32');
    photosControl.classList.add('md:inline');
  }
}
// Photos Section
export function togglePhotos() {
  // audio
  const audioWhoop = new Audio('audio/whoop.mp3');
  audioWhoop.play();

  const main = document.querySelector('main');
  const photosBox = document.querySelector('#photosBox');
  const photosControl = document.querySelector('#photosControl');
  const photosCheck = document.querySelector('#photosCheck');
  const compareControl = document.querySelector('#compareControl');
  const iconLeft = document.querySelector('#weatherIconLeft');

  // Toggle checkbox on click
  photosCheck.checked ? (photosCheck.checked = false) : (photosCheck.checked = true);

  if (photosCheck.checked) {
    //on
    photosControl.classList.remove('bg-blue-500', 'border-white');
    photosControl.classList.add('bg-green-500', 'border-black');
    main.classList.add('md:grid', 'md:grid-cols-2', 'md:gap-4');
    photosBox.classList.add('md:grid');
    compareControl.classList.remove('md:inline');
    iconLeft.classList.remove('sm:-translate-y-24', 'sm:w-40');
    iconLeft.classList.add('lg:-translate-y-24', 'lg:w-40');
  } else {
    //off
    photosControl.classList.remove('bg-green-500', 'border-black');
    photosControl.classList.add('bg-blue-500', 'border-white');
    main.classList.remove('md:grid', 'md:grid-cols-2', 'md:gap-4');
    photosBox.classList.remove('md:grid');
    compareControl.classList.add('md:inline');
    iconLeft.classList.remove('lg:-translate-y-24', 'lg:w-40');
    iconLeft.classList.add('sm:-translate-y-24', 'sm:w-40');
  }
}
