import React, {Component} from 'react'
import Button from 'react-bootstrap/lib/Button'
import '../index.css'

const PokemonButton = (props) => (
  <button id={props.pokemon.id} key={props.pokemon.id} onClick={props.handleClick} type="button" name={props.pokemon.name} className={props.className} data-toggle="button" aria-pressed="false" autoComplete="off">
    <img src={props.pokemon.img_url}/>{props.pokemon.name}
  </button>
)

export default PokemonButton
