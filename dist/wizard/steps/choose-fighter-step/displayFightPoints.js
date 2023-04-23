//Creating elements to display Health and Attack
export const fightPoints = (health, attackMin, attackMax) => {
   const displayFightPoints = document.createElement('div');
   displayFightPoints.classList.add('wizard-points-wrapper');
   const dataHealthWrapper = document.createElement('div');
   dataHealthWrapper.classList.add('wizard-health-wrapper');
   const dataHealthLabel = document.createElement('span');
   dataHealthLabel.classList.add('wizard-points-label');
   dataHealthLabel.innerText = 'HEALTH';
   const dataHealthValue = document.createElement('span');
   dataHealthValue.classList.add('wizard-points-value');
   dataHealthValue.innerText = health.toString();
   dataHealthWrapper.append(dataHealthLabel, dataHealthValue);
   const dataAttackWrapper = document.createElement('div');
   dataAttackWrapper.classList.add('wizard-attack-wrapper');
   const dataAttackLabel = document.createElement('span');
   dataAttackLabel.classList.add('wizard-points-label');
   dataAttackLabel.innerText = 'ATTACK';
   const dataAttackValue = document.createElement('span');
   dataAttackValue.classList.add('wizard-points-value');
   dataAttackValue.innerText = attackMin.toString() + ' - ' + attackMax.toString();
   dataAttackWrapper.append(dataAttackLabel, dataAttackValue);
   displayFightPoints.append(dataHealthWrapper, dataAttackWrapper);
   return displayFightPoints;
};
