import React, { PureComponent } from 'react';
import './App.css';

import Title from './Title';
import EarthquakesContainer from '../containers/Earthquakes';
import EarthquakesMapContainer from '../containers/EarthquakesMap';
import OptionsCont from '../containers/Options';


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
        <OptionsCont />
        <EarthquakesContainer />
        <EarthquakesMapContainer />
      </div>
    );
  }
}
