const rangeInput = document.querySelector('#range-input');
  const label = document.querySelector('label[for="range-input"]');

  rangeInput.addEventListener('input', () => {
    const value = Math.pow(2, rangeInput.value);
    label.innerHTML = `${value} x ${value}`;
  });