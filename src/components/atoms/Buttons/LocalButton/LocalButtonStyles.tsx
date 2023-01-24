import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {useAppSelector} from '../../../../hook/useAppSelector';
import {LocalButtonType} from '../../../../types/component/LocalButton';
import LocalButtonConsts from './LocalButtonConsts';

function useContainerAnimatedStyle(
  animatedValue: Animated.SharedValue<number>,
  disabled: boolean,
  variant: LocalButtonType,
) {
  const theme = useAppSelector(state => state.theme.theme);
  const [containerColors, setContainerColors] = React.useState(
    LocalButtonConsts.getContainerColors(theme, variant, disabled),
  );
  const containerColorsSharedValue = useSharedValue(containerColors);

  React.useEffect(() => {
    const colors = LocalButtonConsts.getContainerColors(
      theme,
      variant,
      disabled,
    );
    setContainerColors(colors);
    containerColorsSharedValue.value = colors;
  }, [theme, disabled, variant]);

  return useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animatedValue.value,
      [0, 1],
      containerColorsSharedValue.value.backgroundColor,
    );

    return {
      backgroundColor,
      borderColor: containerColorsSharedValue.value.borderColor,
    };
  }, [containerColors]);
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
});

export default {useContainerAnimatedStyle, styles};
