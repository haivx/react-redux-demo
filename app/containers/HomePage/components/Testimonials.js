import React from 'react';
import Wrapper from './Testimonials_style';
const envatoLogo = require('../static/images/testimonials/envato-logo.png');
const unbounceLogo = require('../static/images/testimonials/unboune-logo.png');
const originalLogo = require('../static/images/hotel/stars.original.png');
const Testimonials = () => (
  <Wrapper>
    <div className="title_Testimonials">
      <span className="L1_style">What our awesome clients say</span>
      <br />
      <span className="L3_style">great words from great people</span>
      <br />
    </div>
    <div className="eight columns  alpha ">
      <div className="box_style">
        <div className="b_style">
          <img src={envatoLogo} className="logo_style" alt="" />
        </div>
        <div className="txt_style">
          <p className="txt">
            Im a web designer, you guys are very inspiring I wish to see more
            work from maybe more freebies.
          </p>
          <span className="testi_bottom">
            <img src={originalLogo} alt="" />
            <span className="env_st">via Envato.com</span>
          </span>
        </div>
      </div>
      <div className="box_style">
        <div className="b_style">
          <img src={unbounceLogo} className="logo_style" alt="" />
        </div>
        <div className="txt_style">
          <p className="txt">
            Great service with fast and relible support The design work and
            detail put into themes are great.
          </p>
          <span className="testi_bottom">
            <img src={originalLogo} alt="" />
            <span className="env_st">via Unbounce.com</span>
          </span>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Testimonials;
