import React from 'react'
import { Gauge } from 'gauge.js'
import { connect } from 'react-redux'

import { options } from '../constants/Speedometer'
import { ICommonChart } from '../interfaces/ICommonChart'

class GaugeComponent extends ICommonChart {
  componentDidMount() {
    this.gauge = new Gauge(this.refs.foo).setOptions(options)
    this.gauge.minValue = this.props.speedometer.minSpeed
    this.gauge.maxValue = this.props.speedometer.maxSpeed
    this.gauge.set(this.props.speedometer.speedValue)
  }

  render() {
    super.render()
    if (this.gauge) {
      this.gauge.options.staticLabels.labels = [
        this.props.speedometer.minSpeed,
        Math.round(this.props.speedometer.maxSpeed / 5),
        Math.round(this.props.speedometer.maxSpeed / 2.5),
        Math.round(this.props.speedometer.maxSpeed / 1.666666666666667),
        Math.round(this.props.speedometer.maxSpeed / 1.25),
        this.props.speedometer.maxSpeed
        ]
        
      this.gauge.minValue = this.props.speedometer.minSpeed
      this.gauge.maxValue = this.props.speedometer.maxSpeed
      this.gauge.set(this.value)
    }

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
