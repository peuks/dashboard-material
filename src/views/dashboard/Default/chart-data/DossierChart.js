// ===========================|| WIDGET - REVENUE CHART ||=========================== //

import { color } from '@material-ui/core/node_modules/@material-ui/system';

const chartData = {
    height: 220,
    type: 'radialBar',

    series: [75],

    options: {
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '55%'
                }
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    show: false,
                    color: '#888',
                    fontSize: '40px'
                },
                value: {
                    color: '#111',
                    fontSize: '80px',
                    show: false
                }
            }
        },
        // stroke: {
        //     show: true,
        //     curve: 'smooth',
        //     lineCap: 'butt',
        //     colors: undefined,
        //     width: 0,
        //     dashArray: 0
        // },
        fill: {
            colors: ['#0B3D91']
        },
        labels: ['Hello'],
        title: {
            text: '75 %',
            align: 'center',
            offsetY: 80,
            style: {
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#263238'
            }
        }
    }
};
export default chartData;
