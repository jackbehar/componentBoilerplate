import React from 'react';
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Use,
} from 'react-native-svg';
import {useAppSelector} from '../../../hook/useAppSelector';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';

interface Props extends SvgProps {
  startColor?: ProjectColorsType;
  stopColor?: ProjectColorsType;
  lineColor?: ProjectColorsType;
}

function GraphIcon({
  startColor = 'LAYOUT_DIVIDER',
  stopColor = 'LAYOUT_BACKGROUND',
  lineColor = 'ACCENT_SECONDARY_REGULAR',
  ...rest
}: Props) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 159 105" {...rest}>
      <Defs>
        <LinearGradient id="a" gradientTransform="rotate(90 .5 .5)">
          <Stop offset={0} stopColor={colors[theme][startColor]} />
          <Stop offset={1} stopColor={colors[theme][stopColor]} />
        </LinearGradient>
      </Defs>
      <Path
        d="M-3 40s14.264-2.254 21-5.772c6.736-3.519 8.234-10.572 19-11.851 10.766-1.28 16.538 7.557 23.5 9.98s11.989-8.301 22.5-9.98c10.511-1.679 15.314 18.916 21 16.841 2.843-1.038 6.066-7.439 9.716-13.811 3.651-6.372 7.729-12.714 12.284-13.634 9.109-1.839 14.527 5.746 20.5 6.861 5.973 1.116 12.5-4.238 12.5-4.238V124l-162 .5Z"
        fill="url(#a)"
      />
      <Defs>
        <Path
          d="m-3 108.5 163.5 1V16s-8.027 5.263-14 4.147c-5.973-1.115-11.391-8.7-20.5-6.861-9.109 1.839-16.314 25.37-22 27.445-5.686 2.075-10.489-18.521-21-16.841-10.511 1.679-15.538 12.402-22.5 9.98-6.962-2.423-12.734-11.26-23.5-9.98-10.766 1.279-12.264 8.332-19 11.851C11.264 39.259-3 40-3 40Z"
          id="c"
        />
      </Defs>
      <G>
        <Use
          strokeWidth={2}
          stroke="#000"
          strokeLinecap="round"
          strokeDasharray={1}
          fillOpacity={0}
          xlinkHref="#c"
          clipPath="url(#c)"
        />
      </G>
      <Use
        xlinkHref="#c"
        fill="transparent"
        clipPath="url(#c)"
        strokeWidth={2}
        stroke={colors[theme][lineColor]}
        strokeLinecap="round"
        strokeDasharray={1}
      />
    </Svg>
  );
}

export default GraphIcon;
