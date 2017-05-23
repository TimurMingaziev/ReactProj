import HighchartsMore from 'highcharts-more';
import Highcharts from 'highcharts';
import SolidGauge from 'highcharts/modules/solid-gauge';
import ReactHighcharts from 'react-highcharts/bundle/ReactHighcharts'

import { SET_MAX_SPEED } from '../constants/Speedometer'
import { SET_MIN_SPEED } from '../constants/Speedometer'
import { SET_SPEED } from '../constants/Speedometer'

HighchartsMore(ReactHighcharts.Highcharts);
SolidGauge(ReactHighcharts.Highcharts);

const initialState = {
    config: {
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
            data: [0],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                '<span style="font-size:12px;color:silver">km/h</span></div>'
            }
        }],
        pane: {
            center: ['50%', '50%'],
            size: '100%',
            startAngle: 0,
            endAngle: 360,
            background: {
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        }
    }
}

export default function speedometer(state = initialState, action) {
    switch (action.type) {
        case SET_SPEED:
            {
                state.config.series[0].data = [action.payload];
                return { ...state }
            }

        case SET_MAX_SPEED:
            {
                state.config.yAxis.max = [action.payload];
                return { ...state }
            }

        case SET_MIN_SPEED:
            {
                state.config.yAxis.min = [action.payload];
                return { ...state }
            }

        default:
            return state;
    }
}