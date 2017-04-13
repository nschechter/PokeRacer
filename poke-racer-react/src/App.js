import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Websocket from 'react-websocket';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
    }

    handleData(data) {
      debugger
      let result = JSON.parse(data);
      this.setState({message: result.message});
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.state.message}
        <Websocket url='ws://localhost:3001/cable' 
              onMessage={this.handleData.bind(this)}/>
      </div>
    );
  }
}

export default App;
