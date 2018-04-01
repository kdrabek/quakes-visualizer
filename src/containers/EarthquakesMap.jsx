import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import Immutable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import MyMap from '../components/Map';


const propTypes = PropTypes && {
  selected: ImmutablePropTypes.object,
};

export class EarthquakesMap extends PureComponent {
  render() {
    let coords;
    const { selected } = this.props;
    if (selected) {
      const coordinates = selected.get('coordinates');
      coords = { lat: coordinates.get(1), lng: coordinates.get(0) };
    } else {
      coords = { lat: 0, lng: 0 };
    }
    return (
      <MyMap
        {...this.props}
        coords={coords}
        defaultZoom={5}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    );
  }
}

EarthquakesMap.propTypes = propTypes;
EarthquakesMap.displayName = 'EarthquakesMap';

export function mapStateToProps(state, props) {
  return {
    selected: state.get('earthquakes').get('selected'),
    ...props,
  };
}

export function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(EarthquakesMap);
