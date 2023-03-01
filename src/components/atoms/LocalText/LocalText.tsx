import React from 'react';
import {StyleProp, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {StyleColorType} from '../../../types/helpers/themeHelper';
import Typography, {
  GlobalTextStyleType,
} from '../../../assets/colors/tokens/textSize';
import {GlobalFontType} from '../../../assets/fonts/fonts';
import {LocalTextProps} from '../../../types/helpers/textHelper';
import {useAppSelector} from '../../../hook/useAppSelector';
import colors, {TextColorsType} from '../../../assets/colors/tokens/colors';
import {getFontFamily} from '../../../shared/utility/textStyle';
import transformTestID from '../../../shared/utility/accessibilityUtility';

export interface LocalTextComponentProps extends LocalTextProps {
  color: TextColorsType;
  font?: GlobalFontType;
  size?: GlobalTextStyleType;
  withTranslation?: boolean;
  overrideTypography?: boolean;
}

function LocalText({
  children,
  color,
  size = 'Action',
  withTranslation = true,
  testID,
  overrideTypography,
  ...rest
}: LocalTextComponentProps) {
  const {t} = useTranslation();
  const theme = useAppSelector(state => state.theme.theme);

  const content = React.useMemo(() => {
    if (typeof children === 'string' && withTranslation) return t(children);
    return children;
  }, [withTranslation, children, t]);

  const colorScheme: StyleProp<StyleColorType> = React.useMemo(
    () => ({color: colors[theme][color]}),
    [theme, color],
  );
  const textSize = React.useMemo(() => getFontFamily(Typography[size]), [size]);
  const elementId = React.useMemo(() => {
    if (testID) return transformTestID(testID);
    return {};
  }, [testID]);

  const style = React.useMemo(() => {
    if (overrideTypography) return [textSize, rest.style, colorScheme];
    return [rest.style, textSize, colorScheme];
  }, [rest.style, textSize, colorScheme, overrideTypography]);

  return (
    <Text {...rest} style={style} {...elementId}>
      {content}
    </Text>
  );
}

export default LocalText;
