import { welcomeScreen } from './screens/welcome-screen/welcome-screen.js';
import { wizardScreen } from './screens/wizard-screen/wizard-screen.js';
import router from './ts/ui/router.js';

document.addEventListener('DOMContentLoaded', () => {
   const app: HTMLElement | null = document.querySelector('#app');
   if (!!app) {
      const displayWelcomeScreen = welcomeScreen();
      app.append(displayWelcomeScreen);

      router.addRoute('/wizard', () => {
         while (app.firstChild) app.firstChild.remove();
         app.append(wizardScreen());
      });

      const chooseButton = document.querySelector('.button-primary');

      if (chooseButton) {
         chooseButton.addEventListener('click', () => {
            router.navigateToWizard();
         });
      }
   }
});
