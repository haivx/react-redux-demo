import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Form_style';
import Input from './Input';

const RegisterForm = props => (
  <Wrapper>
    <div className="title">
      <p>Reservation</p>
    </div>
    <div className="content">
      <ul className="wrapper">
        <li className="form-row">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" />
        </li>
        <li className="form-row">
          <label htmlFor="townborn">Your phone"s number</label>
          <input type="text" id="townborn" />
        </li>
        <li className="form-row">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" />
        </li>
        <li className="form-row">
          <button type="submit">
            <span>Submit</span>
          </button>
        </li>
      </ul>
    </div>
  </Wrapper>
);
RegisterForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export default RegisterForm;
