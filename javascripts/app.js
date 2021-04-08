const signupFormDOMEl = document.getElementById('signup-form');
const firstNameDOMEl = signupFormDOMEl["first-name"];
const lastNameDOMEl = signupFormDOMEl["last-name"];
const emailDOMEl = signupFormDOMEl.email;
const passwordDOMEl = signupFormDOMEl.password;

const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emptyStringRegEx = /^(\w+\S*)$/g;

const displayFieldError = (fieldId, errorMessage) => {
  const fieldDOMEl = document.getElementById(fieldId);
  fieldDOMEl.classList.add('error');
  fieldDOMEl.dataset.errorMessage = errorMessage;
}

const inputDOMElements = [
  { elementId: 'first-name-field', DOMElement: firstNameDOMEl, regExp: emptyStringRegEx, hasError: false, errorMessage: 'First name cannot be empty' },
  { elementId: 'last-name-field', DOMElement: lastNameDOMEl, regExp: emptyStringRegEx, hasError: false, errorMessage: 'Last name cannot be empty' },
  { elementId: 'email-field', DOMElement: emailDOMEl, regExp: emailRegex, hasError: false, errorMessage: 'Looks like this is not a valid email' },
  { elementId: 'password-field', DOMElement: passwordDOMEl, regExp: emptyStringRegEx, hasError: false, errorMessage: 'Password cannot be empty' },
];

const hideFieldError = fieldId => {
  document.getElementById(fieldId).classList.remove('error');
  document.getElementById(fieldId).dataset.errorMessage = null;
}

const validateSignupForm = (e) => {
  e.preventDefault();

  inputDOMElements.forEach(inputDOMElement => {
    if (!inputDOMElement.regExp.test(inputDOMElement.DOMElement.value.trim())) {
      displayFieldError(
        inputDOMElement.elementId,
        inputDOMElement.errorMessage
      );
    } else {
      console.log('no debería tener error');
      hideFieldError(
        inputDOMElement.elementId
      );
    }
  });

  console.log(inputDOMElements)
}

signupFormDOMEl.addEventListener('submit', validateSignupForm);

// signupFormDOMEl.addEventListener('focusin', e => {
//   if (e.target.tagName === 'INPUT') {
//     hideFieldError(`${e.target.id}-field`);
//   }
// });

// signupFormDOMEl.addEventListener('focusout', (e) => {
//   if (e.target.tagName === 'INPUT') {
//     const inputField = inputDOMElements.find(inputDOMElement => inputDOMElement.elementId === `${e.target.id}-field`);

//     if (!inputField.regExp.test(e.target.value.trim())) {
//       displayFieldError(
//         inputField.elementId,
//         inputField.errorMessage
//       );
//     } else {
//       hideFieldError(
//         inputField.elementId
//       )
//     }
//   }
// })

