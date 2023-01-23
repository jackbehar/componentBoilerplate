import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import colors from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import {IconProps} from '../../../types/icons';

function TimerIcon({fillColor, ...rest}: IconProps) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M48.518 25.475a1.504 1.504 0 0 0-1.562 1.435C46.49 37.825 37.808 46.42 27 46.927v-2.432a1 1 0 0 0-2 0v2.43C14.234 46.413 5.586 37.766 5.075 27h2.43a1 1 0 0 0 0-2h-2.43C5.602 13.9 14.771 5.025 26 5.025c5.098 0 9.995 1.852 13.82 5.207l-2.04 2.04c-.311.311-.424.68-.311 1.01.114.33.43.55.866.603l5.507.676-1.94 1.94a.941.941 0 0 0-.277.672c0 .254.098.492.278.671l.1.1c.179.18.417.279.672.279a.942.942 0 0 0 .671-.278l6.365-6.365a.95.95 0 0 0 0-1.343l-.101-.1a.974.974 0 0 0-1.343 0l-1.94 1.94-.676-5.507c-.054-.437-.274-.753-.604-.866s-.698-.001-1.01.31L41.95 8.102A23.933 23.933 0 0 0 26 2.025C12.78 2.025 2.024 12.78 2.024 26S12.78 49.975 26 49.975c12.883 0 23.405-10.075 23.953-22.938a1.5 1.5 0 0 0-1.435-1.562Z" />
        <Path d="M26 8.83a1 1 0 0 0-1 1V23.71a2.498 2.498 0 0 0 1 4.789 2.498 2.498 0 0 0 1-4.789V9.83a1 1 0 0 0-1-1Z" />
      </G>
    </Svg>
  );
}

export default TimerIcon;
