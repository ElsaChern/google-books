import { Input, SearchDiv, SelectOption, Text } from "./styled";
import { categorySelectOptions, sortSelectOptions } from "./constants";

const SearchBar = () => {
  return (
    <>
      <SearchDiv>
        <Input
          placeholder="Search"
        />
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
    </>
  );
};

export default SearchBar;
