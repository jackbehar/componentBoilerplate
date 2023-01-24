import React from 'react';
import {TemperatureInfoState} from '../../../../types/capabilities/TemperatureInfo';
import {useAppSelector} from '../../../../hook/useAppSelector';
import RangeConsts from '../RangeConsts';
import RangeFeedbackConsts from './RangeFeedbackConsts';

interface Params {
  currentTemperature: number | undefined;
  targetTemperature: number;
  minTemperature: number;
  infoState: TemperatureInfoState;
}

function useRangeFeedback({
  targetTemperature,
  currentTemperature,
  minTemperature,
  infoState,
}: Params) {
  const theme = useAppSelector(state => state.theme.theme);

  const isTargetHigherThanCurrent = React.useMemo(
    () => targetTemperature > (currentTemperature || 0),
    [targetTemperature],
  );

  const stateIfThereIsNoInput = React.useMemo(() => {
    if (infoState !== TemperatureInfoState.NoInput) return infoState;
    return TemperatureInfoState.NoInput;
  }, [infoState]);

  const arcsColors = React.useMemo(() => {
    return RangeFeedbackConsts.GET_ARC_COLORS(
      theme,
      stateIfThereIsNoInput,
      isTargetHigherThanCurrent,
    );
  }, [theme, stateIfThereIsNoInput, isTargetHigherThanCurrent]);

  const degStep = React.useMemo(
    () => RangeConsts.TOTAL_DEG / (targetTemperature - minTemperature),
    [targetTemperature, minTemperature],
  );

  const activeRange = React.useMemo(() => {
    if (!currentTemperature) return {start: 0, end: 0};
    return {
      start: 0,
      end: degStep * (currentTemperature - minTemperature),
    };
  }, [degStep, currentTemperature]);

  return {arcsColors, activeRange};
}

export {useRangeFeedback};
