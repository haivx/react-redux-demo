import React from 'react';
import Wrapper from './Footer_style';
import facebookIcon from '../static/images/social_icons/facebook.png';
import twitter from '../static/images/social_icons/twitter.png';
import youtube from '../static/images/social_icons/yt.png';
const Footer = () => (
  <Wrapper>
    <div className="seven columns alpha ">
      <span className="rights_st">
        {'All rights reserved Copyright @ 2014 HaiVX by'}
        <span className="pixfort_st">PixFort</span>
      </span>
    </div>
    <div className="nine columns omega ">
      <div className="socbuttons">
        <div className="soc_icons">
          <ul className="bottom-icons">
            <img src={facebookIcon} alt="facebookIcon" />
            <img src={twitter} alt="twitter" />
            <img src={youtube} alt="youtube" />
          </ul>
        </div>
        <div className="likes_st">
          <p>Your likes & share makes us happy!</p>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Footer;
