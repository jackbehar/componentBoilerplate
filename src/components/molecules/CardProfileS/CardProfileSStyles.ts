import {StyleSheet, ViewStyle} from 'react-native';
//Third party package for responsive screens
import colors from '../../../assets/colors/tokens/colors';
import {ThemeVariant} from '../../../types/theme';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  subContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
  },
  manageContainer: {
    flexDirection: 'row',
  },
});

export function getCardProfileSBgColor(theme: ThemeVariant): ViewStyle {
  return {
    backgroundColor: colors[theme].LAYOUT_SURFACE,
  };
}
