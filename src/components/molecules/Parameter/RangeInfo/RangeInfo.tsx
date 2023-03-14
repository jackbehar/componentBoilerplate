import React from 'react';
import {View, ViewStyle} from 'react-native';

import TemperatureInsideIcon from '../../../../assets/icons/SVG/TemperatureInsideIcon';
import {
  TemperatureUnit,
  TEMPERATURE_UNITS,
} from '../../../../shared/utility/temperature';
import LocalText from '../../../atoms/LocalText/LocalText';
import {RangeInfoWidgetIconProps} from '../RangeInfoWidget/RangeInfoWidget';
import RangeInfoStyles from './RangeInfoStyles';

interface Props {
  value: number | string | undefined;
  title: number | string | undefined;
  subtitle: string;
  size: number;
  disabled?: boolean;
  IconProps?: RangeInfoWidgetIconProps | undefined;
  temperature?: boolean;
}

function RangeInfo({
  subtitle,
  value,
  title,
  size,
  temperature,
  IconProps,
  disabled,
}: Props) {
  const temperatureUnit = React.useMemo(
    () => TEMPERATURE_UNITS[TemperatureUnit.CELSIUS],
    [],
  );

  const style: ViewStyle = React.useMemo(
    () => ({width: size, height: size, borderRadius: size / 2}),
    [size],
  );

  return (
    <View style={RangeInfoStyles.styles.container}>
      <View style={[style, RangeInfoStyles.styles.wrapper]}>
        <View style={RangeInfoStyles.styles.contentContainer}>
          <View style={RangeInfoStyles.styles.row}>
            {temperature ? (
              <TemperatureInsideIcon
                fillColor={!disabled ? 'TEXT_NEUTRAL' : 'LAYOUT_DISABLED'}
                width={24}
                height={24}
                style={RangeInfoStyles.styles.icon}
              />
            ) : null}
            <LocalText
              color={!disabled ? 'TEXT_NEUTRAL' : 'TEXT_REGULAR_DISABLED'}
              withTranslation={false}
              overrideTypography
              style={RangeInfoStyles.styles.title}>
              {`${title || '-'}${temperature ? temperatureUnit : ''}`}
            </LocalText>
          </View>
          <LocalText
            color={!disabled ? 'TEXT_REGULAR' : 'TEXT_REGULAR_DISABLED'}
            size="H1"
            withTranslation={false}
            overrideTypography
            style={RangeInfoStyles.styles.subtitle}>
            {value || '--'}
          </LocalText>

          <LocalText
            color={!disabled ? 'TEXT_NEUTRAL' : 'TEXT_REGULAR_DISABLED'}
            withTranslation={false}>
            {subtitle}
          </LocalText>
        </View>
        {IconProps ? (
          <View style={RangeInfoStyles.styles.warningIcon}>
            <IconProps.Icon
              fillColor={IconProps.fillColor}
              width={32}
              height={32}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
}

export default RangeInfo;
