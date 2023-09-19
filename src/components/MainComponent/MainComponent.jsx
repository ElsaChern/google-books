import MainDiv from "./styles";
import Header from "../Header/Header";
import Books from "../Books/index";

const MainComponent = () => {
  return (
    <MainDiv>
      <Header />
      <Books />
    </MainDiv>
  );
};

export default MainComponent;
