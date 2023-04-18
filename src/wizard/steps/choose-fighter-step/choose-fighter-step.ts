const fighter01 = './src/assets/images/fighter01.png';

export const chooseFighterStep = (): HTMLDivElement => {
   const chooseFighterStepWrapper: HTMLDivElement = document.createElement('div');
   chooseFighterStepWrapper.classList.add('container');

   //Creating the title of this screen
   const chooseFighterStepTitle: HTMLHeadingElement = document.createElement('h1');
   chooseFighterStepTitle.classList.add('wizard-title');
   chooseFighterStepTitle.innerText = 'Choose your fighter';

   //NOTE: This stepper is temporary and will be properly implemented in the later stage of the project.
   const chooseFighterStepStepper: HTMLDivElement = document.createElement('div');
   chooseFighterStepStepper.classList.add('wizard-stepper-step1');

   // Creating fighter selection elements: avatar, floor, name, and selection buttons.
   const chooseFighterStepAvatar: HTMLDivElement = document.createElement('div');
   chooseFighterStepAvatar.classList.add('wizard-fighter-avatar');
   chooseFighterStepAvatar.style.backgroundImage = `url(${fighter01})`;
   const chooseFighterStepFighterFloor: HTMLDivElement = document.createElement('div');
   chooseFighterStepFighterFloor.classList.add('wizard-fighter-floor');
   const chooseFighterStepFighterName: HTMLSpanElement = document.createElement('span');
   chooseFighterStepFighterName.classList.add('wizard-fighter-name');
   chooseFighterStepFighterName.innerText = 'Annoyed Karen';
   const chooseFighterStepSelectArrow: HTMLButtonElement = document.createElement('button');
   chooseFighterStepSelectArrow.classList.add('wizard-select-arrow');

   chooseFighterStepAvatar.append(chooseFighterStepFighterFloor, chooseFighterStepSelectArrow);

   // Creating elements to display fighter's data
   const dataWrapper: HTMLDivElement = document.createElement('div');
   dataWrapper.classList.add('wizard-data-wrapper');

   const dataHealthWrapper: HTMLDivElement = document.createElement('div');
   dataHealthWrapper.classList.add('wizard-health-wrapper');
   const dataHealthLabel: HTMLSpanElement = document.createElement('span');
   dataHealthLabel.classList.add('wizard-data-label');
   dataHealthLabel.innerText = 'HEALTH';
   const dataHealthValue: HTMLSpanElement = document.createElement('span');
   dataHealthValue.classList.add('wizard-data-value');
   dataHealthValue.innerText = '67';
   dataHealthWrapper.append(dataHealthLabel, dataHealthValue);

   const dataAttackWrapper: HTMLDivElement = document.createElement('div');
   dataAttackWrapper.classList.add('wizard-attack-wrapper');
   const dataAttackLabel: HTMLSpanElement = document.createElement('span');
   dataAttackLabel.classList.add('wizard-data-label');
   dataAttackLabel.innerText = 'ATTACK';
   const dataAttackValue: HTMLSpanElement = document.createElement('span');
   dataAttackValue.classList.add('wizard-data-value');
   dataAttackValue.innerText = '14 - 18';
   dataAttackWrapper.append(dataAttackLabel, dataAttackValue);

   dataWrapper.append(dataHealthWrapper, dataAttackWrapper);

   const dataSpecialAttackLabel: HTMLSpanElement = document.createElement('span');
   dataSpecialAttackLabel.classList.add('wizard-data-label');
   dataSpecialAttackLabel.classList.add('wizard-special-attack');
   dataSpecialAttackLabel.innerText = 'SPECIAL ATTACK';
   const dataSpecialAttackValue: HTMLSpanElement = document.createElement('span');
   dataSpecialAttackValue.classList.add('wizard-data-value');
   dataSpecialAttackValue.innerText = 'Passive Aggressiveness';

   const dataWeaknessLabel: HTMLSpanElement = document.createElement('span');
   dataWeaknessLabel.classList.add('wizard-data-label');
   dataWeaknessLabel.classList.add('wizard-weakness');
   dataWeaknessLabel.innerText = 'WEAKNESS';
   const dataWeaknessValue: HTMLSpanElement = document.createElement('span');
   dataWeaknessValue.classList.add('wizard-data-value');
   dataWeaknessValue.innerText = 'Logical thinking';

   chooseFighterStepWrapper.append(
      chooseFighterStepTitle,
      chooseFighterStepStepper,
      chooseFighterStepAvatar,
      chooseFighterStepFighterName,
      dataWrapper,
      dataSpecialAttackLabel,
      dataSpecialAttackValue,
      dataWeaknessLabel,
      dataWeaknessValue,
   );

   return chooseFighterStepWrapper;
};
