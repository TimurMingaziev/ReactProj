import { SET_CPU } from '../constants/Stripe'

export function setCPU(cpu) {
  return {
    type: SET_CPU,
    payload: cpu
  }
}