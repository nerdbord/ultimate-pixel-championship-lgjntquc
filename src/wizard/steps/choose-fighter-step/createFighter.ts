// Creating fighter selection elements: avatar, floor, name, and selection buttons.
export const createFighter = (
   index: number,
   fightersAmount: number,
   name: string,
   avatarUrl: string,
): HTMLDivElement => {
   const chooseFighterStep: HTMLDivElement = document.createElement('div');
   chooseFighterStep.classList.add('wizard-fighter-avatar');
   chooseFighterStep.style.backgroundImage = `url(${avatarUrl})`;
   const FighterFloor: HTMLDivElement = document.createElement('div');
   FighterFloor.classList.add('wizard-fighter-floor');
   const FighterName: HTMLSpanElement = document.createElement('span');
   FighterName.classList.add('wizard-fighter-name');
   FighterName.innerText = name;
   const SelectArrowRight: HTMLButtonElement = document.createElement('button');
   SelectArrowRight.classList.add('wizard-select-arrow-right');
   const SelectArrowLeft: HTMLButtonElement = document.createElement('button');
   SelectArrowLeft.classList.add('wizard-select-arrow-left');
   if (index > 0) {
      SelectArrowLeft.classList.add('show');
      SelectArrowLeft.classList.remove('hide');
   } else {
      SelectArrowLeft.classList.remove('show');
      SelectArrowLeft.classList.add('hide');
   }

   if (index === fightersAmount - 1) {
      SelectArrowRight.classList.remove('show');
      SelectArrowRight.classList.add('hide');
   } else {
      SelectArrowRight.classList.add('show');
      SelectArrowRight.classList.remove('hide');
   }

   chooseFighterStep.append(FighterName, FighterFloor, SelectArrowLeft, SelectArrowRight);

   return chooseFighterStep;
};
