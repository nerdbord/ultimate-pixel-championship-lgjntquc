import { createButtonPrimary } from '../../../components/buttons/button-primary/button-primary.js';
import { createButtonSecondary } from '../../../components/buttons/button-secondary/button-secondary.js';
//Creating form buttons
export const createFormButtons = (): HTMLDivElement => {
   const bookingButtonsWrapper: HTMLDivElement = document.createElement('div');
   bookingButtonsWrapper.classList.add('booking-buttons-wrapper');

   const bookingButtonSubmit: HTMLButtonElement = createButtonPrimary('Submit');
   bookingButtonSubmit.classList.add('primary-button');
   bookingButtonSubmit.classList.add('booking-submit-button');
   bookingButtonSubmit.type = 'submit';

   const bookingBackButton: HTMLButtonElement = createButtonSecondary('Back');
   bookingBackButton.classList.add('primary-button', 'booking-back-button');
   bookingBackButton.type = 'button';

   bookingButtonsWrapper.append(bookingButtonSubmit, bookingBackButton);

   return bookingButtonsWrapper;
};
