import { Gauge } from 'gauge.js'
import React, { Component } from 'react'

export default class GaugeComponent extends Component{
	componentDidMount() {
    const opts = {
        angle: -0.5,
        lineWidth: 0.0,
        pointer: {
          length: 0.5,
          strokeWidth: 0.035,
          color: '#000000'
        },
          colorStart: '#6FADCF',   // Colors
           colorStop: '#8FC0DA', 
           radiusScale: 0.75,
        highDpiSupport: true
    };
	var target = document.getElementById('foo');
	var gauge = new Gauge(target).setOptions(opts);
    gauge.minValue = this.props.minValue;
    gauge.maxValue = this.props.maxValue;
    gauge.set(this.props.value);
  }
	render(){
		return <canvas id="foo"></canvas>
	}
}