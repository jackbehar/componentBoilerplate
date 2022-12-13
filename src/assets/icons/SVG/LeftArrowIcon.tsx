import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface Props extends SvgProps {
  fillColor: ProjectColorsType;
}

function LeftArrowIcon({fillColor, ...rest}: Props) {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <Path
        d="M16.622 26 38.56 4.06a1.5 1.5 0 0 0-2.122-2.12l-23 23a1.5 1.5 0 0 0 0 2.12l23 23c.293.293.677.44 1.061.44s.768-.147 1.06-.44a1.5 1.5 0 0 0 0-2.12L16.623 26Z"
        fill={colors[theme][fillColor]}
      />
    </Svg>
  );
}

export default LeftArrowIcon;
