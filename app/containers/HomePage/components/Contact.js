/**
 *
 * Header in HomePage
 *
 */
import React from 'react';
import Wrapper from './Contact_style';
const Background = require('../static/images/hotel/bg.png');
const Contact = () => (
  <Wrapper
    style={{
      backgroundImage: `url(${Background})`,
      justifyContent: 'center',
    }}
  >
    <div className="text_page">
      <h1 className="just_style">JUST MAGICAL</h1>
      <h1 className="four_style">FOUR SEASONS RESORT</h1>
      <div className="red_segment"> </div>

      <p className="txt_start">
        {`More than 10 unique HTML templates in one bundle isnt that awesome
               with a lot of features and great design brought to you by PixFort.`}
      </p>
      <span className="gethouse_btn">
        <a href="#">Get House Now</a>
      </span>

      <p className="note_st">{' *Note: Bundle ends in two weeks from now.'} </p>
    </div>
  </Wrapper>
);

export default Contact;
