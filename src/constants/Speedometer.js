export const SET_SPEED = 'SET_SPEED'
export const SET_MAX_SPEED = 'SET_MAX_SPEED'
export const SET_MIN_SPEED = 'SET_MIN_SPEED'

export const options = {
    angle: -0.5,
    lineWidth: 0.0,
    pointer: {
        length: 0.5,
        strokeWidth: 0.035,
        color: '#000000'
    },
    colorStart: '#6FADCF',
    colorStop: '#8FC0DA',
    radiusScale: 0.75,
    highDpiSupport: true,
    generateGradient: true,
    staticLabels: {
        font: '10px sans-serif',  // Specifies font
        labels: [0, 50, 100],  // Print labels at these values
        color: '#000000',  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
    }
}