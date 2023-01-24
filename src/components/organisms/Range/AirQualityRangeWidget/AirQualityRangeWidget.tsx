import React from 'react';
import {View} from 'react-native';
import {ProjectColorsType} from '../../../../assets/colors/tokens/colors';
import RangeInfoStyles from '../../../molecules/Parameter/RangeInfo/RangeInfoStyles';
import RangeInfoWidget, {
  RangeInfoWidgetIconProps,
} from '../../../molecules/Parameter/RangeInfoWidget/RangeInfoWidget';
import AirQualityBase from '../AirQualityRangeBase/AirQualityRangeBase';
import {getSmallRangeConsts} from '../RangeConsts';

export interface AirQualityRangeWidgetProps {
  airQuality: number | undefined;
  airQualityMapped: string | undefined;
  rangeColor: ProjectColorsType;
  IconProps: RangeInfoWidgetIconProps | undefined;
  disabled: boolean;
}

function AirQualityRangeWidget({
  airQuality,
  airQualityMapped,
  rangeColor,
  IconProps,
  disabled,
}: AirQualityRangeWidgetProps) {
  const RangeConsts = React.useMemo(() => getSmallRangeConsts(), []);

  return (
    <View style={{height: RangeConsts.HEIGHT, width: RangeConsts.WIDTH}}>
      <AirQualityBase
        RangeConsts={RangeConsts}
        color={rangeColor}
        disabled={disabled}
      />
      <View style={RangeInfoStyles.styles.container}>
        <RangeInfoWidget
          size={
            RangeConsts.HEIGHT -
            RangeConsts.PADDING_VERTICAL * 2 -
            RangeConsts.ACTIVE_STROKE
          }
          value={airQuality}
          title={airQualityMapped}
          subtitle={'IAQ'}
          IconProps={IconProps}
          disabled={disabled}
        />
      </View>
    </View>
  );
}

export default AirQualityRangeWidget;
