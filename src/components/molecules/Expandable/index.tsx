import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import ArrowDownSmall from '../../../assets/icons/SVG/ArrowDownSmall';
import ArrowUpSmall from '../../../assets/icons/SVG/ArrowUpSmall';
import testID from '../../../shared/utility/accessibilityUtility';
import LocalText from '../../atoms/LocalText/LocalText';
import style from './ExpandabeStyles';

export type Props = {
  defaultExpanded?: boolean;
  forceExpand?: boolean | undefined;
  elementId: string;
  label: string;
  labelExpanded: string;
};

/**
 *
 * Shows a label and an arrow down icon on the right side of the screen and hides the child elements.
 * When pressed expands the component showing an arrow up and the expanded label and shows the child elements
 *
 * @author Marc Uson Chine <marc.uson@dometic.com>
 * @param children - is the child elements on the component. this elements will be shown when expanded.
 * @param defaultExpanded - default is false. If true the expandable component will be expanded by default.
 * @param forceExpand - if true, forces the expansion of the element from an external source.
 * @param elementId - Unique element Id used for the testId labeling
 * @param label - Label to be shown whe element is not expanded.
 * @param labelExpanded - Label to be shown when element is expanded
 */
const Expandable: React.FC<Props> = ({
  children,
  defaultExpanded = false,
  forceExpand = undefined,
  elementId,
  label,
  labelExpanded,
}) => {
  const [expandParent, setExpandParent] = useState<boolean>(defaultExpanded);

  useEffect(() => {
    //in order to get this to work on Android you need to set the following flags via UIManager
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  useEffect(() => {
    if (forceExpand == true && expandParent == false) {
      setExpandParent(true);
    }
  }, [forceExpand]);

  // To expand and shrink accordion parent header
  const toggleExpandParent = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandParent(!expandParent);
  };

  return (
    <View style={style.container}>
      <View style={style.button} {...testID(`${elementId}-button`)}>
        <TouchableOpacity
          style={style.textContainer}
          onPress={() => toggleExpandParent()}>
          <LocalText
            color="TEXT_NEUTRAL"
            size="SubheadingM"
            style={style.subtitle}>
            {expandParent ? labelExpanded : label}
          </LocalText>
          {expandParent ? (
            <ArrowUpSmall
              fillColor="ACCENT_PRIMARY_REGULAR"
              height={style.icon.height}
              width={style.icon.width}
            />
          ) : (
            <ArrowDownSmall
              fillColor="ACCENT_PRIMARY_REGULAR"
              height={style.icon.height}
              width={style.icon.width}
            />
          )}
        </TouchableOpacity>
      </View>
      {expandParent && children}
    </View>
  );
};

export default Expandable;
