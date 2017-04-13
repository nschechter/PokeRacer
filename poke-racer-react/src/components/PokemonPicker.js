import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { setPokemon } from '../actions/Account'
import { connect } from 'react-redux'
import PokemonButton from './PokemonButton'
import InfiniteScroll from 'react-component-infinite-scroll';

export default class PokemonPicker extends Component {
    constructor() {
      super()
      this.state = {
        pokeList: [],
        pokeId: null,
        current: 0
    }
    this.nextPage = this.nextPage.bind(this)
    this.listPokemon = this.listPokemon.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getPokemon = this.getPokemon.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

    handleClick(e){
      this.setState({
        pokeId: e.target.id
      })
    }

    handleSubmit(e) {
      e.preventDefault()
      this.props.setPokemon(this.state.pokeId)
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
      return this.state.pokeList.map((pokemon) => {
        if (pokemon.id === this.state.pokeId) {
          return (
          <div className="col-md-3">
            <PokemonButton className="btn btn-primary active" key={pokemon.id} pokemon={pokemon} handleClick={this.handleClick} />
          </div>
          )
        } else {
          return (
            <div className="col-md-3">
            <PokemonButton className="btn btn-primary" key={pokemon.id} pokemon={pokemon} handleClick={this.handleClick} />
            </div>
          )
      }
    })
  }

  nextPage() {
    this.listPokemon().slice(this.state.current, this.state.current + 10)
    this.setState({
      currentEnd: this.state.current + 10
    })
  }

    render() {
      return (
        <div className="col-md-12">
          <form onSubmit={this.handleSubmit}>
            <input type="submit" />
          </form>
          <InfiniteScroll next={this.nextPage()}
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


export const ConnectedPokemonPicker = connect(null, mapDispatchToProps)(PokemonPicker)
