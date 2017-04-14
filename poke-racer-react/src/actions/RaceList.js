import axios from 'axios'

export const addRace = (race, token) => {
  return (dispatch) => {
    axios({
      method:'post',
      url:'http://localhost:3001/v1/races',
      headers: {'bearer': token},
      data: {race: {title: race.name}}
    }).then(resp => {
      dispatch({type: 'ADD_RACE', payload: resp.data})
    })
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
  .then((races) => {
    dispatch({type: 'GET_RACES', payload: races})
  })
}
}
