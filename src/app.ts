import { welcomeScreen } from './screens/welcome-screen';
import { wizardScreen } from './screens/wizard-screen';

document.addEventListener('DOMContentLoaded', () => {
   console.log('ts file');

   const app = document.querySelector('#app');
   const displayWelcomeScreen = welcomeScreen();
   const displayWizardScreen = wizardScreen();
   // Display welcome screen
   // app.append(displayWelcomeScreen);
   // Display wizard screen
   // app.append(displayWizardScreen);
});
