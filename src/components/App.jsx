import React, { PureComponent } from 'react';
import './App.css';

import Title from './Title';
import Options from './Options';
import EarthquakesList from './EarthquakesList';


export default class App extends PureComponent {
  state = {
  };

  render() {
    return (
      <div className="wrapper">
        <Title />
        <Options />

        <div className="list">
          <EarthquakesList />
        </div>
        <div className="map">2</div>
      </div>
    );
  }
}
