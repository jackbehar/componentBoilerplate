import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import elementIdConstants from '../../../constants/elementIdConstants';
import {useAppSelector} from '../../../hook/useAppSelector';
import translations from '../../../localization/config/translationHelper';
import LocalText from '../../atoms/LocalText/LocalText';
import Styles, {getCardProfileSBgColor} from './CardProfileSStyles';

interface CardProfileSProps {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  viewOrEditBtnClicked: () => void;
  isLoggedIn: boolean
}

function CardProfileS(props: CardProfileSProps) {
  const theme = useAppSelector(state => state.theme.theme);
  const bgColor = React.useMemo(() => getCardProfileSBgColor(theme), [theme]);
  return (
    <View style={Styles.container}>
      <View style={[Styles.subContainer, bgColor]}>
        <View>
          <LocalText
            color="TEXT_REGULAR"
            size="SubheadingM"
            numberOfLines={1}
            testID={elementIdConstants.SideMenu.userName}>
            {!props.isLoggedIn
              ? translations.landing.sidemenu.userinfo.adventurer
              : props?.firstName &&
                props?.lastName &&
                `${props.firstName} ${props.lastName}`}
          </LocalText>
          <LocalText
            color="TEXT_NEUTRAL"
            size="CaptionS"
            testID={elementIdConstants.SideMenu.userEmail}>
            {!props.isLoggedIn
              ? translations.landing.sidemenu.userinfo.guest
              : props.email}
          </LocalText>
        </View>
        <TouchableOpacity
          style={Styles.manageContainer}
          onPress={props.viewOrEditBtnClicked}
          testID={elementIdConstants.SideMenu.viewEditButton}>
          <LocalText
            color="TEXT_NEUTRAL"
            size="BodyM"
            testID={elementIdConstants.SideMenu.viewEditButtonText}>
            {!props.isLoggedIn
              ? translations.landing.sidemenu.userinfo.guestlogin
              : translations.landing.sidemenu.userinfo.manage}
          </LocalText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CardProfileS;
