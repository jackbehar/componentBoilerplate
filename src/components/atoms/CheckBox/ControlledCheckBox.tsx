import React from 'react';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form';
import { CheckBox , CheckBoxProps} from './checkBox';

interface Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, 'render'>,
    CheckBoxProps {}

function ControlledCheckBox<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  defaultValue,
  rules,
  shouldUnregister,
  elementId,
  ...rest
}: Props<TFieldValues, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({field}) => (
        <CheckBox
          {...rest}
          onPress={() => {
            field.onChange(!field.value);
          }}
          value={Boolean(field.value)}
          elementId={elementId}
        />
      )}
    />
  );
}

export default ControlledCheckBox;
