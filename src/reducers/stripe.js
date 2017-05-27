import { SET_CPU } from '../constants/Stripe'


const initialState = {
    percent: 50,
    strokeWidth: 1,
    strokeColor: '#7cb5ec'
}

export default function stripe(state = initialState, action) {
    switch (action.type) {
        case SET_CPU:
            return { ...state, percent: action.payload }

        default:
            return state;
    }
}