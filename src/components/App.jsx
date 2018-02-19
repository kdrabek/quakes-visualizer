import { PureComponent } from 'react';
import './App.css';

import Title from './Title';
import Options from './Options';


export default class App extends PureComponent {
  state = {
    name: 'earthquake',
  };

  render() {
    return (
      <div className="wrapper">
        <Title />
        <Options />
        <div className="list">
          {this.state.name}
        </div>
        <div className="map">2</div>
      </div>
    );
  }
}
