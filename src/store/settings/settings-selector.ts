import {createSelector} from 'reselect';
import {RootState} from '../config/store-config';

// used for tempareture unit selector
const settingState = (state: RootState) => state.setting;
const tempUnit = (state: RootState) => state.setting.unit;

//updates selected setting
const getSettingState = createSelector(settingState, changedState => {
  return changedState;
});
const getTempratureUnit = createSelector(tempUnit, changedState => {
  return changedState;
});

export {getSettingState, getTempratureUnit};
