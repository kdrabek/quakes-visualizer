import React, { PureComponent } from 'react';
import './App.css';

import Title from './Title';
import EarthquakesContainer from '../containers/Earthquakes';
import Map from './Map';

export default class App extends PureComponent {
  state = {
  };

  render() {
    return (
      <div className="wrapper">
        <Title />
        <div className="list">
          <EarthquakesContainer />
        </div>
        <div className="map">
          <Map
            isMarkerShown
            googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
      </div>
    );
  }
}
