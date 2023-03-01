import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../assets/colors/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import Constants from '../../..//constants/layoutConstants';
import UiConstants from '../../..//constants/uiConstants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: Colors.TRANSPARENT_COLOR,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: wp('90%'),
    paddingTop: hp('0.5%'),
  },
  textContainer: {
    width: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: hp('4%'),
    width: wp('8%'),
  },
  subtitle: {
    flex: 1,
    textAlign: 'right',
    paddingTop: hp('0.3%'),
    paddingRight: wp('1%'),
  },
});
