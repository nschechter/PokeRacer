import React, {Component} from 'react'
import { Button } from 'react-toolbox'

export default class PokemonPicker extends React {
    constructor() {
      super()
      this.handleSubmit = this.handleSubmit.bind(this)
    }


    getPokemon() {
      fetch('http://localhost:3001/v1/pokemon').then((resp) =>
      return JSON.parse(resp)).then((data) => )
    }

    render() {
      return (
        <div>

        </div>
      )
    }
}
