import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/tokens/colors';
import {ThemeVariant} from '../../../types/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleIcon: {
    marginLeft: 10,
  },
  dropdownText: {
    marginRight: 10,
  },
});

function getDynamicColors(theme: ThemeVariant) {
  return {
    container: {
      borderBottomColor: colors[theme].LAYOUT_DIVIDER,
    },
  };
}

export default {styles, getDynamicColors};
