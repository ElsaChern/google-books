import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ErrorText,
  Input,
  SearchDiv,
  SearchIconContainer,
  Select,
  Text,
} from "./styled";
import { setSearchData } from "../../store/slices/searchSlice";
import search from "../../img/search.png";
import {
  categorySelectOptions,
  sortSelectOptions,
} from "../../helpers/constants";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [values, setValues] = useState({
    search: "",
    category: "",
    order: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.search.trim().length === 0) {
      setError("Search field cannot be empty");
      return;
    }

    setError("");

    dispatch(
      setSearchData({
        search: values.search,
        category: values.category,
        order: values.order,
      }),
    );
    navigate("books/");
  };

  return (
    <SearchDiv type="submit" onSubmit={handleSubmit}>
      <Input
        name="search"
        placeholder="Search..."
        value={values.search}
        onChange={handleChange}
      />
      {error && <ErrorText style={{ color: "red" }}>{error}</ErrorText>}
      <SearchIconContainer src={search} onClick={handleSubmit}>
        <img src={search} alt="Search" width={30} height={30} />
      </SearchIconContainer>
      <Text>Categories:</Text>
      <Select onChange={handleChange} name="category" value={values.category}>
        {categorySelectOptions.map((option) => {
          return <option key={option.label}>{option.label}</option>;
        })}
      </Select>
      <Text>Sorting By:</Text>
      <Select onChange={handleChange} value={values.order} name="order">
        {sortSelectOptions.map((sort) => {
          return <option key={sort.label}>{sort.label}</option>;
        })}
      </Select>
    </SearchDiv>
  );
};

export default SearchBar;
