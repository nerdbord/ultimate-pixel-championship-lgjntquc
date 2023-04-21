export const successMessage = (): HTMLDivElement => {
   const successMessageWrapper: HTMLDivElement = document.createElement('div');
   successMessageWrapper.classList.add('booking-message-wrapper');
   successMessageWrapper.innerText = 'Thank you for signing up, Commander';
   const successMessageCommanderName: HTMLSpanElement = document.createElement('span');
   successMessageCommanderName.classList.add('booking-commander-name');

   successMessageWrapper.append(successMessageCommanderName);

   return successMessageWrapper;
};
