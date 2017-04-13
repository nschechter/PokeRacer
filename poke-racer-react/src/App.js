import React, { Component } from 'react';
import Websocket from 'react-websocket';
import { NavLink } from 'react-router-dom'

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
    if (result.message && result.message.user) {
      this.setState({message: result.message.user});
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/v1/pokemon').then((resp) => resp )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
      
        </div>
        <Websocket url='ws://localhost:3001/cable'
        onMessage={this.handleData.bind(this)}/>
      </div>
    );
  }
}

export default App;
