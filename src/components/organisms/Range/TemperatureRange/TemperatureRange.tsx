import React from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAppSelector} from '../../../../hook/useAppSelector';
import translations from '../../../../localization/config/translationHelper';
import {getBigRangeConsts} from '../RangeConsts';
import RangeInfo from '../../../molecules/Parameter/RangeInfo/RangeInfo';
import {TemperatureInfoState} from '../../../../types/capabilities/TemperatureInfo';
import {TEMPERATURE_UNITS} from '../../../../shared/utility/temperature';
import TemperatureSlider, {
  TemperatureSliderProps,
} from '../TemperatureSlider/TemperatureSlider';
import {FanModeTypeShape} from '../../../../types/capabilities/FanMode';

interface Props extends Omit<TemperatureSliderProps, 'RangeConsts'> {
  onPress: () => void;
  fanMode: FanModeTypeShape | undefined;
}

function TemperatureRange({
  active,
  minTemperature,
  currentTemperature,
  ddmCurrentTemperature,
  targetTemperature,
  ddmTargetTemperature,
  maxTemperature,
  infoState = TemperatureInfoState.NoInput,
  onPress,
  disabled,
  fanMode,
}: Props) {
  const RangeConsts = React.useMemo(() => getBigRangeConsts(), []);
  const {t} = useTranslation();
  const unit = useAppSelector(state => state.setting.unit);
  const temperatureUnit = React.useMemo(() => TEMPERATURE_UNITS[unit], [unit]);

  return (
    <TouchableOpacity
      disabled={disabled || !active}
      onPress={onPress}
      style={{height: RangeConsts.HEIGHT, width: RangeConsts.WIDTH}}>
      <TemperatureSlider
        active={active && fanMode !== FanModeTypeShape.Ventilation}
        currentTemperature={currentTemperature}
        targetTemperature={targetTemperature}
        maxTemperature={maxTemperature}
        minTemperature={minTemperature}
        infoState={infoState}
        RangeConsts={RangeConsts}
        disabled={disabled}
      />
      <RangeInfo
        size={
          RangeConsts.HEIGHT -
          RangeConsts.PADDING_VERTICAL * 2 -
          RangeConsts.ACTIVE_STROKE
        }
        value={targetTemperature}
        title={currentTemperature}
        disabled={disabled}
        temperature
        subtitle={t(translations.fullClimate.temperature.targetWithUnit, {
          unit: temperatureUnit,
        })}
      />
    </TouchableOpacity>
  );
}

export default TemperatureRange;
