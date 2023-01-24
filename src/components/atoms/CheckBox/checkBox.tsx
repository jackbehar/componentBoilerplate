import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import style from './checkBoxStyle';
import testID from '../../../shared/utility/accessibilityUtility';
import {useAppSelector} from '../../../hook/useAppSelector';
import colors from '../../../assets/colors/tokens/colors';
import Confirm3Icon from '../../../assets/icons/SVG/Confirm3Icon';
export interface CheckBoxProps {
  onPress: () => void;
  elementId: string;
  value: boolean;
  isHighlighted?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
}
export const CheckBox: React.FC<CheckBoxProps> = ({
  onPress,
  value,
  elementId,
  isHighlighted,
  disabled,
}) => {
  const theme = useAppSelector(state => state.theme.theme);

  const handleOnPress = React.useCallback(() => {
    if (!disabled) onPress();
  }, [disabled, onPress]);

  return (
    <View style={style.mainViewStyle}>
      <TouchableOpacity
        onPress={() => handleOnPress()}
        disabled={disabled}
        {...testID(elementId)}>
        <View
          style={[
            style.box,
            {
              backgroundColor: value
                ? colors[theme].ACCENT_PRIMARY_REGULAR
                : colors[theme].LAYOUT_BACKGROUND,
              borderColor: isHighlighted
                ? colors[theme].LAYOUT_SPOT
                : colors[theme].ACCENT_PRIMARY_REGULAR,
            },
          ]}
          {...testID(`${elementId}-iconContainer`)}>
          {value === true ? (
            <Confirm3Icon
              fillColor="LAYOUT_BACKGROUND"
              width={24}
              height={24}
            />
          ) : null}
        </View>
      </TouchableOpacity>
    </View>
  );
};
