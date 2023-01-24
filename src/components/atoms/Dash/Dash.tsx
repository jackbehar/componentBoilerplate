import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import colors, {ProjectColorsType} from '../../../assets/colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';
import DashStyles from './DashStyles';

interface Props {
  style?: StyleProp<Omit<ViewStyle, 'backgroundColor'>>;
  dashColor?: ProjectColorsType;
}

function Dash({style, dashColor = 'TEXT_NEUTRAL'}: Props) {
  const theme = useAppSelector(state => state.theme.theme);
  const bColor = React.useMemo(
    () => ({
      backgroundColor: colors[theme][dashColor],
    }),
    [theme, dashColor],
  );

  return <View style={[DashStyles.styles.dash, style, bColor]} />;
}

export default Dash;
