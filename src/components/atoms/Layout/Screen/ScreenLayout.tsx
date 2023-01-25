import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  Edge,
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import colors from '../../../../assets/colors/tokens/colors';
import {useAppSelector} from '../../../../hook/useAppSelector';
import ScreenLayoutStyles from './ScreenLayoutStyles';

interface Props extends Omit<SafeAreaViewProps, 'edges'> {
  bottom?: boolean;
  top?: boolean;
  left?: boolean;
  right?: boolean;
  usePaddings?: boolean;
  useScrollView?: boolean;
  scrollDisabled?: boolean;
}

function ScreenLayout({
  usePaddings,
  useScrollView,
  top,
  right,
  bottom,
  left,
  scrollDisabled,
  ...rest
}: Props) {
  const theme = useAppSelector(state => state.theme.theme);
  const backgroundColor = React.useMemo(
    () => ({
      backgroundColor: colors[theme].LAYOUT_BACKGROUND,
    }),
    [theme],
  );
  const style = React.useMemo(() => {
    const styleArray = [];
    if (usePaddings) styleArray.push(ScreenLayoutStyles.styles.paddings);
    if (useScrollView)
      styleArray.push(ScreenLayoutStyles.styles.scrollContainer);
    else styleArray.push(ScreenLayoutStyles.styles.container);

    return StyleSheet.flatten([...styleArray, rest.style]);
  }, [usePaddings, useScrollView]);

  const edges = React.useMemo(() => {
    // HACK, should be fixed
    const newEdges: Array<Edge> = [];
    if (top) newEdges.push('top');
    if (bottom) newEdges.push('bottom');
    if (left) newEdges.push('left');
    if (right) newEdges.push('right');
    return newEdges;
  }, [top, right, bottom, left]);

  if (useScrollView)
    return (
      <SafeAreaView
        {...rest}
        style={[ScreenLayoutStyles.styles.container, backgroundColor]}
        edges={edges}>
        <ScrollView
          contentContainerStyle={style}
          style={backgroundColor}
          scrollEnabled={!scrollDisabled}>
          {rest.children}
        </ScrollView>
      </SafeAreaView>
    );

  return <SafeAreaView {...rest} style={style} edges={edges} />;
}

export default ScreenLayout;
