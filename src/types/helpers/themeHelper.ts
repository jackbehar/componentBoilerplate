import {TextStyle} from 'react-native';
import {ExtractSinglePropType} from '../utils';

export type StyleColorType = ExtractSinglePropType<TextStyle, 'color'>;
