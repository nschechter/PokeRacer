import { combineReducers } from 'redux'
import Account from './Account'
import RaceList from './RaceList'
import Race from './Race'
import RaceResults from './RaceResults'

export default combineReducers({
  Account,
  Race,
  RaceResults,
  RaceList
})
