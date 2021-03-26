const signupFormDOMEl = document.getElementById('signup-form');
const firstNameDOMEl = signupFormDOMEl["first-name"];
const lastNameDOMEl = signupFormDOMEl["last-name"];
const emailDOMEl = signupFormDOMEl.email;
const passwordDOMEl = signupFormDOMEl.password;

const emailRegex = /^(([^<>()[]\.,:\s@"]+(.[^<>()[]\.,:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

const displayFieldError = (fieldId, errorMessage) => {
  const fieldDOMEl = document.getElementById(fieldId);
  fieldDOMEl.classList.add('error');
  fieldDOMEl.dataset.errorMessage = errorMessage;
}

const hideFieldError = fieldId => {
  document.getElementById(fieldId).classList.remove('error');
  document.getElementById(fieldId).dataset.errorMessage = null;
}

const validateSignupForm = (e) => {
  e.preventDefault();

  const firstNameValue = firstNameDOMEl.value.trim();
  const lastNameValue = lastNameDOMEl.value.trim();
  const emailValue = emailDOMEl.value.trim();
  const passwordValue = passwordDOMEl.value.trim();

  if (firstNameValue === '') {
    displayFieldError(
      'first-name-field',
      'First name cannot be empty'
    );
  } else {
    hideFieldError('first-name-field');
  }

  if (lastNameValue === '') {
    displayFieldError(
      'last-name-field',
      'Last name cannot be empty'
    );
  } else {
    hideFieldError('last-name-field');
  }

  if (!emailRegex.test(emailValue)) {
    displayFieldError(
      'email-field',
      'Looks like this is not an email'
    );
  } else {
    hideFieldError('email-field');
  }

  if (passwordValue === '') {
    displayFieldError(
      'password-field',
      'Password cannot be empty'
    );
  } else {
    hideFieldError('password-field');
  }
}

signupFormDOMEl.addEventListener('submit', validateSignupForm);
