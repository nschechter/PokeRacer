export function setPokemon(id) {
  return {
    type: 'SET_POKEMON',
    payload: id
  }
}

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token
})
