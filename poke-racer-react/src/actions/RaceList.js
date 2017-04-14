// import { dispatch } from 'redux'

export const addRace = (race, token) => {
  return (dispatch) => {
    let request = new Request('http://localhost:3001/v1/races', {
      method: 'POST',
      headers: new Headers({"bearer": token})
    })
    fetch(request)
      .then(response => response.json())
      .then(race => dispatch({type: 'ADD_RACE', payload: race}))
  }
}

export const removeRace = (id) => {
  return {
    type: 'REMOVE_RACE',
    id
  }
}

export const getActiveRaces = () => {
  return (dispatch) => {
  return fetch('http://localhost:3001/v1/races/active')
  .then(response => response.json())
  .then(races => dispatch({type: 'GET_RACES', payload: races}))
}
}
