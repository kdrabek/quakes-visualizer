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


const Map = withScriptjs(withGoogleMap((props) => {  //eslint-disable-line
  const { mapCoords } = props;
  const center = mapCoords || Immutable.fromJS({ lat: 51.28, lng: 0.00 });
  const centerJS = center.toJS();

  return (
    <GoogleMap className={wrapper} center={centerJS} {...props}>
      { mapCoords && <Marker position={center} /> }
    </GoogleMap>
  );
}));

Map.displayName = 'Map';
Map.propTypes = propTypes;
Map.defaultProps = defaultProps;
export default Map;
