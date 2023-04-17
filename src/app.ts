import { welcomeScreen } from './screens/welcome-screen/welcome-screen';
import { wizardScreen } from './screens/wizard-screen/wizard-screen';

document.addEventListener('DOMContentLoaded', () => {
   console.log('ts file');

   const app: HTMLElement | null = document.querySelector('#app');
   if (app !== null) {
      const displayWelcomeScreen = welcomeScreen();
      const displayWizardScreen = wizardScreen();
      // Display welcome screen
      app.append(displayWelcomeScreen);
      // Display wizard screen
      // app.append(displayWizardScreen);
   }
});
