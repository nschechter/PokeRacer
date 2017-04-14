export default function RaceList(state = [], action){
  switch (action.type) {
    case 'ADD_RACE':
      return [...state, action.payload]
    case 'REMOVE_RACE':
      return state.filter(race => race.id !== action.id)
    default:
      return state;
  }
}
