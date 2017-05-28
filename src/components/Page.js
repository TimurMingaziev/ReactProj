import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as speedometerActions from '../actions/SpeedometerActions'
import * as stripeActions from '../actions/StripeActions'

var refreshIntervalId = {}
class Page extends Component {

  //Надо было юзать submit :) 
  onChangeSpeed(e) {
    let value = e.target.value

    if (!isFinite(value))
      return
    this.props.speedometerActions.setSpeed(+e.target.value)
  }

  onChangeCPU(e) {
    let value = e.target.value

    if (!isFinite(value) || value > 100 || value < 0)
      return
    this.props.stripeActions.setCPU(+value)
  }

  onChangeMinSpeedValue(e) {
    let value = e.target.value
    if (!isFinite(value) || value < 0 || value >= this.props.speedometer.maxSpeed)
      return
    this.props.speedometerActions.setMinSpeed(+value)
  }

  onChangeMaxSpeedValue(e) {
    let value = e.target.value
    if (!isFinite(value) || value <= 0)
      return
    this.props.speedometerActions.setMaxSpeed(+value)
  }

  runTimer(e) {
    if (e.target.checked == true)
      refreshIntervalId = setInterval(this.timer.bind(this), 3000)
    else clearInterval(refreshIntervalId)
  }

  timer() {
    console.log(this.props)
    this.props.stripeActions.setCPU(Math.floor((Math.random() * 100)))
    this.props.speedometerActions.setSpeed(Math.floor((Math.random() * this.props.speedometer.maxSpeed - this.props.speedometer.minSpeed)))
  }

  render() {
    return <div>
      <table>
        <tbody>
          <tr>
            <td>Speed:</td>
            <td><textarea onChange={this.onChangeSpeed.bind(this)} value={this.props.speedometer.speedValue} /></td>
          </tr>
          <tr>
            <td>CPU usage:</td>
            <td><textarea ref="CPU" onChange={this.onChangeCPU.bind(this)} value={this.props.stripe.percent} /></td>
          </tr>
          <tr>
            <td>Min speed value:</td>
            <td><textarea onChange={this.onChangeMinSpeedValue.bind(this)} value={this.props.speedometer.minSpeed} /></td>
          </tr>
          <tr>
            <td>Max speed value:</td>
            <td><textarea onChange={this.onChangeMaxSpeedValue.bind(this)} value={this.props.speedometer.maxSpeed} />
            </td>
          </tr>
        </tbody>
      </table>
      <label htmlFor="name">
        Run Large Hadron Collider:
         <input type="checkbox" name="name" onChange={this.runTimer.bind(this)} />
      </label>

    </div>
  }
}

function mapStateToProps(state) {
  return {
    speedometer: state.speedometer,
    stripe: state.stripe
  }
}

function mapDispatchToProps(dispatch) {
  return {
    speedometerActions: bindActionCreators(speedometerActions, dispatch),
    stripeActions: bindActionCreators(stripeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)