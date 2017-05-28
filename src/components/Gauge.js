import { Gauge } from 'gauge.js'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { options } from '../constants/Speedometer'

class GaugeComponent extends Component {
  componentDidMount() {
    var target = this.refs.foo
    this.gauge = new Gauge(target).setOptions(options)
    this.gauge.minValue = this.props.speedometer.minSpeed
    this.gauge.maxValue = this.props.speedometer.maxSpeed
    this.gauge.set(this.props.speedometer.speedValue)
  }

  render() {
    if (this.gauge) {
      this.gauge.minValue = this.props.speedometer.minSpeed
      this.gauge.maxValue = this.props.speedometer.maxSpeed
      this.gauge.set(this.props.speedometer.speedValue)
    }

    return <div>
      Min value = {this.props.speedometer.minSpeed}
      <canvas ref="foo" ></canvas>
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
