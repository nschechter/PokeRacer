export default function Account(state = {token: null, username: null, pokemon: null}, action){
  switch (action.type) {
    case 'SET_USERNAME':
    case "SET_TOKEN":
    case 'ADD_POKEMON':
      return Object.assign({}, state, {pokemon: action.payload}) 
    default:
      return state;
  }
}
