import { chooseFighterStep } from './steps/choose-fighter-step/choose-fighter-step.js';
import { bookingDetailsStep } from './steps/booking-details-step/booking-details-step.js';
import { bookingConfirmationStep } from './steps/booking-confirmation-step/booking-confirmation-step.js';
import { AppState } from '../ts/data/gameState.js';

export const initWizard = (appState: AppState) => {
   // I keep steps in the array, so Im able to navigate through
   // const steps = [
   //    chooseFighterStep(appState),
   //    bookingDetailsStep(appState),
   //    bookingConfirmationStep()
   // ];

   // I need to monitor which step is active. You can change value to see how step changes. Try 2 for example.
   // const currentStepIndex = 0;

   // I need to know max steps amount, to prevent going to far
   // const maxSteps = steps.length;

   const wizardWrapper = document.createElement('div');

   // I displaying only active step in my HTML
   // wizardWrapper.append(steps[appState.currentStepIndex]);

   wizardWrapper.append(
      chooseFighterStep(appState),

      // bookingConfirmationStep()
   );

   // Basically I used the same thing as for fighters
   const updateStateView = (index: number) => {
      const stateWrappers = wizardWrapper.querySelectorAll('.screen-container');
      stateWrappers.forEach((element, i) => {
         if (i === index) {
            element.classList.remove('inactive');
            element.classList.add('active');
         } else {
            element.classList.remove('active');
            element.classList.add('inactive');
         }
      });
   };

   const chooseButtons = wizardWrapper.querySelectorAll('.button-primary');

   chooseButtons.forEach((button) => {
      if (button.classList.contains('wizard-button')) {
         button.addEventListener('click', () => {
            appState.currentStepIndex += 1;
            console.log(appState);
            wizardWrapper.append(bookingDetailsStep(appState));
            updateStateView(appState.currentStepIndex);
         });
      }
   });

   console.log(chooseButtons);

   return wizardWrapper;
};
