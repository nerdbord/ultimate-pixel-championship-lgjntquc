import { initWizard } from '../../wizard/wizard.js';
import { createBorderTop } from '../../components/borders/border-top/border-top.js';
import { createBorderBottom } from '../../components/borders/border-bottom/boder-bottom.js';
export const wizardScreen = (appState) => {
   const wizardScreenWrapper = document.createElement('div');
   wizardScreenWrapper.classList.add('app-container');
   const wizardBorderTop = createBorderTop();
   const wizard = initWizard(appState);
   const wizardBorderBottom = createBorderBottom();
   wizardScreenWrapper.append(wizardBorderTop, wizard, wizardBorderBottom);
   return wizardScreenWrapper;
};
