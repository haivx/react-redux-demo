import styled from 'styled-components';

const Wrapper = styled.div`
  .title {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }
  .content {
    margin-bottom: 10px;
  }
  .wrapper {
    width: 70%;
    margin: auto;
    background-color: whitesmoke;
    list-style-type: none;
    padding: 0;
    border-radius: 3px;
  } 
  .form-row {
    display: flex;
    justify-content: flex-end;
    padding: .5em;
  }
  .form-row > label {
    padding: .5em 1em .5em 0;
    flex: 1;
  }
  .form-row > input {
    flex: 2;
    border: 1px solid gray;
  }
  .form-row > input,
  .form-row > button {
    padding: .5em;
  }
  .form-row > button {
   background: #cc333f;
   border: 0,
   justify-content: center;
   cursor: pointer;
  }
  .form-row > button span {
    color: white;
    font-size: 14px;
    padding: 5px;
  }
  .form-row > button:hover {
    background: #c22731;
  }
  .form-row :last-child {
    justify-content: center;
  }
 @media screen and (min-width: 768px) {
   	.form-row > input {
    	flex: 3;  
   }
  }
 @media screen and (min-width: 992px) {
   	.form-row > input {
    	flex: 4;  
   }
  }
 @media screen and (min-width: 1200px) {
   	.form-row > input {
    	flex: 5;  
   }
  }
`;

export default Wrapper;
