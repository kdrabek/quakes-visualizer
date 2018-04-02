import React, { PureComponent } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Slider from 'react-rangeslider';
import 'react-datepicker/dist/react-datepicker.css';
import './Options.css';


class Options extends PureComponent {
  componentWillMount() {
    this.setState({ date: moment(), magnitude: 5 });
  }

  handleDateChange = (date) => {
    this.setState({ date });
    this.props.handleOnClick(date, this.state.magnitude);  // eslint-disable-line
  }

  handleMangnitudeChange = (magnitude) => {
    this.setState({ magnitude });
    this.props.handleOnClick(this.state.date, magnitude);  // eslint-disable-line
  }

  render() {
    const labels = {
      1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10',
    };
    return (
      <div className="container">
        <div className="date">
          <DatePicker
            disableFuture
            locale="en-gb"
            className="date"
            dateFormat="YYYY-MM-DD"
            label="Choose a date"
            minDate={moment('1900-01-01')}
            maxDate={moment()}
            selected={moment(this.state.date)}
            onChange={this.handleDateChange}
            showYearDropdown
            dropdownMode="select"
          />
        </div>
        <div className="mag">
          <Slider
            min={1}
            max={10}
            labels={labels}
            value={this.state.magnitude}
            tooltip={false}
            onChange={this.handleMangnitudeChange}
          />
        </div>
      </div>
    );
  }
}

export default Options;
