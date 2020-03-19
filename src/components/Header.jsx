  
import React, { Component }  from 'react';
import HeaderForm from './HeaderForm'
import Fragment from 'render-fragment';

const title = {
    marginTop: '60px',
    color: 'rgb(25, 118, 210)'
}

export default class Header extends Component {
    render() {
        const { setCountry } = this.props
        return (
            <Fragment>
                <h3>Select the Country / Seleccione el País</h3>
                <HeaderForm onSubmit={setCountry}/>
                <h2 style={title}>Country - <span>{localStorage.getItem('country')}</span></h2>
            </Fragment>
        )
    }
}