import React, { Component } from 'react'

import Page from '../components/Page'
import GaugeComponent from '../components/Gauge'
import StripeComponent from '../components/Stripe'

export default class App extends Component {
    render() {
        return <div>
            <Page />
            <StripeComponent />
            <GaugeComponent />
        </div>
    }
}
