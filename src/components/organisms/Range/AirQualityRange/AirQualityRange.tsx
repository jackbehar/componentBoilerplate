import React from 'react';
import {View} from 'react-native';
import RangeInfo from '../../../molecules/Parameter/RangeInfo/RangeInfo';
import RangeInfoStyles from '../../../molecules/Parameter/RangeInfo/RangeInfoStyles';
import AirQualityBase from '../AirQualityRangeBase/AirQualityRangeBase';
import {AirQualityRangeWidgetProps} from '../AirQualityRangeWidget/AirQualityRangeWidget';
import {getBigRangeConsts} from '../RangeConsts';

function AirQualityRange({
  airQuality,
  airQualityMapped,
  IconProps,
  disabled,
  rangeColor,
}: AirQualityRangeWidgetProps) {
  const RangeConsts = React.useMemo(() => getBigRangeConsts(), []);

  return (
    <View>
      <AirQualityBase
        RangeConsts={RangeConsts}
        color={rangeColor}
        disabled={disabled}
      />
      <View style={RangeInfoStyles.styles.container}>
        <RangeInfo
          size={
            RangeConsts.HEIGHT -
            RangeConsts.PADDING_VERTICAL * 2 -
            RangeConsts.ACTIVE_STROKE
          }
          value={airQuality}
          title={airQualityMapped}
          subtitle={'IAQ Index'}
          IconProps={IconProps}
          disabled={disabled}
        />
      </View>
    </View>
  );
}

export default AirQualityRange;
