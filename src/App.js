import React, { useState } from "react";
import {
  Picker,
  newDate,
} from "@persian-tools/persian-mobile-datepicker";

const config = {
  year: {
    caption: {
      text: 'سال',
    },
  },
  month: {
    caption: {
      text: 'ماه',
    },
  },
  day: {
    caption: {
      text: 'روز',
    },
  },
  hour: {
    caption: {
      text: 'ساعت',
    },
    formatter: ({ hour, hourText }) => (hour < 10 ? `0${hour}` : hourText),
  },
  minute: {
    caption: {
      text: 'دقیقه',
    },
    formatter: ({ minute, minuteText }) => (minute < 10 ? `0${minute}` : minuteText),
  },
};


export default function App() {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDateValue, setSelectedDateValue] = useState(null);
  const [selectedTimeValue, setSelectedTimeValue] = useState(null);

  function handleSubmit(selectedDate) {
    const { day, hour, minute, month, year } = selectedDate.object;
    setSelectedDateValue(`${year}/${month}/${day}`);
    setSelectedTimeValue(`${hour}:${minute}`);
  }

  return (
    <React.Fragment>
      <button
        onClick={() => setShowPicker(true)}>
        ویرایش تاریخ و ساعت
      </button> <br />
      <label>تاریخ</label>
      <input
        value={selectedDateValue}
      />
      <br />
      <label>ساعت</label>
      <input value={selectedTimeValue} />
      <Picker
        disableSheetHeaderDrag
        disableSheetDrag
        config={config}
        isOpen={showPicker}
        minDate={newDate({ year: 1400, month: 1, day: 1 })}
        maxDate={newDate({ year: 1401, month: 12, day: 29 })}
        onSubmit={handleSubmit}
        onChange={handleSubmit}
        onClose={() => setShowPicker(false)}
        highlightWeekends
      />
    </React.Fragment>

  );
}
