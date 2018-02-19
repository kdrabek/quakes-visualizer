import React, { PureComponent } from 'react';

import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import { DatePicker } from 'material-ui-pickers';
import { range } from 'lodash';
import './Options.css';


class Options extends PureComponent {
  state = {
    selectedDate: new Date(),
    magnitude: 5,
  }

  handleDateChange = date => this.setState({ selectedDate: date });
  handleMangnitudeChange = event => this.setState({ magnitude: event.target.value });
  handleOnClick = (event) => {
    console.log(event)  // eslint-disable-line
    console.log(this.state.selectedDate); // eslint-disable-line
    console.log(this.state.magnitude); // eslint-disable-line
  }

  render() {
    return (
      <form autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="magnitude">Magnitude</InputLabel>
          <Select
            value={this.state.magnitude}
            onChange={this.handleMangnitudeChange}
            inputProps={{
              name: 'magnitude',
              id: 'magnitudeSelect',
            }}
          >
            { range(1, 11).map(v => <MenuItem value={v} key={v}>{v}</MenuItem>) }
          </Select>
        </FormControl>
        <DatePicker
          disableFuture
          format="YYYY-MM-DD"
          label="Choose a date"
          minDate="1900-01-01"
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
        />
        <Button
          color="primary"
          onClick={this.handleOnClick}
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default Options;
