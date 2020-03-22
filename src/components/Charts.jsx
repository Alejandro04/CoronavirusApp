import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Fragment from 'render-fragment';

let data = [];

const chartStyle = {
    margin: 'auto'
}

export default class Charts extends PureComponent {

    render() {

        const { chartsConfirmed } = this.props
        console.log(chartsConfirmed)

        // si el registro del país no existen en el api
        if (chartsConfirmed !== undefined) {
            // si el registro de datos confirmados no llega en esa petición
            if (chartsConfirmed.data !== undefined) {
                chartsConfirmed.data.forEach(element => {
                  //  console.log(element)
                    data.push({
                        name: element.Date, confirmed: element.Cases
                    })
                });
            }
        }

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
                </LineChart>
            </Fragment>
        );
    }
}