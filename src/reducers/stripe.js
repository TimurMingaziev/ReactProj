import HighchartsMore from 'highcharts-more';
import Highcharts from 'highcharts';
import SolidGauge from 'highcharts/modules/solid-gauge';
import ReactHighcharts from 'react-highcharts/bundle/ReactHighcharts'

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
            min: 100,
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
        }],
        pane: {
            center: ['50%', '50%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                innerRadius: '50%',
                outerRadius: '50%',
                shape: 'arc'
            }
        }
    }
}

export default function speedometer(state = initialState) {
   
            return state;
    
}
