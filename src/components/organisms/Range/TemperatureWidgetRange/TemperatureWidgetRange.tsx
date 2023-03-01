import React from 'react';
import {View} from 'react-native';
import {getSmallRangeConsts} from '../RangeConsts';
import {TemperatureInfoState} from '../../../../types/capabilities/TemperatureInfo';
import TemperatureSlider, {
  TemperatureSliderProps,
} from '../TemperatureSlider/TemperatureSlider';
import RangeInfoWidget, {
  RangeInfoWidgetIconProps,
} from '../../../molecules/Parameter/RangeInfoWidget/RangeInfoWidget';
import translations from '../../../../localization/config/translationHelper';

export interface TemperatureWidgetRangeProps
  extends Omit<TemperatureSliderProps, 'RangeConsts'> {
  IconProps?: RangeInfoWidgetIconProps;
}

function TemperatureWidgetRange({
  active,
  minTemperature,
  currentTemperature,
  targetTemperature,
  maxTemperature,
  infoState = TemperatureInfoState.NoInput,
  IconProps,
  disabled,
}: TemperatureWidgetRangeProps) {
  const RangeConsts = React.useMemo(() => getSmallRangeConsts(), []);

  return (
    <View
      style={{
        height: RangeConsts.HEIGHT,
        width: RangeConsts.WIDTH,
      }}>
      <TemperatureSlider
        active={active}
        currentTemperature={currentTemperature}
        targetTemperature={targetTemperature}
        maxTemperature={maxTemperature}
        minTemperature={minTemperature}
        infoState={infoState}
        RangeConsts={RangeConsts}
        disabled={disabled}
      />
      <RangeInfoWidget
        size={
          RangeConsts.HEIGHT -
          RangeConsts.PADDING_VERTICAL * 2 -
          RangeConsts.ACTIVE_STROKE
        }
        value={targetTemperature}
        title={currentTemperature}
        IconProps={IconProps}
        subtitle={translations.capabilities.temperature.target}
        disabled={disabled}
      />
    </View>
  );
}

export default TemperatureWidgetRange;
