import {StyleSheet} from 'react-native';
import {BORDER_RADIUS} from './BottomSheetModalConsts';

export default StyleSheet.create({
  bottomSheet: {
    flex: 1,
  },
  modal: {
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    paddingTop: 20,
    padding: 20,
  },
  text: {
    textAlign: 'center',
  },
});
