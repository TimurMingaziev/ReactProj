import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'
import ReactHighcharts from 'react-highcharts/bundle/ReactHighcharts'
var HighchartsMore = require('highcharts-more');
var Highcharts = require('highcharts');
const SolidGauge = require('highcharts/modules/solid-gauge');
HighchartsMore(ReactHighcharts.Highcharts);
SolidGauge(ReactHighcharts.Highcharts);

class App extends Component {

  render() {
    const { user, page } = this.props
    const { setYear } = this.props.pageActions

    const config = {
    chart: {
        type: 'solidgauge'
    },
    credits: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },    
    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    },
    yAxis: {
        min: 0,
        max: 200,
        title: {
            text: 'Speed'
        }
    },

    series: [{
        name: 'Speed',
        data: [80],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                   '<span style="font-size:12px;color:silver">km/h</span></div>'
        },
        tooltip: {
            valueSuffix: ' km/h'
        }
    }]
  }

    return <div>
      <User name={user.name} />
      <Page photos={page.photos} year={page.year} setYear={setYear} />
          <ReactHighcharts config = {config} />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
