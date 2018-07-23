import React from 'react';
import Wrapper from './Clients_style';
const Background = require('../static/images/hotel/bg.png');
const logo1 = require('../static/images/hotel/logo_1.png');
const logo2 = require('../static/images/hotel/logo_2.png');
const logo3 = require('../static/images/hotel/logo_3.png');
const logo4 = require('../static/images/hotel/logo_4.png');
const Clients = () => (
  <Wrapper
    style={{
      backgroundImage: `url(${Background})`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      textAlign: 'center',
      padding: '35px 0',
    }}
  >
    <div className="container">
      <div className="sixteen columns logos_style">
        <h3 className="L1_style">Great people trusted our services</h3>
        <p className="L2_style">great words from great people</p>
        <div className="four columns logos_st alpha">
          <img src={logo1} alt="" />
        </div>
        <div className="four columns logos_st">
          <img src={logo2} alt="" />
        </div>
        <div className="four columns logos_st">
          <img src={logo3} alt="" />
        </div>
        <div className="four columns logos_st omega">
          <img src={logo4} alt="" />
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Clients;
