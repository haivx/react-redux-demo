import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background: #f2f2f2;
  text-align: center;
  .soc_icons {
    float: right;
  }
  .rights_st {
    color: #a9a9a9;
    font-size: 14px;
    text-align: left;
    position: relative;
    display: inline-block;
  }
  .socbuttons {
    display: flex;
  }
  .likes_st {
    display: flex;
    align-items: center;
    color: #a9a9a9;
    font-size: 14px;
    padding-right: 15px;
    float: right;
  }
  .likes_st p {
    margin-left: 5px;
  }
  .bottom-icons img {
    padding: 3px;
  }
  .seven.columns.alpha {
    display: flex;
    align-items: center;
  }
`;

export default Wrapper;
