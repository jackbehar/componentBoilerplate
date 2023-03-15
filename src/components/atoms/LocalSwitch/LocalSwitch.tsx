import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import LocalSwitchStyles from './LocalSwitchStyles';

interface Props {
  value: boolean;
  onPress: () => void;
  disabled?: boolean;
  ddm?:string;
}

function LocalSwitch({value, disabled, onPress}: Props) {
  const animatedValue = useSharedValue(Number(value));

  const handleOnPress = React.useCallback(() => {
    if (!disabled) onPress();
  }, [disabled, onPress]);

  React.useEffect(() => {
    animatedValue.value = withTiming(Number(value));
  }, [value]);

  const animatedContainerStyle = LocalSwitchStyles.useContainerAnimatedStyle(
    animatedValue,
    Boolean(disabled),
  );

  const animatedSwitchStyle = LocalSwitchStyles.useSwitchAnimatedStyle(
    animatedValue,
    Boolean(disabled),
  );

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <Animated.View
        style={[LocalSwitchStyles.styles.container, animatedContainerStyle]}>
        <Animated.View
          style={[LocalSwitchStyles.styles.switch, animatedSwitchStyle]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default LocalSwitch;
