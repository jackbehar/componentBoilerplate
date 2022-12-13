import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import colors from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import {IconProps} from '../../../types/icons';

function ArrowUpSmall({
  fillColor,
  ...rest
}: IconProps) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest} >
      <Path
        d="M37.99997,33.50001c-.38391,0-.76782-.14648-1.06067-.43933l-10.93933-10.93933-10.93933,10.93933c-.58569,.58569-1.53564,.58569-2.12134,0-.58582-.58582-.58582-1.53552,0-2.12134l12-12c.58569-.58569,1.53564-.58569,2.12134,0l12,12c.58582,.58582,.58582,1.53552,0,2.12134-.29285,.29285-.67676,.43933-1.06067,.43933Z"
        fill={colors[theme][fillColor]}
      />
    </Svg>
  );
}

export default ArrowUpSmall;
