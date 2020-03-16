  
import React, { Component }  from 'react';
import HeaderForm from './HeaderForm'
import Fragment from 'render-fragment';

export default class Header extends Component {
    render() {
        const { setCountry } = this.props
        return (
            <Fragment>
                <h3>Country - <span>{localStorage.getItem('country')}</span></h3>
                <HeaderForm onSubmit={setCountry}/>
            </Fragment>
        )
    }
}