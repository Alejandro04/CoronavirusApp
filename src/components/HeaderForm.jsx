import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

const input = {
  fontSize: '20px',
  padding: '18.5px 14px',
  height: '1.1875em',
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px'
}

let HeaderForm = props => {
  const {
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name='country' component='input' placeholder='COUNTRY' style={input} />
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
