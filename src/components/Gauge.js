import { Gauge } from 'gauge.js'
import React, { Component } from 'react'

export default class GaugeComponent extends Component {
  componentDidMount() {
    const opts = {
      angle: -0.5,
      lineWidth: 0.0,
      pointer: {
        length: 0.5,
        strokeWidth: 0.035,
        color: '#000000'
      },
      colorStart: '#6FADCF',
      colorStop: '#8FC0DA',
      radiusScale: 0.75,
      highDpiSupport: true
    };
    var target = document.getElementById('foo');
console.log('создали')
    this.gauge = new Gauge(target).setOptions(opts);
    
     
  }

  render() {
    if(this.gauge)
    {
      this.gauge.minValue = this.props.minValue;
      this.gauge.maxValue = this.props.maxValue;
      this.gauge.set(this.props.speedValue);
    }
    console.log(this.props)
    console.log('рендерим')
    return <canvas id="foo" ></canvas>
  }
}