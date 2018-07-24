import React from 'react';
import Wrapper from './Services_style';
const serviceImg1 = require('../static/images/hotel/image-1.png');
const serviceImg2 = require('../static/images/hotel/image-2.png');
const serviceImg3 = require('../static/images/hotel/image-3.png');
const serviceImg4 = require('../static/images/hotel/image-4.png');

const Services = () => (
  <Wrapper>
    <div className="title_services">
      <h1 className="title_homes">Featured Homes</h1>
      <p className="subtitle_homes">
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </div>
    <div>
      <div className="four columns  alpha">
        <div className="bg_Homes">
          <div className="img_homes_st">
            <img src={serviceImg1} className="" alt="" />
          </div>
          <div className="text_homes_style">
            <p className="calc_homes_st">Welcome to Hotel</p>
            <p className="calc_homes_text">
              {'Lorem ipsum dolor sit amet consectetur adipiscing elite.'}
            </p>
          </div>
          <button className="perday_btn">
            <a href="#">$45 per day</a>
          </button>
        </div>
        <div className="bg_Homes">
          <div className="img_homes_st">
            <img src={serviceImg2} className="" alt="" />
          </div>
          <div className="text_homes_style">
            <p className="calc_homes_st">Welcome to Hotel</p>
            <p className="calc_homes_text">
              {'Lorem ipsum dolor sit amet consectetur adipiscing elite.'}
            </p>
          </div>
          <button className="perday_btn">
            <a href="#">$45 per day</a>
          </button>
        </div>
        <div className="bg_Homes">
          <div className="img_homes_st">
            <img src={serviceImg3} className="" alt="" />
          </div>
          <div className="text_homes_style">
            <p className="calc_homes_st">Welcome to Hotel</p>
            <p className="calc_homes_text">
              {'Lorem ipsum dolor sit amet consectetur adipiscing elite.'}
            </p>
          </div>
          <button className="perday_btn">
            <a href="#">$45 per day</a>
          </button>
        </div>
        <div className="bg_Homes">
          <div className="img_homes_st">
            <img src={serviceImg4} className="" alt="" />
          </div>
          <div className="text_homes_style">
            <p className="calc_homes_st">Welcome to Hotel</p>
            <p className="calc_homes_text">
              {'Lorem ipsum dolor sit amet consectetur adipiscing elite.'}
            </p>
          </div>
          <button className="perday_btn">
            <a href="#">$45 per day</a>
          </button>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Services;
