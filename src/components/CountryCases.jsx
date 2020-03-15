  
import React, { Component }  from 'react';
import CountryCasesList from './CountryCasesList'
import Fragment from 'render-fragment';

export default class CountryCases extends Component {
    render() {
        const { countryCases } = this.props
        return (
            <Fragment>
                <CountryCasesList countryCases={countryCases}/>
            </Fragment>
        )
    }
}