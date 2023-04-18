import { initWizard } from '../../wizard/wizard.js';
import { createBorderTop } from '../../components/borders/border-top/border-top.js';
import { createBorderBottom } from '../../components/borders/border-bottom/boder-bottom.js';
import { createButtonPrimary } from '../../components/buttons/button-primary/button-primary.js';

export const wizardScreen = (): HTMLDivElement => {
   const wizardScreenWrapper = document.createElement('div');
   wizardScreenWrapper.classList.add('container');

   const wizardBorderTop = createBorderTop();

   const wizard = initWizard();

   const wizardButton = createButtonPrimary('Choose');
   wizardButton.classList.add('wizard-button');

   const wizardBorderBottom = createBorderBottom();

   wizardScreenWrapper.append(wizardBorderTop, wizard, wizardButton, wizardBorderBottom);
   return wizardScreenWrapper;
};
