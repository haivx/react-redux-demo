import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px;
  background: #cc333f;
  .L1_style {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
  .box_style {
    margin: 0 5px;
    width: 40%;
    background: #faf5f5;
    border-radius: 5px;
    border-bottom: 3px solid #c9baba;
    margin-top: 40px;
    position: relative;
    display: inline-block;
  }
  .box_style > .b_style {
    float: left;
    margin: 10px;
  }
  .L3_style {
    color: #d3d3d3;
    font-size: 16px;
    text-align: center;
    padding-bottom: 20px;
  }
  .title_Testimonials {
    text-align: center;
  }
  .eight.columns.alpha {
    text-align: center;
  }
  .b_style img {
    border-radius: 90%;
  }
  .txt_style {
    margin-bottom: 5px;
  }
`;

export default Wrapper;
