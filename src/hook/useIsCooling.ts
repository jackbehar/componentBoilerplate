import React from 'react';

export function useIsCooling(
  targetTemperature: number | undefined,
  insideTemperature: number | undefined,
) {
  const isCooling = React.useMemo(
    () => (targetTemperature || 0) < (insideTemperature || 0),
    [targetTemperature],
  );

  return isCooling;
}
