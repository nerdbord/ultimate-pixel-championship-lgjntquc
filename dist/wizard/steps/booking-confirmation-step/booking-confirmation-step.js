import { successMessage } from './successMessage.js';
import { createButtonPrimary } from '../../../components/buttons/button-primary/button-primary.js';
export const bookingConfirmationStep = () => {
   const bookingConfirmationStepWrapper = document.createElement('div');
   bookingConfirmationStepWrapper.classList.add('screen-container', 'inactive');
   //Creating the title of this screen
   const bookingConfirmationTitle = document.createElement('h1');
   bookingConfirmationTitle.classList.add('wizard-title');
   bookingConfirmationTitle.innerText = 'Booking details';
   //Creating success message with Commander name
   const bookingSuccessMessage = successMessage();
   //Swords logo
   const bookingConfirmationLogo = document.createElement('div');
   bookingConfirmationLogo.classList.add('booking-logo');
   const bookingConfirmationText = document.createElement('p');
   bookingConfirmationText.classList.add('booking-confirmation-text');
   bookingConfirmationText.innerText =
      'You will be notified about the next steps in the championship process via email.';
   const bookingConfirmationButton = createButtonPrimary('Submit another fighter');
   bookingConfirmationButton.classList.add('restart-submission-button');
   bookingConfirmationStepWrapper.append(
      bookingConfirmationTitle,
      bookingSuccessMessage,
      bookingConfirmationLogo,
      bookingConfirmationText,
      bookingConfirmationButton,
   );
   return bookingConfirmationStepWrapper;
};
