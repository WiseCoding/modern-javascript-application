/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/alert.js":
/*!*********************!*\
  !*** ./js/alert.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toggleAlert; });\nfunction toggleAlert(state) {\n  const alertDiv = document.querySelector('#alertDiv');\n  if (state === 'off') {\n    alertDiv.classList.add('hidden');\n  }\n  if (state === 'on') {\n    alertDiv.classList.remove('hidden');\n  }\n}\n\n\n//# sourceURL=webpack:///./js/alert.js?");

/***/ }),

/***/ "./js/animate.js":
/*!***********************!*\
  !*** ./js/animate.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return animInputBox; });\nfunction animInputBox(id) {\n  // Sound\n  const audio = new Audio('audio/tick.mp3');\n  audio.play();\n  // Animate\n  document.querySelector(`#inputDiv${id}`).classList.add('animate-bounce');\n  const timeout = setTimeout(() => {\n    document.querySelector(`#inputDiv${id}`).classList.remove('animate-bounce');\n    clearTimeout(timeout);\n  }, 1520);\n}\n\n\n//# sourceURL=webpack:///./js/animate.js?");

/***/ }),

/***/ "./js/city.js":
/*!********************!*\
  !*** ./js/city.js ***!
  \********************/
/*! exports provided: getCity, setCity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCity\", function() { return getCity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCity\", function() { return setCity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setPreviousCity; });\n// Save/Update submitted city in local storage\nfunction getCity(id) {\n  if (localStorage.getItem(`Prev City ${id}`) !== null) {\n    const city = localStorage.getItem(`Prev City ${id}`).toString();\n    document.querySelector(`#input${id}`).value = city;\n  }\n}\n\n// Get previous city from local storage\nfunction setCity(city, country, id) {\n  localStorage.setItem(`Prev City ${id}`, `${city}, ${country}`);\n}\n\n// Set previous city name in input fields\nfunction setPreviousCity() {\n  // Check previous city, if set, add to input field\n  if (localStorage.getItem('Prev City Left') !== null) {\n    getCity('Left');\n  }\n  if (localStorage.getItem('Prev City Right') !== null) {\n    getCity('Right');\n  }\n}\n\n\n//# sourceURL=webpack:///./js/city.js?");

/***/ }),

/***/ "./js/controls.js":
/*!************************!*\
  !*** ./js/controls.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return unsetControls; });\n// Unset all control buttons\nfunction unsetControls() {\n  const forecastCheck = document.querySelector('#forecastCheck');\n  const compareCheck = document.querySelector('#compareCheck');\n  const photosCheck = document.querySelector('#photosCheck');\n  forecastCheck.checked = false;\n  compareCheck.checked = false;\n  photosCheck.checked = false;\n}\n\n\n//# sourceURL=webpack:///./js/controls.js?");

/***/ }),

/***/ "./js/enter.js":
/*!*********************!*\
  !*** ./js/enter.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userPushEnter; });\n// Handle enter key push\nfunction userPushEnter() {\n  const html = document.querySelector('html');\n  html.addEventListener('keyup', (enter) => {\n    // Number 13 is the \"Enter\" key on the keyboard\n    if (enter.keyCode === 13) {\n      enter.preventDefault();\n      document.querySelector('#submitLeft').click();\n      document.querySelector('#submitRight').click();\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./js/enter.js?");

/***/ }),

/***/ "./js/fetch.js":
/*!*********************!*\
  !*** ./js/fetch.js ***!
  \*********************/
