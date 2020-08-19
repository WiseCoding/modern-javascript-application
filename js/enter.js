// Handle enter key push
export default function userPushEnter() {
  const html = document.querySelector('html');
  html.addEventListener('keyup', function (enter) {
    // Number 13 is the "Enter" key on the keyboard
    if (enter.keyCode === 13) {
      enter.preventDefault();
      document.querySelector('#submitLeft').click();
      document.querySelector('#submitRight').click();
    }
  });
}
