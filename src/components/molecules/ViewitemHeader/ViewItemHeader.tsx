import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import ArrowDownSmall from '../../../assets/icons/SVG/ArrowDownSmall';
import InfoIcon from '../../../assets/icons/SVG/InfoIcon';
import {useAppSelector} from '../../../hook/useAppSelector';
import LocalText from '../../atoms/LocalText/LocalText';
import ViewItemHeaderConsts from './ViewItemHeaderConsts';
import ViewItemHeaderStyles from './ViewItemHeaderStyles';

export interface ViewItemHeaderDropdownProps {
  title: string;
  animatedValue: Animated.SharedValue<number>;
  onPress: () => void;
}

export interface ViewItemHeaderProps {
  title: string;
  dropdown?: ViewItemHeaderDropdownProps;
  info?: boolean;
}

function ViewItemHeader({title, dropdown, info}: ViewItemHeaderProps) {
  const theme = useAppSelector(state => state.theme.theme);
  const animatedStyle = useAnimatedStyle(() => {
    if (dropdown) {
      const rotate = interpolate(
        dropdown.animatedValue.value,
        [0, 1],
        [0, 180],
      );
      return {
        transform: [
          {
            rotate: `${rotate}deg`,
          },
        ],
      };
    }
    return {};
  }, [dropdown]);

  const dynamicColors = React.useMemo(
    () => ViewItemHeaderStyles.getDynamicColors(theme),
    [theme],
  );

  return (
    <TouchableOpacity
      style={[ViewItemHeaderStyles.styles.container, dynamicColors.container]}
      disabled={!dropdown}
      onPress={dropdown?.onPress}>
      <View style={ViewItemHeaderStyles.styles.rowWrapper}>
        <LocalText color="TEXT_REGULAR" size="Overline">
          {title}
        </LocalText>
        {info ? (
          <InfoIcon
            width={ViewItemHeaderConsts.TITLE_ICON_SIZE}
            height={ViewItemHeaderConsts.TITLE_ICON_SIZE}
            fillColor="ACCENT_PRIMARY_REGULAR"
            style={ViewItemHeaderStyles.styles.titleIcon}
          />
        ) : null}
      </View>
      {dropdown ? (
        <View style={ViewItemHeaderStyles.styles.rowWrapper}>
          <LocalText
            color="TEXT_NEUTRAL"
            size="CaptionL"
            style={ViewItemHeaderStyles.styles.dropdownText}>
            {dropdown.title}
          </LocalText>
          <Animated.View style={animatedStyle}>
            <ArrowDownSmall
              width={ViewItemHeaderConsts.DROPDOWN_ICON_SIZE}
              height={ViewItemHeaderConsts.DROPDOWN_ICON_SIZE}
              fillColor="ACCENT_PRIMARY_REGULAR"
            />
          </Animated.View>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

export default ViewItemHeader;
