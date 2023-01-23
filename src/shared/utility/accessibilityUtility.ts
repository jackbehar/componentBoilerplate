import {Platform} from 'react-native';

const testID = (id: string) =>
  Platform.OS === 'ios'
    ? {testID: id, accessible: false}
    : {accessible: true, accessibilityLabel: id};

export default testID;
