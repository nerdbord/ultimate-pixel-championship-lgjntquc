export const successMessage = (commanderName: string): HTMLDivElement => {
   const successMessageWrapper: HTMLDivElement = document.createElement('div');
   successMessageWrapper.classList.add('booking-message-wrapper');
   successMessageWrapper.innerText = 'Thank you for signing up, Commander';
   const successMessageCommanderName: HTMLSpanElement = document.createElement('span');
   successMessageCommanderName.classList.add('booking-commander-name');
   successMessageCommanderName.innerText = `${commanderName}!`;

   successMessageWrapper.append(successMessageCommanderName);

   return successMessageWrapper;
};
