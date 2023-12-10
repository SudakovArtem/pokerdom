import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {initModals} from './modules/modals/init-modals';
import {initWheel} from './modules/init-wheel.js';
import './vendor/focus-visible-polyfill';
import {initHoverBlocks} from './modules/init-hover-blocks.js';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------
  window.addEventListener('load', () => {
    initModals();
    initWheel();
    initHoverBlocks();
  });
});
