import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { setToken, setUsername, setPokemon } from '../../actions/Account'
import { connect } from 'react-redux'
import { addRace, removeRace, getActiveRaces, getParticipants } from '../../actions/RaceList'
import ConnectedProfileBadge from '../ProfileBadge'
import Modal from 'react-modal'
import '../../index.css'


class RaceList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      raceTitle: '',
      raceId: '',
      redirect: false
    }
    this.listRaces = this.listRaces.bind(this)
    this.handleAddRace = this.handleAddRace.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onAddRace = this.onAddRace.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
    this.handleAddedRaceRedirect = this.handleAddedRaceRedirect.bind(this)
    this.props.getActiveRaces()

  }

  componentWillMount() {
    if (!this.props.account.token) {
      let token = localStorage.getItem("token")
      let username = localStorage.getItem("username")
      let id = localStorage.getItem("pokeId")
      let name = localStorage.getItem("pokemon")
    if (token) {
      this.props.onSetUsername(username)
      this.props.setPokemon(id, name)
      this.props.setToken(token)
      }
    }
  }


  handleAddRace() {
    this.setState({
      isModalOpen: true
    })
  }

  handleRedirect() {
    this.props.getParticipants(this.state.raceId)
    return (
      <Redirect
        to={'/races/' + this.state.raceId}
      />
    )
  }

  handleClose() {
    this.setState({
      isModalOpen: false,
    })
  }

  handleAddedRaceRedirect() {
    this.setState({
      raceId: this.props.races[this.props.races.length - 1].id
    })
    this.handleRedirect()
  }


  onAddRace(e) {
    e.preventDefault()
    let name = this.state.raceTitle
    let race = {
      name: name,
    }
    this.props.addRace(race, this.props.account.token)
    this.setState({
      raceTitle: '',
      redirect: true
    })
    this.handleAddedRaceRedirect()
  }

  handleChange(e) {
    this.setState({
      raceTitle: e.target.value
    })
  }

  handleClick(e) {
    this.setState({
      raceId: e.target.closest("button").id,
      redirect: true
    })
  }

  listRaces() {
    let races = this.props.races
    return races.map((race) => {
      return (
        <div key={race.id} className="col-md-12">
            <button className="race-button" key={races.indexOf(race)} id={race.id} onClick={this.handleClick}><h2>Race Name: {race.title}</h2></button>
        </div>
      )
    })
  }

  render() {

    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    return (
      <div className="col-md-12">
      {this.state.redirect ? this.handleRedirect() : null}
      <div className="col-md-12 page-title">
        <h1>Join or Add A Race</h1>
        <div className="col-md-11">
        <button onClick={this.handleAddRace} className="btn btn-primary btn-lg submit">Add Race</button>
        <ConnectedProfileBadge />
        </div>
      </div>
      <Modal
        isOpen={this.state.isModalOpen}
        onRequestClose={this.handleClose}
        style={customStyles}
        contentLabel="Modal"
        >
          <form onSubmit={this.onAddRace}>
            <h3>Race Details!</h3>
            <label> Race Name:  </label>
            <input name="title" type="text" value={this.state.raceTitle} onChange={this.handleChange} />
            <br />
            <input className="btn btn-primary submit-btn" type="submit" value="Submit" />
          </form>
        </Modal>
        {this.listRaces()}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return  {
    account: state.Account,
    races: state.RaceList
  }
}

const mapDispatchToProps = (dispatch) => ({
  addRace: (race, token) => {
    dispatch(addRace(race, token))
  },
  removeRace: (id) => {
    dispatch(removeRace(id))
  },
  getActiveRaces: () => {
    dispatch(getActiveRaces())
  },
  setToken: (token) => {
    dispatch(setToken(token))
  },
  onSetUsername: (username) => {
    dispatch(setUsername(username))
  },
  setPokemon: (id, name) => {
    dispatch(setPokemon(id, name))
  },
  getParticipants: (id, name) => {
    dispatch(getParticipants(id, name))
  }
})

const ConnectedRaceList = connect(mapStateToProps, mapDispatchToProps)(RaceList)

export default ConnectedRaceList
