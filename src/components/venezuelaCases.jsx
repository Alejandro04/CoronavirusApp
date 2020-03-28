
import React, { Component } from 'react';
import Fragment from 'render-fragment';

// MAERIAL UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const container = {
    padding: '40px'
};
const card = {
    border: 0,
    borderRadius: '16px',
    padding: '10px',
};
const textLow = {
    fontSize: '2em',
    color: '#4791db'
}
const textMedium = {
    fontSize: '2em',
    color: '#4caf50'
}
const textDanger = {
    fontSize: '2em',
    color: '#f44336'
}
const textWarning = {
    fontSize: '2em',
    color: '#bf360c'
}
const divider = {
    marginTop: '20px'
}

export default class venezuelaCases extends Component {
    render() {
        let styleItem = {}
        const items = []
        let deaths = ''
        for (const [index, value] of cases.entries()) {

            if (value.deaths > 0) {
                deaths = `Fallecidos: ${value.deaths}`
            } else {
                deaths = ''
            }

            if (value.cases > 15) {
                styleItem = textDanger
                items.push(<Grid item sm={4} xs={12}>
                    <Card style={card}>
                        <CardContent>
                            <Typography style={styleItem}>
                                {value.state}: {value.cases}  </Typography>
                            <Typography style={textWarning}>
                                {deaths}</Typography>
                        </CardContent>
                    </Card>
                </Grid>)
            }
            if (value.cases >= 9 && value.cases < 15) {
                styleItem = textMedium
                items.push(<Grid item sm={4} xs={12}>
                    <Card style={card}>
                        <CardContent>
                            <Typography style={styleItem}>
                                {value.state}: {value.cases}  </Typography>
                            <Typography style={textWarning}>
                                {deaths}</Typography>
                        </CardContent>
                    </Card>
                </Grid>)
            }
            if (value.cases < 9 && value.cases > 0) {
                styleItem = textLow
                items.push(<Grid item sm={4} xs={12}>
                    <Card style={card}>
                        <CardContent>
                            <Typography style={styleItem}>
                                {value.state}: {value.cases}  </Typography>
                            <Typography style={textWarning}>
                                {deaths}</Typography>
                        </CardContent>
                    </Card>
                </Grid>)
            }
            if (value.cases === 0) {
                styleItem = textLow
                items.push(<Grid item sm={4} xs={12}>
                    <Card style={card}>
                        <CardContent>
                            <Typography style={styleItem}>
                                {value.state}  </Typography>
                            <Typography style={textWarning}>
                                {deaths}</Typography>
                        </CardContent>
                    </Card>
                </Grid>)
            }
        }
        return (
            <Fragment>
                <Divider style={divider} />
                <Grid container spacing={1} style={container}>
                    {items}
                </Grid>
                <Divider style={divider} />
            </Fragment>
        )
    }
}


const cases = [
    {
        state: 'Miranda', cases: 47,
    },
    {
        state: 'Caracas', cases: 24,
    },
    {
        state: 'Aragua', cases: 12, deaths: 1
    },
    {
        state: 'La Guaira', cases: 10,
    },
    {
        state: 'Los Roques', cases: 4,
    },
    {
        state: 'Lara', cases: 4,
    },
    {
        state: 'Barinas', cases: 3,
    },
    {
        state: 'Zulia', cases: 3,
    },
    {
        state: 'Falcón', cases: 2,
    },
    {
        state: 'Anzoátegui', cases: 2,
    },
    {
        state: 'Apure', cases: 2,
    },
    {
        state: 'Mérida', cases: 1,
    },
    {
        state: 'Cojedes', cases: 1,
    },
    {
        state: 'Monagas', cases: 1,
    },
    {
        state: 'Nueva Esparta', cases: 1,
    },
    {
        state: 'Guárico', cases: 1,
    },
    {
        state: 'Estado no definido', cases: 0, deaths: 1
    },
]