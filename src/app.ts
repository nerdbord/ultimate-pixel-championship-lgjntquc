import { welcomeScreen } from './screens/welcome-screen/welcome-screen.js';
import { wizardScreen } from './screens/wizard-screen/wizard-screen.js';
import router from './ts/router.js';

document.addEventListener('DOMContentLoaded', () => {
   const app: HTMLElement | null = document.querySelector('#app');
   if (!!app) {
      const displayWelcomeScreen = welcomeScreen();
      const displayWizardScreen = wizardScreen();
      app.append(displayWelcomeScreen);

      router.addRoute('/wizard', () => {
         while (app.firstChild) app.firstChild.remove();
         app.append(displayWizardScreen);
      });

      const chooseButton = document.querySelector('.button-primary');

      if (chooseButton) {
         chooseButton.addEventListener('click', () => {
            router.navigateToWizard();
         });
      }
   }
});
