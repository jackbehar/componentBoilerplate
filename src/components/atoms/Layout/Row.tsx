import React from 'react';
import BaseLayout, {BaseLayoutProps} from './BaseLayout';

function Row({children, ...rest}: BaseLayoutProps) {
  return (
    <BaseLayout {...rest} flexDirection="row">
      {children}
    </BaseLayout>
  );
}

export default Row;
