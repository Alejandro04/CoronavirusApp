import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

let HeaderForm = props => {
    const {
      country,
      handleSubmit,
    } = props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name='country' component='input' placeholder='COUNTRY' />
      </form>
    );
  };
  
  HeaderForm = reduxForm({
    form: 'country', 
  })(HeaderForm);

  const selector = formValueSelector('country');
  HeaderForm = connect(state => {
    const country = selector(state, 'country');
    localStorage.setItem('country', country);
    return {
      country
    };
  })(HeaderForm);
  
  export default HeaderForm;
  