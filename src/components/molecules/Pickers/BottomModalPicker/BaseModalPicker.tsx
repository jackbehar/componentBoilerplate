import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ItemValue} from '@react-native-picker/picker/typings/Picker';
import {Column, Row} from '../../../atoms/Layout';
import LocalText from '../../../atoms/LocalText/LocalText';
import Spacer from '../../../atoms/Spacer/Spacer';
import translations from '../../../../localization/config/translationHelper';
import styles from './BottomSheetModalStyles';
import LocalButton from '../../../atoms/Buttons/LocalButton/LocalButton';
import {useAppSelector} from '../../../../hook/useAppSelector';
import colors from '../../../../assets/colors/tokens/colors';
import {
  NUMBER_OF_LINES,
  SPACER_SIZE,
  BOTTOM_SHEET_HEIGHT,
} from './BottomSheetModalConsts';
import {BottomSheetData, BottomSheetFunctions} from './BottomModalPicker';
import {TimeSheetData} from './TimeModalPicker';

interface Props {
  Picker: JSX.Element | null;
  params: BottomSheetData | TimeSheetData | undefined;
  bottomSheetRef: React.MutableRefObject<RBSheet | null>;
  functions: React.MutableRefObject<BottomSheetFunctions | undefined>;
  value: ItemValue | Date | undefined;
}

function BaseModalPicker({
  Picker,
  bottomSheetRef,
  functions,
  params,
  value,
}: Props) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <RBSheet
      ref={bottomSheetRef}
      height={BOTTOM_SHEET_HEIGHT}
      customStyles={{
        container: {
          ...styles.modal,
          backgroundColor: colors[theme].LAYOUT_BACKGROUND,
        },
      }}>
      {params ? (
        <Column flex={1} justifyContent="space-around">
          <Column center>
            <LocalText color="TEXT_REGULAR" size="SubheadingM">
              {params.modalTitle}
            </LocalText>
            {params.description ? (
              <Row center>
                <LocalText
                  color="TEXT_NEUTRAL"
                  size="BodyS"
                  numberOfLines={NUMBER_OF_LINES}
                  style={styles.text}>
                  {params.description}
                </LocalText>
              </Row>
            ) : null}
            <Spacer size={SPACER_SIZE} />
          </Column>

          {Picker}
          <>
            <Spacer size={SPACER_SIZE} />
            <LocalButton
              text={translations.fullClimate.apply}
              onPress={() => {
                functions.current?.onSubmit(value);
              }}
            />
          </>
        </Column>
      ) : null}
    </RBSheet>
  );
}

export default BaseModalPicker;
