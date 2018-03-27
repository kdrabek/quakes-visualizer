import React, { PureComponent } from 'react';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import { FormControl } from 'material-ui/Form';
import { DatePicker } from 'material-ui-pickers';
import { range } from 'lodash';
import './Options.css';


class Options extends PureComponent {
  componentWillMount() {
    this.setState({ date: new Date(), magnitude: 5 });
  }

  handleDateChange = (date) => {
    this.setState({ date });
    this.props.handleOnClick(date, this.state.magnitude);  // eslint-disable-line
  }

  handleMangnitudeChange = (event) => {
    const magnitude = event.target.value;
    this.setState({ magnitude });
    this.props.handleOnClick(this.state.date, magnitude);  // eslint-disable-line
  }

  render() {
    const options = range(1, 11).map(v =>
      <MenuItem value={v} key={v}>{v}</MenuItem>);

    return (
      <form autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="magnitude">Min Magnitude</InputLabel>
          <Select
            value={this.state.magnitude} // eslint-disable-line
            onChange={this.handleMangnitudeChange}
            inputProps={{ name: 'magnitude', id: 'magnitudeSelect' }}
          >
            { options }
          </Select>
        </FormControl>

        <DatePicker
          disableFuture
          format="YYYY-MM-DD"
          label="Choose a date"
          minDate="1900-01-01"
          value={this.state.date}
          onChange={this.handleDateChange}
        />
      </form>
    );
  }
}

export default Options;
