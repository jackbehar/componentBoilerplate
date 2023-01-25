import React from 'react';
import {ItemValue} from '@react-native-picker/picker/typings/Picker';
import IOSPicker from './IOSPicker';
import AndroidPicker from './AndroidPicker/AndroidPicker';
import {isIOS} from '../../../shared/utility/platform';
import {Column} from '../../atoms/Layout';
import {PickerDataType} from '../../../types/pickerType';

export interface GenericPickerParams {
  data: Array<PickerDataType>;
  value: ItemValue | undefined;
  setValue: (value: ItemValue | undefined) => void;
}

function GenericPicker({data, value, setValue}: GenericPickerParams) {
  return (
    <Column>
      {isIOS ? (
        <IOSPicker data={data} selectedValue={value} onPress={setValue} />
      ) : (
        <AndroidPicker data={data} selectedValue={value} onPress={setValue} />
      )}
    </Column>
  );
}

export default GenericPicker;
