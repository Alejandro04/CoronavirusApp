import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Fragment from 'render-fragment';

const chartStyle = {
    margin: 'auto'
}

const leyend = {
    marginTop: '20px'
}

export default class Charts extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        const { chartsConfirmed } = this.props
        console.log(chartsConfirmed)

        // si el registro del país no existen en el api
        // // si el registro de datos confirmados no llega en esa petición
        if (chartsConfirmed !== undefined && chartsConfirmed.data !== undefined) {
            let cases = []
            chartsConfirmed.data.forEach(element => {
                cases.push({
                    name: element.Date.substr(0,10), confirmed: element.Cases
                })
            });
            this.setState({
                data: cases
            });
        }
    }

    render() {
        return (
            <Fragment>
                <LineChart
                    width={700}
                    height={300}
                    data={this.state.data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 20,
                    }}
                    style={chartStyle}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend style={leyend}/>
                    <Line type="monotone" dataKey="confirmed" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </Fragment>
        );
    }
}