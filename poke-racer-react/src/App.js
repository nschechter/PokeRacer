import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Login from './components/Login'
import WebsocketListener from './components/sockets/WebsocketListener'
import { addParticipant } from './actions/addParticipant'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleNewParticipant = this.handleNewParticipant.bind(this)
  }


  handleNewParticipant(participant) {
    console.log(participant);
    this.props.addParticipant(participant)
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
        <div className="App-header">
        </div>
        <h2>Welcome to PokéRaces</h2>
        <Login />
        {this.displayPokemon()}
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
  {
    addParticipant: addParticipant
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    race: state.Race
  }
}
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp
