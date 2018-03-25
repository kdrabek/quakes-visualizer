import React, { PureComponent } from 'react';
import './App.css';

import Title from './Title';
import Options from './Options';

export default class App extends PureComponent {
  state = {
  };

  render() {
    return (
      <div className="wrapper">
        <Title />
        <Options />

        <div className="list">
          Placeholder for earthquakes list.
        </div>
        <div className="map">2</div>
      </div>
    );
  }
}
