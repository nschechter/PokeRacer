export const addRace = (race) => {
  let request = new Request('http://localhost:3001/v1/races', {
	method: 'POST',
	})
  return fetch(request)
  .then(response => response.json())
  .then(race => dispatch({type: 'ADD_RACE', payload: race}))
}

export const removeRace = (id) => {
  return {
    type: 'REMOVE_RACE',
    id
  }
}
