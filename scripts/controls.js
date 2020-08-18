// Unset all control buttons
export default function unsetControls() {
  const forecastCheck = document.querySelector('#forecastCheck');
  const compareCheck = document.querySelector('#compareCheck');
  const photosCheck = document.querySelector('#photosCheck');
  forecastCheck.checked = false;
  compareCheck.checked = false;
  photosCheck.checked = false;
}
