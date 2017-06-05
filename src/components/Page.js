import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as speedometerActions from '../actions/SpeedometerActions'
import * as stripeActions from '../actions/StripeActions'

import GaugeComponent from '../components/Gauge'
import StripeComponent from '../components/Stripe'

let refreshIntervalId = {}

class Page extends Component {

  onChangeSpeed(e) {
    let value = e.target.value
    if (value <= this.props.speedometer.maxSpeed && value >= this.props.speedometer.minSpeed)
      this.props.speedometerActions.setSpeed(+e.target.value)
  }

  onChangeCPU(e) {
    let value = e.target.value
    if (value <= 100 && value >= 0)
      this.props.stripeActions.setCPU(+value)
  }

  onChangeMinSpeedValue(e) {
    let value = e.target.value
    if (value >= 0 && value < this.props.speedometer.maxSpeed)
      this.props.speedometerActions.setMinSpeed(+value)
  }

  onChangeMaxSpeedValue(e) {
    let value = e.target.value
    if (value > 0)
      this.props.speedometerActions.setMaxSpeed(+value)
  }

  runTimer(e) {
    if (e.target.checked)
      refreshIntervalId = setInterval(this.timer.bind(this), 3000)
    else clearInterval(refreshIntervalId)
  }

  timer() {
    let randomSpeed = Math.floor((Math.random() * this.props.speedometer.maxSpeed - this.props.speedometer.minSpeed))
    let randomCpu = Math.floor((Math.random() * 100))
    // this.props.stripeActions.setCPU(randomCpu)
    this.props.speedometerActions.setSpeed(randomSpeed)
  }

  stripeValue(){
    let range = this.props.speedometer.maxSpeed - this.props.speedometer.minSpeed
    let value = this.props.speedometer.speedValue - this.props.speedometer.minSpeed
    let percent = value * 100 / range
    return percent
  }

  render() {
    return <div>
      <table>
        <tbody>
          <tr>
            <td>Speed:</td>
            <td><input type="number" onChange={this.onChangeSpeed.bind(this)} value={this.props.speedometer.speedValue} /></td>
          </tr>
          <tr>
            <td>CPU usage:</td>
            <td><input type="number" ref="CPU" onChange={this.onChangeCPU.bind(this)} value={this.props.stripe.percent} /></td>
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
      <label htmlFor="name">
        Run Large Hadron Collider:
         <input type="checkbox" name="name" onChange={this.runTimer.bind(this)} />
      </label>


      <div style={{ position: 'absolute', width: '500px', height: '100px'}}>

        <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '42px' }}>
          {this.props.speedometer.minSpeed}
          <div style={{ position: 'relative' }}>|</div>
        </div>

        <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '42px', left:'100' }}>
          {this.props.speedometer.maxSpeed / 5 }
          <div style={{ position: 'relative' }}>|</div>
        </div>

        <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '42px', left:'200' }}>
          {this.props.speedometer.maxSpeed / 2.5 }
          <div style={{ position: 'relative' }}>|</div>
        </div>

        <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '42px', left:'300' }}>
          {Math.round(this.props.speedometer.maxSpeed / 1.666666666666667) }
          <div style={{ position: 'relative' }}>|</div>
        </div>

        <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '42px', left:'400' }}>
           {Math.round(this.props.speedometer.maxSpeed / 1.25) }
          <div style={{ position: 'relative' }}>|</div>
        </div>

        <div style={{ position: 'absolute', width: 'auto', height: '30px', top: '42px', left:'500' }}>
          {this.props.speedometer.maxSpeed}
          <div style={{ position: 'relative'}}>|</div>
        </div>

        <StripeComponent value={this.stripeValue()} />
        <GaugeComponent value={this.props.speedometer.speedValue} />
      </div>
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