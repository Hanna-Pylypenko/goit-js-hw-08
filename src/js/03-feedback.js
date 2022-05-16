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
// import throttle from 'lodash.throttle';
// const formRef = document.querySelector('.feedback-form');

// const toSave = { email: '', message: '' };

// if (localStorage.getItem('feedback-form-state')) {
//   const objectFromStorage = JSON.parse(localStorage.getItem('feedback-form-state'));

//   toSave.email = objectFromStorage.email;
//   toSave.message = objectFromStorage.message;
// }

// formRef.email.value = toSave.email;
// formRef.message.value = toSave.message;

// function inputEmail(eve) {
//   if (eve.target.name === 'email') {
//     toSave.email = eve.target.value;
//   }
//   if (eve.target.name === 'message') {
//     toSave.message = eve.target.value;
//   }
//   localStorage.setItem('feedback-form-state', JSON.stringify(toSave));
// }

// function submitFn(eve) {
//   eve.preventDefault();
//   eve.currentTarget.reset();
//   localStorage.clear();
//   console.log(toSave);
// }

// formRef.addEventListener('input', throttle(inputEmail, 500));
// formRef.addEventListener('submit', submitFn);
