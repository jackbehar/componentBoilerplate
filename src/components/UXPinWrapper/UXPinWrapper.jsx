import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/config/store-config';
import "../../index.css"

export default function UXPinWrapper({ children }) {

  return (
    
    <Provider store={store} >
      <div style={{ display: 'grid' }}>
        {children}
      </div>
    </Provider>
   
  );
}
