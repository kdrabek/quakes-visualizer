import React, { PureComponent } from 'react';
import './App.css';

import Title from './Title';
import Options from './Options';
import EarthquakesContainer from '../containers/Earthquakes';

export default class App extends PureComponent {
  state = {
  };

  render() {
    return (
      <div className="wrapper">
        <Title />
        <Options />

        <div className="list">
          <EarthquakesContainer />
        </div>
        <div className="map">2</div>
      </div>
    );
  }
}
