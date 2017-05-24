import React, { Component } from 'react'
import { validateMinMaxValue } from '../services/validationService'

var { minValue, maxValue } = 0;

export default class Page extends Component {
  onChangeSpeed(e) {
    if (e.target.value >= minValue && e.target.value <= maxValue)
      this.props.setSpeed(+e.target.value)
  }

  onChangeCPU(e) {
    this.props.setCPU(+e.target.value)
  }

  onChangeMinSpeedValue(e) {
    minValue = e.target.value
    let isValidated = validateMinMaxValue(parseInt(minValue), parseInt(maxValue))
    if (isValidated)
      this.props.setMinSpeed(+e.target.value)
  }

  onChangeMaxSpeedValue(e) {
    maxValue = e.target.value
    let isValidated = validateMinMaxValue(parseInt(minValue), parseInt(maxValue))
    if (isValidated)
      this.props.setMaxSpeed(+e.target.value)
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
    </div>
  }
}