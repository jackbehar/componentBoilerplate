import {StyleProp, TextStyle} from 'react-native';
import {TextProps} from 'react-native-elements';
import {ExtractSinglePropType} from '../utils';

export type FontFamilyType = ExtractSinglePropType<TextStyle, 'fontFamily'>;

export type LocalTextProps = Omit<TextProps, 'style'> & {
  style?: StyleProp<
    Omit<TextStyle, 'color' | 'fontFamily' | 'fontSize' | 'lineHeight'>
  >;
};
