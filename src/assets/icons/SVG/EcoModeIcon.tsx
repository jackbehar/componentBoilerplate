import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface EcoModeParams extends SvgProps {
  fillColor: ProjectColorsType;
}

function EcoModeIcon({fillColor, ...rest}: EcoModeParams) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <Path
        d="M34.387.385a1.5 1.5 0 0 0-2.394.555c-2.653 6.595-7.975 12.778-12.942 15.036-5.587 2.54-9.406 6.387-11.043 11.127-1.425 4.124-1.039 8.652 1.088 12.748 1.226 2.36 3.043 4.296 5.285 5.739-2.3 1.11-4.864 2.087-7.693 2.924a1.5 1.5 0 0 0 .852 2.877c3.837-1.137 7.23-2.523 10.182-4.149.72.262 1.457.498 2.23.674 1.443.328 2.925.49 4.418.49 3.46 0 6.988-.87 10.253-2.566C41.933 42.045 45.76 35.73 46 27.07c.21-7.626-4.17-19.997-11.612-26.686Zm-1.146 42.792c-3.865 2.007-8.124 2.667-12.066 1.913 4.754-3.366 7.988-7.543 9.657-12.505.05-.152.094-.282.133-.39a1.5 1.5 0 0 0-2.819-1.025c-.046.127-.098.28-.158.459-1.669 4.962-5.189 9.064-10.492 12.273-2.512-1.198-4.502-3.055-5.737-5.433-1.744-3.359-2.069-7.048-.916-10.387 1.363-3.943 4.63-7.184 9.45-9.375 5.17-2.35 10.439-8.071 13.585-14.611 5.725 6.201 9.3 16.448 9.122 22.892-.21 7.593-3.402 12.889-9.76 16.19Z"
        fill={colors[theme][fillColor]}
      />
    </Svg>
  );
}

export default EcoModeIcon;
