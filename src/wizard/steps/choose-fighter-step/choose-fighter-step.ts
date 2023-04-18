const fighter01 = './src/assets/images/fighter01.png';

export const chooseFighterStep = (): HTMLDivElement => {
   const chooseFighterStepWrapper: HTMLDivElement = document.createElement('div');
   chooseFighterStepWrapper.classList.add('container');

   const chooseFighterStepTitle: HTMLHeadingElement = document.createElement('h1');
   chooseFighterStepTitle.classList.add('wizard-title');
   chooseFighterStepTitle.innerText = 'Choose your fighter';

   //NOTE: This stepper is temporary and will be properly implemented in the later stage of the project.
   const chooseFighterStepStepper: HTMLDivElement = document.createElement('div');
   chooseFighterStepStepper.classList.add('wizard-stepper-step1');

   const chooseFighterStepAvatar: HTMLDivElement = document.createElement('div');
   chooseFighterStepAvatar.classList.add('wizard-fighter-avatar');
   chooseFighterStepAvatar.style.backgroundImage = `url(${fighter01})`;

   const chooseFighterStepFighterFloor: HTMLDivElement = document.createElement('div');
   chooseFighterStepFighterFloor.classList.add('wizard-fighter-floor');
   chooseFighterStepAvatar.append(chooseFighterStepFighterFloor);

   const chooseFighterStepFighterName: HTMLParagraphElement = document.createElement('p');
   chooseFighterStepFighterName.classList.add('wizard-fighter-name');
   chooseFighterStepFighterName.innerText = 'Annoyed Karen';

   chooseFighterStepWrapper.append(
      chooseFighterStepTitle,
      chooseFighterStepStepper,
      chooseFighterStepAvatar,
      // chooseFighterStepFighterFloor,
      chooseFighterStepFighterName,
   );

   return chooseFighterStepWrapper;
};
