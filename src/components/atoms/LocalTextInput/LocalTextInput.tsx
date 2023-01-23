import React from 'react';
import {StyleProp, TextInput, View, ViewStyle} from 'react-native';
import colors, {ProjectColorsType} from '../../../assets/colors/tokens/colors';
import Typography, {
  GlobalTextStyleType,
} from '../../../assets/colors/tokens/textSize';
import {useAppSelector} from '../../../hook/useAppSelector';
import {LocalTextInputPropsType} from '../../../types/helpers/textInputHelper';
import {StyleColorType} from '../../../types/helpers/themeHelper';
import styles from './LocalTextInputStyles';
import {getFontFamily} from '../../../shared/utility/textStyle';
import LocalText from '../LocalText/LocalText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SeePasswordIcon from '../../../assets/icons/SVG/SeePasswordIcon';
import Confirm from '../../../assets/icons/SVG/Confirm';
import InfoIcon from '../../../assets/icons/SVG/InfoIcon';
import WarningIcon from '../../../assets/icons/SVG/WarningIcon';
// import ToolTipComponent from '../ToolTip';

export interface LocalTextInputProps extends LocalTextInputPropsType {
  color: ProjectColorsType;
  label?: string;
  size?: GlobalTextStyleType;
  borderBottomColor?: ProjectColorsType;
  containerStyle?: ViewStyle;
  borderLeftColor?: ProjectColorsType;
  isValid?: boolean;
  tooltip?: string;
  error?: string;
  forceShowContent?: boolean;
  onShowPassword?: (show: boolean) => void;
}

function LocalTextInput({
  color,
  label,
  size = 'Action',
  borderBottomColor = 'LAYOUT_DIVIDER',
  forceShowContent,
  onShowPassword,
  containerStyle,
  secureTextEntry,
  borderLeftColor = 'LAYOUT_DIVIDER',
  isValid,
  tooltip,
  error,
  ...rest
}: LocalTextInputProps) {
  const theme = useAppSelector(state => state.theme.theme);
  const [showPassword, setShowPassword] = React.useState(secureTextEntry);

  const colorScheme: StyleProp<StyleColorType> = React.useMemo(
    () => ({
      color: colors[theme][color],
      borderBottomColor: colors[theme][borderBottomColor],
      borderLeftColor: colors[theme][borderLeftColor],
    }),
    [theme, color, borderBottomColor, borderLeftColor],
  );

  const textSize = React.useMemo(() => getFontFamily(Typography[size]), [size]);
  const changeShowPasswordState = React.useCallback(
    () => {
      onShowPassword && onShowPassword(!showPassword)
      setShowPassword(curr => !curr)
    },
    [showPassword],
  );

  const getIcon = () => {
    if (secureTextEntry && forceShowContent===undefined)
      return (
        <TouchableOpacity
          onPress={changeShowPasswordState}
          containerStyle={styles.eyeIcon}>
          <SeePasswordIcon fillColor="TEXT_NEUTRAL" width={24} height={24} />
        </TouchableOpacity>
      );
    if (isValid)
      return (
        <View style={styles.validIcon}>
          <Confirm fillColor="ACCENT_TERTIARY_REGULAR" width={16} height={16} />
        </View>
      );
    if (!!tooltip)
      return (
        <View style={styles.validIcon}>
          {/* <ToolTipComponent
            tooltipType="info"
            visible={false}
            text={tooltip}
            elementId={`confirm_password_tooltip`}
          /> */}
        </View>
      );
    if (!!error)
      return (
        <View style={styles.validIcon}>
          <WarningIcon
            fillColor="SEMANTIC_NEGATIVE_REGULAR"
            width={16}
            height={16}
          />
        </View>
      );
  };

  return (
    <View style={containerStyle}>
      <LocalText color="TEXT_NEUTRAL" size="Label">
        {label}
      </LocalText>
      <View>
        <TextInput
          {...rest}
          secureTextEntry={showPassword || forceShowContent}
          style={[rest.style, styles.base, colorScheme, textSize, rest.editable === false && {opacity:0.4}]}
        />
        {getIcon()}
      </View>
      <LocalText color="LAYOUT_SPOT" size="Label" style={styles.errorMessage}>
        {error ? error : ' '}
      </LocalText>
    </View>
  );
}

export default LocalTextInput;
