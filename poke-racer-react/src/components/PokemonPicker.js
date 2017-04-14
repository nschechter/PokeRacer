import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { setPokemon } from '../actions/Account'
import { connect } from 'react-redux'
import PokemonButton from './PokemonButton'
import InfiniteScroll from 'react-component-infinite-scroll';
import { Redirect } from 'react-router-dom'
import Modal from 'react-modal'
import '../index.css'

export default class PokemonPicker extends Component {
    constructor() {
      super()
      this.state = {
        pokeList: [],
        pokeId: null,
        pokeName: null,
        currentIndex: null,
        currentFilter: '',
        isModalOpen: false

    }
    this.nextPage = this.nextPage.bind(this)
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
        isModalOpen: true,
        pokeId: e.target.key,
        pokeName: e.target.name
      })
    }

    handleRedirect() {
      <Redirect to="/races" />
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
      this.props.setPokemon(this.state.pokeId)
      this.handleRedirect()
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

  nextPage() {
    return function() {}
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
          <input type="text" onChange={this.handleFilterChange} />
          <InfiniteScroll nextPage={this.nextPage()}
          hasMore={true}
          loader={<h4>Loading...</h4>}>
            <div className="list">
              <h1 className="list-title">Select Your Pokemon</h1>
              {this.listPokemon()}
            </div>
          </InfiniteScroll>
        </div>
      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setPokemon: setPokemon
  }, dispatch)
 }

 const mapStateToProps = (state) => {
   return {}
 }



export const ConnectedPokemonPicker = connect(mapStateToProps, mapDispatchToProps)(PokemonPicker)
