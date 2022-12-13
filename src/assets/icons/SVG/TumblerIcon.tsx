import * as React from 'react';
import Svg, {Path, G, Rect} from 'react-native-svg';
import colors from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import {IconProps} from '../../../types/icons';

function TumblerIcon({fillColor, ...rest}: IconProps) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" width={52} height={52} {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M21.886 21.15h8c.47 0 .85.38.85.85v8c0 .47-.38.85-.85.85h-8a.851.851 0 0 1-.85-.85v-8c0-.47.38-.85.85-.85ZM3 21.15h8c.47 0 .85.38.85.85v8c0 .47-.381.85-.85.85H3a.85.85 0 0 1-.85-.85v-8c0-.47.38-.85.85-.85ZM41 21.15h8c.47 0 .85.38.85.85v8c0 .47-.381.85-.85.85h-8a.85.85 0 0 1-.85-.85v-8c0-.47.38-.85.85-.85Z" />
        <Rect
          x={21.036}
          y={2.15}
          width={9.701}
          height={9.701}
          rx={0.851}
          ry={0.851}
        />
        <Rect
          x={2.15}
          y={2.15}
          width={9.7}
          height={9.701}
          rx={0.85}
          ry={0.85}
        />
        <Rect
          x={40.15}
          y={2.15}
          width={9.7}
          height={9.701}
          rx={0.85}
          ry={0.85}
        />
        <Path d="M21.886 40.15h8c.47 0 .85.38.85.85v8c0 .47-.38.85-.85.85h-8a.851.851 0 0 1-.85-.85v-8c0-.47.38-.85.85-.85ZM3 40.15h8c.47 0 .85.38.85.85v8c0 .47-.381.85-.85.85H3a.85.85 0 0 1-.85-.85v-8c0-.47.38-.85.85-.85ZM41 40.15h8c.47 0 .85.38.85.85v8c0 .47-.381.85-.85.85h-8a.85.85 0 0 1-.85-.85v-8c0-.47.38-.85.85-.85Z" />
      </G>
    </Svg>
  );
}

export default TumblerIcon;
