import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const textarea = document.querySelector('textarea', onTextareaInput);
const email = document.querySelector('input', onEmailInput);
const key = 'feedback-form-state';
let formData = {};

form.addEventListener('submit', onFeedbackSubmit);

textarea.addEventListener('input', throttle(onTextareaInput, 500));
email.addEventListener('input', throttle(onEmailInput, 500));

function onEmailInput(evt) {
  const email = evt.target.value;
  formData.email = email;
  localStorage.setItem(key, JSON.stringify(formData));
}
function onTextareaInput(evt) {
  const message = evt.target.value;
  formData.message = message;
  localStorage.setItem(key, JSON.stringify(formData));
}
if (localStorage.getItem(key)) {
  const parsedData = JSON.parse(localStorage.getItem(key));
  textarea.value = parsedData.message;
  email.value = parsedData.email;
}
function onFeedbackSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(key)));
  localStorage.removeItem(key);
}
