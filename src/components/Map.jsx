import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const Map = withScriptjs(withGoogleMap((props) => {  //eslint-disable-line
  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
  );
}));

Map.propTypes = {
  isMarkerShown: PropTypes.bool.isRequired,
};

export default Map;
