import React from 'react';
import Wrapper from './Features_style';
const image1 = require('../static/images/hotel/1.png');
const image2 = require('../static/images/hotel/2.png');
const image3 = require('../static/images/hotel/3.png');
const image4 = require('../static/images/hotel/4.png');

const Features = () => (
  <Wrapper>
    <div className="four columns  alpha">
      <img src={image1} className="img_st" alt="" />
      <div className="ctext_style">
        <p className="calc_st">High quality tutorials</p>
        <p className="calc_text">
          {'Lorem dolor sit amet consectetur adipiscing elite.'}
        </p>
      </div>
    </div>
    <div className="four columns  alpha">
      <img src={image2} className="img_st" alt="" />
      <div className="ctext_style">
        <p className="calc_st">High quality tutorials</p>
        <p className="calc_text">
          {'Lorem dolor sit amet consectetur adipiscing elite.'}
        </p>
      </div>
    </div>
    <div className="four columns  alpha">
      <img src={image3} className="img_st" alt="" />
      <div className="ctext_style">
        <p className="calc_st">High quality tutorials</p>
        <p className="calc_text">
          {'Lorem dolor sit amet consectetur adipiscing elite.'}
        </p>
      </div>
    </div>
    <div className="four columns  alpha">
      <img src={image4} className="img_st" alt="" />
      <div className="ctext_style">
        <p className="calc_st">High quality tutorials</p>
        <p className="calc_text">
          {'Lorem dolor sit amet consectetur adipiscing elite.'}
        </p>
      </div>
    </div>
  </Wrapper>
);
export default Features;
