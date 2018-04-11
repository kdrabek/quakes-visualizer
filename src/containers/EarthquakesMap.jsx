import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GoogleMap from '../components/Map';


const propTypes = PropTypes && {
  mapCoords: PropTypes.object,
};
const defaultProps = {};


export const EarthquakesMap = ({ mapCoords }) => (
  <GoogleMap mapCoords={mapCoords} />
);

export function mapStateToProps(state, props) {
  return {
    mapCoords: state.get('earthquakes').get('mapCoords'),
    ...props,
  };
}

export function mapDispatchToProps() {
  return {};
}

EarthquakesMap.displayName = 'EarthquakesMap';
EarthquakesMap.propTypes = propTypes;
EarthquakesMap.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(EarthquakesMap);
