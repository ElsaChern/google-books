import styled from "styled-components";

const SearchDiv = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 550px;
  gap: 20px;
  justify-content: space-around;
  margin: auto;

  @media only screen and (max-width: 600px) {
    width: 400px;
  }

  @media only screen and (max-width: 400px) {
    width: 300px;
    gap: 10px;
  }
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  background: white;
  border-radius: 3px;
`;

const SelectOption = styled.select`
  width: 25%;
  background: white;
  border-radius: 3px;

  @media only screen and (max-width: 600px) {
    width: 20%;
  }

  @media only screen and (max-width: 400px) {
    width: 50%;
    height: 20%;
  }
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 35px;
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

const Button = styled.button`
  background-color: inherit;
  border: none;
  margin-left: -95px;
`;

export { SearchDiv, Input, Text, Button, SelectOption };
