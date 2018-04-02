import React, { PureComponent } from 'react';
import './App.css';

import Title from './Title';
import EarthquakesContainer from '../containers/Earthquakes';
import EarthquakesMapContainer from '../containers/EarthquakesMap';


export default class App extends PureComponent {
  state = {
  };

  render() {
    return (
      <div className="grid">
        <Title
          text="earthquake browser"
          url="https://gitlab.com/kdrabek/earthquakes-visualizer"
        />
        <EarthquakesContainer />
        <EarthquakesMapContainer
          isMarkerShown
        />
      </div>
    );
  }
}
