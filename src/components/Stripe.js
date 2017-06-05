import React from 'react'
import { Line } from 'rc-progress'
import { connect } from 'react-redux'
import { ICommonChart } from '../interfaces/ICommonChart'

export default class StripeComponent extends ICommonChart {
  render() {
    super.render()
    return <div>
      <h3> Line </h3>
      <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '42px' }}>
        {this.minValue}
        <div style={{ position: 'relative' }}>|</div>
      </div>

      <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '42px', left: '100' }}>
        {Math.round((this.maxValue - this.minValue) / 5 + this.minValue)}
        <div style={{ position: 'relative' }}>|</div>
      </div>

      <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '42px', left: '200' }}>
        {Math.round((this.maxValue - this.minValue) / 2.5 + this.minValue)}
        <div style={{ position: 'relative' }}>|</div>
      </div>

      <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '42px', left: '300' }}>
        {Math.round((this.minValue - this.minValue) / 1.666666666666667 + this.minValue)}
        <div style={{ position: 'relative' }}>|</div>
      </div>

      <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '42px', left: '400' }}>
        {Math.round((this.maxValue - this.minValue) / 1.25 + this.minValue)}
        <div style={{ position: 'relative' }}>|</div>
      </div>

      <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '42px', left: '500' }}>
        {this.maxValue}
        <div style={{ position: 'relative' }}>|</div>
      </div>
      <Line
        percent={this.value}
        strokeWidth="1"
        strokeColor="#7cb5ec" />
    </div>
  }
}