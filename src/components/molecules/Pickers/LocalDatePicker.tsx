import dayjs from 'dayjs';
import React from 'react';
import {Platform, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import {useAppSelector} from '../../../hook/useAppSelector';
import LocalDatePickerStyles from './LocalDatePickerStyles';

interface Props {
  value: Date | undefined;
  setValue: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

function LocalDatePicker({value, setValue}: Props) {
  const theme = useAppSelector(state => state.theme.theme);

  return value ? (
    Platform.OS === 'ios' ? (
      <DateTimePicker
        display="spinner"
        mode="time"
        themeVariant={theme !== 'legacy' ? theme : 'dark'}
        value={value}
        minuteInterval={5}
        onChange={e => {
          if (e.type === 'set')
            setValue(dayjs(e.nativeEvent.timestamp).toDate());
        }}
      />
    ) : (
      <View style={LocalDatePickerStyles.styles.container}>
        <DatePicker
          androidVariant="iosClone"
          mode="time"
          fadeToColor="none"
          locale="de" // The locale for Germany (de) has been set here in order to display the time in 24h format
          is24hourSource="locale"
          theme={theme !== 'legacy' ? theme : 'dark'}
          date={value}
          minuteInterval={5}
          onDateChange={e => {
            setValue(e);
          }}
        />
      </View>
    )
  ) : null;
}

export default LocalDatePicker;
