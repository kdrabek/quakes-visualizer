import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Map.css';

const Map = withScriptjs(withGoogleMap((props) => {  //eslint-disable-line
  const { mapCoords } = props;
  const center = mapCoords || Immutable.fromJS({ lat: 51.28, lng: 0.00 });

  return (
    <div className="wrapper">
      <GoogleMap
        className="map"
        center={center.toJS()}
        {...props}
      >
        {mapCoords && <Marker position={center.toJS()} />}
      </GoogleMap>
    </div>
  );
}));

Map.propTypes = {
  isMarkerShown: PropTypes.bool.isRequired,
};

export default Map;
