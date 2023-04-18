import { createFighter } from './createFighter.js';
import { fightPoints } from './displayFightPoints.js';
import { specialAttributes } from './displaySpecialAttributes.js';

// Creating container for choose-fighter-step
export const chooseFighterStep = (): HTMLDivElement => {
   const chooseFighterWrapper: HTMLDivElement = document.createElement('div');
   chooseFighterWrapper.classList.add('container');

   //Creating the title of this screen
   const chooseFighterTitle: HTMLHeadingElement = document.createElement('h1');
   chooseFighterTitle.classList.add('wizard-title');
   chooseFighterTitle.innerText = 'Choose your fighter';

   //NOTE: This stepper is temporary and will be properly implemented in the later stage of the project.
   const chooseFighterStepper: HTMLDivElement = document.createElement('div');
   chooseFighterStepper.classList.add('wizard-stepper-step1');

   // Creating fighter selection elements: avatar, floor, name, and selection buttons.
   const chooseYourFighter: HTMLDivElement = createFighter();

   //Creating elements to display Health and Attack
   const displayFightPoints: HTMLDivElement = fightPoints();

   // Creating elements to display fighter's special attributes
   const displaySpecialAttributes: HTMLDivElement = specialAttributes();

   chooseFighterWrapper.append(
      chooseFighterTitle,
      chooseFighterStepper,
      chooseYourFighter,
      displayFightPoints,
      displaySpecialAttributes,
   );

   return chooseFighterWrapper;
};
