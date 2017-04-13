import React, {Component} from 'react'
import { Button } from 'react-toolbox/lib/button'

export default class PokemonPicker extends React {
    constructor() {
      super()
      this.state = {
        pokeList: []
      }
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
      getPokemon()
    }

    getPokemon() {
      fetch('http://localhost:3001/v1/pokemon').then((resp) =>
      return JSON.parse(resp)).then((data) => console.log(data))
    }

    render() {
      return (
        <div>
        </div>
      )
    }
}
