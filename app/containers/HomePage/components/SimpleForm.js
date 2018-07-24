import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import Wrapper from './Form_style';

const InputText = ({ input, label, meta: { touched, error } }) => (
  <div className="form-row">
    <label htmlFor={input.name}>{label}</label>
    <input {...input} type="text" />
    {touched && error && <span className="error">{error}</span>}
  </div>
);

const validateNotEmpty = value => (!value ? 'Must enter a value' : null);

const SimpleRegisterForm = props => (
  <Wrapper>
    <div className="title">
      <p>Reservation</p>
    </div>
    <form onSubmit={props.handleSubmit} className="wrapper">
      <Field
        label="Name"
        name="Name"
        component={InputText}
        validate={validateNotEmpty}
        type="text"
      />
      <Field
        label="PhoneNumber"
        name="PhoneNumber"
        component={InputText}
        validate={validateNotEmpty}
        type="text"
      />
      <Field
        label="Email"
        name="Email"
        component={InputText}
        validate={validateNotEmpty}
        type="text"
      />
      <div className="form-row">
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  </Wrapper>
);

SimpleRegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};

InputText.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
};

const SimpleForm = reduxForm({
  form: 'SimpleForm',
  // initialValues: {
  //   country: 'Brazil',
  // },
})(SimpleRegisterForm);
export default SimpleForm;
