import React from 'react';
import {Pressable} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import LocalText from '../../LocalText/LocalText';
import {TextColorsType} from '../../../../assets/colors/tokens/colors';
import LocalButtonStyles from './LocalButtonStyles';
import {LocalButtonType} from '../../../../types/component/LocalButton';

export interface LocalButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: LocalButtonType;
  ddmParam: string;
}

function LocalButton({
  text,
  disabled,
  onPress,
  variant = LocalButtonType.PRIMARY,
  ddmParam,
}: LocalButtonProps) {
  const animatedValue = useSharedValue(0);

  const onPressIn = React.useCallback(() => {
    if (!disabled) animatedValue.value = withTiming(1, {duration: 100});
  }, [disabled]);

  const onPressOut = React.useCallback(() => {
    if (!disabled) animatedValue.value = withTiming(0, {duration: 100});
  }, [disabled]);

  const animatedStyles = LocalButtonStyles.useContainerAnimatedStyle(
    animatedValue,
    Boolean(disabled),
    variant,
  );

  const textColor = React.useMemo(
    () =>
      (disabled ? 'TEXT_REGULAR_DISABLED' : 'TEXT_REGULAR') as TextColorsType,
    [disabled],
  );

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        style={[LocalButtonStyles.styles.container, animatedStyles]}>
        <LocalText color={textColor}>{text}</LocalText>
      </Animated.View>
    </Pressable>
  );
}

export default LocalButton;
