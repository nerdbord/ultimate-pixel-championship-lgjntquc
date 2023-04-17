export const createButtonPrimary = (innerText: string): HTMLButtonElement => {
   const buttonPrimary: HTMLButtonElement = document.createElement('button');
   buttonPrimary.classList.add('button-primary');
   buttonPrimary.innerHTML = `<span class="primary-square primary-square-1"></span>${innerText}<span class="primary-square primary-square-2"></span>`;
   return buttonPrimary;
};
