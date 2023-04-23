//Creating elements to display chosen fighter
export const chosenFighter = () => {
    const displayChosenFighter = document.createElement('div');
    displayChosenFighter.classList.add('booking-fighter-wrapper');
    const chosenFighterLabel = document.createElement('span');
    chosenFighterLabel.classList.add('booking-fighter-label');
    chosenFighterLabel.innerText = 'CHOSEN FIGHTER';
    const chosenFighterValue = document.createElement('p');
    chosenFighterValue.classList.add('booking-fighter-value');
    displayChosenFighter.append(chosenFighterLabel, chosenFighterValue);
    return displayChosenFighter;
};
