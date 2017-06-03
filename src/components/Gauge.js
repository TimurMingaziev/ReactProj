import React from 'react'
import { Gauge } from 'gauge.js'
import { connect } from 'react-redux'

import { options } from '../constants/Speedometer'
import { ICommonChart } from '../interfaces/ICommonChart'

class GaugeComponent extends ICommonChart {
  componentDidMount() {
    var target = this.refs.foo
    this.gauge = new Gauge(target).setOptions(options)
    this.gauge.minValue = this.props.speedometer.minSpeed
    this.gauge.maxValue = this.props.speedometer.maxSpeed
    this.gauge.set(this.props.speedometer.speedValue)
  }

  render() {
    super.render()
    if (this.gauge) {
      this.gauge.minValue = this.props.speedometer.minSpeed
      this.gauge.maxValue = this.props.speedometer.maxSpeed
      this.gauge.set(this.value)
    }

    return <div>
      Min value = {this.props.speedometer.minSpeed}
      <center>
      <canvas ref="foo" ></canvas>
      </center>
      Max value = {this.props.speedometer.maxSpeed}
    </div>
  }
}

function mapStateToProps(state) {
  return {
    speedometer: state.speedometer
  }
}

export default connect(mapStateToProps, null)(GaugeComponent)
