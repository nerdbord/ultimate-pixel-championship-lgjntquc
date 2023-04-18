// Creating elements to display fighter's special attributes
export const specialAttributes = (specialAttack: string, weakness: string): HTMLDivElement => {
   const displaySpecialAttributes: HTMLDivElement = document.createElement('div');
   displaySpecialAttributes.classList.add('wizard-attributes-wrapper');

   const specialAttackLabel: HTMLSpanElement = document.createElement('span');
   specialAttackLabel.classList.add('wizard-attributes-label');
   specialAttackLabel.classList.add('wizard-special-attack');
   specialAttackLabel.innerText = 'SPECIAL ATTACK';
   const specialAttackValue: HTMLSpanElement = document.createElement('span');
   specialAttackValue.classList.add('wizard-attributes-value');
   specialAttackValue.innerText = 'Passive Aggressiveness';

   const weaknessLabel: HTMLSpanElement = document.createElement('span');
   weaknessLabel.classList.add('wizard-attributes-label');
   weaknessLabel.classList.add('wizard-weakness');
   weaknessLabel.innerText = 'WEAKNESS';
   const weaknessValue: HTMLSpanElement = document.createElement('span');
   weaknessValue.classList.add('wizard-attributes-value');
   weaknessValue.innerText = 'Logical thinking';
   displaySpecialAttributes.append(
      specialAttackLabel,
      specialAttackValue,
      weaknessLabel,
      weaknessValue,
   );
   return displaySpecialAttributes;
};
