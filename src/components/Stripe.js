import React, { Component } from 'react'
import { Line } from 'rc-progress';

export default class StripeComponent extends Component{
    
	render(){
		return <Line
                    percent={this.props.percent}
                    strokeWidth={this.props.strokeWidth}
                    strokeColor={this.props.strokeColor} />
	
    }
}
