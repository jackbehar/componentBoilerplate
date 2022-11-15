// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//     <h1>Hello World</h1>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/config/store-config';

const root = ReactDOM.createRoot(
  //@ts-ignore
  document.getElementById('root') 
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);