export const setPokemon = (id, name) => ({
  type: 'SET_POKEMON',
  payload: {id: id, name: name}
})

export const setUsername = (username) => ({
  type: 'SET_USERNAME',
  payload: username
})

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token
})