/*! exports provided: errors, getWeather, getForecast, getPhotos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"errors\", function() { return errors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeather\", function() { return getWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getForecast\", function() { return getForecast; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPhotos\", function() { return getPhotos; });\nasync function errors(error) {\n  await error;\n  console.errors(error);\n}\n\nasync function getWeather(city, country) {\n  // Fetch current weather data for a specific city\n  const apiKey = '16b8985dd4d01e5dda0af6d392345499';\n  const countryCode = country;\n  const weatherFetch = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`;\n  const response = await fetch(weatherFetch);\n  return response.json();\n}\n\nasync function getForecast(city, country) {\n  // Fetch weather 5 day (3h interval) forecast data for a specific city (40 data points)\n  const apiKey = '16b8985dd4d01e5dda0af6d392345499';\n  const countryCode = country;\n  const forecastFetch = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}`;\n  const response = await fetch(forecastFetch);\n  return response.json();\n}\n\nasync function getPhotos(cityName) {\n  const apiKey = 'fT0XySJ5M9TWNQrMTeoMCTT4evMzdUy7Pb3fDGVj3gk';\n  const city = cityName.replace(/\\s+/g, '%20'); // Change spaces in city name with %20\n  const photoFetch = `https://api.unsplash.com/photos/random?client_id=${apiKey}&query=${city}&orientation=squarish&count=9`;\n  const response = await fetch(photoFetch);\n  return response.json();\n}\n\n\n//# sourceURL=webpack:///./js/fetch.js?");

/***/ }),

