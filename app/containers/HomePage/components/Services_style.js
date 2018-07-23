import styled from 'styled-components';

const Wrapper = styled.div`
  .four.columns {
    display: flex;
    text-align: center;
    justify-content: center;
  }
  .title_services {
    text-align: center;
    width: 100%;
  }
  .subtitle_homes {
    text-align: center;
    color: #a9a9a9;
    font-size: 16px;
    line-height: 26px;
    max-width: 60%;
    margin-left: 20%;
    padding-bottom: 15px;
  }
  }
  .bg_Homes {
    margin-right: 5px;
    background: #faf5f5;
    border-bottom: 3px solid #eadbdc;
    position: relative;
    width: 15%;
    border-radius: 3px;
  }
  .img_homes_st {
    display: inline-block;
    text-align: center;
    width: 220px;
    height: 200px;
    overflow: hidden;
    position: relative;
  }
  .calc_homes_st {
    color: #000;
    font-weight: 700;
    font-size: 18px;
  }
  .calc_text {
    color: #a9a9a9;
    font-size: 14px;
    max-width: 90%;
    position: relative;
    top: -10px;
    margin-left: auto;
    margin-right: auto;
  }
  button {
    background: #cc333f;
    border: none;
    border-radius: 2px;
    font-weight: 400;
    font-size: 13px;
    color: #fff;
    text-decoration: none;
    position: relative;
    display: inline-block;
    margin-bottom: 20px;
    padding: 5px 20px;
  }
  button a {
    color: white;
    text-decoration: none;
  }
  button :hover {
    background: #c22731;
  }
`;

export default Wrapper;
