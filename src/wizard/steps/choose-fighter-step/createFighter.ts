const fighter01 = './src/assets/images/fighter01.png';

// Creating fighter selection elements: avatar, floor, name, and selection buttons.
export const createFighter = (): HTMLDivElement => {
   const chooseFighterStep: HTMLDivElement = document.createElement('div');
   chooseFighterStep.classList.add('wizard-fighter-avatar');
   chooseFighterStep.style.backgroundImage = `url(${fighter01})`;
   const FighterFloor: HTMLDivElement = document.createElement('div');
   FighterFloor.classList.add('wizard-fighter-floor');
   const FighterName: HTMLSpanElement = document.createElement('span');
   FighterName.classList.add('wizard-fighter-name');
   FighterName.innerText = 'Annoyed Karen';
   const SelectArrow: HTMLButtonElement = document.createElement('button');
   SelectArrow.classList.add('wizard-select-arrow');

   chooseFighterStep.append(FighterName, FighterFloor, SelectArrow);

   return chooseFighterStep;
};
