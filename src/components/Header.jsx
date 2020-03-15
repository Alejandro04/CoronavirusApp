  
import React, { Component }  from 'react';
import HeaderForm from './CategoryForm'
import Fragment from 'render-fragment';

export default class Header extends Component {
    render() {
        const { selectContry } = this.props
        return (
            <Fragment>
                <h1>Countries</h1>
                <HeaderForm onSubmit={selectContry}/>
            </Fragment>
        )
    }
}