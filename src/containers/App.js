import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../components/Page'
import GaugeComponent from '../components/Gauge'
import StripeComponent from '../components/Stripe'

import * as speedometerActions from '../actions/SpeedometerActions'
import * as stripeActions from '../actions/StripeActions'

class App extends Component {
    render() {
        const { page, stripe, speedometer } = this.props
        const { setSpeed, setMaxSpeed, setMinSpeed } = this.props.speedometerActions
        const { setCPU } = this.props.stripeActions

        return <div>
            <div>
                <Page
                    speed={page.speed}
                    setSpeed={setSpeed}
                    setCPU={setCPU}
                    setMinSpeed={setMinSpeed}
                    setMaxSpeed={setMaxSpeed} />
                <StripeComponent
                    percent={stripe.percent}
                    strokeWidth={stripe.strokeWidth}
                    strokeColor={stripe.strokeColor} />
            </div>

            <GaugeComponent
                speedValue={speedometer.speedValue}
                minValue={speedometer.minSpeed}
                maxValue={speedometer.maxSpeed} />

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
        speedometerActions: bindActionCreators(speedometerActions, dispatch),
        stripeActions: bindActionCreators(stripeActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
