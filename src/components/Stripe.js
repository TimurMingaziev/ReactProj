import React from 'react'
import { Line } from 'rc-progress'
import { connect } from 'react-redux'
import { ICommonChart } from '../interfaces/ICommonChart'

export default class StripeComponent extends ICommonChart {
    stripeValue() {
        let range = this.getMaxValue() - this.getMinValue()
        let value = this.getValue() - this.getMinValue()
        let percent = value * 100 / range
        return percent
    }

    drawLabels() {
        let leftAttribute = -102
        return this.getLabels().map((value, index) =>
            <div key={index} style={{ position: 'absolute', width: 'auto', height: '30px', top: '23px', left: leftAttribute += 100 }}>
                {value}
                <div style={{ position: 'relative' }}>|</div>
            </div>
        )
    }

    render() {
        return <div>
            <h3> Line </h3>
            {this.drawLabels()}
            <Line
                percent={this.stripeValue()}
                strokeWidth="1"
                strokeColor="#7cb5ec" />
        </div>
    }
}