import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ItemValue} from '@react-native-picker/picker/typings/Picker';

import {PickerDataType} from '../../../../types/pickerType';
import GenericPicker from '../GenericPicker';
import BaseModalPicker from './BaseModalPicker';
import LocalDatePicker from '../LocalDatePicker';

export interface BottomSheetFunctions {
  onSubmit: (arg: Date) => void;
}

export interface TimeSheetData {
  modalTitle: string;
  description?: string;
}

interface Params extends BottomSheetFunctions, TimeSheetData {
  initialValue: Date;
}

export interface TimeModalPickerRef {
  open: (params: Params) => void;
  close: () => void;
}

function TimeModalPicker(
  _props: unknown,
  ref: React.ForwardedRef<TimeModalPickerRef | null>,
) {
  const [value, setValue] = React.useState<Date>();
  const [params, setParams] = React.useState<TimeSheetData | undefined>();

  const bottomSheetRef = React.useRef<RBSheet | null>(null);
  const functions = React.useRef<BottomSheetFunctions | undefined>(undefined);

  React.useImperativeHandle(ref, () => ({
    open: ({initialValue, modalTitle, description, onSubmit}) => {
      setValue(initialValue);
      setParams({
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
      Picker={<LocalDatePicker value={value} setValue={setValue} />}
    />
  );
}

export default React.forwardRef(TimeModalPicker);
