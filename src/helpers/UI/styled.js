import styled, { keyframes } from "styled-components";

const mealsAppear = keyframes`
from {
  opacity: 0;
  transform: translateY(3rem);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

const UpButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 90px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  animation: ${mealsAppear} 3s linear infinite;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const UpBtnImg = styled.img`
  width: 80px;
  height: 80px;

  @media only screen and (max-width: 400px) {
    width: 60px;
    height: 60px;
  }
`;

export { UpButton, UpBtnImg };
