import {StyleProp, TextInputProps, TextStyle} from 'react-native';

export type LocalTextInputPropsType = Omit<TextInputProps, 'style'> & {
  style?: StyleProp<
    Omit<TextStyle, 'color' | 'fontFamily' | 'fontSize' | 'lineHeight'>
  >;
};
