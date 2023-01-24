import {StyleSheet} from 'react-native';
//Package for responsive screen height and width
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  box: {
    height: 24,
    width: 24,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  mainViewStyle: {},
});
