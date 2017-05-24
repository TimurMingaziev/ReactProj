import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../components/Page'
import GaugeComponent from '../components/Gauge'

import * as speedActions from '../actions/SpeedometerActions'
import * as stripeActions from '../actions/StripeActions'

import { Line } from 'rc-progress';

class App extends Component {
    render() {
        const { page, stripe } = this.props
        const { setSpeed, setMaxSpeed, setMinSpeed } = this.props.speedActions
        const { setCPU } = this.props.stripeActions
        const divStyle = {
            color: 'blue'
        };
        return <div>
           <div><Page speed={page.speed} setSpeed={setSpeed} setCPU={setCPU} setMinSpeed={setMinSpeed} setMaxSpeed={setMaxSpeed} />
            <Line percent={stripe.percent} strokeWidth={stripe.strokeWidth} strokeColor={stripe.strokeColor} /></div>
            <div style = {divStyle}><GaugeComponent value="1500" minValue = "0" maxValue ="3000" /></div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        page: state.page,
        speedometer: state.speedometer,
        stripe: state.stripe
    }
}

function mapDispatchToProps(dispatch) {
    return {
        speedActions: bindActionCreators(speedActions, dispatch),
        stripeActions: bindActionCreators(stripeActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
