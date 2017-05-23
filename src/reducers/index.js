import { combineReducers } from 'redux'
import page from './page'
import speedometer from './speedometer'
import stripe from './stripe'

export default combineReducers({
  page,
  speedometer,
  stripe
})