/***/ "./js/forecast.js":
/*!************************!*\
  !*** ./js/forecast.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return printForecast; });\n/* harmony import */ var _wind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wind */ \"./js/wind.js\");\n/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ \"./js/alert.js\");\n\n\n\nasync function printForecast(forecast, city, id) {\n  // Wait for Data from API\n  const forecastData = await forecast;\n  const cityName = city;\n\n  // Make individual alert Messages possible\n  let alertMessage = [];\n\n  const forecastDiv = document.querySelector(`#forecast${id}`);\n  let forecastPrint = '';\n  forecastData.list.forEach((interval, i) => {\n    // Get Date/Time\n    const time = interval.dt_txt;\n    const adaptTime = time.replace(' ', 'T');\n    const date = new Date(adaptTime);\n    let day = date.getDay();\n    let fullDay;\n    let hours = date.getHours();\n    hours < 10 ? (hours = `0${hours}`) : '';\n    hours = `${hours}:00`;\n    switch (day) {\n      case 0:\n        day = 'Sun';\n        break;\n      case 1:\n        day = 'Mon';\n        break;\n      case 2:\n        day = 'Tue';\n        break;\n      case 3:\n        day = 'Wed';\n        break;\n      case 4:\n        day = 'Thu';\n        break;\n      case 5:\n        day = 'Fri';\n        break;\n      case 6:\n        day = 'Sat';\n        break;\n    }\n    switch (day) {\n      case 'Sun':\n        fullDay = 'Sunday';\n        break;\n      case 'Mon':\n        fullDay = 'Monday';\n        break;\n      case 'Tue':\n        fullDay = 'Tuesday';\n        break;\n      case 'Wed':\n        fullDay = 'Wednesday';\n        break;\n      case 'Thu':\n        fullDay = 'Thursday';\n        break;\n      case 'Fri':\n        fullDay = 'Friday';\n        break;\n      case 'Sat':\n        fullDay = 'Saturday';\n        break;\n    }\n    // Get Temp\n    const getTemp = `${(interval.main.temp - 273).toFixed(0)}°`;\n    // Get Prob Rain\n    const probRain = (interval.pop * 100).toFixed(0);\n    // Get Wind Speed & Direction\n    const windSpeed = interval.wind.speed;\n    const windDegree = interval.wind.deg;\n    const windPos = Object(_wind__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(windDegree);\n    // Get Weather Icon\n    const description = interval.weather[0].description;\n    const icon = interval.weather[0].icon;\n    const source = `https://openweathermap.org/img/wn/${icon}@2x.png`;\n\n    // Print Segments Per Time Interval\n    const segment = `\n        <!-- 3H SEGMENT #${i + 1} -->\n        <div\n          class=\"segment${id} grid items-center grid-cols-1 grid-rows-2 p-3 m-1 border border-gray-700 hover:bg-gray-900 hover:border-gray-600 rounded-lg shadow cursor-pointer\"\n        >\n          <div class=\"text-gray-500\">\n            <p>${day}</p>\n            <p>${hours}</p>\n          </div>\n          <img src=\"${source}\" class=\"w-8 mx-auto\" alt=\"${description} icon\" title=\"${description} on ${day} at ${hours}\" />\n          <p class=\"text-lg\" title=\"${getTemp} Celsius at ${fullDay} ${hours} in ${cityName}\">${getTemp}</p>\n        </div>\n        `;\n    forecastPrint += segment;\n\n    // Create Descriptive text for each segment\n    const describeSegment = `\n      <div class=\"flex flex-wrap\">\n        <p class=\"mx-2\"><i>${fullDay} ${hours} at ${cityName}:</i></p><p class=\"mx-2\">Temperature ${getTemp} and ${description}.</p><p class=\"mx-2\">${windPos}er wind, ${windSpeed}m/s.</p><p>There is a ${probRain}% chance of rain.</p>\n      </div>`;\n    alertMessage.push(describeSegment);\n  });\n  // Add all Segments to html\n  forecastDiv.innerHTML = forecastPrint;\n\n  // Click Info Box Per Segment\n  const allSegments = document.querySelectorAll(`.segment${id}`);\n  const alertMsg = document.querySelector('#alertMessage');\n  allSegments.forEach(\n    (segment, i) =>\n      (segment.onclick = () => {\n        alertMsg.innerHTML = alertMessage[i];\n        Object(_alert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('on');\n      }),\n  );\n}\n\n\n//# sourceURL=webpack:///./js/forecast.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enter */ \"./js/enter.js\");\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ \"./js/controls.js\");\n/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./city */ \"./js/city.js\");\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animate */ \"./js/animate.js\");\n/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggle */ \"./js/toggle.js\");\n/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetch */ \"./js/fetch.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather */ \"./js/weather.js\");\n/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forecast */ \"./js/forecast.js\");\n/* harmony import */ var _photos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photos */ \"./js/photos.js\");\n/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alert */ \"./js/alert.js\");\n\n\n\n\n\n\n\n\n\n\n\n(() => {\n  // ON LOAD\n  Object(_enter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_controls__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_city__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n  // SUBMIT CLICK\n  const submit = document.querySelectorAll('.SUBMIT');\n  submit.forEach(\n    // eslint-disable-next-line no-return-assign\n    (button) =>\n      // eslint-disable-next-line implicit-arrow-linebreak\n      (button.onclick = () => {\n        const side = button.value;\n        Object(_animate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(side);\n        const input = document.querySelector(`#input${side}`).value;\n        const country = input.split(',').pop();\n        const cityName = input.split(',').shift();\n        const city = document.querySelector(`#input${side}`).value;\n        const weather = Object(_fetch__WEBPACK_IMPORTED_MODULE_5__[\"getWeather\"])(city, country).catch(_fetch__WEBPACK_IMPORTED_MODULE_5__[\"errors\"]);\n        const forecast = Object(_fetch__WEBPACK_IMPORTED_MODULE_5__[\"getForecast\"])(city, country).catch(_fetch__WEBPACK_IMPORTED_MODULE_5__[\"errors\"]);\n        Object(_weather__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(weather, forecast, side);\n        Object(_forecast__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(forecast, cityName, side);\n\n        if (side === 'Left') {\n          const photos = Object(_fetch__WEBPACK_IMPORTED_MODULE_5__[\"getPhotos\"])(cityName).catch(_fetch__WEBPACK_IMPORTED_MODULE_5__[\"errors\"]);\n          Object(_photos__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(photos, cityName);\n        }\n      }),\n  );\n\n  // Forecast ON/OFF\n  document.querySelector('#forecastControl').onclick = () => {\n    Object(_toggle__WEBPACK_IMPORTED_MODULE_4__[\"toggleForecast\"])();\n  };\n  // Compare ON/OFF\n  document.querySelector('#compareControl').onclick = () => {\n    Object(_toggle__WEBPACK_IMPORTED_MODULE_4__[\"toggleCompare\"])();\n  };\n  // Photos ON/OFF\n  document.querySelector('#photosControl').onclick = () => {\n    Object(_toggle__WEBPACK_IMPORTED_MODULE_4__[\"togglePhotos\"])();\n  };\n  // AlertBox Click\n  document.querySelector('#alertDiv').onclick = () => {\n    Object(_alert__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('off');\n  };\n})();\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/photos.js":
