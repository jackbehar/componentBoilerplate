import React from 'react';
import Svg, {Path, G, SvgProps} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface InternalLightParam extends SvgProps {
  fillColor: ProjectColorsType;
}

function InternalLightIcon({fillColor, ...rest}: InternalLightParam) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M36.039 16.046H15.96a1 1 0 0 0 0 2h4.612c.473 2.568 2.724 4.521 5.427 4.521s4.954-1.953 5.427-4.521h4.612a1 1 0 0 0 0-2Zm-10.04 4.521c-1.59 0-2.924-1.068-3.359-2.521h6.72c-.435 1.453-1.768 2.521-3.36 2.521ZM19.641 21.988l-2.154 2.154a1.001 1.001 0 0 0 1.415 1.415l2.154-2.155a1 1 0 0 0-1.415-1.414ZM26 24.036a1 1 0 0 0-1 1v3.047a1 1 0 1 0 2 0v-3.047a1 1 0 0 0-1-1ZM32.359 21.988a1 1 0 0 0-1.415 1.414l2.155 2.155a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.415l-2.154-2.154Z" />
        <Path d="M38.446 10.054H13.555c-1.93 0-3.5 1.57-3.5 3.5v24.892c0 1.93 1.57 3.5 3.5 3.5h24.89c1.93 0 3.5-1.57 3.5-3.5V13.554c0-1.93-1.57-3.5-3.5-3.5Zm.5 28.392c0 .27-.23.5-.5.5H13.555c-.271 0-.5-.23-.5-.5V13.554c0-.27.229-.5.5-.5h24.89c.272 0 .5.23.5.5v24.892Z" />
      </G>
    </Svg>
  );
}

export default InternalLightIcon;
