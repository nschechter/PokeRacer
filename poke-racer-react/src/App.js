import React, { Component } from 'react';
import Login from './components/Login'
import WebsocketListener from './components/sockets/WebsocketListener'
import ConnectedPokemonPicker from './components/PokemonPicker'
import { addParticipant, removeParticipant } from './actions/changeParticipants'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Race from './components/Race/Race'
import Auth from './containers/Auth'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleNewParticipant = this.handleNewParticipant.bind(this)
    this.handleRemoveParticipant = this.handleRemoveParticipant.bind(this)
  }

  handleNewParticipant(participant) {
    console.log(participant);
    this.props.addParticipant(participant)
  }
  handleRemoveParticipant(participant) {
    console.log(participant);
    this.props.removeParticipant(participant)
  }

  displayPokemon() {
    if (this.props.race) {
      return this.props.race.map((p) => {
        return <img src={p.pokemon.img_url} />
      })
    }
    return null
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to PokéRaces</h2>
        {!this.props.account.token ? <Auth /> : false}
        {this.displayPokemon()}
        <ConnectedPokemonPicker />
        <Race />
        <WebsocketListener
          debug
          handleReceived={this.handleNewParticipant}
          channel={'AddNewParticipantChannel'}
          url={'ws://localhost:3001/cable'}
        />
        <WebsocketListener
          debug
          handleReceived={this.handleRemoveParticipant}
          channel={'RemoveParticipantChannel'}
          url={'ws://localhost:3001/cable'}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
  {
    addParticipant: addParticipant,
    removeParticipant: removeParticipant
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    race: state.Race,
    account: state.Account
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp
