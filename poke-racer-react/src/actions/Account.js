export function setPokemon(id){
  return {
    type: 'SET_POKEMON',
    payload: id
  }
}

export function setToken(id){
  return {
    type: 'SET_TOKEN',
    payload: id
  }
}
