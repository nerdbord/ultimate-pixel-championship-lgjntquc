import { chosenFighter } from './displayChosenFighter.js';

export const bookingDetailsStep = () => {
   const bookingDetailsStepWrapper = document.createElement('div');
   bookingDetailsStepWrapper.classList.add('container');

   //Creating the title of this screen
   const bookingDetailsTitle: HTMLHeadingElement = document.createElement('h1');
   bookingDetailsTitle.classList.add('wizard-title');
   bookingDetailsTitle.innerText = 'Booking details';

   //NOTE: This stepper is temporary and will be properly implemented in the later stage of the project.
   const bookingDetailsStepper: HTMLDivElement = document.createElement('div');
   bookingDetailsStepper.classList.add('wizard-stepper-step1');

   //Creating elements to display chosen fighter
   const displayChosenFighter: HTMLDivElement = chosenFighter('Ivy Irene');

   bookingDetailsStepWrapper.append(
      bookingDetailsTitle,
      bookingDetailsStepper,
      displayChosenFighter,
   );

   return bookingDetailsStepWrapper;
};
