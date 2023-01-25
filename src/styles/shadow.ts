import colors from '../assets/colors/tokens/colors';
import {ThemeVariant} from '../types/theme';

function GET_DEFAULT_SHADOW(theme: ThemeVariant) {
  return {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  };
}

function GET_SHADOWS(theme: ThemeVariant) {
  return {
    default: GET_DEFAULT_SHADOW(theme),
  };
}

export default GET_SHADOWS;
