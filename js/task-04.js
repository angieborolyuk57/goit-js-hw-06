const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueElement = document.getElementById('value');

let counterValue = 0;

decrementBtn.addEventListener('click', decrementCounter);
incrementBtn.addEventListener('click', incrementCounter);

function decrementCounter() {
  counterValue -= 1;
  updateValue();
}

function incrementCounter() {
  counterValue += 1;
  updateValue();
}

function updateValue() {
  valueElement.textContent = counterValue;
}
