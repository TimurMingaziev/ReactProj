import React, { Component } from 'react'

export class ICommonChart extends Component {

    getValue() {
        return this.props.value
    }

    getLabels(){
       return [
            this.props.minValue,
            Math.round((this.props.maxValue - this.props.minValue) / 5 + this.props.minValue),
            Math.round((this.props.maxValue - this.props.minValue) / 2.5 + this.props.minValue),
            Math.round((this.props.maxValue - this.props.minValue) / (5 / 3) + this.props.minValue),
            Math.round((this.props.maxValue - this.props.minValue) / 1.25 + this.props.minValue),
            this.props.maxValue
        ]
    }

    getMinValue() {
        return this.props.minValue
    }

    getMaxValue() {
        return this.props.maxValue
    }

    render() {

    }
}