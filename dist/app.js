import { welcomeScreen } from './screens/welcome-screen/welcome-screen.js';
import { wizardScreen } from './screens/wizard-screen/wizard-screen.js';
import router from './ts/ui/router.js';
const appState = {
   currentStepIndex: 0,
   fighterName: '',
   playerName: '',
   playerEmail: '',
};
document.addEventListener('DOMContentLoaded', () => {
   const app = document.querySelector('#app');
   if (!!app) {
      const displayWelcomeScreen = welcomeScreen();
      app.append(displayWelcomeScreen);
      router.addRoute('/wizard', () => {
         while (app.firstChild) app.firstChild.remove();
         app.append(wizardScreen(appState));
      });
      const chooseButton = document.querySelector('.button-primary');
      if (chooseButton) {
         chooseButton.addEventListener('click', () => {
            router.navigateForward();
         });
      }
   }
});
