import { successMessage } from './successMessage.js';
import { createButtonPrimary } from '../../../components/buttons/button-primary/button-primary.js';

export const bookingConfirmationStep = () => {
   const bookingConfirmationStepWrapper = document.createElement('div');
   bookingConfirmationStepWrapper.classList.add('screen-container', 'inactive');

   //Creating the title of this screen
   const bookingConfirmationTitle: HTMLHeadingElement = document.createElement('h1');
   bookingConfirmationTitle.classList.add('wizard-title');
   bookingConfirmationTitle.innerText = 'Booking details';

   //NOTE: This stepper is temporary and will be properly implemented in the later stage of the project.
   const bookingConfirmationStepper: HTMLDivElement = document.createElement('div');
   bookingConfirmationStepper.classList.add('wizard-stepper-step3');

   //Creating success message with Commandre name
   const bookingSuccessMessage: HTMLDivElement = successMessage('COMMANDRENAME');

   //Swords logo
   const bookingConfirmationLogo: HTMLDivElement = document.createElement('div');
   bookingConfirmationLogo.classList.add('booking-logo');

   const bookingConfirmationText: HTMLParagraphElement = document.createElement('p');
   bookingConfirmationText.classList.add('booking-confirmation-text');
   bookingConfirmationText.innerText =
      'You will be notified about the next steps in the championship process via email.';

   const bookingConfirmationButton: HTMLButtonElement =
      createButtonPrimary('Submit another fighter');

   bookingConfirmationStepWrapper.append(
      bookingConfirmationTitle,
      bookingConfirmationStepper,
      bookingSuccessMessage,
      bookingConfirmationLogo,
      bookingConfirmationText,
      bookingConfirmationButton,
   );

   return bookingConfirmationStepWrapper;
};
