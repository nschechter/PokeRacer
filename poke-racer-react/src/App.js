import React, { Component } from 'react';
import Websocket from 'react-websocket';

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

  componentWillMount() {
  }

  componentDidMount() {
    fetch('http://localhost:3001/v1/pokemon').then((resp) => resp )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
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
