import { SET_SPEED } from '../constants/Speedometer'
import { SET_MAX_SPEED } from '../constants/Speedometer'
import { SET_MIN_SPEED } from '../constants/Speedometer'

export function setSpeed(speed) {
  return {
    type: SET_SPEED,
    payload: speed
  }
}

export function setMaxSpeed(speed) {
  return {
    type: SET_MAX_SPEED,
    payload: speed
  }
}

export function setMinSpeed(speed) {
  return {
    type: SET_MIN_SPEED,
    payload: speed
  }
}