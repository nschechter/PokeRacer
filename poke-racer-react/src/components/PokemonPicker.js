import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { addPokemon } from '../actions/Account'
import { connect } from 'react-redux'
import PokemonButton from './PokemonButton'

export default class PokemonPicker extends Component {
    constructor() {
      super()
      this.state = {
        pokeList: [],
        pokeId: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getPokemon = this.getPokemon.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

    handleClick(e){
      this.setState({
        pokeId: e.data.id
      })
    }

    handleSubmit(e) {
      e.preventDefault()
      this.props.addPokemon(this.state.pokeId)
    }

    componentDidMount() {
      this.getPokemon()
    }

    getPokemon() {
      fetch('http://localhost:3001/v1/pokemon').
      then((resp) => console.log(resp))
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="submit" />
          </form>
        </div>
      )
    }
}

const mapDispatchToProps = (dispatch) => {
return bindActionCreators({
  addPokemon: addPokemon
}, dispatch)
}


export const ConnectedPokemonPicker = connect(null, mapDispatchToProps)(PokemonPicker)
