import React, { Component } from 'react'
import Fragment from 'render-fragment';

// MAERIAL UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class CountryCasesList extends Component {
    render() {
        const { confirmed, recovered, deaths } = this.props
        return (
            <Fragment>
                 <Card>
                    <CardContent>
                        <Typography>
                            Confirmed: {confirmed}
                        </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Typography>
                            Recovered: {recovered}
                        </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Typography>
                            Deaths: {deaths}
                        </Typography>
                    </CardContent>
                </Card>
            </Fragment>
        )
    }
}