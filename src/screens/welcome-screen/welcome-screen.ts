import { createButtonPrimary } from '../../components/buttons/button-primary/button-primary.js';
import { createBorderBottom } from '../../components/borders/border-bottom/boder-bottom.js';
import { createBorderTop } from '../../components/borders/border-top/border-top.js';

export const welcomeScreen = (): HTMLDivElement => {
   const welcomeScreenWrapper: HTMLDivElement = document.createElement('div');
   welcomeScreenWrapper.classList.add('container');

   const borderTop: HTMLDivElement = createBorderTop();

   const welcomeTitle: HTMLHeadingElement = document.createElement('h1');
   welcomeTitle.classList.add('welcome-title');
   welcomeTitle.innerText = 'Ultimate Pix';

   const welcomeTitleSpan: HTMLSpanElement = document.createElement('span');
   welcomeTitleSpan.classList.add('welcome-title-bold');
   welcomeTitleSpan.innerText = 'Championships';

   const welcomeLogo: HTMLDivElement = document.createElement('div');
   welcomeLogo.classList.add('welcome-logo');

   const welcomeText: HTMLParagraphElement = document.createElement('p');
   welcomeText.classList.add('welcome-text');
   welcomeText.innerText = 'Fill out the form to sign up for upcoming tournee.';

   const welcomeButton: HTMLButtonElement = createButtonPrimary('Choose');

   const borderBottom: HTMLDivElement = createBorderBottom();

   welcomeScreenWrapper.append(
      borderTop,
      welcomeTitle,
      welcomeTitleSpan,
      welcomeLogo,
      welcomeText,
      welcomeButton,
      borderBottom,
   );

   return welcomeScreenWrapper;
};
