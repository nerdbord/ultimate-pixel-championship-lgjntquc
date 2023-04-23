import { chosenFighter } from './displayChosenFighter.js';
import { createForm } from './formInputs.js';
import { createFormButtons } from './formButtons.js';
export const bookingDetailsStep = (appState) => {
    const bookingDetailsStepWrapper = document.createElement('div');
    bookingDetailsStepWrapper.classList.add('screen-container', 'inactive');
    //Creating the title of this screen
    const bookingDetailsTitle = document.createElement('h1');
    bookingDetailsTitle.classList.add('wizard-title');
    bookingDetailsTitle.innerText = 'Booking details';
    //Creating elements to display chosen fighter
    const bookingChosenFighter = chosenFighter();
    //Creating form
    const bookingFormInputs = createForm();
    const bookingFormButtons = createFormButtons();
    bookingDetailsStepWrapper.append(bookingDetailsTitle, bookingChosenFighter, bookingFormInputs, bookingFormButtons);
    return bookingDetailsStepWrapper;
};
