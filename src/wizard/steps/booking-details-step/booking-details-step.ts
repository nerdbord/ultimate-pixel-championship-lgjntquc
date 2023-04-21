import { chosenFighter } from './displayChosenFighter.js';
import { createForm } from './formInputs.js';
import { createFormButtons } from './formButtons.js';
import { AppState } from '../../../ts/data/gameState.js';

export const bookingDetailsStep = (appState: AppState) => {
   const bookingDetailsStepWrapper = document.createElement('div');
   bookingDetailsStepWrapper.classList.add('screen-container', 'active');

   //Creating the title of this screen
   const bookingDetailsTitle: HTMLHeadingElement = document.createElement('h1');
   bookingDetailsTitle.classList.add('wizard-title');
   bookingDetailsTitle.innerText = 'Booking details';

   //Creating elements to display chosen fighter
   const bookingChosenFighter: HTMLDivElement = chosenFighter();

   //Creating form
   const bookingFormInputs: HTMLDivElement = createForm();
   const bookingFormButtons: HTMLDivElement = createFormButtons();

   bookingDetailsStepWrapper.append(
      bookingDetailsTitle,
      bookingChosenFighter,
      bookingFormInputs,
      bookingFormButtons,
   );

   return bookingDetailsStepWrapper;
};
