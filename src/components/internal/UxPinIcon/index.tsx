import PropTypes from 'prop-types';
import React from 'react';
import { ProjectColorsType } from '../../../assets/colors/tokens/colors';
import { IconType, Icon } from '../../../assets/icons';
import { DomeSize } from '../../../assets/colors/tokens/domeSize';

interface DefaultProps {
  fillColor: ProjectColorsType,
  //width?: number,
  //height?: number,
  icon: IconType,
  sizing?: DomeSize,
}

export default function UxPinIcon({ fillColor, icon, sizing, ...rest }: DefaultProps) {
  return React.createElement(Icon[icon], {
    fillColor,
    width:sizing,
    height:sizing,
  });
}
