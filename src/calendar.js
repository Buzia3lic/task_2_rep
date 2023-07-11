import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

export default function Example() {
  const [value, setValue] = useState(new Date());

  return (
    <Calendar
      multiple
      plugins={[<DatePanel />]}
      value={value}
      onChange={setValue}
    />
  );
}
