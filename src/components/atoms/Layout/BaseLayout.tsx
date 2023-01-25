import React from 'react';
import {View, ViewStyle} from 'react-native';
import {useMakeStyles} from '../../../hook/useMakeStyles';

export interface BaseLayoutProps extends ViewStyle {
  center?: boolean;
  children: React.ReactNode;
}

function BaseLayout({center = false, children, ...rest}: BaseLayoutProps) {
  const baseStyle = useMakeStyles([
    center
      ? {
          justifyContent: 'center',
          alignItems: 'center',
        }
      : {},
    {...rest},
  ]);

  return <View style={baseStyle}>{children}</View>;
}

export default BaseLayout;
