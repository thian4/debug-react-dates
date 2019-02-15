import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker, isInclusivelyAfterDay } from "./lib";

import moment from "moment";

class DateRangePickerComponent extends Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null
  };

  isOutsideRange = day => {
    const { startDate, endDate } = this.state;
    const todayDate = moment();

    // disable all dates before today
    if (!isInclusivelyAfterDay(day, todayDate)) {
      return true;
    }

    // disable 18 days after startDate
    if (
      startDate &&
      !endDate &&
      isInclusivelyAfterDay(day, startDate.clone().add(28, "days"))
    ) {
      return true;
    }

    //disable 356 days after today
    if (isInclusivelyAfterDay(day, todayDate.clone().add(365, "days"))) {
      return true;
    }

    return false;
  };

  resetDate = () => {
    this.setState({
      startDate: null,
      endDate: null
    });
  };

  applyDate = () => {
    this.setState({
      focusedInput: null
    });
  };

  render() {
    const { startDate, endDate, focusedInput } = this.state;
    return (
      <div filled={startDate || endDate}>
        <DateRangePicker
          noBorder
          readOnly
          transitionDuration={0}
          daySize={32}
          displayFormat="DD/MM/YYYY"
          startDateId="startDate"
          startDatePlaceholderText="Check-in"
          endDateId="endDate"
          endDatePlaceholderText="Check-out"
          startDate={startDate}
          endDate={endDate}
          onDatesChange={({ startDate, endDate }) => {
            this.setState({ startDate, endDate });
          }}
          focusedInput={focusedInput}
          onFocusChange={focusedInput => {
            this.setState({ focusedInput });
          }}
          verticalSpacing={25}
          calendarInfoPosition="bottom"
          isOutsideRange={this.isOutsideRange}
        />
      </div>
    );
  }
}

export default DateRangePickerComponent;
