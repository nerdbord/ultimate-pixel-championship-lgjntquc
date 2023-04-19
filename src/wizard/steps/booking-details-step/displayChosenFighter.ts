//Creating elements to display chosen fighter
export const chosenFighter = (chosenFighterName: string): HTMLDivElement => {
   const displayChosenFighter: HTMLDivElement = document.createElement('div');
   displayChosenFighter.classList.add('booking-fighter-wrapper');

   const chosenFighterLabel: HTMLSpanElement = document.createElement('span');
   chosenFighterLabel.classList.add('booking-fighter-label');
   chosenFighterLabel.innerText = 'CHOSEN FIGHTER';
   const chosenFighterValue: HTMLSpanElement = document.createElement('span');
   chosenFighterValue.classList.add('booking-fighter-value');
   chosenFighterValue.innerText = chosenFighterName;

   displayChosenFighter.append(chosenFighterLabel, chosenFighterValue);
   return displayChosenFighter;
};
