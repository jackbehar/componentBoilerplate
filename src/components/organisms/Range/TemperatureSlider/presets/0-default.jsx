import TemperatureSlider from "../TemperatureSlider";
import React from 'react';
import {getSmallRangeConsts} from '../../RangeConsts';
import {TemperatureInfoState} from '../../../../../types/capabilities/TemperatureInfo';
const tempValuesArray = [
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
];
export default (
  <TemperatureSlider
    uxpId="temp-slider-1"
    maxTemperature={tempValuesArray[tempValuesArray.length - 1]}
    minTemperature={tempValuesArray[0]}
    active={true}
    //fanMode={0}
    currentTemperature={23}
    /*RangeConsts= {{WIDTH : 152,
      HEIGHT : 152,
      RADIUS : (152 - 8 - 6 * 2) / 2,
      CENTER : {x: 152 / 2, y: 152 / 2}}}*/
    RangeConsts={getSmallRangeConsts()}
    //infoState={TemperatureInfoState.NoInput}
    targetTemperature={24}
    temperatureUnit={"0"}
  />
);
