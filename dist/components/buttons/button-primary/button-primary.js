export const createButtonPrimary = (innerText) => {
   const buttonPrimary = document.createElement('button');
   buttonPrimary.classList.add('button-primary');
   buttonPrimary.innerHTML = innerText;
   const buttonDecoration1 = document.createElement('span');
   buttonDecoration1.classList.add('primary-square');
   buttonDecoration1.classList.add('primary-square-1');
   const buttonDecoration2 = document.createElement('span');
   buttonDecoration2.classList.add('primary-square');
   buttonDecoration2.classList.add('primary-square-2');
   buttonPrimary.append(buttonDecoration1, buttonDecoration2);
   return buttonPrimary;
};
