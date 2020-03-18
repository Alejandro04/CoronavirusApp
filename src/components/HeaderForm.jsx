import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import CustomAutocomplete from './CustomAutocomplete'

let HeaderForm = props => {
  const {
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
       <Field name='country' component={CustomAutocomplete} />
    </form>
  );
};


HeaderForm = reduxForm({
  form: 'country',
})(HeaderForm);

const selector = formValueSelector('country');
HeaderForm = connect(state => {
  const country = selector(state, 'country');
  console.log(state)
  localStorage.setItem('country', country);
  return {
    country
  };
})(HeaderForm);

export default HeaderForm;