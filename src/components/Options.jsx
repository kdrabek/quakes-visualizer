import React, { PureComponent } from 'react';
import { DatePicker } from 'material-ui-pickers';
import Slider from 'react-rangeslider';
import './Options.css';


class Options extends PureComponent {
  componentWillMount() {
    this.setState({ date: new Date(), magnitude: 5 });
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
      1: '1',
      10: '10',
    };
    return (
      <div className="container">
        <DatePicker
          className="picker"
          disableFuture
          format="YYYY-MM-DD"
          label="Choose a date"
          minDate="1900-01-01"
          value={this.state.date}
          onChange={this.handleDateChange}
        />
        <Slider
          className="slider"
          min={1}
          max={10}
          labels={labels}
          value={this.state.magnitude}
          handleLabel={this.state.magnitude}
          onChange={this.handleMangnitudeChange}
        />
      </div>
    );
  }
}

export default Options;
