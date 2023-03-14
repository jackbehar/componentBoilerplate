import * as React from 'react';
import Grid from '../Grid';
import LocalButton from '../../../atoms/Buttons/LocalButton/LocalButton';

export default (
  <Grid container spacing="8" uxpId="1">
    <Grid item xs={4} order={1} uxpId="1.1">
      <LocalButton uxpId="1.1.1" text="4 cols"/>
    </Grid>
    <Grid item xs={8} order={2} uxpId="1.2">
    <LocalButton uxpId="1.2.1" text="8 cols"/>
    </Grid>
  </Grid>
);
