import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as speedometerActions from '../actions/SpeedometerActions'

import GaugeComponent from '../components/Gauge'
import StripeComponent from '../components/Stripe'

class Page extends Component {
  componentDidMount() {
    this.refreshIntervalId = this.runTimer()
  }

  componentWillUnmount() {
    clearInterval(this.refreshIntervalId)
  }

  onChangeMinSpeedValue(e) {
    let value = e.target.value
    if (value >= 0 && value < this.props.speedometer.maxSpeed)
      this.props.speedometerActions.setMinSpeed(+value)
  }

  onChangeMaxSpeedValue(e) {
    let value = e.target.value
    if (value >= 0 && value.length <= 7)
      if (value > this.props.speedometer.minSpeed)
        this.props.speedometerActions.setMaxSpeed(+value)
      else
        this.props.speedometerActions.setMaxSpeed(+this.props.speedometer.minSpeed + 1)
  }

  runTimer() {
    return setInterval(this.timer.bind(this), 3000)
  }

  timer() {
    let randomSpeed = Math.floor((Math.random() * (this.props.speedometer.maxSpeed - this.props.speedometer.minSpeed)) + this.props.speedometer.minSpeed)
    this.props.speedometerActions.setSpeed(randomSpeed)
  }

  render() {
    return <div>
      <table>
        <tbody>
          <tr>
            <td>Speed:</td>
            <td><input type="number" value={this.props.speedometer.speedValue} /></td>
          </tr>
          <tr>
            <td>Min speed value:</td>
            <td><input type="number" onChange={this.onChangeMinSpeedValue.bind(this)} value={this.props.speedometer.minSpeed} /></td>
          </tr>
          <tr>
            <td>Max speed value:</td>
            <td><input type="number" onChange={this.onChangeMaxSpeedValue.bind(this)} value={this.props.speedometer.maxSpeed} />
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ position: 'relative', width: '500px', height: '100px' }}>
        <StripeComponent value={this.props.speedometer.speedValue} minValue={this.props.speedometer.minSpeed} maxValue={this.props.speedometer.maxSpeed} />
        <GaugeComponent value={this.props.speedometer.speedValue} minValue={this.props.speedometer.minSpeed} maxValue={this.props.speedometer.maxSpeed} />
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    speedometer: state.speedometer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    speedometerActions: bindActionCreators(speedometerActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)