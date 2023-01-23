import React from 'react';
import Svg, {Path, G, SvgProps} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface ExternalLightsIconParams extends SvgProps {
  fillColor: ProjectColorsType;
}

function ExternalLightsIcon({fillColor, ...rest}: ExternalLightsIconParams) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M14.139 14.962a1 1 0 0 0-1 1v4.611c-2.568.473-4.521 2.724-4.521 5.427s1.953 4.954 4.52 5.427v4.612a1 1 0 0 0 2 0V15.962a1 1 0 0 0-1-1ZM10.618 26c0-1.592 1.068-2.925 2.52-3.36v6.72c-1.452-.435-2.52-1.768-2.52-3.36ZM7.782 21.056a.997.997 0 0 0 1.415 0 1 1 0 0 0 0-1.414l-2.154-2.155a1 1 0 0 0-1.415 1.414l2.154 2.155ZM7.149 26a1 1 0 0 0-1-1H3.102a1 1 0 0 0 0 2H6.15a1 1 0 0 0 1-1ZM7.782 30.944l-2.154 2.154a1 1 0 1 0 1.415 1.415l2.154-2.155a1 1 0 0 0-1.415-1.414ZM46.426 9.782H21.535c-1.93 0-3.5 1.57-3.5 3.5v24.891c0 1.93 1.57 3.5 3.5 3.5h24.891c1.93 0 3.5-1.57 3.5-3.5V13.282c0-1.93-1.57-3.5-3.5-3.5Zm.5 28.391c0 .271-.229.5-.5.5H21.535a.507.507 0 0 1-.5-.5V13.282c0-.27.229-.5.5-.5h24.891c.271 0 .5.23.5.5v24.891Z" />
      </G>
    </Svg>
  );
}

export default ExternalLightsIcon;
