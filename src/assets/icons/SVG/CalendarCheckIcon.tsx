import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import colors from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import {IconProps} from '../../../types/icons';

function CalendarCheckIcon({fillColor, ...rest}: IconProps) {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Svg viewBox="0 0 52 52" width={52} height={52} {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="m12.521 28.295 8.587 8.587a1.497 1.497 0 0 0 2.122 0l16.248-16.25a1.5 1.5 0 1 0-2.12-2.12L22.167 33.7l-7.525-7.526a1.5 1.5 0 0 0-2.122 2.121Z" />
        <Path d="M41.786 5.428h-.321a1.5 1.5 0 1 0 0 3h.32a3.487 3.487 0 0 1 3.484 3.483v31.571a3.487 3.487 0 0 1-3.483 3.483H10.214a3.487 3.487 0 0 1-3.483-3.483V11.911a3.487 3.487 0 0 1 3.483-3.483h.4a1.5 1.5 0 0 0 0-3h-.4a6.49 6.49 0 0 0-6.483 6.483v31.571a6.49 6.49 0 0 0 6.483 6.483h31.572a6.49 6.49 0 0 0 6.483-6.483V11.911a6.49 6.49 0 0 0-6.483-6.483Z" />
        <Path d="M21.687 8.428h8.576a1.5 1.5 0 0 0 0-3h-8.576a1.5 1.5 0 0 0 0 3ZM16.187 11.807a1.5 1.5 0 0 0 1.5-1.5V3.536a1.5 1.5 0 1 0-3 0v6.77a1.5 1.5 0 0 0 1.5 1.5ZM35.768 11.807a1.5 1.5 0 0 0 1.5-1.5V3.536a1.5 1.5 0 1 0-3 0v6.77a1.5 1.5 0 0 0 1.5 1.5Z" />
      </G>
    </Svg>
  );
}

export default CalendarCheckIcon;
