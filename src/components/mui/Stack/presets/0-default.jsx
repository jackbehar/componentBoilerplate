import * as React from 'react';
import Stack from '../Stack';
import LocalButton from '../../../atoms/Buttons/LocalButton/LocalButton';

export default (
  <Stack uxpId="stack-1" direction="row" spacing={2}>
    <LocalButton uxpId="button-1" text="Button 1"/>
    <LocalButton uxpId="button-2" text="Button 2"/>
    <LocalButton uxpId="button-3" text="Button 3"/>
  </Stack>
);
