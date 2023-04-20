import { swipeLeft, swipeRight } from './fighterSwipe.js';

export const heroBrowser = (app: object, fighters: object) => {
   const selectArrowRight = document.querySelector('.wizard-select-arrow-right');

   if (selectArrowRight) {
      selectArrowRight.addEventListener('click', () => swipeRight(app, fighters));
   }

   const selectArrowLeft = document.querySelector('.wizard-select-arrow-left');

   if (selectArrowLeft) {
      selectArrowLeft.addEventListener('click', () => swipeLeft(app, fighters));
   }
};
