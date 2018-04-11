import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Slider from 'react-rangeslider';
import { PropTypes } from 'prop-types';
import classNames from 'classnames/bind';
import { range, fromPairs } from 'lodash';
import { withState, withHandlers, compose } from 'recompose';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './Options.css';

const cx = classNames.bind(styles);
const optionsDate = cx({ date: true });
const optionsMagnitude = cx({ mag: true });
const options = cx({ options: true });
const optionsContainer = cx({ container: true });

const propTypes = PropTypes && {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
const defaultProps = {};

const magnitudeLabels = fromPairs(range(1, 11).map(v => [v, v.toString()]));

export const Options = props => (
  <div className={options}>
    <div className={optionsContainer}>
      <span className={optionsDate}>
        Pick a date:
        <DatePicker
          disableFuture
          locale="en-gb"
          className="date"
          dateFormat="YYYY-MM-DD"
          label="Choose a date"
          minDate={moment('1900-01-01')}
          maxDate={moment()}
          selected={moment(props.date)}
          onChange={props.onDateChange}
          showYearDropdown
          dropdownMode="select"
        />
      </span>
      <span className={optionsMagnitude}>
        Select min magnitude:
        <Slider
          min={1}
          max={10}
          labels={magnitudeLabels}
          value={props.magnitude}
          tooltip={false}
          onChange={props.onMagnitudeChange}
        />
      </span>
    </div>
  </div>
);

Options.displayName = 'Options';
Options.propTypes = propTypes;
Options.defaultProps = defaultProps;

export default compose(
  withState('date', 'setDate', moment()),
  withState('magnitude', 'setMagnitude', 5),
  withHandlers({
    onDateChange: props => (date) => {
      props.setDate(date);
      props.handleOnClick(date, props.magnitude);
    },
    onMagnitudeChange: props => (magnitude) => {
      props.setMagnitude(magnitude);
      props.handleOnClick(props.date, magnitude);
    },
  }),
)(Options);
