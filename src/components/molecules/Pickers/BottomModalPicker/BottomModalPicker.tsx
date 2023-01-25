import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ItemValue} from '@react-native-picker/picker/typings/Picker';
import {PickerDataType} from '../../../../types/pickerType';
import GenericPicker from '../GenericPicker';
import BaseModalPicker from './BaseModalPicker';

export interface BottomSheetFunctions {
  onSubmit: (arg: ItemValue) => void;
}

export interface BottomSheetData {
  data: Array<PickerDataType>;
  modalTitle: string;
  description?: string;
}

interface Params extends BottomSheetFunctions, BottomSheetData {
  initialValue: ItemValue | undefined;
}

export interface BottomModalPickerRef {
  open: (params: Params) => void;
  close: () => void;
}

function BottomModalPicker(
  _props: unknown,
  ref: React.ForwardedRef<BottomModalPickerRef | null>,
) {
  const [value, setValue] = React.useState<ItemValue | undefined>();
  const [params, setParams] = React.useState<BottomSheetData | undefined>();

  const bottomSheetRef = React.useRef<RBSheet | null>(null);
  const functions = React.useRef<BottomSheetFunctions | undefined>(undefined);

  React.useImperativeHandle(ref, () => ({
    open: ({initialValue, data, modalTitle, description, onSubmit}) => {
      const value = data.find(value => value.value === initialValue)?.value;
      setValue(value !== undefined ? value : data[0].value);
      setParams({
        data,
        modalTitle,
        description,
      });
      functions.current = {
        onSubmit,
      };
      if (bottomSheetRef.current) bottomSheetRef.current.open();
    },
    close: () => {
      setValue(undefined);
      setParams(undefined);
      functions.current = undefined;
      if (bottomSheetRef.current) bottomSheetRef.current.close();
    },
  }));

  return (
    <BaseModalPicker
      params={params}
      bottomSheetRef={bottomSheetRef}
      functions={functions}
      value={value}
      Picker={
        params?.data ? (
          <GenericPicker
            data={params!.data}
            setValue={setValue}
            value={value}
          />
        ) : null
      }
    />
  );
}

export default React.forwardRef(BottomModalPicker);
