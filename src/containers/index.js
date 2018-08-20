import React, { Component } from 'react';

// import TradingView from '../components/TradingView'
import Timelines from '../components/Timelines'
import HighStock from '../components/HighStock'

class Containers extends Component {
  render() {
    return (
      <div>
        <HighStock />
        <Timelines />
      </div>
    );
  }
}

export default Containers;
