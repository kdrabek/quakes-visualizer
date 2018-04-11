import { PropTypes } from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Immutable from 'immutable';
import classNames from 'classnames/bind';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import styles from './Map.css';

const cx = classNames.bind(styles);
const wrapper = cx({ wrapper: true });

const propTypes = PropTypes && {
  mapCoords: ImmutablePropTypes.map.isRequired,
};
const defaultProps = {};


export const Map = withScriptjs(withGoogleMap((props) => {  //eslint-disable-line
  const { center } = props;
  return (
    <GoogleMap {...props}>
      { center && <Marker position={center} /> }
    </GoogleMap>
  );
}));

const EnhancedMap = (props) => {
  const { mapCoords } = props;
  const center = mapCoords || Immutable.fromJS({ lat: 51.28, lng: 0.00 });
  const centerJS = center.toJS();
  return (
    <Map
      isMarkerShown
      center={centerJS}
      loadingElement={<div className={wrapper} />}
      containerElement={<div className={wrapper} />}
      mapElement={<div className={wrapper} />}
      defaultZoom={5}
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    />
  );
};

EnhancedMap.displayName = 'Map';
EnhancedMap.propTypes = propTypes;
EnhancedMap.defaultProps = defaultProps;
export default EnhancedMap;
