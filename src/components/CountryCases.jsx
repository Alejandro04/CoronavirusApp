  
import React, { Component }  from 'react';
import CountryCasesList from './CountryCasesList'
import Fragment from 'render-fragment';

export default class CountryCases extends Component {
    render() {
        const { confirmed, recovered, deaths } = this.props
        return (
            <Fragment>
                <CountryCasesList confirmed={confirmed} recovered={recovered} deaths={deaths} />
            </Fragment>
        )
    }
}