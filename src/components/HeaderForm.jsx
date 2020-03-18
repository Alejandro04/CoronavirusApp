import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import CustomAutocomplete from './CustomAutocomplete'
import { connect } from 'react-redux'

let HeaderForm = props => {
  const {
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
       {/*<Field name='countrys' component='input' placeholder='COUNTRY' />*/}
       <Field name='country' component={CustomAutocomplete} />
    </form>
  );
};


HeaderForm = reduxForm({
  form: 'countryForm',
})(HeaderForm);

const selector = formValueSelector('countryForm');
HeaderForm = connect(state => {
  console.log(state)
  const country = selector(state, 'country');
  localStorage.setItem('country', country);
  return {
    country
  };
})(HeaderForm);

export default HeaderForm;