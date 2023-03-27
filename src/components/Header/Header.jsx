import SearchBar from "../SearchBar/SearchBar";
import { BackgroundStyle, HeaderText } from "./styled";

const Header = () => {
  return (
    <BackgroundStyle>
      <HeaderText>Search for books</HeaderText>
      <SearchBar />
    </BackgroundStyle>
  );
};

export default Header;
