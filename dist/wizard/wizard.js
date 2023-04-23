import { chooseFighterStep } from './steps/choose-fighter-step/choose-fighter-step.js';
import { bookingDetailsStep } from './steps/booking-details-step/booking-details-step.js';
import { bookingConfirmationStep } from './steps/booking-confirmation-step/booking-confirmation-step.js';
import { createStepper } from '../components/stepper/stepper.js';
export const initWizard = (appState) => {
    const wizardWrapper = document.createElement('div');
    const stepper = createStepper();
    const stepperClasses = ['wizard-stepper-step1', 'wizard-stepper-step2', 'wizard-stepper-step3'];
    wizardWrapper.append(stepper, chooseFighterStep(appState), bookingDetailsStep(appState), bookingConfirmationStep());
    const chooseButtons = wizardWrapper.querySelectorAll('.button-primary');
    const fighterNameValue = wizardWrapper.querySelector('.booking-fighter-value');
    const updateStateView = (index) => {
        const stateWrappers = wizardWrapper.querySelectorAll('.screen-container');
        const stepper = wizardWrapper.querySelector('.wizard-stepper');
        if (stepper) {
            stepper.classList.remove(...stepperClasses);
            stepper.classList.add(`wizard-stepper-step${index + 1}`);
        }
        stateWrappers.forEach((element, i) => {
            if (i === index) {
                element.classList.remove('inactive');
                element.classList.add('active');
            }
            else {
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
        if (button.classList.contains('booking-back-button')) {
            button.addEventListener('click', () => {
                appState.currentStepIndex -= 1;
                updateStateView(appState.currentStepIndex);
            });
        }
        if (button.classList.contains('booking-submit-button')) {
            button.addEventListener('click', (e) => {
                const playerName = wizardWrapper.querySelector('.booking-username-input');
                const playerEmail = wizardWrapper.querySelector('.booking-email-input');
                const emailRegex = /\S+@\S+\.\S+/;
                const errorMessage = wizardWrapper.querySelector('.email-error-message');
                const commanderName = wizardWrapper.querySelector('.booking-commander-name');
                if (!playerName.value || !playerEmail.value || !emailRegex.test(playerEmail.value)) {
                    e.preventDefault();
                    errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.classList.add('active');
                    playerEmail.classList.add('email-error-border');
                }
                else {
                    appState.playerName = playerName.value;
                    appState.playerEmail = playerEmail.value;
                    playerName.value = '';
                    playerEmail.value = '';
                    errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.classList.remove('active');
                    playerEmail.classList.remove('email-error-border');
                    commanderName.innerText = `${appState.playerName}!`;
                    appState.currentStepIndex += 1;
                    updateStateView(appState.currentStepIndex);
                }
            });
        }
        if (button.classList.contains('restart-submission-button')) {
            button.addEventListener('click', () => {
                appState.currentStepIndex = 0;
                appState.fighterName = '';
                appState.playerName = '';
                appState.playerEmail = '';
                updateStateView(appState.currentStepIndex);
            });
        }
    });
    return wizardWrapper;
};
