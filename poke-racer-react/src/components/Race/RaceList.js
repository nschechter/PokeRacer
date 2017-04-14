import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Race from './Race'
import { addRace, removeRace, getActiveRaces } from '../../actions/RaceList'
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
    this.props.getActiveRaces()
  }

  handleAddRace() {
    this.setState({
      isModalOpen: true
    })
  }

  handleRedirect() {
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


  onAddRace(e) {
    e.preventDefault()
    let name = this.state.raceTitle
    let race = {
      name: name,
    }
    this.props.addRace(race, this.props.account.token)
    this.handleClose()
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
    return this.props.races.map((race) => {
      return (
        <div className="col-md-10 col-md-offset-2">
            <button className="race-button" key={race.id} id={race.id} race={race} onClick={this.handleClick}><h2>Race Name: {race.title}</h2></button>
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
      <div>
      {this.state.redirect ? this.handleRedirect() : null}
      <h1>Join or Add A Race</h1>
      <button onClick={this.handleAddRace}>Add Race</button>
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
  }
})

const ConnectedRaceList = connect(mapStateToProps, mapDispatchToProps)(RaceList)

export default ConnectedRaceList
