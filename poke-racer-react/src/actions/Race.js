import axios from 'axios'

export const fetchResults = (raceId) => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: `http://localhost:3001/v1/races/${raceId}/results`,
    }).then(resp => {
      // dispatch({type: 'ADD_RACE', payload: resp.data})
      debugger
    })
  }
}