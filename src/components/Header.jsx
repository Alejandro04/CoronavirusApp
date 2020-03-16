  
import React, { Component }  from 'react';
import HeaderForm from './HeaderForm'
import Fragment from 'render-fragment';

export default class Header extends Component {
    render() {
        const { selectCountry, setCountry } = this.props
        return (
            <Fragment>
                <h3>Country - {selectCountry}</h3>
                <HeaderForm onSubmit={setCountry}/>
            </Fragment>
        )
    }
}