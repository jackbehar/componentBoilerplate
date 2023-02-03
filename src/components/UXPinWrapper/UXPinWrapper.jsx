import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/config/store-config';

export default function UXPinWrapper({ children }) {
  
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
}
