import React, { Component } from 'react'

export class ICommonChart extends Component {

    getValue() {
        return this.props.value
    }

    getMinValue() {
        return this.props.minValue
    }

    getMaxValue() {
        return this.props.maxValue
    }

    getTwentyPercent() {
        return Math.round((this.props.maxValue - this.props.minValue) / 5 + this.props.minValue)
    }

    getFortyPercent() {
        return Math.round((this.props.maxValue - this.props.minValue) / 2.5 + this.props.minValue)
    }

    getSixtyPercent() {
        return Math.round((this.props.maxValue - this.props.minValue) / (5 / 3) + this.props.minValue)
    }

    getEightyPercent() {
        return Math.round((this.props.maxValue - this.props.minValue) / 1.25 + this.props.minValue)
    }

    render() {

    }
}