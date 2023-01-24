import React from 'react';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form';
import LocalTextInput, {LocalTextInputProps} from './LocalTextInput';

interface Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, 'render'>,
    Omit<LocalTextInputProps, 'defaultValue'> {}

function ControlledTextInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  defaultValue,
  rules,
  shouldUnregister,
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
        <LocalTextInput
          {...rest}
          value={field.value}
          onChangeText={field.onChange}
          onBlur={(e) => {
            rest.onBlur && rest.onBlur(e)
            field.onBlur();
          }}
        />
      )}
    />
  );
}

export default ControlledTextInput;
