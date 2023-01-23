import React from 'react';
import {StyleSheet, ImageStyle, ViewStyle, TextStyle} from 'react-native';

function useMakeStyles(styleArr: Array<ImageStyle | ViewStyle | TextStyle>) {
  return React.useMemo(() => StyleSheet.flatten(styleArr), [styleArr]);
}

export {useMakeStyles};
