import { SET_SPEED } from '../constants/Speedometer'

export function setSpeed(speed) {
  return {
    type: SET_SPEED,
    payload: speed
  }
}
