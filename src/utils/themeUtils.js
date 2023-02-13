import { smartThemeDefault } from '../styles/smartThemeDefault';
import { smartThemeTn } from '../styles/smartThemeTn';
import { smartThemeWv } from '../styles/smartThemeWv';

const getCurrentTheme = (variant) => {
  let selectedTheme = smartThemeDefault;

  switch (variant) {
    case 'tn':
      selectedTheme = smartThemeTn;
      break;

    case 'wv':
      selectedTheme = smartThemeWv;
      break;

    default:
      break;
  }


  return selectedTheme;
};

export { getCurrentTheme };
