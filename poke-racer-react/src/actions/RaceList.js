export const addRace = (race) => {
  return {
    type: 'ADD_RACE',
    payload: race
  }
}

export const removeRace = (id) => {
  return {
    type: 'REMOVE_RACE',
    id
  }
}
