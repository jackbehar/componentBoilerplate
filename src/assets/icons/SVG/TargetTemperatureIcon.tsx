import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface Props extends SvgProps {
  fillColor: ProjectColorsType;
}

function TargetTemperatureIcon({fillColor, ...rest}: Props) {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <Path
        d="M47.486 28.843a1.5 1.5 0 0 0-1.913-.919l-8.117 2.852L29 25.894l8.456-4.882 8.117 2.851a1.501 1.501 0 0 0 .994-2.83l-5.687-1.998 5.534-3.195a1.5 1.5 0 1 0-1.5-2.598l-5.534 3.195 1.114-5.924a1.5 1.5 0 0 0-2.949-.555l-1.59 8.456-8.455 4.882v-9.763l6.528-5.605a1.5 1.5 0 1 0-1.954-2.277L27.5 9.58V3.188a1.5 1.5 0 1 0-3 0v6.39l-4.574-3.927a1.5 1.5 0 0 0-1.954 2.277l6.528 5.605v9.763l-8.456-4.882-1.59-8.456a1.5 1.5 0 1 0-2.948.555l1.115 5.924-5.535-3.195a1.5 1.5 0 0 0-1.5 2.598l5.535 3.195-5.688 1.998a1.5 1.5 0 0 0 .994 2.83l8.117-2.85L23 25.892l-8.456 4.883-8.117-2.852a1.5 1.5 0 0 0-.994 2.831l5.688 1.997-5.535 3.196a1.5 1.5 0 0 0 1.5 2.598l5.535-3.195-1.115 5.924a1.5 1.5 0 0 0 2.949.554l1.59-8.455 8.455-4.882v9.763l-6.528 5.605a1.5 1.5 0 1 0 1.954 2.276L24.5 42.21V48.6a1.5 1.5 0 1 0 3 0v-6.39l4.574 3.926a1.497 1.497 0 0 0 2.115-.16 1.5 1.5 0 0 0-.16-2.116L27.5 38.255v-9.763l8.456 4.882 1.59 8.455a1.5 1.5 0 1 0 2.948-.554L39.38 35.35l5.534 3.196a1.5 1.5 0 0 0 1.5-2.599l-5.534-3.195 5.687-1.997a1.5 1.5 0 0 0 .919-1.912Z"
        fill={colors[theme][fillColor]}
      />
    </Svg>
  );
}

export default TargetTemperatureIcon;
