import styled from "styled-components";
import background from "../../img/background.jpeg";

const BackgroundStyle = styled.div`
  height: 200px;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

const HeaderText = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 46px;
  padding-top: 20px;
  line-height: 55px;
  color: black;
  margin: 0;

  @media only screen and (max-width: 600px) {
    font-weight: 500;
    font-size: 40x;
    line-height: 50px;
  }

  @media only screen and (max-width: 400px) {
    font-weight: 500;
    font-size: 35px;
  }
`;

export { BackgroundStyle, HeaderText };
