import { createFighter } from './createFighter.js';
import { fightPoints } from './displayFightPoints.js';
import { specialAttributes } from './displaySpecialAttributes.js';
import { createButtonPrimary } from '../../../components/buttons/button-primary/button-primary.js';
import fighterData from '../../../ts/data/figtherData.js';
import { AppState } from '../../../ts/data/gameState.js';

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
let activeFighterIndex: number = 0;

// Creating container for choose-fighter-step
export const chooseFighterStep = (appState: AppState): HTMLDivElement => {
   const allFightersWrapper: HTMLDivElement = document.createElement('div');
   allFightersWrapper.classList.add('screen-container', 'active');
   const fightersAmount = data.length;

   data.forEach((fighter: IFighterData, index: number) => {
      const handleSwipeRight = () => {
         if (activeFighterIndex < fightersAmount - 1) {
            activeFighterIndex += 1;
         }
         updateView(activeFighterIndex);
      };

      const handleSwipeLeft = () => {
         if (activeFighterIndex > 0) {
            activeFighterIndex -= 1;
         }
         updateView(activeFighterIndex);
      };
      const chooseSingleFighterWrapper: HTMLDivElement = document.createElement('div');
      chooseSingleFighterWrapper.classList.add('container');

      //Creating the title of this screen
      const chooseFighterTitle: HTMLHeadingElement = document.createElement('h1');
      chooseFighterTitle.classList.add('wizard-title');
      chooseFighterTitle.innerText = 'Choose your fighter';

      // Creating fighter selection elements: avatar, floor, name, and selection buttons.
      const chooseYourFighter: HTMLDivElement = createFighter(
         index,
         fightersAmount,
         fighter.name,
         fighter.imageUrl,
      );

      //Creating elements to display Health and Attack
      const displayFightPoints: HTMLDivElement = fightPoints(
         fighter.health,
         fighter.attackMin,
         fighter.attackMax,
      );

      // Creating elements to display fighter's special attributes
      const displaySpecialAttributes: HTMLDivElement = specialAttributes(
         fighter.specialAttack,
         fighter.weakness,
      );

      const chooseFighterButton = createButtonPrimary('Choose');
      chooseFighterButton.classList.add('wizard-button');

      chooseFighterButton.addEventListener('click', () => {
         appState.fighterName = data[activeFighterIndex].name;
      });

      chooseSingleFighterWrapper.append(
         chooseFighterTitle,
         chooseYourFighter,
         displayFightPoints,
         displaySpecialAttributes,
         chooseFighterButton,
      );

      const selectArrowRight = chooseSingleFighterWrapper.querySelector(
         '.wizard-select-arrow-right',
      );

      if (selectArrowRight) {
         selectArrowRight.addEventListener('click', () => handleSwipeRight());
      }

      const selectArrowLeft = chooseSingleFighterWrapper.querySelector('.wizard-select-arrow-left');

      if (selectArrowLeft) {
         selectArrowLeft.addEventListener('click', () => handleSwipeLeft());
      }

      const updateView = (index: number) => {
         const fighterElements = allFightersWrapper.querySelectorAll('.container');
         fighterElements.forEach((element, i) => {
            if (i === index) {
               element.classList.remove('inactive');
               element.classList.add('active');
            } else {
               element.classList.remove('active');
               element.classList.add('inactive');
            }
         });
      };

      allFightersWrapper.append(chooseSingleFighterWrapper);

      if (allFightersWrapper?.firstElementChild === chooseSingleFighterWrapper) {
         chooseSingleFighterWrapper.classList.add('active');
      } else {
         chooseSingleFighterWrapper.classList.add('inactive');
      }
   });

   return allFightersWrapper;
};
