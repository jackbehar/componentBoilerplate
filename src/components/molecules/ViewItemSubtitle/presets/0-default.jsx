import ViewItemSubtitle from "../ViewItemSubtitle";
import ColdBigIcon from "../../../../assets/icons/SVG/ColdBigIcon";
import i18n from "../../../../localization/config/i18n";
import translations from "../../../../localization/config/translationHelper";
import {IconProps} from '../../../../types/icons';

export default (
  <ViewItemSubtitle
    uxpId="viewItem-1"
    displayValue={i18n.t(translations.landing.common.manage)}
    name={"Item Name"}
    subtitle={"Subtitle"}
    onPress={() => console.log(`viewItemSubtitle PRESSED!!`)}
    Icon={ColdBigIcon}
  />
);
