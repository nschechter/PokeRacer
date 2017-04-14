import React, { Component } from 'react'
import { connect } from 'react-redux'
import Race from './Race'
import { addRace, removeRace, getActiveRaces } from '../../actions/RaceList'
import Modal from 'react-modal'


class RaceList extends Component {
  constructor() {
    super()
    this.state = {
      isModalOpen: false,
      raceTitle: ''
    }
    this.listRaces = this.listRaces.bind(this)
    this.handleAddRace = this.handleAddRace.bind(this)
    this.handleRemoveRace = this.handleRemoveRace.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onAddRace = this.onAddRace.bind(this)
  }

  handleAddRace() {
    this.setState({
      isModalOpen: true
    })
  }

  handleRemoveRace() {

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
      creator: this.props.account.username
    }
    this.props.addRace(race, this.props.account.token)
  }

  handleChange(e) {
    this.setState({
      raceTitle: e.target.value
    })
  }

  listRaces() {
    return this.props.races.map((race) => {
      return <Race key={race.id} race={race}/>
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
