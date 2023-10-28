import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateConstructor {
  startDate: Date;
}

export class DateSelector extends React.Component<{}, DateConstructor> {
  constructor(props: {}) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  private handleChange(date: Date | null) {
    console.log("date is here!", date);
    if (date) {
      this.setState({
        startDate: date,
      });
    }
  }

  public render() {
    const { startDate } = this.state;
    return (
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={this.handleChange}
        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-gray-90 rounded-lg outline-none border-none font-medium"
      />
    );
  }
}
