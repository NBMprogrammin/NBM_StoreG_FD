import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function InputeForDataAndTime({
  handleDateChange,
  selectedDate,
  labelGold
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
        name="datatime"
          className="StyleInptDataAndTime"
          label={labelGold}
          fullWidth
          onChange={handleDateChange}
          defaultValue={dayjs(" - - ")}
          views={["year", "month", "day"]}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
