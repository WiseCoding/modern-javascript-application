export default function animInputBox(id) {
  // Sound
  const audio = new Audio('audio/tick.mp3');
  audio.play();
  // Animate
  document.querySelector(`#inputDiv${id}`).classList.add('animate-bounce');
  const timeout = setTimeout(() => {
    document.querySelector(`#inputDiv${id}`).classList.remove('animate-bounce');
    clearTimeout(timeout);
  }, 1520);
}
