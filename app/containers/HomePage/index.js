/**
 *
 * HomePage
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Header from './components/Header';
import Contact from './components/Contact';
import Features from './components/Features';
import Services from './components/Services';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import SimpleForm from './components/SimpleForm';
import Footer from './components/Footer';
/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  handleSubmit = values => {
    console.log('submit form', values);
  };
  render() {
    return (
      <Fragment>
        <Header />
        <Contact />
        <Features />
        <Services />
        <Clients />
        <Testimonials />
        <SimpleForm onSubmit={this.handleSubmit} />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
