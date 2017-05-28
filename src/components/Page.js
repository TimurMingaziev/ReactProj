import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as speedometerActions from '../actions/SpeedometerActions'
import * as stripeActions from '../actions/StripeActions'

class Page extends Component {

  onChangeSpeed(e) {
    this.props.speedometerActions.setSpeed(+e.target.value)
  }

  onChangeCPU(e) {
    this.props.stripeActions.setCPU(+e.target.value)
  }

  onChangeMinSpeedValue(e) {
    this.props.speedometerActions.setMinSpeed(+e.target.value)
  }

  onChangeMaxSpeedValue(e) {
    this.props.speedometerActions.setMaxSpeed(+e.target.value)
  }

  runTimer(e) {
    console.log(e.target.checked);
    if (e.target.checked == true)
      setInterval(this.timer, 1000)

  }
  timer() {
    console.log(this);
  }

  render() {
    return <div>
      <table>
        <tbody>
          <tr>
            <td>Speed:</td>
            <td><textarea onChange={this.onChangeSpeed.bind(this)} /></td>
          </tr>
          <tr>
            <td>CPU usage:</td>
            <td><textarea onChange={this.onChangeCPU.bind(this)} /></td>
          </tr>
          <tr>
            <td>Min speed value:</td>
            <td><textarea onChange={this.onChangeMinSpeedValue.bind(this)} /></td>
          </tr>
          <tr>
            <td>Max speed value:</td>
            <td><textarea onChange={this.onChangeMaxSpeedValue.bind(this)} /></td>
          </tr>
        </tbody>
      </table>
      <input type="checkbox" onChange={this.runTimer.bind(this)}> Run Large Hadron Collider </input>
    </div>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    speedometerActions: bindActionCreators(speedometerActions, dispatch),
    stripeActions: bindActionCreators(stripeActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Page)