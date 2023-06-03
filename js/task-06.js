const textInput = document.getElementById('validation-input');
const validLength = textInput.getAttribute('data-length');
textInput.addEventListener('blur', onBlurChange);
function onBlurChange(event) {
  const currentLength = event.target.value.trim().length;
  const isValid = Number(validLength) === currentLength;
  setValidityClass(isValid);
}
function setValidityClass(isValid) {
  textInput.classList.toggle('valid', isValid);
  textInput.classList.toggle('invalid', !isValid);
}