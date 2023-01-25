import React from 'react';
import {TouchableHighlight} from 'react-native';
import LocalText from '../../LocalText/LocalText';
import colors from '../../../../assets/colors/tokens/colors';
import {useAppSelector} from '../../../../hook/useAppSelector';
import styles from './ColorFeedbackTextButtonStyles';

interface Props {
  text: string;
  onPress: () => void;
}

/**
 * This button has a gray color feedback on white theme when pressed
 */
function ColorFeedbackTextButton({text, onPress}: Props) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <TouchableHighlight
      underlayColor={colors[theme].ACCENT_PRIMARY_VARIATION_1}
      style={styles.base}
      onPress={onPress}>
      <LocalText color="TEXT_LIGHT" size="H5">
        {text}
      </LocalText>
    </TouchableHighlight>
  );
}

export default ColorFeedbackTextButton;
