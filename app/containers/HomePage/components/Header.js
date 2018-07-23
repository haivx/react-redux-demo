/**
 *
 * Header in HomePage
 *
 */
import React from 'react';
// import Logo from '../static/images/hotel/logo.png';
import Logo from '../static/images/hotel/logo.png';
import facebookIcon from '../static/images/social_icons/facebook.png';
import twitter from '../static/images/social_icons/twitter.png';
import youtube from '../static/images/social_icons/yt.png';
import Wrapper from './Header_style';
const Header = () => (
  <Wrapper>
    <div className="logo_header">
      <img src={Logo} alt="Logo" />
    </div>
    <div className="social_media_header">
      <span>Stay connected</span>
      <img src={facebookIcon} alt="facebookIcon" />
      <img src={twitter} alt="twitter" />
      <img src={youtube} alt="youtube" />
    </div>
  </Wrapper>
);

export default Header;
