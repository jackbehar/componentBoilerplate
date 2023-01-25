import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import ArrowRightSmall from '../../../assets/icons/SVG/ArrowRightSmall';
import InfoIcon from '../../../assets/icons/SVG/InfoIcon';
import WarningIcon from '../../../assets/icons/SVG/WarningIcon';
import {IconProps} from '../../../types/icons';
import LocalSwitch from '../../atoms/LocalSwitch/LocalSwitch';
import LocalText from '../../atoms/LocalText/LocalText';
import ViewItemSubtitleConsts from './ViewItemSubtitleConsts';
import ViewItemSubtitleStyles from './ViewItemSubtitleStyles';

export interface ViewItemSubtitleProps {
  name: string;
  subtitle?: string;
  withoutSubtitleTranslation?: boolean;
  switchProps?: {
    value: boolean;
    onSwitchPress: () => void;
  };
  useHorizontalPadding?: boolean;
  displayValue?: string;
  warning?: boolean;
  onPress?: () => void;
  Icon?: (props: IconProps) => JSX.Element;
  RightIcon?: (props: IconProps) => JSX.Element;
  LeftIcon?: (props: IconProps) => JSX.Element;
  LeftIconOnPress?: () => void;
  disabled?: boolean;
}

function ViewItemSubtitle({
  Icon,
  name,
  subtitle,
  useHorizontalPadding,
  displayValue,
  warning,
  switchProps,
  onPress,
  RightIcon,
  LeftIcon,
  LeftIconOnPress,
  disabled,
  withoutSubtitleTranslation,
}: ViewItemSubtitleProps) {
  const wrapperStyle = React.useMemo(() => {
    if (useHorizontalPadding) return {paddingHorizontal: 16};
    return {};
  }, [useHorizontalPadding]);

  return (
    <TouchableOpacity
      disabled={disabled || !onPress}
      onPress={() => onPress && onPress()}
      style={wrapperStyle}>
      <View style={ViewItemSubtitleStyles.styles.container}>
        <View style={ViewItemSubtitleStyles.styles.rowWrapper}>
          {Icon ? (
            <Icon
              fillColor={
                disabled ? 'LAYOUT_DISABLED' : 'ACCENT_PRIMARY_REGULAR'
              }
              width={ViewItemSubtitleConsts.TITLE_ICON_SIZE}
              height={ViewItemSubtitleConsts.TITLE_ICON_SIZE}
              style={ViewItemSubtitleStyles.styles.marginRight}
            />
          ) : null}
          <View>
            <LocalText
              color={disabled ? 'TEXT_REGULAR_DISABLED' : 'TEXT_REGULAR'}
              size="Action">
              {name}
            </LocalText>
            {subtitle ? (
              <LocalText
                color={disabled ? 'TEXT_REGULAR_DISABLED' : 'TEXT_NEUTRAL'}
                size="BodyS"
                withTranslation={!withoutSubtitleTranslation}>
                {subtitle}
              </LocalText>
            ) : null}
          </View>
          {LeftIcon ? (
            <TouchableOpacity
              disabled={!LeftIconOnPress}
              onPress={LeftIconOnPress}
              style={ViewItemSubtitleStyles.styles.marginLeft}>
              <LeftIcon
                fillColor="ACCENT_PRIMARY_REGULAR"
                width={16}
                height={16}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={ViewItemSubtitleStyles.styles.rowWrapper}>
          {displayValue ? (
            <LocalText
              color="TEXT_NEUTRAL"
              size="CaptionL"
              style={{marginRight: 8}}>
              {displayValue}
            </LocalText>
          ) : null}
          {warning ? (
            <View style={ViewItemSubtitleStyles.styles.marginLeft}>
              <InfoIcon
                fillColor="ACCENT_PRIMARY_REGULAR"
                width={16}
                height={16}
              />
            </View>
          ) : null}
          {RightIcon ? (
            <View style={ViewItemSubtitleStyles.styles.marginLeft}>
              <RightIcon
                fillColor={
                  disabled ? 'LAYOUT_DISABLED' : 'ACCENT_PRIMARY_VARIATION_1'
                }
                width={16}
                height={16}
              />
            </View>
          ) : null}
          {switchProps ? (
            <View style={ViewItemSubtitleStyles.styles.marginLeft}>
              <LocalSwitch
                value={switchProps.value}
                onPress={switchProps.onSwitchPress}
                disabled={disabled}
              />
            </View>
          ) : null}
          {onPress ? (
            <View>
              <ArrowRightSmall
                fillColor={
                  disabled ? 'LAYOUT_DISABLED' : 'ACCENT_PRIMARY_REGULAR'
                }
                width={24}
                height={24}
              />
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ViewItemSubtitle;
