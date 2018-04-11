import { PropTypes } from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
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
  mapCoords: ImmutablePropTypes.map,
};
const defaultProps = {};


export const Map = withScriptjs(withGoogleMap((props) => {
  const { center, isMarkerShown } = props;
  return (
    <GoogleMap {...props}>
      { isMarkerShown && <Marker position={center} /> }
    </GoogleMap>
  );
}));

const EnhancedMap = ({ mapCoords }) => {
  const center = mapCoords ? mapCoords.toJS() : null;
  return (
    <Map
      isMarkerShown={Boolean(center)}
      center={center}
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
