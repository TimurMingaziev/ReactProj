import React, { Component } from 'react'
import { Line } from 'rc-progress';
import { connect } from 'react-redux'

class StripeComponent extends Component {
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