import { chooseFighterStep } from './steps/choose-fighter-step/choose-fighter-step.js';
import { bookingDetailsStep } from './steps/booking-details-step/booking-details-step.js';
import { bookingConfirmationStep } from './steps/booking-confirmation-step/booking-confirmation-step.js';
import { AppState } from '../ts/data/gameState.js';

export const initWizard = (appState: AppState) => {
   const wizardWrapper = document.createElement('div');

   wizardWrapper.append(
      chooseFighterStep(appState),
      bookingDetailsStep(appState),
      bookingConfirmationStep(),
   );

   const chooseButtons = wizardWrapper.querySelectorAll('.button-primary');
   const fighterNameValue = wizardWrapper.querySelector('.booking-fighter-value') as HTMLElement;

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

   chooseButtons.forEach((button) => {
      if (button.classList.contains('wizard-button')) {
         button.addEventListener('click', () => {
            appState.currentStepIndex += 1;
            if (fighterNameValue) {
               fighterNameValue.innerText = appState.fighterName;
            }
            updateStateView(appState.currentStepIndex);
         });
      }
      if (button.classList.contains('booking-submit-button')) {
         button.addEventListener('click', () => {});
      }
   });

   return wizardWrapper;
};
