import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {alignItems: 'center'},
  contentContainer: {alignItems: 'center', marginTop: 10},
  row: {flexDirection: 'row'},
  icon: {
    transform: [
      {
        translateY: 6,
      },
    ],
  },
});

export default {styles};