/*!**********************!*\
  !*** ./js/photos.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return printPhotos; });\nasync function printPhotos(photos, city) {\n  const photosData = await photos;\n  const photosBox = document.querySelector('#photosBox');\n  let photosInject = '';\n\n  if (photosData.errors === undefined) {\n    photosData.forEach((pics, i) => {\n      const photo = pics.urls.regular;\n      let alt = pics.alt_description;\n      alt === null ? (alt = 'random unsplash image') : '';\n      const html = `\n        <img\n          src=\"${photo}\"\n          alt=\"${alt}\"\n          title=\"${alt}\"\n          class=\"object-cover max-h-xs border shadow-lg rounded-lg border-white\"\n        />\n      `;\n      photosInject += html;\n    });\n    photosBox.innerHTML = photosInject;\n  } else {\n    photosBox.innerHTML = `<p class=\"shadow-md bg-gray-100 text-gray-700 text-center self-start p-8 border rounded-lg\">${city} has no photo's available 😔</p>`;\n  }\n}\n\n\n//# sourceURL=webpack:///./js/photos.js?");

/***/ }),

/***/ "./js/toggle.js":
/*!**********************!*\
  !*** ./js/toggle.js ***!
  \**********************/
/*! exports provided: toggleForecast, toggleCompare, togglePhotos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleForecast\", function() { return toggleForecast; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleCompare\", function() { return toggleCompare; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"togglePhotos\", function() { return togglePhotos; });\n// Forecast Section\nfunction toggleForecast() {\n  // audio\n  const audioWhoop = new Audio('audio/whoop.mp3');\n  audioWhoop.play();\n\n  const forecastControl = document.querySelector('#forecastControl');\n  const forecastCheck = document.querySelector('#forecastCheck');\n  const forecastBoxLeft = document.querySelector('#forecastLeft');\n  const forecastBoxRight = document.querySelector('#forecastRight');\n\n  // Toggle checkbox on click\n  forecastCheck.checked\n    ? (forecastCheck.checked = false)\n    : (forecastCheck.checked = true);\n\n  if (forecastCheck.checked) {\n    // on\n    forecastControl.classList.remove('bg-blue-500', 'border-white');\n    forecastControl.classList.add('bg-green-500', 'border-black');\n    forecastBoxLeft.classList.remove('hidden');\n    forecastBoxLeft.classList.add('flex');\n    forecastBoxRight.classList.remove('hidden');\n    forecastBoxRight.classList.add('flex');\n  } else {\n    // off\n    forecastControl.classList.remove('bg-green-500', 'border-black');\n    forecastControl.classList.add('bg-blue-500', 'border-white');\n    forecastBoxLeft.classList.remove('flex');\n    forecastBoxLeft.classList.add('hidden');\n    forecastBoxRight.classList.remove('flex');\n    forecastBoxRight.classList.add('hidden');\n  }\n}\n// Compare Section\nfunction toggleCompare() {\n  // audio\n  const audioWhoop = new Audio('audio/whoop.mp3');\n  audioWhoop.play();\n\n  // Open/Close compareDiv on click\n  const main = document.querySelector('main');\n  const compareControl = document.querySelector('#compareControl');\n  const compareRight = document.querySelector('#compareRight');\n  const compareCheck = document.querySelector('#compareCheck');\n  const iconLeft = document.querySelector('#weatherIconLeft');\n  const iconRight = document.querySelector('#weatherIconRight');\n  const inputDivLeft = document.querySelector('#inputDivLeft');\n  const inputDivRight = document.querySelector('#inputDivRight');\n  const photosControl = document.querySelector('#photosControl');\n\n  // Toggle checkbox on click\n  compareCheck.checked ? (compareCheck.checked = false) : (compareCheck.checked = true);\n\n  if (compareCheck.checked) {\n    // on\n    compareControl.classList.remove('bg-blue-500', 'border-white');\n    compareControl.classList.add('bg-green-500', 'border-black');\n    main.classList.add('md:grid', 'md:grid-cols-2', 'md:gap-4');\n    compareRight.classList.add('md:inline');\n    iconLeft.classList.remove('sm:-translate-y-24', 'sm:w-40');\n    iconLeft.classList.add('lg:-translate-y-24', 'lg:w-40');\n    iconRight.classList.remove('sm:-translate-y-24', 'sm:w-40');\n    iconRight.classList.add('lg:-translate-y-24', 'lg:w-40');\n    inputDivLeft.classList.remove('sm:mb-32');\n    inputDivRight.classList.remove('sm:mb-32');\n    photosControl.classList.remove('md:inline');\n  } else {\n    // off\n    compareControl.classList.remove('bg-green-500', 'border-black');\n    compareControl.classList.add('bg-blue-500', 'border-white');\n    main.classList.remove('md:grid', 'md:grid-cols-2', 'md:gap-4');\n    compareRight.classList.remove('md:inline');\n    iconLeft.classList.remove('lg:-translate-y-24', 'lg:w-40');\n    iconLeft.classList.add('sm:-translate-y-24', 'sm:w-40');\n    iconRight.classList.remove('lg:-translate-y-24', 'lg:w-40');\n    iconRight.classList.add('sm:-translate-y-24', 'sm:w-40');\n    inputDivLeft.classList.add('sm:mb-32');\n    inputDivRight.classList.add('sm:mb-32');\n    photosControl.classList.add('md:inline');\n  }\n}\n// Photos Section\nfunction togglePhotos() {\n  // audio\n  const audioWhoop = new Audio('audio/whoop.mp3');\n  audioWhoop.play();\n\n  const main = document.querySelector('main');\n  const photosBox = document.querySelector('#photosBox');\n  const photosControl = document.querySelector('#photosControl');\n  const photosCheck = document.querySelector('#photosCheck');\n  const compareControl = document.querySelector('#compareControl');\n  const iconLeft = document.querySelector('#weatherIconLeft');\n\n  // Toggle checkbox on click\n  photosCheck.checked ? (photosCheck.checked = false) : (photosCheck.checked = true);\n\n  if (photosCheck.checked) {\n    //on\n    photosControl.classList.remove('bg-blue-500', 'border-white');\n    photosControl.classList.add('bg-green-500', 'border-black');\n    main.classList.add('md:grid', 'md:grid-cols-2', 'md:gap-4');\n    photosBox.classList.add('md:grid');\n    compareControl.classList.remove('md:inline');\n    iconLeft.classList.remove('sm:-translate-y-24', 'sm:w-40');\n    iconLeft.classList.add('lg:-translate-y-24', 'lg:w-40');\n  } else {\n    // off\n    photosControl.classList.remove('bg-green-500', 'border-black');\n    photosControl.classList.add('bg-blue-500', 'border-white');\n    main.classList.remove('md:grid', 'md:grid-cols-2', 'md:gap-4');\n    photosBox.classList.remove('md:grid');\n    compareControl.classList.add('md:inline');\n    iconLeft.classList.remove('lg:-translate-y-24', 'lg:w-40');\n    iconLeft.classList.add('sm:-translate-y-24', 'sm:w-40');\n  }\n}\n\n\n//# sourceURL=webpack:///./js/toggle.js?");

/***/ }),

