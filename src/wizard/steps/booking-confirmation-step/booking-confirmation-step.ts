export const bookingConfirmationStep = () => {
   const bookingConfirmationStepWrapper = document.createElement('div');
   bookingConfirmationStepWrapper.classList.add('screen-container');

   //Creating the title of this screen
   const bookingConfirmationTitle: HTMLHeadingElement = document.createElement('h1');
   bookingConfirmationTitle.classList.add('wizard-title');
   bookingConfirmationTitle.innerText = 'Booking details';

   //NOTE: This stepper is temporary and will be properly implemented in the later stage of the project.
   const bookingConfirmationStepper: HTMLDivElement = document.createElement('div');
   bookingConfirmationStepper.classList.add('wizard-stepper-step3');

   bookingConfirmationStepWrapper.append(bookingConfirmationTitle, bookingConfirmationStepper);
   return bookingConfirmationStepWrapper;
};
