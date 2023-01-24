import {SvgProps} from 'react-native-svg';
import {ProjectColorsType} from '../assets/colors/tokens/colors';

export interface IconProps extends SvgProps {
  fillColor: ProjectColorsType;
}
