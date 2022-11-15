import storage from 'redux-persist/lib/storage';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import rootReducer from './reducer-config';
import rootSaga from './middleware-config';
/**
 * Store configuration file.
 * library used (redux-persist, redux-logger, redux-saga).
 * @constant persistConfig keep the reducer in 'whitelist' to save it to persisted state.
 */

//creates a Redux middleware and connects the sagas to the Redux store
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  timeout: 15000,
  key: 'root',
  storage,
  whitelist: [],
  //blacklist: [''],
};
/*Middleware: Redux Persist Persisted Reducer */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/* Redux: Store */
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk)),
);
/* Middleware: Redux redux-saga  */
sagaMiddleware.run(rootSaga);

/* Middleware: Redux Persist Persister */
let persistor = persistStore(store);

type RootState = ReturnType<typeof rootReducer>;

//@ts-ignore
export { store, persistor, type RootState };