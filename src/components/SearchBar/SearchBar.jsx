/* eslint-disable no-console */
import { Input, SearchDiv, SelectOption, Text } from "./styled";
import { categorySelectOptions, sortSelectOptions } from "./constants";
import fetchBooks from "../../api/fetchBooks";

const SearchBar = () => {
  const res = fetchBooks("JS", "computers", "relevance");
  console.log(res);
  return (
    <SearchDiv>
      <Input placeholder="Search" />
      <Text>Categories:</Text>
      <SelectOption
        defaultValue={categorySelectOptions[0]}
        options={categorySelectOptions}
      />
      <Text>Sorting By:</Text>
      <SelectOption
        defaultValue={sortSelectOptions[0]}
        options={sortSelectOptions}
      />
    </SearchDiv>
  );
};

export default SearchBar;
