import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Map.css';

const Map = withScriptjs(withGoogleMap((props) => {  //eslint-disable-line
  const { coords } = props;
  return (
    <div className="wrapper">
      <GoogleMap 
        className="map" 
        defaultCenter={coords}
        center={coords}
        {...props} >
        {props.isMarkerShown && <Marker position={coords} />}
      </GoogleMap>
    </div>
  );
}));

Map.propTypes = {
  isMarkerShown: PropTypes.bool.isRequired,
};

export default Map;
