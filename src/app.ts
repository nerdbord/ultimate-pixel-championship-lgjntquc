import { welcomeScreen } from './screens/welcome-screen/welcome-screen.js';
import { wizardScreen } from './screens/wizard-screen/wizard-screen.js';
import router from './ts/ui/router.js';
import { createState } from './ts/data/createState.js';

document.addEventListener('DOMContentLoaded', () => {
   const activeFighter: number = createState();
   const app: HTMLElement | null = document.querySelector('#app');
   if (!!app) {
      const displayWelcomeScreen = welcomeScreen();
      app.append(displayWelcomeScreen);

      router.addRoute('/wizard', () => {
         while (app.firstChild) app.firstChild.remove();
         app.append(wizardScreen(activeFighter));
      });

      const chooseButton = document.querySelector('.button-primary');

      if (chooseButton) {
         chooseButton.addEventListener('click', () => {
            router.navigateToWizard();
         });
      }
   }
});