/***/ "./js/weather.js":
/*!***********************!*\
  !*** ./js/weather.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return printWeather; });\n/* harmony import */ var _wind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wind */ \"./js/wind.js\");\n/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city */ \"./js/city.js\");\n\n\n\nasync function printWeather(weather, forecast, id) {\n  // Wait for Data from API\n  const weatherData = await weather;\n  const forecastData = await forecast;\n\n  // City Name\n  const cityName = await weatherData.name;\n  const countryCode = await weatherData.sys.country;\n  Object(_city__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cityName, countryCode, id);\n\n  // Show WeatherBox\n  const weatherBox = document.querySelector(`#weatherBox${id}`).classList;\n  weatherBox.remove('hidden');\n\n  // WEATHER ICON SWAP\n  const weatherIcon = document.querySelector(`#weatherIcon${id}`);\n  const icon = await weatherData.weather[0].icon;\n  const src = 'images/status/';\n  switch (icon) {\n    case '01d': // day: clear sky\n      weatherIcon.src = `${src}sun.svg`;\n      break;\n    case '01n': // night: clear sky\n      weatherIcon.src = `${src}night-cloud-full.svg`;\n      break;\n    case '02d': // day: few clouds\n      weatherIcon.src = `${src}cloud-sun.svg`;\n      break;\n    case '02n': // night: few clouds\n      weatherIcon.src = `${src}night-cloud-half.svg`;\n      break;\n    case '03d': // day: scattered clouds\n      weatherIcon.src = `${src}clouds.svg`;\n      break;\n    case '03n': // night: scattered clouds\n      weatherIcon.src = `${src}night-cloud-half.svg`;\n      break;\n    case '04d': // day: broken clouds\n      weatherIcon.src = `${src}clouds.svg`;\n      break;\n    case '04n': // night: broken clouds\n      weatherIcon.src = `${src}night-cloud-half.svg`;\n      break;\n    case '09d': // day: shower rain\n      weatherIcon.src = `${src}rain.svg`;\n      break;\n    case '09n': // night: shower rain\n      weatherIcon.src = `${src}rain.svg`;\n      break;\n    case '10d': // day: light rain\n      weatherIcon.src = `${src}rain-cloud-sun.svg`;\n      break;\n    case '10n': // night: light rain\n      weatherIcon.src = `${src}rain.svg`;\n      break;\n    case '11d': // day: thunderstorm\n      weatherIcon.src = `${src}thunder-storm.svg`;\n      break;\n    case '11n': // night: thunderstorm\n      weatherIcon.src = `${src}thunder-storm.svg`;\n      break;\n    case '13d': // day: snow\n      weatherIcon.src = `${src}snowy.svg`;\n      break;\n    case '13n': // night: snow\n      weatherIcon.src = `${src}snowy.svg`;\n      break;\n    case '50d': // day: fog\n      weatherIcon.src = `${src}fog.svg`;\n      break;\n    case '50n': // night: fog\n      weatherIcon.src = `${src}fog-night.svg`;\n      break;\n    default:\n      weatherIcon.src = `${src}default.svg`;\n      break;\n  }\n\n  // ============================= //\n  // Print CURRENT WEATHER SECTION //\n  // ============================= //\n  // TEMPS\n  const temp = document.querySelector(`#temp${id}`);\n  const currentTemp = `${(weatherData.main.temp - 273).toFixed(0)}°`;\n  const min = document.querySelector(`#min${id}`);\n  const minTemp = `${(weatherData.main.temp_min - 273).toFixed(0)}°`;\n  const max = document.querySelector(`#max${id}`);\n  const maxTemp = `${(weatherData.main.temp_max - 273).toFixed(0)}°`;\n  temp.textContent = currentTemp;\n  min.textContent = minTemp;\n  max.textContent = maxTemp;\n  temp.title = `It's currently ${currentTemp} Celsius in ${cityName}`;\n  min.title = `It will be minimum ${minTemp} Celsius in ${cityName}`;\n  max.title = `It will be maximum ${maxTemp} Celsius in ${cityName}`;\n  // FEELS\n  const feels = document.querySelector(`#feels${id}`);\n  const feelsTemp = `${(weatherData.main.feels_like - 273).toFixed(0)}°`;\n  feels.textContent = feelsTemp;\n  feels.title = `It feels like ${feelsTemp} Celsius in ${cityName}`;\n  // TIME\n  const thisTime = document.querySelector(`#thisTime${id}`);\n  const date = new Date();\n  let hours = date.getHours();\n  let minutes = date.getMinutes();\n  minutes < 10 ? (minutes = `0${minutes}`) : '';\n  hours < 10 ? (hours = `0${hours}`) : '';\n  thisTime.textContent = `${hours}:${minutes}`;\n  // CITY\n  const thisCity = document.querySelector(`#thisCity${id}`);\n  thisCity.textContent = cityName;\n  // Probability RAIN\n  const probRain = document.querySelector(`#probRain${id}`);\n  const probRainCalc = (forecastData.list[0].pop * 100).toFixed(0);\n  probRain.textContent = probRainCalc;\n  probRain.title = `There is a ${probRainCalc}% chance of rain in ${cityName}`;\n  // Probability CLOUDS\n  const probCloud = document.querySelector(`#probCloud${id}`);\n  const probCld = weatherData.clouds.all.toFixed(0);\n  probCloud.textContent = probCld;\n  probCloud.title = `${probCld}% of the sky in ${cityName} is covered by clouds`;\n  // HUMIDITY\n  const humidity = document.querySelector(`#humidity${id}`);\n  const humid = weatherData.main.humidity;\n  humidity.textContent = humid;\n  humidity.title = `There is ${humid}% humidity in the air in ${cityName}`;\n  // VISIBILITY\n  const visibility = document.querySelector(`#visibility${id}`);\n  const sight = weatherData.visibility;\n  sight > 900 ? (visibility.textContent = '+900') : (visibility.textContent = sight);\n  visibility.title = `It's possible to see ${sight} meters far in ${cityName}`;\n  // WIND\n  const windSpeed = document.querySelector(`#windSpeed${id}`);\n  const windDeg = document.querySelector(`#windDeg${id}`);\n  const windSpd = weatherData.wind.speed.toFixed(0);\n  const windDegree = weatherData.wind.deg;\n  const windPos = Object(_wind__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(windDegree);\n  windSpeed.textContent = windSpd;\n  windDeg.style.transform = `rotate(${windDegree}deg)`;\n  windDeg.title = `Wind blows ${windPos} at ${windSpd}m/s in ${cityName}`;\n  // PRESSURES\n  const sea = document.querySelector(`#presSea${id}`);\n  const seaPress = forecastData.list[0].main.sea_level;\n  const land = document.querySelector(`#presLand${id}`);\n  const landPress = forecastData.list[0].main.grnd_level;\n  sea.textContent = seaPress;\n  land.textContent = landPress;\n  sea.title = `Atmospheric pressure at sea level is ${seaPress} hPa`;\n  land.title = `Atmospheric pressure at ${cityName}'s ground level is ${landPress} hPa`;\n  // STATUS\n  const status = document.querySelector(`#status${id}`);\n  const statusIcon = document.querySelector(`#statusIcon${id}`);\n  const description = weatherData.weather[0].description;\n  status.textContent = description;\n  statusIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;\n  statusIcon.alt = `${description} icon`;\n  statusIcon.title = `${description} in ${cityName}`;\n  weatherIcon.alt = `${description} icon`;\n  weatherIcon.title = `${description} in ${cityName}`;\n}\n\n\n//# sourceURL=webpack:///./js/weather.js?");

/***/ }),

/***/ "./js/wind.js":
/*!********************!*\
  !*** ./js/wind.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return windDir; });\nfunction windDir(windDegree) {\n  let deg = [0];\n  for (let i = 0; i < 16; i++) {\n    deg.push(i * 22.5 + 11.25);\n  }\n  const direction = [\n    'North',\n    'North North East',\n    'Nort Eeast',\n    'East North East',\n    'East',\n    'East South East',\n    'South East',\n    'South South East',\n    'South',\n    'South South West',\n    'South West',\n    'West South West',\n    'West',\n    'West North West',\n    'North West',\n    'North North West',\n  ];\n  let windDir;\n  for (let i = 0; i < deg.length; i++) {\n    if (windDegree >= deg[i] && windDegree <= deg[i + 1]) {\n      windDir = direction[i];\n    }\n  }\n  return windDir;\n}\n\n\n//# sourceURL=webpack:///./js/wind.js?");

/***/ })

/******/ });