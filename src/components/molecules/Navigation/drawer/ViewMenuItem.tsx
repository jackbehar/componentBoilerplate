import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Column, Row} from '../../../atoms/Layout';
import RightArrowIcon from '../../../../assets/icons/SVG/RightArrowIcon';
import styles from '../../../../navigation/customDrawerItemStyles';
import LocalText from '../../../atoms/LocalText/LocalText';
import ViewMenuItemStyles from './ViewMenuItemStyles';

interface Props {
  label: string;
  navigation?: DrawerNavigationHelpers;
  route?: string;
  viewStyle?: StyleProp<ViewStyle>;
}

function ViewMenuItem({
  label,
  navigation = undefined,
  route = undefined,
}: Props) {
  return (
    <View style={ViewMenuItemStyles.styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation && route && navigation.navigate(route);
        }}>
        <Row justifyContent="space-between">
          <LocalText size="BodyM" color="TEXT_REGULAR">
            {label}
          </LocalText>
          <Column justifyContent="center">
            <RightArrowIcon
              style={styles.icon}
              width={13}
              height={13}
              fillColor="ACCENT_PRIMARY_REGULAR"
            />
          </Column>
        </Row>
      </TouchableOpacity>
    </View>
  );
}

export default ViewMenuItem;
