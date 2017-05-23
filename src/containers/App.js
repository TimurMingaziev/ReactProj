import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../components/Page'
import * as speedActions from '../actions/SpeedometerActions'
import * as stripeActions from '../actions/StripeActions'
import ReactHighcharts from 'react-highcharts/bundle/ReactHighcharts'

import { Line } from 'rc-progress';

class App extends Component {
    render() {
        const { page, speedometer, stripe} = this.props
        const { setSpeed } = this.props.speedActions
        const { setCPU } = this.props.stripeActions
        const { setMaxSpeed } = this.props.speedActions
        const { setMinSpeed } = this.props.speedActions
        
        return <div>
            <Page speed={page.speed} setSpeed={setSpeed} setCPU={setCPU} setMinSpeed={setMinSpeed} setMaxSpeed={setMaxSpeed}/>
            <ReactHighcharts config={speedometer.config} />
            <Line percent={stripe.percent} strokeWidth={stripe.strokeWidth} strokeColor={stripe.strokeColor} gapPosition="top" />
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
