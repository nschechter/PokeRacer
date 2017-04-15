import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { setPokemon } from '../actions/Account'
import { connect } from 'react-redux'
import PokemonButton from './PokemonButton'
import { Redirect } from 'react-router-dom'
import Modal from 'react-modal'
import '../index.css'

class PokemonPicker extends Component {
  constructor() {
    super()
    this.state = {
      pokeList: [],
      pokeId: null,
      pokeName: null,
      currentIndex: null,
      currentFilter: '',
      isModalOpen: false,
      redirect: false
    }
    this.listPokemon = this.listPokemon.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getPokemon = this.getPokemon.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
  }

  handleClick(e){
    this.setState({
      pokeId: parseInt(e.target.closest("button").id, 10),
      pokeName: e.target.closest("button").name,
      isModalOpen: true
    })
  }

  handleRedirect() {
    return (
      <Redirect
        to={'/races'}
      />
    )
  }

  handleClose() {
    this.setState({
      isModalOpen: false,
      pokeName: ''
    })
  }

  handleFilterChange(e) {
    this.setState({
      currentFilter: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSetPokemon(this.state.pokeId, this.state.pokeName)
    localStorage.setItem('pokemon', this.state.pokeName);
    localStorage.setItem('pokeId', this.state.pokeId);
    this.setState({
      redirect: true
    })
  }

  componentWillMount() {
    let pokeId = localStorage.getItem("pokeId")
    if (pokeId) {
      this.setState({
        redirect: true
      })
      this.handleRedirect()
    }
  }

  componentDidMount() {
    this.getPokemon()
  }

  getPokemon() {
    fetch('http://localhost:3001/v1/pokemon')
    .then((resp) => resp.json())
    .then((data) => this.setState({pokeList: data}))
  }

  listPokemon(){
    let filteredList
    if (this.state.currentFilter === '') {
      filteredList = this.state.pokeList
    } else {
      let matchExp = new RegExp(this.state.currentFilter, 'gi')
      filteredList = this.state.pokeList.filter((pokemon) => pokemon.name.match(matchExp) !== null )
    }
    return filteredList.map((pokemon) => {
      if (pokemon.id === this.state.pokeId) {
        return (
          <div key={"div-" + pokemon.id} className="col-md-3">
            <PokemonButton className="pokebutton btn btn-primary active" key={pokemon.id} pokemon={pokemon} handleClick={this.handleClick} />
          </div>
        )
      } else {
        return (
          <div key={"div-" + pokemon.id} className="col-md-3">
            <PokemonButton className="pokebutton btn btn-primary" key={pokemon.id} pokemon={pokemon} handleClick={this.handleClick} />
          </div>
        )
      }
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
      <div className="col-md-8 col-md-offset-2">
        {this.state.redirect ? this.handleRedirect() : null}
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleClose}
          style={customStyles}
          contentLabel="Modal"
          >
            <form onSubmit={this.handleSubmit}>
              <h4>You have selected {this.state.pokeName}. Are you ready to begin your journey?</h4>
              <input className="btn btn-primary submit-btn" type="submit" value="Submit" />
            </form>
          </Modal>
          <div className="centered">
            <h4>Search For A Pokémon</h4>
            <input type="text" onChange={this.handleFilterChange} />
          </div>
            <div className="list">
              <h1 className="list-title">Select Your Pokémon</h1>
              {this.listPokemon()}
            </div>
        </div>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onSetPokemon: (id, name) => {
      dispatch(setPokemon(id, name))
    },
  })

  const mapStateToProps = (state) => {
    return {

    }
  }

  const ConnectedPokemonPicker = connect(mapStateToProps, mapDispatchToProps)(PokemonPicker)

  export default ConnectedPokemonPicker
