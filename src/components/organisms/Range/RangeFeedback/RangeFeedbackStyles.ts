import {StyleSheet} from 'react-native';
import {Typography} from '../../../../assets/colors/tokens/globalParsed';

const styles = StyleSheet.create({
  container: {
    transform: [{rotateY: '180deg'}],
  },
  infoContainer: {
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
    marginLeft: 0,
  },
});

export default {styles};
