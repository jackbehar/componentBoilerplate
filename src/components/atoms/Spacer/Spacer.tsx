import React from 'react';
import {View, ViewStyle} from 'react-native';
import {DEFAULT_SPACER_SIZE} from './SpacerConsts';
import {useMakeStyles} from '../../../hook/useMakeStyles';

interface Props extends ViewStyle {
  size: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

const getDimensions = (size: number) => ({
  width: size,
  height: size,
});

function Spacer({size, fullWidth = false, fullHeight = false, ...rest}: Props) {
  const baseStyle = useMakeStyles([
    getDimensions(DEFAULT_SPACER_SIZE * size),
    fullWidth ? {width: '100%'} : {},
    fullHeight ? {height: '100%'} : {},
    {...rest},
  ]);

  return <View style={baseStyle} />;
}

export default Spacer;
