import React from 'react';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form';
import LocalSwitch from './LocalSwitch';

interface Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, 'render'> {}

function ControlledLocalSwitch<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  defaultValue,
  rules,
  shouldUnregister,
}: Props<TFieldValues, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({field}) => (
        <LocalSwitch
          value={Boolean(field.value)}
          onPress={() => {
            field.onChange(!field.value);
          }}
        />
      )}
    />
  );
}

export default ControlledLocalSwitch;
