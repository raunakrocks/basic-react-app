import React, { Component } from 'react';
import './App.css';
import BasicComponent from './BasicComponent';
//import BasicPureComponent from './BasicPureComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicComponent/>
      </div>
    );
  }
}

export default App;
