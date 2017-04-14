import { combineReducers } from 'redux'
import Account from './Account'
import RaceList from './RaceList'
import Race from './Race'
import Results from './Results'

export default combineReducers({
  Account,
  Race,
  Results,
  RaceList
})
