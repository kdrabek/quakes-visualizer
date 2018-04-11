import React from 'react';
import classNames from 'classnames/bind';

import EarthquakesContainer from '../containers/Earthquakes';
import EarthquakesMapContainer from '../containers/EarthquakesMap';
import EarthquakesOptionsContainer from '../containers/EarthquakesOptions';

import Title from './Title';
import styles from './App.css';

const cx = classNames.bind(styles);
const grid = cx({ grid: true });

const App = () => (
  <div className={grid}>
    <Title
      text="earthquakes visualizer"
      url="https://gitlab.com/kdrabek/earthquakes-visualizer"
    />
    <EarthquakesOptionsContainer />
    <EarthquakesContainer />
    <EarthquakesMapContainer />
  </div>
);

export default App;
