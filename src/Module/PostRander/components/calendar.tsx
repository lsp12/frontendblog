/* eslint-disable import/no-duplicates */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import PickersDay, { PickersDayProps } from '@mui/lab/PickersDay';
import endOfWeek from 'date-fns/endOfWeek';
import isSameDay from 'date-fns/isSameDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import startOfWeek from 'date-fns/startOfWeek';
import { useAppDispatch } from '../../../shared/Store/Hook';
import { getPostRangeController } from '../../../shared/Store/ActionPost/Post.reducer';
import { getRangeDate } from '../../../shared/Store/ActionPost/Post.slice';

type CustomPickerDayProps = PickersDayProps<Date> & {
  dayIsBetween: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
};

const CustomPickersDay = styled( PickersDay, {
  shouldForwardProp: ( prop ) => prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})<CustomPickerDayProps>(({
  theme, dayIsBetween, isFirstDay, isLastDay,
}) => ({
  ...( dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...( isFirstDay && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...( isLastDay && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
})) as React.ComponentType<CustomPickerDayProps>;

export default function CustomDay() {
  const [value, setValue] = React.useState<Date | null>( new Date());
  const dispatch = useAppDispatch();
  console.log( 'value', value );

  React.useEffect(() => {
    if ( value ) {
      const start = startOfWeek( value );
      const end = endOfWeek( value );
      console.log( 'start', start );
      console.log( 'end', end );

      dispatch( getPostRangeController({
        start: start.getTime(),
        end: end.getTime(),
      }));
      dispatch( getRangeDate({
        start: start.getTime(),
        end: end.getTime(),
      }));
    }
  }, [dispatch, value]);

  const renderWeekPickerDay = (
    date: Date,
    selectedDates: Array<Date | null>,
    pickersDayProps: PickersDayProps<Date>,
  ) => {
    if ( !value ) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = startOfWeek( value );
    const end = endOfWeek( value );

    const dayIsBetween = isWithinInterval( date, { start, end });
    const isFirstDay = isSameDay( date, start );
    const isLastDay = isSameDay( date, end );

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        label="Week picker"
        value={value}
        onChange={( newValue ) => {
          setValue( newValue );
        }}
        renderDay={renderWeekPickerDay}
        renderInput={( params ) => <TextField {...params} />}
        inputFormat="'Week of' MMM d"
      />
    </LocalizationProvider>
  );
}
