import React, { Component } from 'react'

export default class Page extends Component {
  onChangeSpeed(e) {
    this.props.setSpeed(+e.target.value)
  }
  render() {
    return <div>
      <div>
        <label>
          Speed: 
          <textarea onChange={this.onChangeSpeed.bind(this)} />
        </label>
      </div>
    </div>
  }
}

