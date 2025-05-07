// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const image = document.querySelector('#explore img');
  let voices = [];

  function populateVoices() {
    voices = speechSynthesis.getVoices();

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  // Some browsers (like Chrome) may not have voices loaded immediately
  speechSynthesis.onvoiceschanged = populateVoices;

  speakButton.addEventListener('click', () => {
    const text = textArea.value;
    const selectedIndex = voiceSelect.value;

    if (!text || selectedIndex === 'select') return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[selectedIndex];

    speechSynthesis.speak(utterance);
    image.src = 'assets/images/smiling-open.png';

    utterance.onend = () => {
      image.src = 'assets/images/smiling.png';
    };
  });
}