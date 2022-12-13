import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface Props extends SvgProps {
  fillColor: ProjectColorsType;
}

function DeckChairIcon({fillColor, ...rest}: Props) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <Path
        d="M49.014 27.61a1.5 1.5 0 0 0-1.974.777l-2.955 6.792c-2.23 5.16-3.106 6.267-7.316 6.267l-13.16-.03v-18.93h17.048a1.501 1.501 0 0 0 1.493-1.641c-.961-10.231-9.41-18.272-19.375-18.613a1.479 1.479 0 0 0-.39-.02c-.089-.001-.175-.013-.263-.013-.095 0-.187.012-.281.014a1.502 1.502 0 0 0-.4.02C11.318 2.582 2.87 10.63 2.067 20.867a1.497 1.497 0 0 0 1.496 1.617H20.61V41.41l-15.933-.037c-.799-.014-1.501.668-1.503 1.497s.668 1.501 1.496 1.503l5.265.013-2.12 3.18a1.5 1.5 0 1 0 2.496 1.663l3.224-4.835 23.23.053c.07 0 .131-.004.2-.005l3.19 4.787a1.498 1.498 0 0 0 2.08.416 1.5 1.5 0 0 0 .417-2.08l-2.357-3.534c3.25-.91 4.683-3.354 6.543-7.658l2.953-6.788a1.5 1.5 0 0 0-.777-1.974ZM22.11 5.31c4.046 2.971 6.222 7.734 6.491 14.175H15.619c.268-6.44 2.444-11.204 6.49-14.175ZM38.93 19.485h-7.303c-.205-5.548-1.69-10.05-4.425-13.456 5.886 1.928 10.518 7.076 11.728 13.456ZM17.035 6.005c-2.746 3.41-4.238 7.919-4.444 13.48H5.262C6.38 13.08 11.04 7.915 17.035 6.005Z"
        fill={colors[theme][fillColor]}
      />
    </Svg>
  );
}

export default DeckChairIcon;
