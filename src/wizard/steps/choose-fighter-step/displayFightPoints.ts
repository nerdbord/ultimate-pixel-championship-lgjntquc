//Creating elements to display Health and Attack
export const fightPoints = (
   health: number,
   attackMin: number,
   attackMax: number,
): HTMLDivElement => {
   const displayFightPoints: HTMLDivElement = document.createElement('div');
   displayFightPoints.classList.add('wizard-points-wrapper');

   const dataHealthWrapper: HTMLDivElement = document.createElement('div');
   dataHealthWrapper.classList.add('wizard-health-wrapper');
   const dataHealthLabel: HTMLSpanElement = document.createElement('span');
   dataHealthLabel.classList.add('wizard-points-label');
   dataHealthLabel.innerText = 'HEALTH';
   const dataHealthValue: HTMLSpanElement = document.createElement('span');
   dataHealthValue.classList.add('wizard-points-value');
   dataHealthValue.innerText = health.toString();
   dataHealthWrapper.append(dataHealthLabel, dataHealthValue);

   const dataAttackWrapper: HTMLDivElement = document.createElement('div');
   dataAttackWrapper.classList.add('wizard-attack-wrapper');
   const dataAttackLabel: HTMLSpanElement = document.createElement('span');
   dataAttackLabel.classList.add('wizard-points-label');
   dataAttackLabel.innerText = 'ATTACK';
   const dataAttackValue: HTMLSpanElement = document.createElement('span');
   dataAttackValue.classList.add('wizard-points-value');
   dataAttackValue.innerText = attackMin.toString() + ' - ' + attackMax.toString();
   dataAttackWrapper.append(dataAttackLabel, dataAttackValue);

   displayFightPoints.append(dataHealthWrapper, dataAttackWrapper);

   return displayFightPoints;
};
