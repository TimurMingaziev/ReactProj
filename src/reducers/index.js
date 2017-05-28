import { combineReducers } from 'redux'
import speedometer from './speedometer'
import stripe from './stripe'

export default combineReducers({
  speedometer,
  stripe
})