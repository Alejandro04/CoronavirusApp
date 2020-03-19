import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

//MATERIAL UI
import Button from '@material-ui/core/Button';

const select = {
  width: '30%',
  padding: '10px',
  borderRadius: '10px',
  margin: 'auto',
  cursor: 'pointer',
  marginRight: '15px'
};

let HeaderForm = props => {
  const {
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      {/*<Field name='country' component='input' placeholder='COUNTRY' />*/}
      {/*<Field component={CustomAutocomplete}  name="country"/>*/}
      <Field name="country" component="select" style={select}>
        <option value="">Country / País</option>
        <option value="venezuela">Venezuela</option>
        <option value="colombia">Colombia</option>
        <option value="brazil">Brasil</option>
        <option value="us">Estados Unidos</option>
        <option value="canada">Canadá</option>
        <option value="peru">Peru</option>
        <option value="argentina">Argentina</option>
        <option value="ecuador">Ecuador</option>
        <option value="bolivia">Bolivia</option>
        <option value="mexico">México</option>
        <option value="spain">España</option>
        <option value="italy">Italia</option>
        <option value="china">China</option>
        <option value="uruguay">Uruguay</option>
        <option value="paraguay">Paraguay</option>
        <option value="germany">Alemania</option>
      </Field>
      <Button variant="contained" color="primary" type="submit">Buscar</Button>
    </form>
  );
};

HeaderForm = reduxForm({
  form: 'countryForm',
})(HeaderForm);

const selector = formValueSelector('countryForm');

HeaderForm = connect(state => {
  const country = selector(state, 'country')
  localStorage.setItem('country', country);
  return {
    country
  };
})(HeaderForm);

export default HeaderForm;