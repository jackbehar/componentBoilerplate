import * as React from 'react';
import Svg, { Path, G} from 'react-native-svg';
import colors from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import { IconProps } from '../../../types/icons';

function RefreshIcon({fillColor,  ...rest}: IconProps) {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Svg viewBox="0 0 36 36" {...rest}>
        <Path
          id="Path_8773"
          data-name="Path 8773"
          d="M33.46,15.262l-1.425.375a12.975,12.975,0,0,0-24.45.075.825.825,0,0,0,.525,1.05h.3a.825.825,0,0,0,.75-.525,11.325,11.325,0,0,1,21.225-.225l-1.425.375a.525.525,0,0,0-.15.975l2.85,1.875a.525.525,0,0,0,.75-.15l1.65-3.075a.525.525,0,0,0-.6-.75"
          transform="translate(-1.885 -1.762)"
          fill={colors[theme][fillColor]}
        />
        <Path
          id="Path_8774"
          data-name="Path 8774"
          d="M31.03,27.168a.825.825,0,0,0-1.05.525,11.325,11.325,0,0,1-21.225.225l1.425-.375a.525.525,0,0,0,.15-.975l-2.85-1.8a.525.525,0,0,0-.75.15l-1.65,3a.525.525,0,0,0,.6.75l1.425-.375a12.975,12.975,0,0,0,24.45-.075.825.825,0,0,0-.525-1.05"
          transform="translate(-1.255 -6.168)"
          fill={colors[theme][fillColor]}
        />
    </Svg>
  );
}

export default RefreshIcon;
