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

    render() {
        return <div>
            <h3> Line </h3>

            <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '23px' }}>
                {this.getMinValue()}
                <div style={{ position: 'relative' }}>|</div>
            </div>

            <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '23px', left: '100' }}>
                {this.getTwentyPercent()}
                <div style={{ position: 'relative' }}>|</div>
            </div>

            <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '23px', left: '200' }}>
                {this.getFortyPercent()}
                <div style={{ position: 'relative' }}>|</div>
            </div>

            <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '23px', left: '300' }}>
                {this.getSixtyPercent()}
                <div style={{ position: 'relative' }}>|</div>
            </div>

            <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '23px', left: '400' }}>
                {this.getEightyPercent()}
                <div style={{ position: 'relative' }}>|</div>
            </div>

            <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '23px', left: '500' }}>
                {this.getMaxValue()}
                <div style={{ position: 'relative' }}>|</div>
            </div>

            <Line
                percent={this.stripeValue()}
                strokeWidth="1"
                strokeColor="#7cb5ec" />
        </div>
    }
}