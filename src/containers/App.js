import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../components/Page'
import * as speedActions from '../actions/SpeedometerActions'
import ReactHighcharts from 'react-highcharts/bundle/ReactHighcharts'


class App extends Component {
    render() {
        const { page, speedometer, stripe } = this.props
        const { setSpeed } = this.props.speedActions
        return <div>
            <Page photos={page.photos} speed={page.speed} setSpeed={setSpeed}/>
            <ReactHighcharts config={speedometer.config} />
            <ReactHighcharts config={stripe.config} />
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
        speedActions: bindActionCreators(speedActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
