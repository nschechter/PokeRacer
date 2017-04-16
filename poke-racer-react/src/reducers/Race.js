export default function Race(state = [], action){
  switch (action.type) {
    case 'GET_PARTICIPANTS':
      return action.payload
    case 'ADD_PARTICIPANT':
      return [...state, action.payload]
    case 'REMOVE_PARTICIPANT':
      return state.filter(user => user.id !== action.id)
    default:
      return state;
  }
}
