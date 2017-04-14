export default function Account(state = { token: null, username: null, pokemon: null }, action) {
  switch (action.type) {
    case 'SET_USERNAME':
   	  return Object.assign({}, state, { username: action.payload })
    case 'SET_TOKEN':
      return Object.assign({}, state, { token: action.payload })
    case 'SET_POKEMON':
      return Object.assign({}, state, { pokemon: action.payload }) 
    default:
      return state;
  }
}
