import { createButtonPrimary } from '../../../components/buttons/button-primary/button-primary.js';
import { createButtonSecondary } from '../../../components/buttons/button-secondary/button-secondary.js';
//Creating elements to display chosen fighter
export const createForm = () => {
   const formInputsWrapper = document.createElement('div');
   formInputsWrapper.classList.add('booking-inputs-wrapper');
   const form = document.createElement('form');
   form.classList.add('booking-inputs.wrapper');
   const formUsernameWrapper = document.createElement('div');
   formUsernameWrapper.classList.add('booking-username-wrapper');
   const formUsernameLabel = document.createElement('label');
   formUsernameLabel.classList.add('booking-username-label');
   formUsernameLabel.innerText = 'COMMANDER';
   const formUsernameInput = document.createElement('input');
   formUsernameInput.classList.add('booking-username-input');
   formUsernameInput.placeholder = 'Your name';
   formUsernameWrapper.append(formUsernameLabel, formUsernameInput);
   const formEmailWrapper = document.createElement('div');
   formEmailWrapper.classList.add('booking-email-wrapper');
   const formEmailLabel = document.createElement('label');
   formEmailLabel.classList.add('booking-email-label');
   formEmailLabel.innerText = 'EMAIL';
   const formEmailInput = document.createElement('input');
   formEmailInput.classList.add('booking-email-input');
   formEmailInput.placeholder = 'Your email';
   const formEmailError = document.createElement('p');
   formEmailError.innerText = 'Enter the correct email address';
   formEmailError.classList.add('booking-email-error');
   const bookingButtonSubmit = createButtonPrimary('Submit');
   bookingButtonSubmit.classList.add('primary-button');
   bookingButtonSubmit.classList.add('booking-submit-button');
   bookingButtonSubmit.type = 'submit';
   const bookingBackButton = createButtonSecondary('Back');
   bookingBackButton.classList.add('primary-button', 'booking-back-button');
   bookingBackButton.type = 'button';
   formEmailWrapper.append(
      formEmailLabel,
      formEmailInput,
      formEmailError,
      bookingButtonSubmit,
      bookingBackButton,
   );
   form.append(formUsernameWrapper, formEmailWrapper);
   formInputsWrapper.append(form);
   // Validation
   // form.addEventListener('submit', (e) => {
   //    (e).preventDefault
   //    if (!formUsernameInput.value || !formEmailInput.value) return;
   //    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   //    if (!re.test(formEmailInput.value)){
   //       formEmailError.classList.add('active')
   //    }
   // })
   return formInputsWrapper;
};
