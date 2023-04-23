// Creating elements to display fighter's special attributes
export const specialAttributes = (specialAttack, weakness) => {
   const displaySpecialAttributes = document.createElement('div');
   displaySpecialAttributes.classList.add('wizard-attributes-wrapper');
   const specialAttackLabel = document.createElement('span');
   specialAttackLabel.classList.add('wizard-attributes-label');
   specialAttackLabel.classList.add('wizard-special-attack');
   specialAttackLabel.innerText = 'SPECIAL ATTACK';
   const specialAttackValue = document.createElement('span');
   specialAttackValue.classList.add('wizard-attributes-value');
   specialAttackValue.innerText = specialAttack;
   const weaknessLabel = document.createElement('span');
   weaknessLabel.classList.add('wizard-attributes-label');
   weaknessLabel.classList.add('wizard-weakness');
   weaknessLabel.innerText = 'WEAKNESS';
   const weaknessValue = document.createElement('span');
   weaknessValue.classList.add('wizard-attributes-value');
   weaknessValue.innerText = weakness;
   displaySpecialAttributes.append(
      specialAttackLabel,
      specialAttackValue,
      weaknessLabel,
      weaknessValue,
   );
   return displaySpecialAttributes;
};
