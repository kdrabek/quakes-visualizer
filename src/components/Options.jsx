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
    startDate: new Date(),
    endDate: new Date(),
    magnitude: 5,
  }

  handleStartDateChange = date => this.setState({ startDate: date });
  handleEndDateChange = date => this.setState({ endDate: date });
  handleMangnitudeChange = event => this.setState({ magnitude: event.target.value });
  handleOnClick = () => {
    console.log("startDate: ", this.state.startDate); // eslint-disable-line
    console.log("endDate: ", this.state.endDate); // eslint-disable-line
    console.log("magnitude: ", this.state.magnitude); // eslint-disable-line
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
          label="Choose start date"
          minDate="1900-01-01"
          value={this.state.startDate}
          onChange={this.handelStartDateChange}
        />

        <DatePicker
          disableFuture
          format="YYYY-MM-DD"
          label="Choose end date"
          minDate="1900-01-01"
          value={this.state.endDate}
          onChange={this.handleEndDateChange}
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
