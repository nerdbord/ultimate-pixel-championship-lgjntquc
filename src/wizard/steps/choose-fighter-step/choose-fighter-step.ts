import { createFighter } from './createFighter.js';
import { fightPoints } from './displayFightPoints.js';
import { specialAttributes } from './displaySpecialAttributes.js';
import { createButtonPrimary } from '../../../components/buttons/button-primary/button-primary.js';
const fighter01 = './src/assets/images/fighter01.png';

// Creating container for choose-fighter-step
export const chooseFighterStep = (): HTMLDivElement => {
   const chooseFighterWrapper: HTMLDivElement = document.createElement('div');
   chooseFighterWrapper.classList.add('screen-container');

   //Creating the title of this screen
   const chooseFighterTitle: HTMLHeadingElement = document.createElement('h1');
   chooseFighterTitle.classList.add('wizard-title');
   chooseFighterTitle.innerText = 'Choose your fighter';

   //NOTE: This stepper is temporary and will be properly implemented in the later stage of the project.
   const chooseFighterStepper: HTMLDivElement = document.createElement('div');
   chooseFighterStepper.classList.add('wizard-stepper-step1');

   // Creating fighter selection elements: avatar, floor, name, and selection buttons.
   const chooseYourFighter: HTMLDivElement = createFighter('Annoyed Karen', fighter01);

   //Creating elements to display Health and Attack
   const displayFightPoints: HTMLDivElement = fightPoints(67, '14 - 18');

   // Creating elements to display fighter's special attributes
   const displaySpecialAttributes: HTMLDivElement = specialAttributes(
      'Passive Aggressiveness',
      'Logical thinking',
   );

   const chooseFighterButton = createButtonPrimary('Choose');
   chooseFighterButton.classList.add('wizard-button');

   chooseFighterWrapper.append(
      chooseFighterTitle,
      chooseFighterStepper,
      chooseYourFighter,
      displayFightPoints,
      displaySpecialAttributes,
      chooseFighterButton,
   );

   return chooseFighterWrapper;
};
