/**
 * Store config file, structure the store.
 */
import {combineReducers} from 'redux';
import settingReducer from '../settings/settings-reducer';
import {themeReducer} from '../theme/themeRedux';

/* Redux: Root Reducer
    has all reducers which are combined using
    combineReducers and exported as rootReducer
*/

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

const appReducer = combineReducers({
  theme: themeReducer,
  setting: settingReducer,
});

export default rootReducer;
