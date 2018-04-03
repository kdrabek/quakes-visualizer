import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import Immutable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import MyMap from '../components/Map';


const propTypes = PropTypes && {
  mapCoords: ImmutablePropTypes.object,
};

export class EarthquakesMap extends PureComponent {
  render() {
    return (
      <MyMap
        {...this.props}
        defaultZoom={5}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div/>}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    );
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
