import axios from 'axios'

export const fetchResults = (raceId) => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: `http://localhost:3001/v1/races/${raceId}/results`,
    }).then(resp => {
      dispatch({type: 'SET_RESULTS', payload: resp.data.results})
    })
  }
}

export const resetResults = () => ({
	type: 'RESET_RESULTS'
})