import React, { Component } from 'react';
import Login from './components/Login'
import WebsocketListener from './components/sockets/WebsocketListener'
import ConnectedPokemonPicker from './components/PokemonPicker'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: []
    };
    this.handleNewParticipant = this.handleNewParticipant.bind(this)
  }

  handleNewParticipant(participant) {
    this.setState({
      participants: [...this.state.participants, participant]
    })
  }

  displayPokemon() {
    return this.state.participants.map((p) => {
      return <img src={p.pokemon.img_url} />
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to PokéRaces</h2>
        <Login />
        {this.displayPokemon()}
        <ConnectedPokemonPicker />
        <WebsocketListener
          debug
          handleReceived={this.handleNewParticipant}
          channel={'AddNewParticipantChannel'}
          url={'ws://localhost:3001/cable'}
         />
      </div>
    )
  }
}

export default App;
