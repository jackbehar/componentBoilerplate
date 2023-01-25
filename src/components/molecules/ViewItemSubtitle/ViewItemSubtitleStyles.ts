import {StyleSheet} from 'react-native';

export const SPACER = 10;
export const SMALL_SPACER = 8;
export const ARROW_SIZE = 15;
const SPACING_BOTTOM = 9;

const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: SPACING_BOTTOM,
    paddingTop: 11,
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 8,
  },
  marginLeft: {
    marginLeft: 8,
  },
});

export default {styles};
