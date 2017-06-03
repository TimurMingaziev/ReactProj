import React from 'react'
import { Line } from 'rc-progress'
import { connect } from 'react-redux'
import { ICommonChart } from '../interfaces/ICommonChart'

export default class StripeComponent extends ICommonChart {
    render() {
        super.render()
        return <Line
            percent={this.value}
            strokeWidth="1"
            strokeColor="#7cb5ec" />
    }
}