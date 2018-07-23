import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 75vh;
  display: flex;
  text-align: center;
  color: white;
  background-size: cover;
  .just_style {
    padding-top: 110px;
    font-size: 48px;
    font-weight: 400;
    color: #a9a9a9;
  }
  .four_style {
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
  }
  .red_segment {
    background-color: #cc333f;
    width: 60px;
    height: 5px;
    margin: 25px 0;
    margin-left: auto;
    margin-right: auto;
  }
  .txt_start {
    text-align: center;
    color: #d3d3d3;
    font-size: 18px;
    max-width: 65%;
    margin-left: auto;
    margin-right: auto;
  }
  .gethouse_btn {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    background: #cc333f;
    border: none;
    border-radius: 3px;
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    position: relative;
    display: inline-block;
    margin-top: 15px;
    margin-bottom: 20px;
    padding: 15px 30px;
    text-decoration: none;
  }
  .gethouse_btn :hover {
    background: #c22731;
    cursor: pointer;
  }
  .gethouse_btn a {
    color: white;
    text-decoration: none;
  }
`;

export default Wrapper;
