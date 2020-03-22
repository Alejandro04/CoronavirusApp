
import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Fragment from 'render-fragment';

const data = [
    {
        name: 'Dia 1', confirmed: 2, recovered: 0, death: 0,
    },
    {
        name: 'Dia 2', confirmed: 8, recovered: 1, death: 0,
    },
    {
        name: 'Dia 3', confirmed: 15, recovered: 5, death: 0,
    },
    {
        name: 'Dia 4', confirmed: 20, recovered: 8, death: 0,
    }
];

const chartStyle = {
    margin: 'auto'
}

export default class Charts extends PureComponent {

    render() {
        return (
            <Fragment>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                    style={chartStyle}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="confirmed" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="recovered" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="death" stroke="red" />
                </LineChart>
            </Fragment>
        );
    }
}