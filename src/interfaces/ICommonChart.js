import React from 'react'

export class ICommonChart extends React.Component {

    render() {
        this.value = this.props.value
        this.minValue = this.props.minValue
        this.maxValue = this.props.maxValue
    }
}