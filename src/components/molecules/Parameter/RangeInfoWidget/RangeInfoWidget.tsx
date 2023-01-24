import React from 'react';
import {View, ViewStyle} from 'react-native';
import {ProjectColorsType} from '../../../../assets/colors/tokens/colors';

import {IconProps} from '../../../../types/icons';
import LocalText from '../../../atoms/LocalText/LocalText';
import Spacer from '../../../atoms/Spacer/Spacer';
import RangeInfoWidgetStyles from './RangeInfoWidgetStyles';

export interface RangeInfoWidgetIconProps {
  Icon: (props: IconProps) => JSX.Element;
  fillColor: ProjectColorsType;
}

interface Props {
  value: number | string | undefined;
  title: number | string | undefined;
  subtitle: string;
  size: number;
  IconProps?: RangeInfoWidgetIconProps;
  disabled?: boolean;
}

function RangeInfoWidget({subtitle, value, size, IconProps, disabled}: Props) {
  const style: ViewStyle = React.useMemo(
    () => ({width: size, height: size, borderRadius: size / 2}),
    [size],
  );

  return (
    <View style={RangeInfoWidgetStyles.styles.container}>
      <View style={[style, RangeInfoWidgetStyles.styles.wrapper]}>
        <View style={RangeInfoWidgetStyles.styles.contentContainer}>
          <View style={RangeInfoWidgetStyles.styles.row}>
            {IconProps ? (
              <IconProps.Icon
                fillColor={IconProps.fillColor}
                width={20}
                height={20}
                style={RangeInfoWidgetStyles.styles.icon}
              />
            ) : (
              <Spacer size={20} />
            )}
          </View>

          <LocalText
            color={disabled ? 'TEXT_REGULAR_DISABLED' : 'TEXT_REGULAR'}
            size="H2"
            withTranslation={false}>
            {value || '--'}
          </LocalText>

          <LocalText
            color={disabled ? 'LAYOUT_DISABLED' : 'TEXT_NEUTRAL'}
            size="BodyM">
            {subtitle}
          </LocalText>
        </View>
      </View>
    </View>
  );
}

export default RangeInfoWidget;
