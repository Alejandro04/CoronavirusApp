
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
const divider = {
    marginTop: '20px'
}

const title = {
    fontSize: '20px',
    margin: 'auto',
    textAlign: 'center',
    marginBottom: '10px'
}


export default class venezuelaCases extends Component {
    render() {
        return (
            <Fragment>
                <Divider style={divider} />
                <Grid container spacing={1} style={container}>
                    <Typography style={title}>
                        FALTAN ACTUALIZAR ALGUNOS REPORTES YA QUE LA INFORMACIÓN DADA POR LOS ENTES NO ES EXACTA.
                    </Typography>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textDanger}>
                                    Miranda: 24
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textDanger}>
                                    La Guaira: 9
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textDanger}>
                                    Caracas: 9
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textMedium}>
                                    Aragua: 6
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
                                    Falcón: 2
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
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textLow}>
                                    Zulia: 1
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textLow}>
                                    Monagas: 1
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textLow}>
                                    Lara: 1
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card style={card}>
                            <CardContent>
                                <Typography style={textLow}>
                                    Dependencias Federales: 2
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