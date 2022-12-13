import React from 'react';
import Svg, {Path, G, SvgProps} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface Props extends SvgProps {
  fillColor: ProjectColorsType;
}

function ArrowOutIcon({fillColor, ...rest}: Props) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M49.627 26.565v-.003c.005-.011.007-.023.012-.035.059-.157.094-.324.097-.501l.002-.018v-.015l-.002-.019a1.49 1.49 0 0 0-.097-.502c-.005-.012-.007-.023-.011-.034l-.002-.005-.003-.012a1.497 1.497 0 0 0-.31-.466l-.005-.007-.002-.002-.013-.012-.002-.003-9.667-9.51a1.5 1.5 0 1 0-2.104 2.138l7.055 6.94-31.835-.009a1.5 1.5 0 0 0 0 3l31.837.009-7.057 6.942a1.5 1.5 0 0 0 2.104 2.138l9.667-9.51.003-.004.01-.01.004-.003.006-.01c.13-.133.236-.29.309-.463l.004-.014Z" />
        <Path d="M32.114 33.317a1.5 1.5 0 0 0-1.5 1.5v10.07c0 .064-.06.123-.124.123H5.374a.129.129 0 0 1-.124-.124V7.114c0-.065.059-.124.124-.124H30.49c.065 0 .124.059.124.124v10.08a1.5 1.5 0 0 0 3 0V7.114A3.127 3.127 0 0 0 30.49 3.99H5.374A3.128 3.128 0 0 0 2.25 7.114v37.772a3.128 3.128 0 0 0 3.124 3.124H30.49a3.127 3.127 0 0 0 3.124-3.124v-10.07a1.5 1.5 0 0 0-1.5-1.5Z" />
      </G>
    </Svg>
  );
}

export default ArrowOutIcon;
