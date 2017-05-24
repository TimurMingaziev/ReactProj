import { SET_MAX_SPEED } from '../constants/Speedometer'
import { SET_MIN_SPEED } from '../constants/Speedometer'
import { SET_SPEED } from '../constants/Speedometer'

const initialState = {
    speed: 0,
    minSpeed: 0,
    maxSpeed: 0
}

export default function speedometer(state = initialState, action) {
    switch (action.type) {
        case SET_SPEED:
                return { ...state, speed: action.payload}

        case SET_MAX_SPEED:
                return { ...state, maxSpeed: action.payload }

        case SET_MIN_SPEED:
                return { ...state, minSpeed: action.payload }

        default:
            return state;
    }
}
