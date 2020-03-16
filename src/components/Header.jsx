  
import React, { Component }  from 'react';
import HeaderForm from './HeaderForm'
import Fragment from 'render-fragment';

export default class Header extends Component {

    handleSubmit = payload => {
        console.log(payload)
    }

    render() {
        const { selectCountry } = this.props
        return (
            <Fragment>
                <h3>Country - {selectCountry}</h3>
                <HeaderForm onSubmit={this.handleSubmit}/>
            </Fragment>
        )
    }
}