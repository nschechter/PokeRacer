export default function RaceResults(state = [], action){
  switch (action.type) {
  	case "SET_RESULTS":
  		return action.payload
		break
		case "RESET_RESULTS":
			return []
		break
  	default:
  		return state
  	break
  }
}
