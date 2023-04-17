import { welcomeScreen } from './screens/welcome-screen.js';
import { wizardScreen } from './screens/wizard-screen.js';

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
