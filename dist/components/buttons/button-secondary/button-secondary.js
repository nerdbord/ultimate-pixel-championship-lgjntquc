export const createButtonSecondary = (innerText) => {
   const buttonSecondary = document.createElement('button');
   buttonSecondary.classList.add('button-primary');
   buttonSecondary.classList.add('button-secondary');
   buttonSecondary.innerHTML = innerText;
   const buttonDecoration1 = document.createElement('span');
   buttonDecoration1.classList.add('primary-square');
   buttonDecoration1.classList.add('primary-square-1');
   buttonDecoration1.classList.add('secondary-square');
   buttonDecoration1.classList.add('secondary-square-1');
   const buttonDecoration2 = document.createElement('span');
   buttonDecoration2.classList.add('primary-square');
   buttonDecoration2.classList.add('primary-square-2');
   buttonDecoration2.classList.add('secondary-square');
   buttonDecoration2.classList.add('secondary-square-2');
   buttonSecondary.append(buttonDecoration1, buttonDecoration2);
   return buttonSecondary;
};
