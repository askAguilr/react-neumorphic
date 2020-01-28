import React, { Component } from 'react';
import LoginContainer from './containers/Login/Login.container';
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <LoginContainer/>
        </div>
    );
  }
}

export default App;


