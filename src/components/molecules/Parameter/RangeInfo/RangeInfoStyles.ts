import {StyleSheet} from 'react-native';
import {lineHeights} from '../../../../assets/colors/tokens/globalParsed';
import Typography from '../../../../assets/colors/tokens/textSize';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {alignItems: 'center'},
  contentContainer: {alignItems: 'center', marginTop: 20},
  icon: {marginRight: 4},
  row: {flexDirection: 'row'},
  dash: {
    marginVertical: Typography.H1.lineHeight / 2 - 2,
  },
  warningIcon: {position: 'absolute', right: -20, top: -6},
  title: {lineHeight: 24},
  subtitle: {lineHeight: Typography.H1.fontSize * lineHeights[120]},
});

export default {styles};
