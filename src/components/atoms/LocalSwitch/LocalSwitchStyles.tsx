import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {useAppSelector} from '../../../hook/useAppSelector';
import LocalSwitchConsts from './LocalSwitchConsts';

function useSwitchAnimatedStyle(
  animatedValue: Animated.SharedValue<number>,
  disabled: boolean,
) {
  const theme = useAppSelector(state => state.theme.theme);

  const [switchColors, setSwitchColors] = React.useState(
    LocalSwitchConsts.getSwitchColors(theme, Boolean(disabled)),
  );
  const switchColorsSharedValue = useSharedValue(switchColors);

  React.useEffect(() => {
    const colors = LocalSwitchConsts.getSwitchColors(theme, disabled);
    setSwitchColors(colors);
    switchColorsSharedValue.value = colors;
  }, [theme, disabled]);

  return useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animatedValue.value,
      [0, 1],
      switchColorsSharedValue.value.backgroundColor,
    );

    const borderColor = interpolateColor(
      animatedValue.value,
      [0, 1],
      switchColorsSharedValue.value.borderColors,
    );

    const translateX = interpolate(
      animatedValue.value,
      [0, 1],
      [
        0,
        LocalSwitchConsts.CONTAINER_WIDTH - LocalSwitchConsts.SWITCH_WIDTH - 8,
      ],
    );

    return {
      backgroundColor,
      borderColor,
      transform: [{translateX}],
    };
  }, [switchColors]);
}

function useContainerAnimatedStyle(
  animatedValue: Animated.SharedValue<number>,
  disabled: boolean,
) {
  const theme = useAppSelector(state => state.theme.theme);
  const [containerColors, setContainerColors] = React.useState(
    LocalSwitchConsts.getPrimaryContainerColors(theme, disabled),
  );
  const containerColorsSharedValue = useSharedValue(containerColors);

  React.useEffect(() => {
    const colors = LocalSwitchConsts.getPrimaryContainerColors(theme, disabled);
    setContainerColors(colors);
    containerColorsSharedValue.value = colors;
  }, [theme, disabled]);

  return useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animatedValue.value,
      [0, 1],
      containerColorsSharedValue.value.backgroundColor,
    );

    const borderColor = interpolateColor(
      animatedValue.value,
      [0, 1],
      containerColorsSharedValue.value.borderColors,
    );

    return {
      backgroundColor,
      borderColor,
    };
  }, [containerColors]);
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: LocalSwitchConsts.BORDER_WIDTH,
    height: LocalSwitchConsts.CONTAINER_HEIGHT,
    paddingHorizontal: 4,
    paddingVertical: 3,
    width: LocalSwitchConsts.CONTAINER_WIDTH,
  },
  switch: {
    borderRadius: 4,
    borderWidth: LocalSwitchConsts.BORDER_WIDTH,
    height: LocalSwitchConsts.SWITCH_HEIGHT,
    width: LocalSwitchConsts.SWITCH_WIDTH,
  },
});

export default {styles, useSwitchAnimatedStyle, useContainerAnimatedStyle};
