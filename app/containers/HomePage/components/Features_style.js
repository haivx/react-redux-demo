import styled from 'styled-components';

const Wrapper = styled.div`
  background: #faf5f5;
  background-size: cover;
  box-shadow: 0px -3px #eadbdc inset;
  text-align: center;
  display: flex;
  width: 100%;
  padding: 1.1rem;
  align-self: center;
  justify-content: center;
  .columns.alpha {
    margin: 0 10px;
    width: 15%;
    text-align: center;
  }
  .img_st {
    display: inline-block;
    position: relative;
    top: -15px;
  }
`;

export default Wrapper;
