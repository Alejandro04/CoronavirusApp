
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
    padding: '40px',
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
const divider = {
    marginTop: '20px'
}


export default class venezuelaCases extends Component {
    render() {
        return (
            <Fragment>
                <h2>VENEZUELA BY REGIONS / VENEZUELA POR REGIONES</h2>
                <Divider style={divider} />
                <Grid container spacing={1} style={container}>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textDanger}>
                                   Miranda: 13
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textDanger}>
                                    Caracas: 8
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textMedium}>
                                    La Guaira: 5
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textLow}>
                                   Anzoátegui: 2
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textLow}>
                                   Aragua: 2
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textLow}>
                                    Mérida: 1
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textLow}>
                                   Cojedes: 1
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textLow}>
                                   Apure: 1
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