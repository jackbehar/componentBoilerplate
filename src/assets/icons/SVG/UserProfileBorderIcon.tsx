import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G, Circle} from 'react-native-svg';
import colors from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import {IconProps} from '../types/icons';

function UserProfileBorderIcon({fillColor, ...rest}: IconProps) {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Svg viewBox="0 0 91 91" {...rest}>
      <Defs>
        <ClipPath id="a">
          <Path fill="none" d="M0 0h64v64H0z" />
        </ClipPath>
      </Defs>
      <G transform="translate(.5 .5)">
        <Circle
          cx={45}
          cy={45}
          r={45}
          opacity={0.2}
          fill={colors[theme][fillColor]}
        />
        <Circle
          cx={45}
          cy={45}
          r={45}
          stroke={colors[theme][fillColor]}
          strokeMiterlimit={10}
          fill="none"
        />
        <G clipPath="url(#a)" transform="translate(13 13)">
          <Path
            fill={colors[theme][fillColor]}
            d="M32 12a8.667 8.667 0 1 1-8.667 8.667A8.667 8.667 0 0 1 32 12m0-2.667a11.333 11.333 0 1 0 11.334 11.333A11.333 11.333 0 0 0 32 9.333M32 37.334c11.733 0 20 6 20 14.533H12c0-8.533 8.267-14.533 20-14.533m0-2.667c-13.334 0-22.667 7.067-22.667 17.2v2.8h45.333v-2.8c0-10.133-9.333-17.2-22.666-17.2"
          />
        </G>
      </G>
    </Svg>
  );
}

export default UserProfileBorderIcon;
