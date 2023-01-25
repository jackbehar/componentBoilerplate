import React from 'react';
import {View} from 'react-native';
import {ProjectColorsType} from '../../../../assets/colors/tokens/globalParsed';
import {IconProps} from '../../../../types/icons';
import LocalText from '../../../atoms/LocalText/LocalText';
import BottomTabStyles from './BottomTabStyles';

interface Props {
  text: string;
  focused: boolean;
  Icon(props: IconProps): JSX.Element;
}

function BottomTab({focused, text, Icon}: Props) {
  const color: ProjectColorsType = React.useMemo(
    () => (focused ? 'TEXT_REGULAR' : 'TEXT_NEUTRAL'),
    [focused],
  );

  return (
    <View style={BottomTabStyles.styles.container}>
      <Icon fillColor={color} width={32} height={32} />
      <LocalText color={color} size="Label" style={BottomTabStyles.styles.text}>
        {text}
      </LocalText>
    </View>
  );
}

export default BottomTab;
