const throttle = require('lodash.throttle');

import '../css/form.css';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

const VALUE_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };

onInputValue();

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(VALUE_KEY, JSON.stringify(formData));
}

function onInputValue() {
  let formValue = JSON.parse(localStorage.getItem(VALUE_KEY ?? ''));
  if (formValue) {
    const {
      elements: { email, message },
    } = form;
    email.value = formValue.email;
    message.value = formValue.message;
  }
}

function onSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.currentTarget;

  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert('Fill in all fields');
  }

  console.log({ email: email.value.trim(), message: message.value.trim() });

  evt.currentTarget.reset();
  localStorage.removeItem(VALUE_KEY);
  formDataReset();
}

function formDataReset() {
  (formData.email = ''), (formData.message = '');
}
