import React from 'react'

const PokemonButton = (props) => (
  <button id={props.pokemon.id} onClick={props.handleClick}>{props.pokemon.name}</button>
)

export default PokemonButton
