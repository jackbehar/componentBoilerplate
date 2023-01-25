import {StyleSheet} from 'react-native';
import {isIOS} from '../../../../shared/utility/platform';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: isIOS ? 20 : 0,
  },
  text: {
    marginTop: 4,
  },
});

export default {styles};
