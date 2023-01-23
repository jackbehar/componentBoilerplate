import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface Props extends SvgProps {
  fillColor: ProjectColorsType;
}

function RightArrowIcon({fillColor, ...rest}: Props) {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <Path
        d="M38.54,25l-23-23a1.5,1.5,0,0,0-2.13,2.12L35.35,26,13.41,48a1.51,1.51,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0l23-23A1.51,1.51,0,0,0,38.54,25Z"
        fill={colors[theme][fillColor]}
      />
    </Svg>
  );
}

export default RightArrowIcon;
