export const successMessage = () => {
   const successMessageWrapper = document.createElement('div');
   successMessageWrapper.classList.add('booking-message-wrapper');
   successMessageWrapper.innerText = 'Thank you for signing up, Commander';
   const successMessageCommanderName = document.createElement('span');
   successMessageCommanderName.classList.add('booking-commander-name');
   successMessageWrapper.append(successMessageCommanderName);
   return successMessageWrapper;
};
