import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class HeaderForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Field name='country' component='input' placeholder='Name of country' />
            </form>
        )
    }
}

export default reduxForm({
    form: 'country'
})(HeaderForm)