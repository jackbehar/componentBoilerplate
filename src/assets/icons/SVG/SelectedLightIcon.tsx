import React from 'react';
import Svg, {Path, G, SvgProps} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface SelectedLightParams extends SvgProps {
  fillColor: ProjectColorsType;
}

function SelectedLightIcon({fillColor, ...rest}: SelectedLightParams) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M26 15.336c-5.88 0-10.664 4.784-10.664 10.664S20.12 36.664 26 36.664 36.664 31.88 36.664 26 31.88 15.336 26 15.336ZM13.488 15.61a1.496 1.496 0 0 0 2.121 0 1.5 1.5 0 0 0 0-2.12l-4.365-4.366a1.5 1.5 0 0 0-2.122 2.121l4.366 4.366ZM11.304 26.002a1.5 1.5 0 0 0-1.5-1.5H3.631a1.5 1.5 0 0 0 0 3h6.173a1.5 1.5 0 0 0 1.5-1.5ZM26 11.306a1.5 1.5 0 0 0 1.5-1.5V3.633a1.5 1.5 0 0 0-3 0v6.173a1.5 1.5 0 0 0 1.5 1.5ZM37.452 16.05c.384 0 .768-.146 1.06-.44l4.366-4.364a1.5 1.5 0 1 0-2.122-2.122l-4.365 4.365a1.5 1.5 0 0 0 1.06 2.561ZM48.37 24.502h-6.174a1.5 1.5 0 1 0 0 3h6.173a1.5 1.5 0 1 0 0-3ZM13.488 36.39l-4.366 4.365a1.5 1.5 0 0 0 2.122 2.12l4.365-4.364a1.5 1.5 0 1 0-2.121-2.121ZM26 40.694a1.5 1.5 0 0 0-1.5 1.5v6.173a1.5 1.5 0 1 0 3 0v-6.173a1.5 1.5 0 0 0-1.5-1.5ZM38.513 36.39a1.5 1.5 0 0 0-2.122 2.12l4.365 4.366a1.495 1.495 0 0 0 2.122 0 1.5 1.5 0 0 0 0-2.121l-4.365-4.365Z" />
      </G>
    </Svg>
  );
}

export default SelectedLightIcon;
