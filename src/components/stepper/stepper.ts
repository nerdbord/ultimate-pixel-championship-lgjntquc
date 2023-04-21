export const createStepper = (): HTMLDivElement => {
   const createStepperElement = document.createElement('div');
   createStepperElement.classList.add('wizard-stepper');

   return createStepperElement;
};
