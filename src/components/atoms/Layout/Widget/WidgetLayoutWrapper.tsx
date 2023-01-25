import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../../../hook/useAppSelector';
import GraphIcon from '../../../../assets/icons/SVG/GraphIcon';
import WidgetLayoutWrapperConsts from './WidgetLayoutWrapperConsts';
import WidgetLayoutWrapperStyles from './WidgetLayoutWrapperStyles';

interface Props {
  useGraph?: boolean;
  children: React.ReactNode;
  onPress?: () => void;
}

function WidgetLayoutWrapper({children, useGraph, onPress}: Props) {
  const theme = useAppSelector(state => state.theme.theme);

  const styles = React.useMemo(
    () =>
      StyleSheet.flatten([
        WidgetLayoutWrapperStyles.styles.container,
        WidgetLayoutWrapperStyles.getColors(theme),
      ]),
    [theme],
  );

  return (
    <TouchableOpacity disabled={!onPress} style={styles} onPress={onPress}>
      {children}
      {useGraph && (
        <View style={WidgetLayoutWrapperStyles.styles.graphContainer}>
          <GraphIcon
            width={WidgetLayoutWrapperConsts.WIDGET_WIDTH}
            height={WidgetLayoutWrapperConsts.WIDGET_HEIGHT * 0.68}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

export default WidgetLayoutWrapper;
