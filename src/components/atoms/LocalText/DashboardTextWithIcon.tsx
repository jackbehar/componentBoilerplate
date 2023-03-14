import React from 'react';
import {ProjectColorsType} from '../../../assets/colors/tokens/colors';
import {
  TemperatureUnit,
  TEMPERATURE_UNITS,
} from '../../../shared/utility/temperature';
import {IconProps} from '../../../types/icons';
import LocalTextWithIcon from './LocalTextWithIcon';

export interface DashboardTextWithIconProps {
  Icon: (props: IconProps) => JSX.Element;
  text: string;
  temperature?: boolean;
  disabled?: boolean;
}

function DashboardTextWithIcon({
  Icon,
  text,
  disabled,
  temperature,
}: DashboardTextWithIconProps) {
  const temperatureUnit = React.useMemo(
    () => TEMPERATURE_UNITS[TemperatureUnit.CELSIUS],
    [],
  );

  const color = React.useMemo(
    (): ProjectColorsType =>
      disabled ? 'TEXT_REGULAR_DISABLED' : 'ACCENT_PRIMARY_REGULAR',
    [disabled],
  );

  return (
    <LocalTextWithIcon
      Icon={Icon}
      iconColor={color}
      color={color}
      iconSize={24}
      size="BodyS">
      {`${temperature ? `${text || '--'}` : text}${
        temperature ? temperatureUnit : ''
      }`}
    </LocalTextWithIcon>
  );
}

export default DashboardTextWithIcon;
