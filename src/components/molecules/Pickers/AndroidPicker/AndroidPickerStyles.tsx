import {StyleSheet} from 'react-native';
import {screenHeight} from '../../../../shared/utility/metrics';

const BORDER_RADIUS = 16;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
  },
  flatListContainer: {
    justifyContent: 'center',
  },
  flatlistStyles: {
    flexGrow: 1,
  },
});

function GET_HEIGHT(dataLength: number) {
  if (dataLength <= 5) {
    return {};
  }
  return {
    height: screenHeight / 2.8,
  };
}

export {GET_HEIGHT};
