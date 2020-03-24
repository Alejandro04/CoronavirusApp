import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Typography from '@material-ui/core/Typography';
import Fragment from 'render-fragment';

const chartStyle = {
    margin: 'auto',
    marginTop: '60px',
}

const leyend = {
    marginTop: '20px'
}

export default class Charts extends PureComponent {
    render() {
        const { chartsConfirmed } = this.props
        let cases = []
        if (chartsConfirmed !== undefined) {
            if (chartsConfirmed.data !== undefined) {
                chartsConfirmed.data.forEach(element => {
                    cases.push({
                        name: element.Date.substr(0, 10), confirmed: element.Cases
                    })
                });
            }
        }
        return (
            <Fragment>
                <LineChart
                    width={700}
                    height={300}
                    data={cases}
                    margin={{
                        top: 1, right: 30, left: 0, bottom: 0,
                    }}
                    style={chartStyle}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend style={leyend} />
                    <Line type="monotone" dataKey="confirmed" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </Fragment>
        );
    }
}