import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import Immutable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import MyMap from '../components/Map';


const propTypes = PropTypes && {
  mapCoords: ImmutablePropTypes.object,
};

export class EarthquakesMap extends PureComponent {  //eslint-disable-line
  render() {
    return <MyMap mapCoords={this.props.mapCoords} />;
  }
}

EarthquakesMap.propTypes = propTypes;
EarthquakesMap.displayName = 'EarthquakesMap';

export function mapStateToProps(state, props) {
  return {
    mapCoords: state.get('earthquakes').get('mapCoords'),
    ...props,
  };
}

export function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(EarthquakesMap);
