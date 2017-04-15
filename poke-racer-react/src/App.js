import React, { Component } from 'react';
import Login from './components/Login'
import WebsocketListener from './components/sockets/WebsocketListener'
import { addParticipant, removeParticipant } from './actions/changeParticipants'
import { Redirect } from 'react-router-dom'
import { setToken } from './actions/Account'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Auth from './containers/Auth'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleNewParticipant = this.handleNewParticipant.bind(this)
    this.handleRemoveParticipant = this.handleRemoveParticipant.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
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

  handleRedirect() {
    return (
      <Redirect
        to='/pokemon'
      />
    )
  }

  componentWillMount() {
    let token = localStorage.getItem("token")
    if (token)
      this.props.setToken(token)
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to PokéRaces</h2>
        {!this.props.account.token ? <Auth /> : this.handleRedirect()}
        {this.displayPokemon()}
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
    removeParticipant: removeParticipant,
    setToken: setToken
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
