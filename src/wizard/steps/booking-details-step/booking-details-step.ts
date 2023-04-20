import { chosenFighter } from './displayChosenFighter.js';
import { createForm } from './formInputs.js';
import { createFormButtons } from './formButtons.js';

export const bookingDetailsStep = () => {
   const bookingDetailsStepWrapper = document.createElement('div');
   bookingDetailsStepWrapper.classList.add('screen-container');

   //Creating the title of this screen
   const bookingDetailsTitle: HTMLHeadingElement = document.createElement('h1');
   bookingDetailsTitle.classList.add('wizard-title');
   bookingDetailsTitle.innerText = 'Booking details';

   //NOTE: This stepper is temporary and will be properly implemented in the later stage of the project.
   const bookingDetailsStepper: HTMLDivElement = document.createElement('div');
   bookingDetailsStepper.classList.add('wizard-stepper-step2');

   //Creating elements to display chosen fighter
   const bookingChosenFighter: HTMLDivElement = chosenFighter('Ivy Irene');

   //Creating form
   const bookingFormInputs: HTMLDivElement = createForm();
   const bookingFormButtons: HTMLDivElement = createFormButtons();

   bookingDetailsStepWrapper.append(
      bookingDetailsTitle,
      bookingDetailsStepper,
      bookingChosenFighter,
      bookingFormInputs,
      bookingFormButtons,
   );

   return bookingDetailsStepWrapper;
};
