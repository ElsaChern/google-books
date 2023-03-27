import MainDiv from "./styles";
import Header from "../Header/Header";
import BooksList from "../BooksList/BooksList";

const MainComponent = () => {
  return (
    <MainDiv>
      <Header />
      <BooksList />
    </MainDiv>
  );
};

export default MainComponent;
