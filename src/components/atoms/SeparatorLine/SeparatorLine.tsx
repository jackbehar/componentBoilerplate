import React from 'react';
import {View} from 'react-native';
import colors, {ProjectColorsType} from '../../../assets/colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import styles from './SeparatorLineStyles';

interface SeparatorLineProps {
  color?: ProjectColorsType;
  height?: number;
}

function SeparatorLine({
  color = 'LAYOUT_DISABLED',
  height = 3,
}: SeparatorLineProps) {
  const theme = useAppSelector(state => state.theme.theme);

  const baseStyles = React.useMemo(
    () => ({
      ...styles.base,
      height,
      backgroundColor: colors[theme][color],
    }),
    [theme, color, height],
  );
  return <View style={baseStyles} />;
}

export default SeparatorLine;
