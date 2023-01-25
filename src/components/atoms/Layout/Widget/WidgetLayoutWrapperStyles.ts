import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import colors from '../../../../assets/colors/tokens/colors';
import GET_SHADOWS from '../../../../styles/shadow';
import {ThemeVariant} from '../../../../types/theme';
import WidgetLayoutWrapperConsts from './WidgetLayoutWrapperConsts';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: WidgetLayoutWrapperConsts.WIDGET_HEIGHT,
    marginBottom: 16,
    marginRight: WidgetLayoutWrapperConsts.WIDGET_MARGINS,
    padding: 8,
    width: WidgetLayoutWrapperConsts.WIDGET_WIDTH,
  },
  graphContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
});

function getColors(theme: ThemeVariant): StyleProp<ViewStyle> {
  return {
    backgroundColor: colors[theme].LAYOUT_SURFACE,
    ...GET_SHADOWS(theme).default,
  };
}

export default {styles, getColors};
