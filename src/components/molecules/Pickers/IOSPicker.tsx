import React from 'react';

import {PickerIOS} from '@react-native-picker/picker';
import {ItemValue} from '@react-native-picker/picker/typings/Picker';
import {useTranslation} from 'react-i18next';
import {PickerDataType} from '../../../types/pickerType';
import {Typography} from '../../../assets/colors/tokens/globalParsed';
import globalFonts from '../../../assets/fonts/fonts';
import colors from '../../../assets/colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface Props {
  selectedValue: ItemValue | undefined;
  data: Array<PickerDataType>;
  onPress: (args: ItemValue) => void;
}

function IOSPicker({data, selectedValue, onPress}: Props) {
  const {t} = useTranslation();
  const theme = useAppSelector(state => state.theme.theme);
  const itemStyles = React.useMemo(
    () => ({
      ...Typography.H3,
      color: colors[theme].TEXT_LIGHT,
      fontFamily: globalFonts.regular,
    }),
    [theme],
  );

  const items = React.useMemo(
    () =>
      data.map(item => (
        <PickerIOS.Item
          key={item.value.toString()}
          value={item.value}
          label={t(item.label)}
        />
      )),
    [data, t],
  );

  return (
    <PickerIOS
      selectedValue={
        selectedValue !== undefined ? selectedValue : data[0].value
      }
      onValueChange={onPress}
      themeVariant={theme === 'light' ? 'light' : 'dark'}
      itemStyle={itemStyles}>
      {items}
    </PickerIOS>
  );
}

export default IOSPicker;
