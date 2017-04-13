import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Websocket from 'react-websocket';
// var ActionCable = require('actioncable')
// ActionCable.startDebugging()
// let WSApp = {}
// WSApp.cable = ActionCable.createConsumer('ws://localhost:3001/cable')
// WSApp.pokemonChannel = WSApp.cable.subscriptions.create({channel: "PokemonChannel"}, {
//   connected: () => {
//     console.log('connected');
//   },
//   recieved: (data) => {
//     console.log(data )
//   }
// })


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };



  }


  handleData(data) {
    // debugger
    let result = JSON.parse(data);
    console.log(data);
    this.setState({message: result.message});
  }

  componentDidMount() {


  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.state.message}
        {/* <Websocket url='ws://localhost:3001/cable'
        onMessage={this.handleData.bind(this)}/> */}
      </div>
    );
  }
}

export default App;
