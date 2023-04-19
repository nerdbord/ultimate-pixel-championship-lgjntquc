import { createFighter } from './createFighter.js';
import { fightPoints } from './displayFightPoints.js';
import { specialAttributes } from './displaySpecialAttributes.js';
import { createButtonPrimary } from '../../../components/buttons/button-primary/button-primary.js';
import fighterData from '../../../data/figtherData.js';

interface IFighterData {
   name: string;
   health: number;
   attackMin: number;
   attackMax: number;
   specialAttack: string;
   weakness: string;
   imageUrl: string;
}

const data: IFighterData[] = fighterData;
let index: number = 0;

const fighter01 = './src/assets/images/fighter01.png';

// Creating container for choose-fighter-step
export const chooseFighterStep = (): HTMLDivElement => {
   const fightersAmount = data.length;

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
   const chooseYourFighter: HTMLDivElement = createFighter(data[index].name, data[index].imageUrl);

   //Creating elements to display Health and Attack
   const displayFightPoints: HTMLDivElement = fightPoints(
      data[index].health,
      data[index].attackMin,
      data[index].attackMax,
   );

   // Creating elements to display fighter's special attributes
   const displaySpecialAttributes: HTMLDivElement = specialAttributes(
      data[index].specialAttack,
      data[index].weakness,
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
