import React from 'react'
import { Gauge } from 'gauge.js'
import { connect } from 'react-redux'

import { options } from '../constants/Speedometer'
import { ICommonChart } from '../interfaces/ICommonChart'

class GaugeComponent extends ICommonChart {
  componentDidMount() {
    this.gauge = new Gauge(this.refs.foo).setOptions(options)
    this.gauge.minValue = this.getMinValue()
    this.gauge.maxValue = this.getMaxValue()
    this.gauge.set(this.getValue())
  }

  componentDidUpdate(){
      this.gauge.options.staticLabels.labels = this.getLabels()
      this.gauge.minValue = this.getMinValue()
      this.gauge.maxValue = this.getMaxValue()
      this.gauge.set(this.getValue())
  }

  render() {
    return <div>
      <h3>Circle</h3>
      <canvas ref="foo" ></canvas>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    speedometer: state.speedometer
  }
}

export default connect(mapStateToProps, null)(GaugeComponent)
