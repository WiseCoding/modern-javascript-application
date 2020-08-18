export default function toggleAlert(state) {
  const alertDiv = document.querySelector('#alertDiv');
  if (state === 'off') {
    alertDiv.classList.add('hidden');
  }
  if (state === 'on') {
    alertDiv.classList.remove('hidden');
  }
}
