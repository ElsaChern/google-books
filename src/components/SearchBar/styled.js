import styled from "styled-components";

const SearchDiv = styled.form`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 550px;
  gap: 20px;
  justify-content: space-around;
  margin: auto;

  @media only screen and (max-width: 600px) {
    width: 400px;
  }

  @media only screen and (max-width: 430px) {
    width: 300px;
    gap: 10px;
  }
`;

const SearchIconContainer = styled.div`
  position: absolute;
  top: 3px;
  right: 9px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  background: white;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 25%;
  border-radius: 5px;
  padding: 3px;
  font-size: 14px;

  @media only screen and (max-width: 600px) {
    width: 70%;
  }
`;

const Text = styled.p`
  font-weight: 200px;
  font-size: 20px;
  line-height: 25px;
  color: black;
  margin: 0;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
    line-height: 35px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 15px;
    line-height: 35px;
  }
`;

const ErrorText = styled.p`
  position: absolute;
  color: red;
  text-decoration: underline;
  font-size: 14px;
`;

export { SearchDiv, Input, Text, SearchIconContainer, Select, ErrorText };
