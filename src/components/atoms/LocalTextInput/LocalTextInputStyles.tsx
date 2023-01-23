import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  base: {
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    height: 24,
    paddingLeft: 5,
    marginTop: 8,
    paddingRight: 32,
    paddingTop: 0,
    paddingBottom: 0,
  },
  errorMessage: {
    marginTop: 8,
  },
  eyeIcon: {position: 'absolute', right: 0, bottom: 0},
  validIcon: {position: 'absolute', right: 4, bottom: 4},
});

export default styles;
