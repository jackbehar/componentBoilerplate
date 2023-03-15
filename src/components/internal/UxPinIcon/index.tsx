import PropTypes from 'prop-types';
import React from 'react';
import { ProjectColorsType } from '../../../assets/colors/tokens/colors';
import { IconType, Icon } from '../../../assets/icons';
import { DomeSize } from '../../../assets/colors/tokens/domeSize';
import {sizing} from '../../../assets/colors/tokens/globalParsed';

interface DefaultProps {
  fillColor: ProjectColorsType,
  //width?: number,
  //height?: number,
  icon: IconType,
  sizes?: DomeSize,
}

export default function UxPinIcon({ fillColor, icon, sizes, ...rest }: DefaultProps) {
  //const dSize = DomeSize
  return React.createElement(Icon[icon], {
    fillColor,
    width:sizing[sizes],
    height:sizing[sizes],
  });
}
