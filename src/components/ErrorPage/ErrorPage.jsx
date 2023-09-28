import { ErrorWrapper, ErrorText, ErrorImgWrapper } from "./styled";
import errorPng from "../../img/error_globe.png";

const ErrorPage = () => {
  return (
    <ErrorWrapper>
      <ErrorText>
        Something went wrong. <br />
        Please reload this page and try again
      </ErrorText>
      <ErrorImgWrapper>
        <img src={errorPng} alt="Global error" width={100} />
      </ErrorImgWrapper>
    </ErrorWrapper>
  );
};

export default ErrorPage;
