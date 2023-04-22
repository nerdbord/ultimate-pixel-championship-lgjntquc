//Creating elements to display chosen fighter
export const createForm = (): HTMLDivElement => {
   const formInputsWrapper: HTMLDivElement = document.createElement('div');
   formInputsWrapper.classList.add('booking-inputs-wrapper');

   const form: HTMLFormElement = document.createElement('form');
   form.setAttribute('id', 'huja');

   const formUsernameWrapper: HTMLDivElement = document.createElement('div');
   formUsernameWrapper.classList.add('booking-username-wrapper');
   const formUsernameLabel: HTMLLabelElement = document.createElement('label');
   formUsernameLabel.classList.add('booking-username-label');
   formUsernameLabel.innerText = 'COMMANDER';
   const formUsernameInput: HTMLInputElement = document.createElement('input');
   formUsernameInput.classList.add('booking-username-input');
   formUsernameInput.placeholder = 'Your name';

   formUsernameWrapper.append(formUsernameLabel, formUsernameInput);

   const formEmailWrapper: HTMLDivElement = document.createElement('div');
   formEmailWrapper.classList.add('booking-email-wrapper');
   const formEmailLabel: HTMLLabelElement = document.createElement('label');
   formEmailLabel.classList.add('booking-email-label');
   formEmailLabel.innerText = 'EMAIL';
   const formEmailInput: HTMLInputElement = document.createElement('input');
   formEmailInput.classList.add('booking-email-input');
   formEmailInput.placeholder = 'Your email';
   const formEmailError: HTMLParagraphElement = document.createElement('p');
   formEmailError.classList.add('email-error-message');
   formEmailError.innerText = 'Enter the correct email address';

   formEmailWrapper.append(formEmailLabel, formEmailInput);

   form.append(formUsernameWrapper, formEmailWrapper, formEmailError);
   formInputsWrapper.append(form);
   return formInputsWrapper;
};
