export const addParticipant = (participant) => {
  return {
    type: 'ADD_PARTICIPANT',
    payload: participant
  }
}

export const removeParticipant = (id) => {
  return {
    type: 'REMOVE_PARTICIPANT',
    id
  }
}
