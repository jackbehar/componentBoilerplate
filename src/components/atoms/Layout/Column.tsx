import React from 'react';
import BaseLayout, {BaseLayoutProps} from './BaseLayout';

function Column({children, ...rest}: BaseLayoutProps) {
  return (
    <BaseLayout {...rest} flexDirection="column">
      {children}
    </BaseLayout>
  );
}

export default Column;
