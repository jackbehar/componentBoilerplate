import React from 'react';
import {FlatList, View} from 'react-native';
import {ItemValue} from '@react-native-picker/picker/typings/Picker';
import styles, {GET_HEIGHT} from './AndroidPickerStyles';
import colors from '../../../../assets/colors/tokens/colors';
import LocalText from '../../../atoms/LocalText/LocalText';
import {useAppSelector} from '../../../../hook/useAppSelector';
import {
  UnselectedItemType,
  SelectedItemType,
} from '../../../../types/bottomSheetPicker';
import {PickerDataType} from '../../../../types/pickerType';
import {BUTTON_HEIGHT} from '../BottomModalPicker/BottomSheetModalConsts';
import ColorFeedbackTextButton from '../../../atoms/Buttons/ColorFeedback/ColorFeedbackTextButton';

interface Props {
  selectedValue: ItemValue | undefined;
  data: Array<PickerDataType>;
  onPress: (arg: ItemValue) => void;
}

function AndroidPicker({selectedValue, data, onPress}: Props) {
  const theme = useAppSelector(state => state.theme.theme);
  const ref = React.useRef<FlatList>(null);

  const selectedItemStyles = React.useMemo(
    () => ({
      ...styles.container,
      height: BUTTON_HEIGHT,
      backgroundColor: colors[theme].ACCENT_PRIMARY_REGULAR,
    }),
    [theme],
  );

  const scrollToInitialValueIndex = React.useCallback(() => {
    if (!selectedValue || !data || !ref.current) {
      return;
    }
    const initialValueIndex = data.findIndex(
      item => item.value === selectedValue,
    );

    ref.current.scrollToIndex({animated: true, index: initialValueIndex});
  }, [selectedValue, data]);

  const getItemLayout = React.useCallback(
    (index: number) => ({
      length: BUTTON_HEIGHT,
      offset: BUTTON_HEIGHT * index,
      index,
    }),
    [],
  );

  const renderSelectedItem = React.useCallback(
    ({itemLabel}: SelectedItemType) => (
      <View style={selectedItemStyles}>
        <LocalText color="TEXT_INVERTED" size="H5">
          {itemLabel}
        </LocalText>
      </View>
    ),
    [selectedItemStyles],
  );

  const renderUnselectedItem = React.useCallback(
    ({itemLabel, itemValue, onItemPressed}: UnselectedItemType) => (
      <ColorFeedbackTextButton
        text={itemLabel}
        onPress={() => onItemPressed(itemValue)}
      />
    ),
    [],
  );

  const baseStyles = React.useMemo(
    () => [styles.flatlistStyles, GET_HEIGHT(data.length)],
    [data.length],
  );

  React.useEffect(() => {
    scrollToInitialValueIndex();
  }, [scrollToInitialValueIndex]);

  return (
    <FlatList
      ref={ref}
      contentContainerStyle={styles.flatListContainer}
      style={baseStyles}
      data={data}
      getItemLayout={(data, index) => getItemLayout(index)}
      keyExtractor={item => `${item.value}`}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        if (item.value === selectedValue) {
          return renderSelectedItem({itemLabel: item.label});
        }
        return renderUnselectedItem({
          itemLabel: item.label,
          itemValue: item.value,
          onItemPressed: onPress,
        });
      }}
    />
  );
}

export default AndroidPicker;
