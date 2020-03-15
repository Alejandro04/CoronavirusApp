  
import React, { Component }  from 'react';
import HeaderForm from './HeaderForm'
import Fragment from 'render-fragment';

export default class Header extends Component {
    render() {
        const { selectContry } = this.props
        return (
            <Fragment>
                <h3>Countries - {selectContry}</h3>
                <HeaderForm onSubmit={selectContry}/>
            </Fragment>
        )
    }
}