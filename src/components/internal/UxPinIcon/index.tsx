import PropTypes from 'prop-types';
import React from 'react';
import { ProjectColorsType } from '../../../assets/colors/tokens/colors';
import { IconType, Icon } from '../../../assets/icons';

interface DefaultProps {
    fillColor: ProjectColorsType,
    width?: number,
    height?: number
    icon: IconType
}

export default function UxPinIcon({fillColor, width, height, icon}: DefaultProps) {
  return React.createElement(Icon[icon], {
    fillColor,
    width,
    height
  });
}
