import React from 'react';
import {View} from 'react-native';
import {ProjectColorsType} from '../../../assets/colors/tokens/colors';
import {IconProps} from '../../../types/icons';
import LocalText, {LocalTextComponentProps} from './LocalText';
import LocalTextWithIconStyles from './LocalTextWithIconStyles';

export interface LocalTextWithIconProps extends LocalTextComponentProps {
  Icon: (props: IconProps) => JSX.Element;
  iconSize: number;
  iconColor: ProjectColorsType;
}

function LocalTextWithIcon({
  Icon,
  iconSize,
  iconColor,
  ...rest
}: LocalTextWithIconProps) {
  return (
    <View style={LocalTextWithIconStyles.styles.container}>
      <Icon
        fillColor={iconColor}
        width={iconSize}
        height={iconSize}
        style={LocalTextWithIconStyles.styles.icon}
      />
      <LocalText {...rest} />
    </View>
  );
}

export default LocalTextWithIcon;
