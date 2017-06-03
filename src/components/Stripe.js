import React from 'react'
import { Line } from 'rc-progress'
import { connect } from 'react-redux'
import { ICommonChart } from '../interfaces/ICommonChart'

class StripeComponent extends ICommonChart {
    render() {
        return <Line
            percent={this.props.stripe.percent}
            strokeWidth="1"
            strokeColor="#7cb5ec" />
    }
}

function mapStateToProps(state) {
    return {
        stripe: state.stripe
    }
}

export default connect(mapStateToProps, null)(StripeComponent)