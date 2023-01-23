import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface Props extends SvgProps {
  fillColor: ProjectColorsType;
}

function StandByIcon({fillColor, ...rest}: Props) {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M32.6 7.665a1.5 1.5 0 1 0-.88 2.868C39.963 13.058 45.5 20.552 45.5 29.18c0 10.753-8.748 19.5-19.5 19.5S6.5 39.933 6.5 29.18c0-8.57 5.731-16.258 13.938-18.695a1.5 1.5 0 1 0-.855-2.876C10.113 10.422 3.5 19.292 3.5 29.18c0 12.407 10.093 22.5 22.5 22.5s22.5-10.093 22.5-22.5c0-9.955-6.39-18.602-15.9-21.515Z" />
        <Path d="M26 15.64a1.5 1.5 0 0 0 1.5-1.5V1.82a1.5 1.5 0 0 0-3 0v12.32a1.5 1.5 0 0 0 1.5 1.5Z" />
      </G>
    </Svg>
  );
}

export default StandByIcon;
