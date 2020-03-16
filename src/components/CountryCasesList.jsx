import React, { Component } from 'react'
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
    padding: '40px',
};
const textConfirmed = {
    fontSize: '2em',
    color: '#4791db'
}
const textRecovered = {
    fontSize: '2em',
    color: '#4caf50'
}
const textDeath = {
    fontSize: '2em',
    color: '#f44336'
}
const divider = {
    marginTop: '20px'
}

export default class CountryCasesList extends Component {
    render() {
        const { confirmed, recovered, deaths } = this.props
        return (
            <Fragment>
                <Divider style={divider} />
                <Grid container spacing={1} style={container}>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textConfirmed}>
                                    Confirmed: {confirmed}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textRecovered}>
                                    Recovered: {recovered}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textDeath}>
                                    Deaths: {deaths}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Divider style={divider} />
            </Fragment>
        )
    }
}
