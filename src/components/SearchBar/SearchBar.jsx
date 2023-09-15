/* eslint-disable */

import { useDispatch, useSelector } from "react-redux";
import { Input, SearchDiv, Select, Text } from "./styled";
import { categorySelectOptions, sortSelectOptions } from "./constants";
import { useEffect, useState } from "react";
import { setSearchData } from "../../store/slices/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

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

    dispatch(
      setSearchData({
        search: values.search,
        category: values.category,
        order: values.order,
      }),
    );
  };

  return (
    <SearchDiv onSubmit={handleSubmit}>
      <Input
        name="search"
        placeholder="Search"
        value={values.search}
        onChange={handleChange}
      />
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
